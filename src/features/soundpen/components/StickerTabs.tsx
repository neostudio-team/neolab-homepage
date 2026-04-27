"use client";

import { useState } from "react";
import {
  StickerTabsWrap,
  TabsList,
  StickerTabBtn,
  StickerPanel,
  StickerPanelImg,
  StickerPanelContent,
  StickerPanelTitle,
  StickerPanelDesc,
  StickerBulletList,
  StickerBulletItem,
  StickerBulletTitle,
} from "../SoundPenPage.styles";

type TabId = "sticker" | "video" | "books";

const TABS: { id: TabId; label: string; position: "top" | "middle" | "bottom" }[] = [
  { id: "sticker", label: "팝펜 스티커", position: "top" },
  { id: "video", label: "팝펜 비디오 스티커", position: "middle" },
  { id: "books", label: "팝펜 패밀리 도서", position: "bottom" },
];

const CONTENT: Record<
  TabId,
  { img: string; title: string; body: React.ReactNode }
> = {
  sticker: {
    img: "/images/soundpen/sticker-1.png",
    title: "팝펜 스티커",
    body: (
      <>
        <StickerPanelDesc>
          벽, 책, 장난감 어디든 붙이기만 하면 소리가 나는 마법이 시작됩니다.{" "}
          팝펜 스티커는 일반 스티커처럼 자유롭게 부착하여 학습 환경을 꾸밀 수
          있습니다.
        </StickerPanelDesc>
        <StickerBulletList>
          <StickerBulletItem>
            <div>
              <StickerBulletTitle>팝펜 에디터 활용</StickerBulletTitle>
              전용 편집 프로그램을 사용해 원하는 음원을 스티커에 간편하게
              넣어보세요. 아이만을 위한 특별한 맞춤형 교재가 완성됩니다.
            </div>
          </StickerBulletItem>
          <StickerBulletItem>
            <div>
              <StickerBulletTitle>팝펜 프라임의 즉석 녹음</StickerBulletTitle>
              녹음 기능이 탑재된 &lsquo;팝펜 프라임&rsquo;을 사용하면 별도의
              프로그램 없이도 엄마, 아빠의 목소리를 즉석에서 녹음해 스티커에
              입힐 수 있습니다.
            </div>
          </StickerBulletItem>
        </StickerBulletList>
      </>
    ),
  },
  video: {
    img: "/images/soundpen/sticker-2.png",
    title: "팝펜 비디오 스티커",
    body: (
      <>
        <StickerPanelDesc>
          아이가 좋아하는 유튜브 영상을 이제 &lsquo;팝펜 비디오 스티커&rsquo;에
          담아보세요. 스티커와 팝펜 비디오만 있으면 복잡한 조작 없이 터치 한
          번으로 영상을 재생할 수 있습니다.
        </StickerPanelDesc>
        <StickerPanelDesc>
          특히 아이가 스마트폰이나 태블릿을 직접 만질 필요가 없어, 무분별한
          유해 콘텐츠 노출로부터 아이를 안전하게 보호할 수 있습니다. 자극적인
          알고리즘 대신 부모님이 엄선한 유익한 영상만으로 건강한 시청 습관을
          길러 주세요.
        </StickerPanelDesc>
      </>
    ),
  },
  books: {
    img: "/images/soundpen/family-books.png",
    title: "팝펜 패밀리 도서",
    body: (
      <>
        <StickerPanelDesc>
          아이가 좋아하는 유튜브 영상을 이제 &lsquo;팝펜 비디오 스티커&rsquo;에
          담아보세요. 스티커와 팝펜 비디오만 있으면 복잡한 조작 없이 터치 한
          번으로 영상을 재생할 수 있습니다.
        </StickerPanelDesc>
        <StickerPanelDesc>
          특히 아이가 스마트폰이나 태블릿을 직접 만질 필요가 없어, 무분별한
          유해 콘텐츠 노출로부터 아이를 안전하게 보호할 수 있습니다. 자극적인
          알고리즘 대신 부모님이 엄선한 유익한 영상만으로 건강한 시청 습관을
          길러 주세요.
        </StickerPanelDesc>
      </>
    ),
  },
};

export default function StickerTabs() {
  const [active, setActive] = useState<TabId>("sticker");
  const activeIdx = TABS.findIndex((t) => t.id === active);
  const { img, title, body } = CONTENT[active];

  return (
    <StickerTabsWrap>
      <TabsList>
        {TABS.map((tab) => (
          <StickerTabBtn
            key={tab.id}
            $active={active === tab.id}
            $position={tab.position}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </StickerTabBtn>
        ))}
      </TabsList>

      <StickerPanel $activeIdx={activeIdx}>
        <StickerPanelImg>
          <img
            src={img}
            alt={title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </StickerPanelImg>
        <StickerPanelContent>
          <StickerPanelTitle>{title}</StickerPanelTitle>
          {body}
        </StickerPanelContent>
      </StickerPanel>
    </StickerTabsWrap>
  );
}
