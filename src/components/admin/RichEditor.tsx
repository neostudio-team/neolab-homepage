"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[320px] flex items-center justify-center bg-gray-50 text-gray-400 text-sm">
      에디터 로딩 중...
    </div>
  ),
});

/** 프로토콜 없는 href에 https:// 자동 추가 */
function sanitizeLinks(html: string): string {
  return html.replace(/href="([^"]+)"/g, (_match, url: string) => {
    if (
      /^[a-z][a-z\d+\-.]*:\/\//i.test(url) || // http:// https:// ftp:// 등
      url.startsWith("//") ||
      url.startsWith("#") ||
      url.startsWith("/") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:")
    ) {
      return `href="${url}"`;
    }
    return `href="https://${url}"`;
  });
}

const MODULES = {
  toolbar: [
    [{ font: [] }, { size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const FORMATS = [
  "font", "size",
  "bold", "italic", "underline", "strike",
  "color", "background",
  "align",
  "list",
  "link", "image",
];

type TabType = "editor" | "html" | "text";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function RichEditor({ value, onChange }: Props) {
  const [tab, setTab] = useState<TabType>("editor");

  function getPlainText(html: string) {
    if (typeof document === "undefined") return html;
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.innerText || div.textContent || "";
  }

  return (
    <div className="rich-editor-container border border-gray-200 rounded-lg overflow-hidden">
      {/* Editor area */}
      <div className={tab === "editor" ? "block" : "hidden"}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(val) => onChange(sanitizeLinks(val))}
          modules={MODULES}
          formats={FORMATS}
        />
      </div>

      {tab === "html" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[320px] p-4 text-xs font-mono text-gray-700 bg-gray-50 resize-y focus:outline-none border-0"
          spellCheck={false}
        />
      )}

      {tab === "text" && (
        <div className="min-h-[320px] p-4 text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
          {getPlainText(value) || <span className="text-gray-300">내용 없음</span>}
        </div>
      )}

      {/* Tab bar */}
      <div className="flex items-center border-t border-gray-200 bg-gray-50">
        {(["editor", "html", "text"] as TabType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-5 py-2 text-xs font-medium transition-colors border-r border-gray-200 last:border-r-0 ${
              tab === t
                ? "bg-white text-[#1a1a2e] font-semibold"
                : "text-gray-400 hover:text-gray-600 hover:bg-white/60"
            }`}
          >
            {t === "editor" ? "에디터" : t === "html" ? "HTML" : "TEXT"}
          </button>
        ))}
      </div>
    </div>
  );
}
