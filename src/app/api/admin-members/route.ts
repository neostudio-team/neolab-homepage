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

// GET /api/admin-members          → full list
// GET /api/admin-members?email=xx → single member by email (for profile)
export async function GET(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  try {
    if (email) {
      const snap = await adminDb
        .collection("admin_members")
        .where("email", "==", email)
        .limit(1)
        .get();
      if (snap.empty) return NextResponse.json(null);
      const doc = snap.docs[0];
      return NextResponse.json({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toISOString(),
        lastLoginAt: doc.data().lastLoginAt?.toDate().toISOString(),
      });
    }

    const snapshot = await adminDb
      .collection("admin_members")
      .orderBy("seq", "desc")
      .get();

    const members = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString(),
      lastLoginAt: doc.data().lastLoginAt?.toDate().toISOString(),
    }));
    return NextResponse.json(members);
  } catch {
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();

    // 다음 seq 번호 계산
    const countSnap = await adminDb.collection("admin_members").get();
    const maxSeq = countSnap.docs.reduce(
      (max, doc) => Math.max(max, doc.data().seq ?? 0),
      0
    );

    const docRef = await adminDb.collection("admin_members").add({
      username: body.username ?? "",
      name: body.name ?? "",
      email: body.email ?? "",
      level: Number(body.level) || 2,
      group: body.group || "home",
      phone: body.phone ?? "",
      birthday: body.birthday ?? "",
      messenger: body.messenger ?? "",
      homepage: body.homepage ?? "",
      blog: body.blog ?? "",
      homePhone: body.homePhone ?? "",
      statusMessage: body.statusMessage ?? "",
      memberMemo: body.memberMemo ?? "",
      adminMemo: body.adminMemo ?? "",
      loginCount: 0,
      postCount: 0,
      replyCount: 0,
      commentCount: 0,
      points: 0,
      seq: maxSeq + 1,
      createdAt: FieldValue.serverTimestamp(),
      lastLoginAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create member" }, { status: 500 });
  }
}
