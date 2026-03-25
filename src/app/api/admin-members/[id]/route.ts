import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

async function verifyAdmin(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return null;
  try {
    return await adminAuth.verifyIdToken(token);
  } catch {
    return null;
  }
}

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const doc = await adminDb.collection("admin_members").doc(id).get();
    if (!doc.exists) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data()?.createdAt?.toDate().toISOString(),
      lastLoginAt: doc.data()?.lastLoginAt?.toDate().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch member" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    const body = await request.json();
    await adminDb.collection("admin_members").doc(id).update({
      username: body.username ?? "",
      name: body.name ?? "",
      email: body.email ?? "",
      level: Number(body.level) || 2,
      group: body.group ?? "home",
      phone: body.phone ?? "",
      birthday: body.birthday ?? "",
      messenger: body.messenger ?? "",
      homepage: body.homepage ?? "",
      blog: body.blog ?? "",
      homePhone: body.homePhone ?? "",
      statusMessage: body.statusMessage ?? "",
      memberMemo: body.memberMemo ?? "",
      adminMemo: body.adminMemo ?? "",
      updatedAt: FieldValue.serverTimestamp(),
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to update member" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // 요청자의 레벨 확인 — 최고관리자(1)만 삭제 가능
  try {
    const requesterSnap = await adminDb
      .collection("admin_members")
      .where("email", "==", user.email ?? "")
      .limit(1)
      .get();

    const requesterLevel = requesterSnap.empty
      ? 99
      : Number(requesterSnap.docs[0].data().level ?? 99);

    if (requesterLevel !== 1) {
      return NextResponse.json(
        { error: "최고관리자(레벨 1)만 회원을 삭제할 수 있습니다." },
        { status: 403 }
      );
    }

    const { id } = await params;
    await adminDb.collection("admin_members").doc(id).delete();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete member" }, { status: 500 });
  }
}
