"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CloseBtn,
  HideCheckbox,
  HideLabel,
  Overlay,
  PopupBody,
  PopupBottomLeft,
  PopupBottomRight,
  PopupCenter,
  PopupFooter,
  PopupHtml,
  PopupTopLeft,
  PopupTopRight,
} from "./GlobalPopups.styles";

interface PopupData {
  id: string;
  title: string;
  content: string;
  position: string;
  language?: string;
  width: number;
  height: number | null;
  displayPages: string;
}

export default function GlobalPopups() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const pathname = usePathname();
  const [closed, setClosed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const hidden = localStorage.getItem("neolab_hidden_popups");
    if (hidden) {
      try {
        const parsed = JSON.parse(hidden);
        const now = Date.now();
        const validHidden = new Set<string>();
        const toSave: Record<string, number> = {};
        for (const [id, expireAt] of Object.entries(parsed)) {
          if (now < (expireAt as number)) {
            validHidden.add(id);
            toSave[id] = expireAt as number;
          }
        }
        setClosed(validHidden);
        localStorage.setItem("neolab_hidden_popups", JSON.stringify(toSave));
      } catch {}
    }

    fetch(`/api/popups/active?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPopups(data);
      })
      .catch(console.error);
  }, [pathname]);

  const visiblePopups = popups.filter((p) => {
    if (closed.has(p.id)) return false;

    if (p.language && p.language !== "all") {
      if (!pathname.startsWith(`/${p.language}`)) return false;
    }

    if (
      p.displayPages &&
      p.displayPages.trim() !== "" &&
      p.displayPages.trim().toLowerCase() !== "all"
    ) {
      const allowed = p.displayPages.split(",").map((s) => s.trim());
      if (
        !allowed.some((path) => {
          if (path === "/") {
            return pathname === "/" || /^\/[a-z]{2}\/?$/.test(pathname);
          }
          return pathname.includes(path);
        })
      ) {
        return false;
      }
    }
    return true;
  });

  if (visiblePopups.length === 0) return null;

  function closePopup(id: string, hideToday: boolean) {
    setClosed((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    if (hideToday) {
      const hidden = localStorage.getItem("neolab_hidden_popups");
      const parsed = hidden ? JSON.parse(hidden) : {};
      parsed[id] = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("neolab_hidden_popups", JSON.stringify(parsed));
    }
  }

  function handleHideTodayChange(id: string, checked: boolean) {
    if (checked) closePopup(id, true);
  }

  function handleCloseClick(id: string) {
    closePopup(id, false);
  }

  return (
    <>
      <Overlay />
      {visiblePopups.map((p) => {
        const style = { width: p.width || 400, height: p.height || "auto" } as React.CSSProperties;

        const footer = (
          <PopupFooter>
            <HideLabel>
              <HideCheckbox
                type="checkbox"
                onChange={(e) => handleHideTodayChange(p.id, e.target.checked)}
              />
              오늘 하루 보지 않기
            </HideLabel>
            <CloseBtn type="button" onClick={() => handleCloseClick(p.id)}>
              닫기 ✕
            </CloseBtn>
          </PopupFooter>
        );

        const body = (
          <>
            <PopupBody>
              <PopupHtml dangerouslySetInnerHTML={{ __html: p.content }} />
            </PopupBody>
            {footer}
          </>
        );

        switch (p.position) {
          case "center":
            return (
              <PopupCenter key={p.id} style={style}>
                {body}
              </PopupCenter>
            );
          case "top-left":
            return (
              <PopupTopLeft key={p.id} style={style}>
                {body}
              </PopupTopLeft>
            );
          case "top-right":
            return (
              <PopupTopRight key={p.id} style={style}>
                {body}
              </PopupTopRight>
            );
          case "bottom-left":
            return (
              <PopupBottomLeft key={p.id} style={style}>
                {body}
              </PopupBottomLeft>
            );
          case "bottom-right":
            return (
              <PopupBottomRight key={p.id} style={style}>
                {body}
              </PopupBottomRight>
            );
          default:
            return (
              <PopupCenter key={p.id} style={style}>
                {body}
              </PopupCenter>
            );
        }
      })}
    </>
  );
}
