import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const dynamic = "force-dynamic";

async function verifyAdmin(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return null;
  try {
    return await adminAuth.verifyIdToken(token);
  } catch {
    return null;
  }
}

// GET /api/legal/[type]/[versionId] - public: get specific version content
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ type: string; versionId: string }> }
) {
  const { type, versionId } = await params;
  try {
    const doc = await adminDb.collection("legal_versions").doc(versionId).get();
    if (!doc.exists || doc.data()?.type !== type) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const data = doc.data()!;
    return NextResponse.json({
      id: doc.id,
      content: data.content ?? "",
      versionNumber: data.versionNumber,
      note: data.note ?? "",
      createdAt: data.createdAt?.toDate().toISOString() ?? null,
      createdBy: data.createdBy ?? "",
      isActive: data.isActive ?? false,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// PUT /api/legal/[type]/[versionId] - admin: activate this version
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; versionId: string }> }
) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, versionId } = await params;

  try {
    // Deactivate all versions of this type
    const allSnap = await adminDb
      .collection("legal_versions")
      .where("type", "==", type)
      .get();

    const batch = adminDb.batch();
    allSnap.docs.forEach(doc => {
      batch.update(doc.ref, { isActive: doc.id === versionId });
    });
    await batch.commit();

    return NextResponse.json({ success: true, activatedId: versionId });
  } catch {
    return NextResponse.json({ error: "Failed to activate version" }, { status: 500 });
  }
}

// DELETE /api/legal/[type]/[versionId] - admin: delete a version (only if not active)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; versionId: string }> }
) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { versionId } = await params;

  try {
    const doc = await adminDb.collection("legal_versions").doc(versionId).get();
    if (!doc.exists) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (doc.data()?.isActive) {
      return NextResponse.json({ error: "발행 중인 버전은 삭제할 수 없습니다." }, { status: 400 });
    }
    await adminDb.collection("legal_versions").doc(versionId).delete();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
