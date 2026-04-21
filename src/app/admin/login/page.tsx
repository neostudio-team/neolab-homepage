"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  Box,
  Desc,
  ErrorBox,
  ErrorText,
  GoogleBtn,
  Help,
  Left,
  LeftTitle,
  Logo,
  Right,
  Title,
  Wrap,
} from "./LoginPage.styles";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setLoginCookie = () => {
    document.cookie = "admin_logged_in=1; path=/; max-age=86400; SameSite=Strict";
  };

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      const res = await fetch("/api/auth/check-admin", { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();

      if (!data.allowed) {
        await signOut(auth);
        setError("이 계정은 관리자로 등록되어 있지 않습니다.\n최고관리자에게 접근 권한을 요청하세요.");
        return;
      }

      setLoginCookie();
      router.replace("/admin");
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
        setError("Google 로그인에 실패했습니다. 다시 시도해 주세요.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrap>
      <Left>
        <Logo src="/images/NeoLAB-CI_01.png" alt="NeoLAB Convergence" />
        <LeftTitle>홈페이지 관리자</LeftTitle>
      </Left>

      <Right>
        <Box>
          <Title>로그인</Title>
          <Desc>NeoLAB 구글 워크스페이스 계정으로 로그인하세요.</Desc>

          {error && (
            <ErrorBox>
              <ErrorText>{error}</ErrorText>
            </ErrorBox>
          )}

          <GoogleBtn onClick={handleGoogle} disabled={loading}>
            {loading ? (
              <span>확인 중...</span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google 계정으로 로그인
              </>
            )}
          </GoogleBtn>

          <Help>승인된 @neolab.net 계정만 접근 가능합니다.</Help>
        </Box>
      </Right>
    </Wrap>
  );
}
