import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { DEFAULT_PRIVACY, DEFAULT_TERMS } from "@/lib/legal-defaults";

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

const DEFAULTS: Record<string, string> = {
  privacy: DEFAULT_PRIVACY,
  terms: DEFAULT_TERMS,
};

// GET /api/legal/[type] - public: returns active version + version list
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  if (type !== "privacy" && type !== "terms") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    const snapshot = await adminDb
      .collection("legal_versions")
      .where("type", "==", type)
      .orderBy("versionNumber", "desc")
      .get();

    if (snapshot.empty) {
      // Return default content if no versions exist
      return NextResponse.json({
        activeContent: DEFAULTS[type],
        activeVersionId: null,
        versions: [],
      });
    }

    // Find active version
    const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as Array<{
      id: string;
      type: string;
      content: string;
      versionNumber: number;
      note: string;
      createdAt: { toDate: () => Date } | null;
      createdBy: string;
      isActive: boolean;
    }>;

    const active = docs.find(d => d.isActive) ?? docs[0];

    const versions = docs.map(d => ({
      id: d.id,
      versionNumber: d.versionNumber,
      note: d.note ?? "",
      createdAt: d.createdAt?.toDate().toISOString() ?? null,
      createdBy: d.createdBy ?? "",
      isActive: d.isActive ?? false,
    }));

    return NextResponse.json({
      activeContent: active.content,
      activeVersionId: active.id,
      versions,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// POST /api/legal/[type] - admin: create new version
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type } = await params;
  if (type !== "privacy" && type !== "terms") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    const body = await request.json();

    // Get next version number
    const existing = await adminDb
      .collection("legal_versions")
      .where("type", "==", type)
      .orderBy("versionNumber", "desc")
      .limit(1)
      .get();

    const nextVersion = existing.empty ? 1 : (existing.docs[0].data().versionNumber ?? 0) + 1;
    const isFirst = existing.empty;

    const docRef = await adminDb.collection("legal_versions").add({
      type,
      content: body.content ?? "",
      note: body.note ?? "",
      versionNumber: nextVersion,
      isActive: isFirst, // auto-publish if it's the first version
      createdAt: FieldValue.serverTimestamp(),
      createdBy: user.email ?? "",
    });

    // If auto-publishing (first version), also mark old active as inactive (though there are none)
    return NextResponse.json({ id: docRef.id, versionNumber: nextVersion, isActive: isFirst }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create version" }, { status: 500 });
  }
}
