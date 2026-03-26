"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
    // Check localStorage for "do not show today" popups
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
        localStorage.setItem("neolab_hidden_popups", JSON.stringify(toSave)); // cleanup expired
      } catch {}
    }

    fetch(`/api/popups/active?t=${Date.now()}`, { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPopups(data);
      })
      .catch(console.error);
  }, [pathname]); // Refresh on navigation

  const visiblePopups = popups.filter(p => {
    if (closed.has(p.id)) return false;
    
    // Check language filter
    if (p.language && p.language !== "all") {
      if (!pathname.startsWith(`/${p.language}`)) return false;
    }

    // Check display pages filter
    if (p.displayPages && p.displayPages.trim() !== "" && p.displayPages.trim().toLowerCase() !== "all") {
      const allowed = p.displayPages.split(",").map(s => s.trim());
      // e.g., if pathname is /ko/about, we want to allow it if allowed contains /about
      if (!allowed.some(path => {
        if (path === "/") {
          return pathname === "/" || /^\/[a-z]{2}\/?$/.test(pathname);
        }
        return pathname.includes(path);
      })) {
        return false;
      }
    }
    return true;
  });

  if (visiblePopups.length === 0) return null;

  function closePopup(id: string, hideToday: boolean) {
    setClosed(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    if (hideToday) {
      const hidden = localStorage.getItem("neolab_hidden_popups");
      const parsed = hidden ? JSON.parse(hidden) : {};
      parsed[id] = Date.now() + 24 * 60 * 60 * 1000; // +24 hours
      localStorage.setItem("neolab_hidden_popups", JSON.stringify(parsed));
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-[9998] pointer-events-none" />
      {visiblePopups.map((p) => {
        let posClass = "fixed z-[9999] bg-white shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-gray-100";
        switch (p.position) {
          case "center": posClass += " top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"; break;
          case "top-left": posClass += " top-6 left-6 rounded-lg"; break;
          case "top-right": posClass += " top-6 right-6 rounded-lg"; break;
          case "bottom-left": posClass += " bottom-6 left-6 rounded-lg"; break;
          case "bottom-right": posClass += " bottom-6 right-6 rounded-lg"; break;
        }

        return (
          <div key={p.id} className={posClass} style={{ width: p.width || 400, height: p.height || "auto" }}>
            <div className="flex-1 overflow-y-auto w-full max-h-[85vh]">
              <div dangerouslySetInnerHTML={{ __html: p.content }} className="w-full" />
            </div>
            <div className="bg-[#f8f9fa] border-t border-gray-200 px-4 py-2.5 flex items-center justify-between text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer text-gray-500 hover:text-gray-700 select-none">
                <input type="checkbox" onChange={(e) => { if (e.target.checked) closePopup(p.id, true); }} className="w-3.5 h-3.5 accent-[#1a1a2e]" />
                오늘 하루 보지 않기
              </label>
              <button onClick={() => closePopup(p.id, false)} className="text-gray-600 hover:text-gray-900 font-medium">
                닫기 ✕
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
