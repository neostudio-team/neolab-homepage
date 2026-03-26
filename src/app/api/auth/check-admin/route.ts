import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";

/**
 * GET /api/auth/check-admin
 * Authorization: Bearer <idToken>
 *
 * - admin_members 컬렉션이 비어 있으면 (최초 설정) → allowed: true (첫 관리자가 등록 가능)
 * - 컬렉션에 레코드가 있으면 → 요청자 이메일이 등록되어 있어야 allowed: true
 *
 * 응답: { allowed: boolean, member: { name, level, username } | null, firstSetup: boolean }
 */
export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return NextResponse.json({ allowed: false }, { status: 401 });

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    const email = decoded.email ?? "";

    // 1. 컬렉션에 멤버가 있는지 확인 (최초 설정 여부)
    const anySnap = await adminDb.collection("admin_members").limit(1).get();
    const firstSetup = anySnap.empty;

    // 2. 최초 설정이면 무조건 허용
    if (firstSetup) {
      return NextResponse.json({
        allowed: true,
        firstSetup: true,
        member: {
          name: decoded.name ?? email.split("@")[0],
          level: 1,
          username: email.split("@")[0],
        },
      });
    }

    // 3. 이메일로 멤버 조회
    const snap = await adminDb
      .collection("admin_members")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snap.empty) {
      return NextResponse.json({ allowed: false, firstSetup: false, member: null });
    }

    const data = snap.docs[0].data();
    return NextResponse.json({
      allowed: true,
      firstSetup: false,
      member: {
        name: data.name ?? "",
        level: Number(data.level) || 2,
        username: data.username ?? "",
      },
    });
  } catch {
    return NextResponse.json({ allowed: false }, { status: 401 });
  }
}
