const home = {
  metadata: {
    title: "홈 - 네오랩 컨버전스",
    description: "아날로그와 디지털을 연결하는 새로운 차원의 솔루션",
  },
  hero: {
    title: "아날로그와 디지털을 연결하는 새로운 차원의 솔루션",
    subtitle: "네오랩과 함께 아날로그에서 디지털로의 여정을 시작하세요.",
    visionLabel: "Our Vision",
    visionTitle: "Moving from Analog to Digital",
    visionDesc: "물리 세상과 가상 세계를 연결하는 게이트웨이",
  },
  products: {
    tag: "Our Products",
    items: [
      {
        name: "소리펜",
        desc: "책을 듣는 가장 훌륭한 방법",
        href: "/ko/soundpen",
        image: "/images/soundpen/Neo_poppen.png",
      },
      {
        name: "네오스마트펜",
        desc: "더할 나위 없는 퍼포먼스",
        href: "/ko/neosmartpen/product-m1",
        image: "/images/neosmartpen/products/m1/M1.png",
      },
      {
        name: "POKORO",
        desc: "AI Learning Mate",
        href: "/ko/pokoro",
        image: "/images/pokoro/Group39.png",
      },
      {
        name: "AiGLE (아이글)",
        desc: "AI 서논술형 평가 솔루션",
        href: "/ko/aigle",
        image: "/images/home/product-aigle.jpg",
      },
      {
        name: "Neo Studio 2",
        desc: "필기 데이터를 모든 기기로",
        href: "/ko/neosmartpen/neo-studio",
        image: "/images/neosmartpen/apps/neo-studio/NeoStudio_landing01.jpg",
      },
    ],
  },
  tech: {
    tag: "Technology",
    title: "어떠한 평면이라도\n디지털화 할 수 있는 기술",
    subtitle:
      "Ncode™ 기술을 통해 모든 평면에 고유한 디지털 주소를 부여합니다.\n아날로그 정보가 즉시 디지털 세계로 연결됩니다.",
    learnMore: "더 알아보기",
    items: [
      {
        title: "Digitalization",
        description:
          "Ncode™ 마이크로 도트 패턴으로 2mm² 이내의 정밀도로 위치를 인식합니다. 어떤 종이도 스마트한 디지털 인터페이스로 변환됩니다.",
      },
      {
        title: "Engagement",
        description:
          "자연스러운 필기 동작 그대로 소프트웨어와 연결됩니다. 사용자와 콘텐츠 사이의 가장 직관적인 인터페이스를 제공합니다.",
      },
      {
        title: "Integration",
        description:
          "PowerPoint, Word, Excel 등 다양한 소프트웨어와 원활하게 연동됩니다. 표준화된 데이터 포맷으로 AI와의 접목도 손쉽게 가능합니다.",
      },
      {
        title: "Scalability",
        description:
          "전 세계 76개국에서 활용 중인 검증된 확장성. 교육, 문구, 엔터프라이즈 등 다양한 산업 분야로 확장 가능한 B2B 솔루션입니다.",
      },
    ],
  },
  business: {
    tag: "Business",
    title: "비즈니스와의 연결",
    learnMore: "더 알아보기",
    tabs: [
      {
        id: "study",
        label: "Smart Study",
        badge: "Smart Study",
        title: "진정한 융합과\n효율적 교육",
        description:
          "AI와 디지털의 도움으로 학습에 흥미를 유발하고, 단계별 학습이 가능하게 되었습니다. 네오랩컨버전스는 제대로 집중해서 공부할 수 있는 솔루션을 제공하고 있습니다.",
        cases: [
          {
            label: "엠베스트",
            href: "https://www.mbest.co.kr/pub_event/event/00000233/event_main.asp?partnerad=C3491&utm_source=google&utm_medium=sa&utm_campaign=mb_pc_keyword&utm_content=midkeyword_mbestbrand_free&utm_term=%EC%A4%91%ED%95%99&gad_source=1&gad_campaignid=22691521377&gbraid=0AAAAAD8SkedVhngZOOJITWREVwfLF4PSt&gclid=Cj0KCQjw4a3OBhCHARIsAChaqJPItBO0jeziL-keMBwRXpGRXSj3VZK18xt56C8_yvgXJmAb2SAlPQMaAn_dEALw_wcB",
            image: "/images/home/business-mbest.jpg",
          },
          {
            label: "구몬 학습",
            href: "https://www.kumon.co.kr/",
            image: "/images/home/business-kumon.jpg",
          },
          {
            label: "CAKE(HYBE EDU)",
            href: "https://www.cakecorp.com/",
            image: "/images/home/business-cake.jpg",
          },
        ],
        image: "/images/home/business-mbest.jpg",
        imageAlt: "Smart Study",
      },
      {
        id: "digital",
        label: "Digital Transform",
        badge: "Digital Transform",
        title: "문구산업의\n새로운 출발점",
        description:
          "전통적인 지류와 펜을 기반으로 하는 문구 사업의 디지털 트랜스폼을 도와줍니다. 고유의 감성적인 DNA를 자연스럽게 디지털과 연결합니다.",
        cases: [
          {
            label: "LAMY",
            href: "https://www.lamy.com/de-de/digital-writing/digital-paper",
            image: "/images/home/business-lamy.jpg",
          },
          {
            label: "Moleskine",
            href: "https://www.moleskine.com/en-us/shop/moleskine-smart/",
            image: "/images/home/business-moleskine.jpg",
          },
          {
            label: "양지사",
            href: "https://yangjisa.com/",
            image: "/images/home/business-yangjisa.jpg",
          },
        ],
        image: "/images/home/business-lamy.jpg",
        imageAlt: "Digital Transform",
      },
      {
        id: "doc",
        label: "Document Mgmt",
        badge: "Document Mgmt",
        title: "비정형 정보의\n자산화",
        description:
          "현장에서 손으로 작성한 데이터를 즉시 디지털화하고 기업 시스템과 연동합니다. 데이터 정확성, 속도, 보안이 중요한 산업 현장을 위한 최적의 솔루션입니다.",
        cases: [
          {
            label: "현대자동차",
            href: "#",
            image: "/images/home/doc-hyundai.jpg",
            description:
              "완성차 품질완결시스템용 스마트펜 솔루션. Ncode 기술이 적용된 전용 검품 양식지 및 스마트펜 데이터 인프라 구축 완료.",
            badge: "제조업",
            system: "현대자동차 품질완결시스템 / MES 연동",
          },
          {
            label: "LG화학",
            href: "#",
            image: "/images/home/doc-lgchem.jpg",
            description:
              "환경안전 예방정비점검 스마트펜 솔루션. 화학공장 내 환경전관련 주요 설비점검을 위한 전용 양식출력 및 스마트펜 데이터 인프라 구축 완료.",
            badge: "예방정비",
            system: "LG화학 환경안전 Portal 2.0 연동",
          },
          {
            label: "현대 BNG Steel",
            href: "#",
            image: "/images/home/doc-bngsteel.jpg",
            description:
              "폭발위험구역 등 디지털 기기 사용이 제한된 현장에서의 하이브리드 시스템 구축.",
            badge: "제조업",
            system: "현대 BNG Steel 시스템 연동",
          },
          {
            label: "농업정책보험금융원",
            href: "#",
            image: "/images/home/doc-apfs.jpg",
            description:
              "손해평가조사 수기 기록의 디지털 전환. 농업분야 손해평가사들의 현장 평가과정에서 발생하는 다양한 수기 조사기록을 간편하게 디지털 전환.",
            badge: "손해평가",
            system: "농업정책보험금융원 DB 연동",
          },
        ],
        image: "/images/home/doc-hyundai.jpg",
        imageAlt: "Document Management",
      },
    ],
  },
  digitalAnalog: {
    title: "디지털 세상, 새로운 아날로그를 만나다",
    naturalInterface: "Natural Interface",
    naturalInterfaceDesc:
      "네오랩컨버전스는 어떠한 평면이라도 디지털화 할 수 있는 기술을 제공합니다. 당사가 제공하는 입력 장치인 스마트펜, 소리펜을 통해, 자연스럽게 소프트웨어와 연결되고, 활용 될 수 있는 방법을 제시합니다.",
    convergedAnalog: "Converged Analog",
    convergedAnalogDesc:
      "종이는 가장 아날로그적이며 디지털화가 되지 않은 매체 입니다. 그리고 종이는 문서를 작성하는 근간이며, 정보를 얻을 수 있는 좋은 매체입니다. 저희는 종이를 스마트하게 만들어 아날로그 정보가 손쉽게 디지털과 연결되는 일을 하고 있습니다.",
  },
  coreSolutions: {
    title: "네오랩이 제공하는 핵심 솔루션",
    smart: {
      title: "스마트",
      description:
        "당사의 핵심 원천 기술인 Ncode를 통해 어떠한 면이던 디지털화 될 수 있도록 만들어 줍니다. 각 평면은 유일한 주소를 가져 구분될 수 있도록 해 줍니다.",
    },
    inputDevice: {
      title: "입력장치",
      description:
        "네오스마트펜, 소리펜은 당사 제공하고 있는 디지털 입력 장치입니다. 이를 통해 필기한 것을 디지털화 하기도 하고, 다채로운 상호작용과 연결하게 합니다.",
    },
    cloud: {
      title: "클라우드",
      description:
        "언제 어디서나 손으로 적은 내용이 파워포인트, 워드, 엑셀 등의 다양한 소프트웨어에서 잘 활용될 수 있는 방법도 제공합니다.",
    },
    application: {
      title: "응용",
      description:
        "필기 데이터를 활용한 다양한 앱을 개발할 수 있는 환경을 제공합니다. 표준화된 포맷을 지원하여 쉽게 AI 등과 접목할 수 있도록 합니다.",
    },
  },
  connectBusiness: {
    title: "비지니스와의 연결",
    smartStudy: {
      category: "SMART STUDY",
      title: "진정한 융합과 효율적 교육",
      description:
        "AI와 디지털의 도움으로 흥미를 유발하고, 단계별 학습이 가능하게 되었습니다. 여기에 네오랩컨버전스는 제대로 집중해서 공부할 수 있는 솔루션을 제공하고 있습니다.",
    },
    digitalTransform: {
      category: "DIGITAL TRANSFORM",
      title: "문구산업의 새로운 출발점",
      description:
        "전통적인 지류와 펜을 기반으로 하는 문구 사업의 디지털 트랜스폼을 도와줍니다. 네오랩 컨버전스는 문구 회사들이 가지고 있는 고유의 감성적인 DNA를 자연스럽게 디지털과 연결할 수 있는 솔루션을 제공하고 있습니다.",
    },
    documentManagement: {
      category: "DOCUMENT MANAGEMENT",
      title: "비정형 정보의 자산화",
      description:
        "현재까지 필기 데이터라고 하면, 대부분 문서를 촬영하거나 스캔 한 이미지로 존재하고 있습니다. 네오랩컨버전스는 필기 데이터를 쓰기의 순서나 압력 등과 함께 디지털화 해주어 지금까지 활용에 제한이 많았던 필기 비정형 데이터를 활용 가능한 정형의 데이터로 변환하여 줍니다.",
    },
    collaboration: {
      category: "COLLABORATION",
      title: "새로운 차원의 협업",
      description:
        "창의성이 필요한 활동에 있어서 키보드와 마우스 만으로 업무를 처리하기에 어려운 점이 많습니다. 특히 비대면 환경이 강조되고 있는 지금 그 어느 때보다도 사람들의 자유로운 의사 표현을 도와줄 수 있는 솔루션이 필요합니다. 당사는 스마트펜과 웹용 화이트보드를 통해서 언제 어디서나 자연스럽게 의견을 교환할 수 있는 솔루션을 제공하고 있습니다.",
    },
  },
  research: {
    title: "필기 데이터가 가진 정보는 다양한 분야에서 응용이 가능합니다",
    subtitle:
      "대학 및 연구 기관에서는 당사의 기술을 바탕으로 이전에 보지 못했던 새로운 영역과의 접목이 시도되고 있습니다.",
    microsoft:
      "미국 마이크로 소프트 — 홀로랜즈와 네오스마트펜이 합쳐진 가상 공간에서 워크 스페이스",
    germanAI: "독일 인공지능연구소 — AI 스피커와 스마트펜을 활용한 인지 능력 측정",
    learnMore: "자세히 보기",
  },
  future: {
    category: "네오랩컨버전스의 미래",
    title: "세상을 이루는 공간, 이 모두가 디지털과 연결하는 회사",
    description:
      "전통 방식의 데이터 생성 도구인 키보드와 마우스로도 가상 세계의 데이터를 생성할 수는 있습니다만, 기존의 장치들이 다루기에 적합한 데이터의 종류가 가상 세계에서 필요로 하는 형식과는 달라 데이터의 생성과 전달에 노력이 많이 들게 됩니다. 당사는 문서 클라우드인 페이퍼허브와 필기 데이터 클라우드인 잉크스토어로 구성된 NDP(네오랩 데이터 플랫폼)의 소프트웨어 기술 기반 위에, 필기를 즉시 데이터화할 수 있는 네오스마트펜의 입력 장치를 통해 관문 서비스를 제공합니다.",
  },
  stats: {
    tag: "Global Presence",
    title: "국내를 넘어 세계를 향해 가는 네오랩",
    subtitle: "검증된 기술력과 글로벌 파트너십으로 전 세계와 연결합니다.",
    items: [
      { label: "Ncode 최소 면적", count: 2, unit: "mm", desc: "2mm² 이내의 정밀한 위치 인식" },
      { label: "인쇄 페이지", count: 95, unit: "억장", desc: "전 세계 누적 Ncode 인쇄 장수" },
      { label: "협업 업체", count: 100, unit: "+곳", desc: "LAMY, Moleskine 등 글로벌 파트너" },
      { label: "기술 활용 국가", count: 76, unit: "개국", desc: "전 세계에서 사용되는 Ncode 기술" },
    ],
  },
  cta: {
    title: "Write the Future,\nConnect the World.",
    subtitle: "네오랩과 함께 아날로그에서 디지털로의 여정을 시작하세요.",
    button: "Contact Us →",
    secondButton: "사업제휴 문의하기",
  },
} as const;

export default home;
