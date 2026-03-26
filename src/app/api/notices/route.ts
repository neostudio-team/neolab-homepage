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

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("notices")
      .orderBy("createdAt", "desc")
      .get();

    const notices = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString(),
      updatedAt: doc.data().updatedAt?.toDate().toISOString(),
    }));

    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch notices" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const docRef = await adminDb.collection("notices").add({
      isPinned: body.isPinned ?? false,
      isSecret: body.isSecret ?? false,
      titleKo: body.titleKo ?? "",
      contentKo: body.contentKo ?? "",
      author: body.author ?? "NeoLAB",
      tags: body.tags ?? "",
      file1Url: body.file1Url ?? "",
      file1Name: body.file1Name ?? "",
      file2Url: body.file2Url ?? "",
      file2Name: body.file2Name ?? "",
      views: 0,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create notice" }, { status: 500 });
  }
}
