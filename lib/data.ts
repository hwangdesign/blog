import dynamicPostsData from "@/content/dynamic-posts.json";

export type Category = "maker-stories" | "working-well" | "inside" | "insights";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: Category;
  topics: string[];
  featured?: boolean;
  content?: string;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "maker-stories", label: "Maker Stories" },
  { id: "working-well", label: "Working Well" },
  { id: "inside", label: "Inside" },
  { id: "insights", label: "Insights" },
];

const CATEGORY_VALUES: Category[] = ["maker-stories", "working-well", "inside", "insights"];

function toCategory(value: unknown): Category {
  return CATEGORY_VALUES.includes(value as Category) ? (value as Category) : "insights";
}

export const TOPICS = [
  "NEWS",
  "INSIGHTS",
  "INSIDE",
  "MAKER STORIES",
  "WORKING WELL",
  "DESIGN SYSTEMS",
  "AI",
  "DESIGN",
  "RESEARCH",
  "REPORT",
  "FIGMA DESIGN",
  "PRODUCT UPDATES",
  "HIRING",
  "CULTURE",
  "UI/UX",
  "PROTOTYPING",
  "BRANDING",
  "TYPOGRAPHY",
  "COLOR THEORY",
  "ACCESSIBILITY",
  "USER RESEARCH",
  "MOTION DESIGN",
  "DESIGN THINKING",
  "COLLABORATION",
  "DEV MODE",
  "INFORMATION ARCHITECTURE",
  "VISUAL DESIGN",
  "INTERACTION DESIGN",
  "SERVICE DESIGN",
  "SUSTAINABLE DESIGN",
  "INCLUSIVE DESIGN",
  "DESIGN OPS",
  "DESIGN LEADERSHIP",
  "CRAFT",
] as const;

// rss-filter-bot에서 동기화된 포스트 (content/dynamic-posts.json)
// category, topics 변환 (topics: 영문 대문자, 최소 3개)
const dynamicPosts: Post[] = Array.isArray(dynamicPostsData)
  ? (dynamicPostsData as Record<string, unknown>[]).map((p) => {
      const rawTopics = (p.topics as string[] | undefined) || [];
      const seen = new Set<string>();
      const topics: string[] = [];
      for (const t of rawTopics) {
        const u = String(t).toUpperCase();
        if (u && !seen.has(u)) {
          topics.push(u);
          seen.add(u);
        }
      }
      for (const fallback of ["DESIGN", "NEWS", "UI/UX"]) {
        if (topics.length >= 3) break;
        if (!seen.has(fallback)) {
          topics.push(fallback);
          seen.add(fallback);
        }
      }
      return { ...p, category: toCategory(p.category), topics };
    }) as Post[]
  : [];

// 파스텔 추출 확인용: 주조색이 뚜렷한 이미지들 (빨·주·노·초·청·보·분홍 등)
const STATIC_POSTS: Post[] = [
  {
    id: "1",
    slug: "state-of-the-designer-2026",
    title: "디자이너 현황 2026: 디자이너들이 맞닥뜨리는 복잡한 중간",
    excerpt:
      "디자이너 현황 리포트에서 전 세계 디자이너가 역량을 높이고, 크래프트를 지키며, 새로운 압박을 창작의 동력으로 바꾸는 방식을 살펴봅니다.",
    date: "2026-02-12",
    author: "매들린 스태퍼드",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // 파랑(하늘/산)
    category: "insights",
    topics: ["INSIGHTS", "RESEARCH", "REPORT", "DESIGN", "AI"],
    featured: true,
  },
  {
    id: "2",
    slug: "why-demand-for-designers-is-on-the-rise",
    title: "디자이너 수요가 다시 늘어나는 이유",
    excerpt:
      "AI 시대에 기업은 그 어느 때보다 디자이너가 필요합니다. 최신 연구에 따르면 AI가 오히려 디자인 채용에 새로운 활력을 불어넣고 있습니다.",
    date: "2026-02-10",
    author: "앤드루 호건",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80", // 주황(일몰)
    category: "insights",
    topics: ["INSIGHTS", "HIRING", "REPORT", "RESEARCH"],
    featured: true,
  },
  {
    id: "3",
    slug: "for-the-love-of-craft-vectorize",
    title: "크래프트를 위해: Figma에서 이미지 벡터화하기",
    excerpt:
      "새 AI 이미지 편집 도구 Vectorize로 래스터 이미지를 편집 가능한 벡터로 바꾸고, 디자인을 직접 수정·다듬고 확대할 수 있습니다.",
    date: "2026-02-04",
    author: "로지 킹",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", // 초록(숲)
    category: "inside",
    topics: ["INSIDE", "PRODUCT UPDATES", "DESIGN", "NEWS", "AI"],
  },
  {
    id: "4",
    slug: "software-is-culture",
    title: "소프트웨어는 문화다",
    excerpt:
      "우리가 스크롤하고, 탭하고, 핀치하고, 스와이프하는 소프트웨어는 우리의 사고와 감정을 되돌리기 어렵게 바꿔 놓았습니다. 지난 20년간 가장 영향력 있었던 인터랙션을 돌아봅니다.",
    date: "2026-01-07",
    author: "피그마",
    image: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=800&q=80", // 보라(꽃)
    category: "insights",
    topics: ["INSIGHTS", "DESIGN", "UI/UX", "CULTURE"],
  },
  {
    id: "5",
    slug: "press-start-controllers-video-game-design",
    title: "프레스 스타트: 컨트롤러가 비디오 게임 디자인을 만든 방식",
    excerpt:
      "에픽 게임즈 UX 디자이너가 비디오 게임 네비게이션이 차세대 인터페이스 설계에 주는 시사점을 나눕니다.",
    date: "2026-01-05",
    author: "아쉬레이 샤르마",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80", // 빨강(열매)
    category: "insights",
    topics: ["INSIGHTS", "DESIGN", "UI/UX", "CULTURE"],
  },
  {
    id: "6",
    slug: "meet-the-maker-kelsey-fairhurst",
    title: "메이커를 만나다: 켈시 페어허스트의 당찬 플랫웨어",
    excerpt:
      "브루클린 기반 디자이너 켈시 페어허스트가 Figma를 활용해 '소프트라인 브루탈리스트' 플랫웨어 브랜드 포크스 플러스를 론칭했습니다.",
    date: "2026-01-05",
    author: "덩컨 닐슨",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80", // 분홍(꽃)
    category: "maker-stories",
    topics: ["MAKER STORIES", "CULTURE", "DESIGN"],
  },
  {
    id: "7",
    slug: "cooking-with-constraints-ai-prompts",
    title: "제약과 함께 요리하기: 더 나은 AI 프롬프트를 위한 디자이너 프레임워크",
    excerpt:
      "디자인과 요리는 한 가지 진실을 공유합니다. 준비가 결과를 좌우합니다. 구조화된 프롬프트는 AI를 추측에서 믿을 수 있는 디자인 파트너로 바꿉니다.",
    date: "2026-01-05",
    author: "그렉 헌툰",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80", // 청록(그라데이션)
    category: "working-well",
    topics: ["WORKING WELL", "AI", "PROTOTYPING"],
  },
  {
    id: "8",
    slug: "upselling-crossselling-boost-payment",
    title: "결제를 늘리는 업셀링과 크로스셀링",
    excerpt:
      "신규 고객 한 명을 유치하는 데 들어가는 비용이 높기 때문에, 많은 프로덕트 기업들은 이미 확보한 고객에게서 더 큰 가치를 창출하는 데 주목합니다.",
    content:
      "신규 고객 한 명을 유치하는 데 들어가는 비용이 높기 때문에, 많은 프로덕트 기업들은 이미 확보한 고객에게서 더 큰 가치를 창출하는 데 주목합니다.\n\n고객 획득 비용(CAC)이 지속적으로 상승하는 디지털 환경에서, 단순히 사용자를 끌어모으는 것만으로는 충분하지 않다. 마케팅 채널 경쟁이 치열해지고, 광고 단가가 오르며, 사용자들의 attention이 분산되는 가운데, 한 번 확보한 고객과의 관계를 심화시키는 전략이 더욱 중요해졌다. 업셀링과 크로스셀링은 바로 그 지점에서 작동한다. 기존 고객에게 상위 플랜을 권유하거나, 관련 상품·서비스를 함께 제안함으로써 단일 고객의 생애 가치(LTV)를 높이는 것이다.\n\n업셀링의 성공 요인은 타이밍과 맥락이다. 사용자가 특정 기능의 한계에 부딪혔을 때, 더 많은 용량이나 고급 기능을 자연스럽게 제안하는 방식이 효과적이다. 무료 플랜 사용자가 저장 공간 한도에 도달했을 때 프리미엄 전환을 유도하는 것처럼, 아픈 점을 해결해 주는 제안일수록 거부감이 적다. 반면 필요하지 않은 시점의 업그레이드 권유는 오히려 이탈을 부추길 수 있다.\n\n크로스셀링은 상품·서비스 간 연관성을 전제로 한다. 구매 이력, 탐색 패턴, 선호도를 분석해 맞춤형 추천을 하거나, 번들 할인으로 함께 구매를 유도한다. 이때 디자인의 역할은 과하지 않은 권유다. 사용자 경험을 방해하지 않으면서, 적절한 순간에 유용한 옵션을 제시하는 UX 패턴—체크아웃 시 관련 상품 카드, 이용 후 추천 섹션 등—이 잘 설계되어야 한다.\n\n결제를 늘리는 것은 단순한 금액 상승이 아니라, 고객에게 더 큰 가치를 제공하는 과정과 동행해야 한다. 업셀링·크로스셀링이 강압적이거나 과하면 신뢰를 해치고 이탈을 부른다. 반대로 고객의 니즈에 맞는 제안일수록 재구매와 구전을 이끌어낸다. 프로덕트 기업은 데이터와 피드백을 바탕으로, 언제 무엇을 어떻게 제안할지 지속적으로 조정해 나가야 한다.\n\n구독 모델을 운영하는 SaaS 기업에서는 특히 업그레이드 경로가 명확해야 한다. 월 구독에서 연 구독으로 전환할 때 할인 혜택을 강조하거나, 팀 플랜을 통해 협업 기능을 확장하는 제안이 대표적 사례다. 이때 가격표 설계 자체가 UX다. 너무 많은 옵션이 나열되면 선택 부담이 커지고, 핵심 가치가 흐려질 수 있다. 반대로 단순한 구조—예를 들어 무료·프로·팀 세 단계—는 의사결정을 쉽게 하고 전환을 높인다.\n\n또한 A/B 테스트를 통해 업셀링·크로스셀링 UI의 배치, 문구, 시점을 실험하는 것이 중요하다. 어떤 버튼 문구가 클릭을 유도하는지, 모달과 인라인 배너 중 어느 쪽이 덜 거슬리는지, 첫 로그인 시점과 일정 사용 기간 이후 중 어떤 타이밍이 효과적인지는 제품마다 다를 수 있다. 정량 데이터와 정성 피드백을 함께 보면서, 고객에게 자연스럽게 다가가는 방식을 찾아가는 것이 핵심이다. 결국 결제 증대는 고객과의 신뢰 기반 관계 위에 세워진다.\n\n요약하면, 신규 유입에만 의존하지 않고 기존 고객의 가치를 극대화하는 업셀링과 크로스셀링 전략은 프로덕트 비즈니스의 지속 성장에 필수적이다. CAC 상승과 경쟁 심화 속에서 LTV를 끌어올리는 것은 생존과 직결된다. 이 전략을 디자인 관점에서 바라보면, 단순한 판매 기법이 아니라 사용자 경험의 연장선에 있다. 올바르게 설계된 업셀링·크로스셀링은 고객이 더 나은 솔루션을 발견하도록 돕는 내비게이션 역할을 한다. 따라서 제품팀과 디자인팀은 고객 여정 전체를 보면서, 어디서 어떤 제안이 의미 있는지 끊임없이 검토하고 개선해야 한다.\n\n마지막으로, 업셀링과 크로스셀링의 성공은 단일 팀의 역량이 아니라 제품·마케팅·고객지원이 협업하는 구조에서 나온다. 가격 정책, 프로모션 기간, 고객 문의 패턴까지 통합적으로 활용할 때, 진정으로 고객 중심의 결제 경험이 완성된다. 이 모든 과정에서 디자이너는 단순히 화면을 꾸미는 역할을 넘어, 고객이 더 나은 선택을 할 수 있도록 정보를 구조화하고 경로를 설계하는 전략적 파트너로서 기여할 수 있다.",
    date: "2026-02-13",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", // 노랑(해바라기)
    category: "insights",
    topics: ["DESIGN", "UI/UX", "RESEARCH"],
  },
  {
    id: "9",
    slug: "psychology-of-pricing-persuasion",
    title: "심리학으로 가격 설득하기",
    excerpt:
      "가격 디자인은 단순한 숫자 배치가 아닙니다. 앵커링, 손실 회피, 사회적 증거 등 심리학 원리를 활용해 전환율을 높이는 방법을 탐구합니다.",
    date: "2026-02-10",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&q=80", // 코랄/연어색
    category: "insights",
    topics: ["DESIGN", "RESEARCH", "UI/UX"],
  },
  {
    id: "10",
    slug: "naver-map-dark-mode",
    title: "네이버 지도 다크모드 지원",
    excerpt:
      "네이버 지도가 다크모드를 전면 지원합니다. 야간 주행과 저조도 환경에서의 가독성 향상, 배터리 절약까지. 서비스 디자인 관점에서 적용 배경을 살펴봅니다.",
    date: "2026-02-13",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", // 네이비/남색
    category: "inside",
    topics: ["NEWS", "DESIGN", "UI/UX"],
  },
  {
    id: "11",
    slug: "jonny-ive-ferrari-lucciola",
    title: "조니 아이브가 디자인한 페라리 루체",
    excerpt:
      "애플 전 수석 디자이너 조니 아이브가 이탈리아 디자인 하우스 레이브와 협업해 만든 페라리 루체. 미니멀리즘과 자동차 디자인의 새로운 접점을 담았습니다.",
    date: "2026-02-10",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80", // 갈색/암브라
    category: "maker-stories",
    topics: ["DESIGN", "NEWS", "CULTURE"],
  },
  {
    id: "12",
    slug: "tien-vintage-store-branding",
    title: "Tien, 빈티지 스토어 브랜딩",
    excerpt:
      "빈티지 컨셉을 현대적으로 재해석한 티엔의 브랜드 디자인. 오래된 것과 새로움의 조화가 만들어내는 독특한 매력을 살펴봅니다.",
    date: "2026-02-13",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    category: "maker-stories",
    topics: ["DESIGN", "NEWS", "CULTURE"],
  },
  {
    id: "13",
    slug: "everglow-mini-keyboard-musicians",
    title: "에버글로우, 뮤지션을 위한 휴대용 미니 키보드",
    excerpt:
      "작곡가와 퍼포머를 위한 초경량 미니 키보드 에버글로우. 이동 중에도 창작을 이어갈 수 있도록 설계된 인터페이스의 이야기입니다.",
    date: "2026-02-13",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    category: "inside",
    topics: ["NEWS", "DESIGN", "PRODUCT UPDATES"],
  },
  {
    id: "14",
    slug: "nike-acg-experience-train",
    title: "나이키 ACG 재출시 체험 열차",
    excerpt:
      "나이키 ACG 라인의 재출시를 맞아 꾸민 특별 체험 열차. 옥외·어드벤처 컨셉의 공간 디자인이 고객 경험에 미치는 영향을 돌아봅니다.",
    date: "2026-02-12",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "insights",
    topics: ["NEWS", "DESIGN", "CULTURE"],
  },
  {
    id: "15",
    slug: "diesel-metal-earphones",
    title: "디젤이 만든 쇠맛 유선 이어폰",
    excerpt:
      "디젤이 선보인 금속质感 이어폰. 산업용 소재와 일상 제품의 결합이 보여주는 새로운 오브젝트 디자인의 가능성.",
    content:
      "디젤이 선보인 금속质感 이어폰. 산업용 소재와 일상 제품의 결합이 보여주는 새로운 오브젝트 디자인의 가능성.\n\n이탈리아 패션 브랜드 디젤이 최근 공개한 유선 이어폰은 단순한 오디오 기기를 넘어, 산업 디자인과 웨어러블 테크의 경계를 넘나드는 실험적 프로젝트로 주목받았다. 알루미늄과 스테인리스 스틸 같은 산업용 금속 소재를 감각적인 일상 소품에 접목함으로써, 디젤은 럭셔리와 워크웨어를 아우르는 독자적인 에스테틱을 한 번 더 제시했다.\n\n이 제품의 핵심은 소재의 이중성이다. 공장과 작업장에서 쓰이던 금속이 이제 귀에 걸리는 사운드 도구로 자리잡았다. 거친 질감과 냉철한 광택이 공존하는 금속质感은 기성 이어폰들의 플라스틱 일체감과 뚜렷이 구분되며, 손에 쥐는 순간 묵직한 질량감과 온기가 전달된다. 케이블 마감부터 드라이버 유닛 하우징까지, 산업용 표준 부품과 정밀 가공이 조화를 이룬다.\n\n이러한 접근은 오브젝트 디자인의 새로운 가능성을 암시한다. 전통적으로 분리되었던 산업·테크놀로지 영역과 일상·패션 영역의 결합은 앞으로 더 많은 제품 카테고리에서 시도될 전망이다. 디젤의 이어폰은 그러한 크로스오버의 선례가 되며, 디자이너들에게 소재 선택과 맥락 혼합에 대한 영감을 던져준다.\n\n사용자 경험 측면에서도 주목할 만하다. 무광 알루미늄 하우징은 그립감을 높이고, 단조된 케이블 클립은 옷깃에 걸었을 때 미니멀한 실루엣을 유지한다. 스마트폰과의 호환성, 휴대 시 주머니에 수납되는 적당한 크기까지, 일상 사용을 고려한 디테일이 산업용 소재의 강인함과 조합되어 완성도를 더했다. 결국 이 제품은 단순한 오디오 액세서리가 아니라, 패션과 테크의 교차점에서 탄생한 객체 디자인의 한 사례를 보여준다.",
    date: "2026-02-12",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "maker-stories",
    topics: ["NEWS", "DESIGN", "CULTURE"],
  },
  {
    id: "16",
    slug: "pocopocia-pokemon-animal-crossing",
    title: "포코피아, 포켓몬 버전 동물의 숲",
    excerpt:
      "포켓몬 세계관으로 재해석한 동물의 숲 스타일 라이프 시뮬레이션. IP 크로스오버가 게임 디자인에 주는 영향을 탐구합니다.",
    date: "2026-02-12",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    category: "inside",
    topics: ["NEWS", "DESIGN", "UI/UX"],
  },
  {
    id: "17",
    slug: "blue-apron-meal-kit-branding",
    title: "블루 에이프런, 간결해진 밀키트 브랜딩",
    excerpt:
      "밀키트 브랜드 블루 에이프런의 리브랜딩. 과한 비주얼을 덜어내고 본질에 집중한 패키지 디자인의 변화를 살펴봅니다.",
    date: "2026-02-11",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    category: "insights",
    topics: ["NEWS", "DESIGN", "DESIGN SYSTEMS"],
  },
  {
    id: "18",
    slug: "nintendo-virtual-boy-vr-retro",
    title: "닌텐도 버추얼 보이, VR로 즐기는 레트로 게임",
    excerpt:
      "90년대 닌텐도 버추얼 보이 타이틀을 VR로 재현한 프로젝트. 레트로 게임과 현대 플랫폼의 만남이 주는 UX 시사점.",
    date: "2026-02-11",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    category: "inside",
    topics: ["NEWS", "DESIGN", "UI/UX"],
  },
  {
    id: "19",
    slug: "perplexity-model-counsel-ai-answers",
    title: "퍼플렉시티 모델 카운슬, 여러 AI의 답을 합치기",
    excerpt:
      "퍼플렉시티의 새 기능 모델 카운슬. 여러 AI 모델의 답변을 비교·종합해 사용자에게 더 신뢰할 수 있는 정보를 제공하는 서비스 디자인.",
    date: "2026-02-11",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "working-well",
    topics: ["NEWS", "AI", "DESIGN"],
  },
  {
    id: "20",
    slug: "milano-winter-olympics-poster-food-sports",
    title: "미식과 스포츠가 결합된 밀라노 동계 올림픽 포스터",
    excerpt:
      "2026 밀라노-코르티나 동계 올림픽 공식 포스터. 이탈리아의 음식 문화와 겨울 스포츠를 하나의 비주얼로 풀어낸 그래픽 디자인의 과정.",
    date: "2026-02-10",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "insights",
    topics: ["NEWS", "DESIGN", "CULTURE"],
  },
];

// 정적 + rss-filter-bot 동적 포스트 병합
export const POSTS: Post[] = [...STATIC_POSTS, ...dynamicPosts];

/** 인기글 (featured) 최대 limit개, 부족하면 최신순으로 채움 */
export function getFeaturedPosts(limit = 2): Post[] {
  const featured = POSTS.filter((p) => p.featured);
  if (featured.length >= limit) {
    return [...featured]
      .sort((a, b) => (b.date > a.date ? 1 : -1))
      .slice(0, limit);
  }
  return getLatestPosts(limit);
}

export function getLatestPosts(limit = 12): Post[] {
  return [...POSTS]
    .sort((a, b) => {
      if (b.date !== a.date) return b.date > a.date ? 1 : -1;
      return parseInt(b.id, 10) - parseInt(a.id, 10); // 동일 날짜 시 id 큰 순(작성 최신순)
    })
    .slice(0, limit);
}

/** 날짜 최신순 정렬 (date desc, 동일 시 id desc) */
export function sortByLatest(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    if (b.date !== a.date) return b.date > a.date ? 1 : -1;
    return parseInt(b.id, 10) - parseInt(a.id, 10);
  });
}

export function getPostsByCategory(category: Category): Post[] {
  return sortByLatest(POSTS.filter((p) => p.category === category));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

function toTopicSlugForMatch(t: string) {
  return t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

/** 작성된 글이 많은 순으로 정렬된 토픽 목록 (마퀴 노출용) */
export function getTopicsSortedByPostCount(): string[] {
  const counts = new Map<string, number>();

  for (const t of TOPICS) {
    counts.set(t, 0);
  }

  for (const post of POSTS) {
    for (const pt of post.topics) {
      const s = toTopicSlugForMatch(pt);
      const match = TOPICS.find((t) => toTopicSlugForMatch(t) === s);
      if (match) counts.set(match, (counts.get(match) ?? 0) + 1);
    }
  }

  return [...TOPICS].sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0));
}

/** 날짜 최신순 정렬된 포스트 목록에서 이전/다음 글 반환 */
export function getPrevNextPosts(slug: string): { prev: Post | null; next: Post | null } {
  const sorted = [...POSTS].sort((a, b) => {
    if (b.date !== a.date) return b.date > a.date ? 1 : -1;
    return parseInt(b.id, 10) - parseInt(a.id, 10);
  });
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1]! : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1]! : null,
  };
}
