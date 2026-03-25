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
      .collection("press")
      .orderBy("createdAt", "desc")
      .get();

    const press = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString(),
      updatedAt: doc.data().updatedAt?.toDate().toISOString(),
    }));

    return NextResponse.json(press);
  } catch {
    return NextResponse.json({ error: "Failed to fetch press releases" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = await verifyAdmin(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const docRef = await adminDb.collection("press").add({
      titleKo: body.titleKo ?? "",
      titleEn: body.titleEn ?? "",
      titleJa: body.titleJa ?? "",
      excerptKo: body.excerptKo ?? "",
      excerptEn: body.excerptEn ?? "",
      excerptJa: body.excerptJa ?? "",
      contentKo: body.contentKo ?? "",
      contentEn: body.contentEn ?? "",
      contentJa: body.contentJa ?? "",
      author: body.author ?? "NeoLAB",
      category: body.category ?? "press",
      externalUrl: body.externalUrl ?? "",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create press release" }, { status: 500 });
  }
}
