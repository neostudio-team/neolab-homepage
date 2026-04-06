import { NextRequest, NextResponse } from "next/server";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

// Storage 전용 초기화 (storageBucket 보장)
function getAdminStorage() {
  const bucketName = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "";
  // 이미 초기화된 앱이 있으면 재사용, 없으면 새로 생성
  const apps = getApps();
  const app = apps.length > 0 ? apps[0] : initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    storageBucket: bucketName,
  });
  return getStorage(app).bucket(bucketName);
}

// POST /api/contact/upload — 파일 업로드 (공개, multipart/form-data)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = `contact/${Date.now()}_${safeName}`;

    const bucket = getAdminStorage();
    const fileRef = bucket.file(filePath);

    await fileRef.save(buffer, {
      metadata: { contentType: file.type || "application/octet-stream" },
    });

    // 공개 접근 허용 후 공개 URL 반환
    await fileRef.makePublic();
    const bucketName = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "";
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

    return NextResponse.json({ url: publicUrl, name: file.name }, { status: 201 });
  } catch (e) {
    console.error("upload error:", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
