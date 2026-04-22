"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import {
  EditorLoading,
  EditorPanel,
  EditorRoot,
  HtmlTextarea,
  PlainPreview,
  PlainPreviewEmpty,
  TabBar,
  TabButton,
} from "./RichEditor.styles";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <EditorLoading>에디터 로딩 중...</EditorLoading>,
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
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "link",
  "image",
];

type TabType = "editor" | "html" | "text";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function RichEditor({ value, onChange }: Props) {
  const [tab, setTab] = useState<TabType>("editor");

  const handleTabEditor = useCallback(() => {
    setTab("editor");
  }, []);

  const handleTabHtml = useCallback(() => {
    setTab("html");
  }, []);

  const handleTabText = useCallback(() => {
    setTab("text");
  }, []);

  function getPlainText(html: string) {
    if (typeof document === "undefined") return html;
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.innerText || div.textContent || "";
  }

  return (
    <EditorRoot className="rich-editor-container">
      <EditorPanel $visible={tab === "editor"}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(val) => onChange(sanitizeLinks(val))}
          modules={MODULES}
          formats={FORMATS}
        />
      </EditorPanel>

      {tab === "html" && (
        <HtmlTextarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
        />
      )}

      {tab === "text" && (
        <PlainPreview>
          {getPlainText(value) || (
            <PlainPreviewEmpty>내용 없음</PlainPreviewEmpty>
          )}
        </PlainPreview>
      )}

      <TabBar>
        <TabButton type="button" $active={tab === "editor"} onClick={handleTabEditor}>
          에디터
        </TabButton>
        <TabButton type="button" $active={tab === "html"} onClick={handleTabHtml}>
          HTML
        </TabButton>
        <TabButton type="button" $active={tab === "text"} onClick={handleTabText}>
          TEXT
        </TabButton>
      </TabBar>
    </EditorRoot>
  );
}
