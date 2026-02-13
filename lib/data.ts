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
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "maker-stories", label: "Maker Stories" },
  { id: "working-well", label: "Working Well" },
  { id: "inside", label: "Inside" },
  { id: "insights", label: "Insights" },
];

export const TOPICS = [
  "News",
  "Design systems",
  "AI",
  "Design",
  "Research",
  "Report",
  "Figma Design",
  "Product updates",
  "Hiring",
  "Culture",
  "UI/UX",
  "Prototyping",
] as const;

// rss-filter-bot에서 동기화된 포스트 (content/dynamic-posts.json)
const dynamicPosts: Post[] = Array.isArray(dynamicPostsData) ? dynamicPostsData : [];

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
    topics: ["Insights", "Research", "Report", "Design", "AI"],
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
    topics: ["Insights", "Hiring", "Report", "Research"],
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
    topics: ["Inside", "Product updates", "Design", "News", "AI"],
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
    topics: ["Insights", "Design", "UI/UX", "Culture"],
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
    topics: ["Insights", "Design", "UI/UX", "Culture"],
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
    topics: ["Maker Stories", "Culture", "Design"],
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
    topics: ["Working Well", "AI", "Prototyping"],
  },
  {
    id: "8",
    slug: "upselling-crossselling-boost-payment",
    title: "결제를 늘리는 업셀링과 크로스셀링",
    excerpt:
      "신규 고객 한 명을 유치하는 데 들어가는 비용이 높기 때문에, 많은 프로덕트 기업들은 이미 확보한 고객에게서 더 큰 가치를 창출하는 데 주목합니다.",
    date: "2026-02-13",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", // 노랑(해바라기)
    category: "insights",
    topics: ["Design", "UI/UX", "Research"],
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
    topics: ["Design", "Research", "UI/UX"],
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
    topics: ["News", "Design", "UI/UX"],
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
    topics: ["Design", "News", "Culture"],
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
    topics: ["Design", "News", "Culture"],
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
    topics: ["News", "Design", "Product updates"],
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
    topics: ["News", "Design", "Culture"],
  },
  {
    id: "15",
    slug: "diesel-metal-earphones",
    title: "디젤이 만든 쇠맛 유선 이어폰",
    excerpt:
      "디젤이 선보인 금속质感 이어폰. 산업용 소재와 일상 제품의 결합이 보여주는 새로운 오브젝트 디자인의 가능성.",
    date: "2026-02-12",
    author: "디자인 나침반",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "maker-stories",
    topics: ["News", "Design", "Culture"],
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
    topics: ["News", "Design", "UI/UX"],
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
    topics: ["News", "Design", "Design systems"],
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
    topics: ["News", "Design", "UI/UX"],
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
    topics: ["News", "AI", "Design"],
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
    topics: ["News", "Design", "Culture"],
  },
];

// 정적 + rss-filter-bot 동적 포스트 병합
export const POSTS: Post[] = [...STATIC_POSTS, ...dynamicPosts];

export function getLatestPosts(limit = 12): Post[] {
  return [...POSTS]
    .sort((a, b) => {
      if (b.date !== a.date) return b.date > a.date ? 1 : -1;
      return parseInt(b.id, 10) - parseInt(a.id, 10); // 동일 날짜 시 id 큰 순(작성 최신순)
    })
    .slice(0, limit);
}

export function getPostsByCategory(category: Category): Post[] {
  return POSTS.filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
