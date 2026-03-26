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

// type: "privacy" or "terms"
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  if (type !== "privacy" && type !== "terms") {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    const doc = await adminDb.collection("legal_docs").doc(type).get();
    if (!doc.exists) {
      return NextResponse.json({ type, content: "" });
    }
    return NextResponse.json({
      type,
      content: doc.data()?.content ?? "",
      updatedAt: doc.data()?.updatedAt?.toDate().toISOString() ?? null,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function PUT(
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
    await adminDb.collection("legal_docs").doc(type).set({
      type,
      content: body.content ?? "",
      updatedAt: FieldValue.serverTimestamp(),
      updatedBy: user.email ?? "",
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
