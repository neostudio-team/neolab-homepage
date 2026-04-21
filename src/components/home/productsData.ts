export interface Product {
  key: string;
  chipLabel: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
}

export interface Category {
  key: string;
  label: string;
  smallImage: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    key: "smartpen",
    label: "스마트펜",
    smallImage: "/images/home/figma/products/small-smartpen.png",
    products: [
      {
        key: "r1",
        chipLabel: "R1",
        name: "R1",
        tagline: "가볍게, 또 제대로 시작.",
        image: "/images/home/figma/products/smartpen-r1.png",
        href: "/ko/neosmartpen/product-r1",
      },
      {
        key: "a1",
        chipLabel: "A1",
        name: "A1",
        tagline: "모든 특별함이 하나로",
        image: "/images/home/figma/products/smartpen-a1.png",
        href: "/ko/neosmartpen",
      },
      {
        key: "m1plus",
        chipLabel: "M1+",
        name: "M1+",
        tagline: "더할 나위 없는 퍼포먼스",
        image: "/images/home/figma/products/smartpen-m1plus.png",
        href: "/ko/neosmartpen/product-m1",
      },
      {
        key: "dimo",
        chipLabel: "dimo",
        name: "dimo",
        tagline: "스마트펜 입문자의 가장 합리적인 선택",
        image: "/images/home/figma/products/smartpen-dimo.png",
        href: "/ko/neosmartpen/product-dimo",
      },
      {
        key: "lamy",
        chipLabel: "라미 사파리 올블랙",
        name: "라미 사파리 올블랙",
        tagline: "라미 사파리 그대로 디지털과 연결하다",
        image: "/images/home/figma/products/smartpen-lamy.png",
        href: "/ko/neosmartpen/product-lamy",
      },
    ],
  },
  {
    key: "pokoro",
    label: "포코로",
    smallImage: "/images/home/figma/products/small-pokoro.png",
    products: [
      {
        key: "pokoro",
        chipLabel: "포코로",
        name: "POKORO",
        tagline: "우리 아이 AI 대화형 학습 친구",
        image: "/images/home/figma/products/pokoro.png",
        href: "/ko/pokoro",
      },
    ],
  },
  {
    key: "soripen",
    label: "소리펜",
    smallImage: "/images/home/figma/products/small-soripen.png",
    products: [
      {
        key: "poppen",
        chipLabel: "팝펜",
        name: "팝펜",
        tagline: "기본에 충실한 실속형 소리펜",
        image: "/images/home/figma/products/soripen-poppen.png",
        href: "/ko/soundpen",
      },
      {
        key: "prime",
        chipLabel: "팝펜 프라임",
        name: "팝펜 프라임",
        tagline: "모든 특별함이 하나로",
        image: "/images/home/figma/products/soripen-prime.png",
        href: "/ko/soundpen",
      },
      {
        key: "video",
        chipLabel: "팝펜 비디오",
        name: "팝펜 비디오",
        tagline: "가볍게, 또 제대로 시작.",
        image: "/images/home/figma/products/soripen-video.png",
        href: "/ko/soundpen",
      },
      {
        key: "light",
        chipLabel: "팝펜 라이트",
        name: "팝펜 라이트",
        tagline: "스마트펜 입문자의 가장 합리적인 선택",
        image: "/images/home/figma/products/soripen-light.png",
        href: "/ko/soundpen",
      },
    ],
  },
  {
    key: "others",
    label: "그 외",
    smallImage: "/images/home/figma/products/small-others.png",
    products: [
      {
        key: "cradle",
        chipLabel: "크래들",
        name: "크래들",
        tagline: "R1 전용 충전 및 대량 데이터 전송용 스테이션",
        image: "/images/home/figma/products/others-cradle.png",
        href: "/ko/neosmartpen",
      },
      {
        key: "mediaplayer",
        chipLabel: "미디어 플레이어",
        name: "미디어 플레이어",
        tagline: "소리펜 연동용 영상 콘텐츠 재생 플레이어",
        image: "/images/home/figma/products/others-mediaplayer.png",
        href: "/ko/soundpen",
      },
      {
        key: "beam",
        chipLabel: "빔 프로젝터",
        name: "빔 프로젝터",
        tagline: "유아용 영상 콘텐츠 탑재",
        image: "/images/home/figma/products/others-beam.png",
        href: "/ko/neosmartpen",
      },
    ],
  },
];
