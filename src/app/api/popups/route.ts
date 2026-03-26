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

export async function GET(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const snapshot = await adminDb
      .collection("popups")
      .orderBy("createdAt", "desc")
      .get();

    const popups = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt?.toDate().toISOString(),
      updatedAt: doc.data().updatedAt?.toDate().toISOString(),
    }));

    return NextResponse.json(popups);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch popups" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const docRef = await adminDb.collection("popups").add({
      isActive: body.isActive ?? false,
      title: body.title ?? "",
      content: body.content ?? "",
      startDate: body.startDate ?? "",
      endDate: body.endDate ?? "",
      position: body.position ?? "center",
      language: body.language ?? "all",
      author: body.author ?? "관리자",
      width: body.width ?? 400,
      height: body.height ?? null,
      trigger: body.trigger ?? "onLoad",
      displayPages: body.displayPages ?? "all",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create popup" }, { status: 500 });
  }
}
