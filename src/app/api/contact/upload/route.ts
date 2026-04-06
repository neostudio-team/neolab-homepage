import { NextRequest, NextResponse } from "next/server";
import { adminStorage } from "@/lib/firebase-admin";

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
    const fileName = `contact/${Date.now()}_${file.name}`;

    const bucket = adminStorage.bucket();
    const fileRef = bucket.file(fileName);
    await fileRef.save(buffer, {
      metadata: { contentType: file.type || "application/octet-stream" },
    });

    // 공개 URL 생성 (signed URL, 1년 유효)
    const [signedUrl] = await fileRef.getSignedUrl({
      action: "read",
      expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    });

    return NextResponse.json({ url: signedUrl, name: file.name }, { status: 201 });
  } catch (e) {
    console.error("upload error:", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
