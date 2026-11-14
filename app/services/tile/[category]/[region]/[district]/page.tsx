import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =========================================================
   기본 정보
========================================================= */

const SITE = "https://www.geumsontile.com";
const COMPANY = "금손종합보수";
const OWNER = "김영호";

const PHONE = "01080561990";
const PHONE_TEXT = "010-8056-1990";
const PHONE_LINK = `tel:${PHONE}`;

/* =========================================================
   서비스
========================================================= */

const SERVICES = {
  repair: {
    name: "타일수리",
    en: "TILE REPAIR",
    hero: "깨진 타일·들뜬 타일 수리",
    short:
      "깨짐, 균열, 들뜸, 탈락이 발생한 벽타일과 바닥타일 상태를 확인하고 필요한 수리 범위를 안내합니다.",
    accent: "수리",
    items: [
      {
        title: "깨진 타일 수리",
        desc:
          "충격이나 노후로 깨지고 금이 간 타일의 파손 범위와 주변 상태를 확인합니다.",
      },
      {
        title: "들뜬 타일 수리",
        desc:
          "빈 소리가 나거나 움직이는 타일의 접착 상태와 주변 들뜸 여부를 확인합니다.",
      },
      {
        title: "욕실 타일 수리",
        desc:
          "욕실 벽·바닥의 파손, 코너 마감, 주변 타일 상태를 함께 확인합니다.",
      },
      {
        title: "벽타일 수리",
        desc:
          "벽면 한 장 파손부터 여러 장의 균열·탈락까지 필요한 범위를 살펴봅니다.",
      },
      {
        title: "바닥타일 수리",
        desc:
          "거실·현관·상가 바닥의 깨짐과 높이 차이, 흔들림 여부를 확인합니다.",
      },
      {
        title: "부분 타일 수리",
        desc:
          "전체 철거 없이 손상된 부분만 작업할 수 있는 현장인지 먼저 검토합니다.",
      },
    ],
    photos: [1, 7, 8, 0],
    questions: [
      {
        q: "깨진 타일 한 장만 수리할 수 있나요?",
        a:
          "주변 타일 상태와 규격이 적합하면 한 장 또는 필요한 부분만 수리할 수 있습니다.",
      },
      {
        q: "들뜬 타일을 그대로 둬도 되나요?",
        a:
          "들뜸이 커지면 균열이나 탈락으로 이어질 수 있어 주변 상태까지 확인하는 것이 좋습니다.",
      },
      {
        q: "사진으로 먼저 상담할 수 있나요?",
        a:
          "네. 파손 부위 가까운 사진과 주변 공간이 보이는 사진을 함께 보내주시면 상담에 도움이 됩니다.",
      },
    ],
  },

  maintenance: {
    name: "타일보수",
    en: "TILE MAINTENANCE",
    hero: "타일 부분보수·마감보수",
    short:
      "타일 코너, 벽과 바닥 연결부, 깨짐과 마감 손상을 확인하고 필요한 범위의 보수를 상담합니다.",
    accent: "보수",
    items: [
      {
        title: "타일 부분보수",
        desc:
          "손상된 부분을 확인해 전체 철거 없이 필요한 범위만 보수 가능한지 검토합니다.",
      },
      {
        title: "욕실 마감보수",
        desc:
          "욕실 코너, 벽·바닥 연결부, 샤워부스 주변 마감 손상을 확인합니다.",
      },
      {
        title: "바닥타일 보수",
        desc:
          "거실과 상가 바닥의 깨짐과 들뜸 부위를 확인해 보수 범위를 정합니다.",
      },
      {
        title: "벽타일 보수",
        desc:
          "벽타일의 균열, 탈락, 깨짐과 주변 접착 상태를 함께 확인합니다.",
      },
      {
        title: "코너 타일 보수",
        desc:
          "모서리나 단차 부분의 파손과 줄눈·실리콘 마감 상태를 살펴봅니다.",
      },
      {
        title: "상가 타일 보수",
        desc:
          "통행량이 많은 상가 바닥과 벽면 타일의 파손 범위를 확인합니다.",
      },
    ],
    photos: [2, 3, 4, 8],
    questions: [
      {
        q: "전체 타일을 철거해야 하나요?",
        a:
          "손상 범위가 작고 주변 타일이 안정적이라면 부분 보수가 가능한 경우가 있습니다.",
      },
      {
        q: "보수 범위는 어떻게 정하나요?",
        a:
          "파손 면적, 들뜸 여부, 바탕 상태, 타일 규격과 주변 마감을 함께 확인해 결정합니다.",
      },
      {
        q: "같은 타일이 없어도 보수할 수 있나요?",
        a:
          "동일 제품이 없다면 규격과 색상이 비슷한 자재를 적용할 수 있는지 확인합니다.",
      },
    ],
  },

  replacement: {
    name: "타일교체",
    en: "TILE REPLACEMENT",
    hero: "벽타일·바닥타일 부분교체",
    short:
      "깨진 기존 타일을 철거하고 한 장 교체, 부분교체, 욕실 벽면 교체 등 필요한 범위를 상담합니다.",
    accent: "교체",
    items: [
      {
        title: "타일 한 장 교체",
        desc:
          "파손된 타일을 제거하고 규격과 두께를 확인해 새 타일로 교체합니다.",
      },
      {
        title: "욕실 벽타일 교체",
        desc:
          "욕실 벽면의 한 장 파손부터 넓은 구간까지 상태에 맞춰 교체 범위를 확인합니다.",
      },
      {
        title: "바닥타일 교체",
        desc:
          "거실·상가·욕실 바닥의 손상 타일을 제거하고 높이와 마감을 맞춥니다.",
      },
      {
        title: "벽면 부분교체",
        desc:
          "벽면 전체 철거보다 필요한 구간만 교체 가능한 상태인지 먼저 확인합니다.",
      },
      {
        title: "욕실 한 면 교체",
        desc:
          "욕실 벽 한 면의 손상이 넓은 경우 면 단위 교체 가능 여부를 검토합니다.",
      },
      {
        title: "상가 바닥 교체",
        desc:
          "상가 바닥의 파손된 타일을 정리하고 통행 환경을 고려해 교체 범위를 정합니다.",
      },
    ],
    photos: [0, 5, 6, 7],
    questions: [
      {
        q: "타일 한 장만 교체할 수 있나요?",
        a:
          "적합한 규격의 타일을 확보할 수 있고 주변 타일 상태가 안정적이면 가능합니다.",
      },
      {
        q: "기존 타일과 똑같은 제품으로 교체되나요?",
        a:
          "단종 여부와 제조 시기에 따라 색상이나 무늬 차이가 있을 수 있어 사전 확인이 필요합니다.",
      },
      {
        q: "부분교체와 전체교체는 어떻게 구분하나요?",
        a:
          "손상 범위와 주변 타일의 접착 상태, 바탕면 상태를 확인해 필요한 범위를 결정합니다.",
      },
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* =========================================================
   지역
========================================================= */

const REGIONS = {
  seoul: {
    name: "서울",
    districts: {
      gangnam: "강남구",
      gangdong: "강동구",
      gangbuk: "강북구",
      gangseo: "강서구",
      gwanak: "관악구",
      gwangjin: "광진구",
      guro: "구로구",
      geumcheon: "금천구",
      nowon: "노원구",
      dobong: "도봉구",
      dongdaemun: "동대문구",
      dongjak: "동작구",
      mapo: "마포구",
      seodaemun: "서대문구",
      seocho: "서초구",
      seongdong: "성동구",
      seongbuk: "성북구",
      songpa: "송파구",
      yangcheon: "양천구",
      yeongdeungpo: "영등포구",
      yongsan: "용산구",
      eunpyeong: "은평구",
      jongno: "종로구",
      jung: "중구",
      jungnang: "중랑구",
    },
  },

  gyeonggi: {
    name: "경기",
    districts: {
      gimpo: "김포",
      goyang: "고양",
      bucheon: "부천",
      paju: "파주",
      siheung: "시흥",
      gwangmyeong: "광명",
      ansan: "안산",
      anyang: "안양",
      gunpo: "군포",
    },
  },

  incheon: {
    name: "인천",
    districts: {
      jung: "중구",
      dong: "동구",
      michuhol: "미추홀구",
      yeonsu: "연수구",
      namdong: "남동구",
      bupyeong: "부평구",
      gyeyang: "계양구",
      seo: "서구",
      ganghwa: "강화군",
      ongjin: "옹진군",
    },
  },
} as const;

type RegionKey = keyof typeof REGIONS;

/* =========================================================
   실제 시공사진
========================================================= */

const PHOTOS = [
  {
    title: "욕실 벽타일 부분교체",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
  },
  {
    title: "거실 벽타일 복원",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
  },
  {
    title: "욕실 바닥·코너 보수",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
  },
  {
    title: "욕실 타일 마감보수",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
  },
  {
    title: "샤워부스 주변 타일 보수",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
  },
  {
    title: "벽타일 부분교체",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
  },
  {
    title: "거실 바닥타일 부분시공",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },
  {
    title: "상가 복도 바닥타일 보수",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
  },
];

/* =========================================================
   지역별 고유 콘텐츠 생성
========================================================= */

const AREA_TOPICS = [
  {
    title: "욕실 벽타일 상태",
    text:
      "욕실 벽의 균열, 탈락, 들뜸과 주변 마감 상태를 먼저 확인합니다.",
  },
  {
    title: "거실 바닥타일 상태",
    text:
      "깨짐과 들뜸, 주변 타일 높이 차이와 움직임 여부를 함께 확인합니다.",
  },
  {
    title: "상가 바닥타일 상태",
    text:
      "통행량이 많은 바닥은 파손 범위와 주변 타일의 추가 들뜸 여부를 확인합니다.",
  },
  {
    title: "벽면 부분작업 상태",
    text:
      "손상된 타일 주변까지 접착력이 유지되는지 확인해 부분 작업 가능 여부를 검토합니다.",
  },
];

const AREA_GUIDE = [
  "전체 철거보다 손상된 부분만 작업 가능한지 먼저 확인합니다.",
  "타일 규격과 두께, 줄눈 간격, 주변 마감 상태를 함께 확인합니다.",
  "파손 부위와 주변이 함께 보이는 사진이 있으면 상담에 도움이 됩니다.",
  "기존 여분 타일을 보유하고 있다면 함께 알려주시면 좋습니다.",
];

function hashText(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function getArea(region: string, district: string) {
  if (!(region in REGIONS)) return null;

  const regionKey = region as RegionKey;
  const regionData = REGIONS[regionKey];

  const districtName = (
    regionData.districts as Record<string, string>
  )[district];

  if (!districtName) return null;

  const fullName =
    regionKey === "seoul"
      ? `서울 ${districtName}`
      : regionKey === "incheon"
      ? `인천 ${districtName}`
      : districtName;

  return {
    regionKey,
    regionName: regionData.name,
    districtName,
    fullName,
  };
}

function getAreaContent(
  region: string,
  district: string
) {
  const hash = hashText(`${region}-${district}`);

  return {
    topic:
      AREA_TOPICS[
        hash % AREA_TOPICS.length
      ],

    guide:
      AREA_GUIDE[
        hash % AREA_GUIDE.length
      ],
  };
}

function getSmsLink(
  area: string,
  service: string
) {
  const message =
    `안녕하세요. 금손종합보수 상담 문의드립니다.\n\n` +
    `지역: ${area}\n` +
    `작업: ${service}\n` +
    `타일 상태 사진을 첨부하겠습니다.`;

  return `sms:${PHONE}?body=${encodeURIComponent(
    message
  )}`;
}

/* =========================================================
   타입
========================================================= */

type Params = {
  category: string;
  region: string;
  district: string;
};

type PageProps = {
  params: Promise<Params>;
};

/* =========================================================
   STATIC PARAMS
========================================================= */

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const result: Params[] = [];

  for (const category of Object.keys(SERVICES)) {
    for (const [region, data] of Object.entries(
      REGIONS
    )) {
      for (const district of Object.keys(
        data.districts
      )) {
        result.push({
          category,
          region,
          district,
        });
      }
    }
  }

  return result;
}

/* =========================================================
   META
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    category,
    region,
    district,
  } = await params;

  const area = getArea(
    region,
    district
  );

  if (
    !(category in SERVICES) ||
    !area
  ) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const service =
    SERVICES[
      category as ServiceKey
    ];

  const url =
    `${SITE}/services/tile/${category}/${region}/${district}`;

  const title =
    `${area.fullName} ${service.name} | ${service.hero} | 금손종합보수`;

  const description =
    `${area.fullName} ${service.name} 상담. ` +
    `${service.short} ` +
    `깨진 타일, 벽타일, 바닥타일 실제 작업 전후 사진과 상담 방법을 확인하세요.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      title,
      description,
      url,

      images: [
        {
          url:
            `${SITE}${PHOTOS[
              service.photos[0]
            ].after}`,
          alt:
            `${COMPANY} ${service.name} 실제 작업`,
        },
      ],
    },
  };
}

/* =========================================================
   페이지 전용 CSS
========================================================= */

const PAGE_CSS = `
html{
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

body{
  margin:0;
}

.gt-page{
  --navy:#10233f;
  --navy2:#173f70;
  --gold:#b99456;
  --gold2:#d9bd83;
  --cream:#f4ead7;
  --ivory:#fbf9f5;
  --soft:#f6f7f8;
  --line:#e6e8eb;
  --text:#17243a;
  --muted:#687386;

  background:#fff;
  color:var(--text);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Pretendard",
    "Noto Sans KR",
    "Apple SD Gothic Neo",
    sans-serif;

  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;

  word-break:keep-all;
  overflow-x:hidden;
  padding-bottom:80px;
}

.gt-page *,
.gt-page *::before,
.gt-page *::after{
  box-sizing:border-box;
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

.gt-page a{
  color:inherit !important;
  text-decoration:none !important;
}

.gt-page p,
.gt-page h1,
.gt-page h2,
.gt-page h3{
  margin-top:0;
}

.gt-wrap{
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;
}

/* =========================
   HEADER
========================= */

.gt-header{
  height:74px;
  display:flex;
  align-items:center;
  background:#fff;
  border-bottom:1px solid #eceef0;
}

.gt-header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
}

.gt-brand{
  display:flex;
  align-items:center;
  gap:12px;
}

.gt-brand-icon{
  width:44px;
  height:44px;
  border-radius:13px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:var(--navy2);
}

.gt-brand-icon::after{
  content:"";
  width:12px;
  height:12px;
  display:block;
  background:var(--gold2);
  transform:rotate(45deg);
}

.gt-brand-name{
  font-size:18px !important;
  line-height:1.1;
  font-weight:900;
  letter-spacing:-.04em;
  color:var(--navy);
}

.gt-brand-en{
  margin-top:5px;
  font-size:8px !important;
  line-height:1;
  font-weight:900;
  letter-spacing:.24em;
  color:var(--gold);
}

.gt-header-button{
  min-height:40px;
  padding:0 16px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:999px;
  background:var(--navy);
  color:#fff !important;
  font-size:12px !important;
  font-weight:800;
}

/* =========================
   HERO
========================= */

.gt-hero{
  padding:60px 0 72px;
  position:relative;
  overflow:hidden;

  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(185,148,86,.15),
      transparent 33%
    ),
    linear-gradient(
      180deg,
      #fbfaf7 0%,
      #f5f6f7 100%
    );
}

.gt-breadcrumb{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:6px;

  color:#808896;
  font-size:11px !important;
  line-height:1.5;
}

.gt-breadcrumb strong{
  color:var(--navy);
}

.gt-hero-content{
  margin-top:28px;
  display:grid;
  grid-template-columns:minmax(0,1fr) 300px;
  gap:60px;
  align-items:end;
}

.gt-eyebrow{
  color:var(--gold);
  font-size:10px !important;
  line-height:1;
  font-weight:900;
  letter-spacing:.16em;
}

.gt-hero h1{
  max-width:680px;
  margin-bottom:0;
  margin-top:12px;

  color:var(--navy);
  font-size:44px !important;
  line-height:1.15;
  font-weight:900;
  letter-spacing:-.055em;
}

.gt-hero-desc{
  max-width:650px;
  margin:19px 0 0 !important;
  color:#677180;
  font-size:15px !important;
  line-height:1.8;
}

.gt-hero-actions{
  margin-top:25px;
  display:flex;
  gap:9px;
}

.gt-button{
  min-height:49px;
  padding:0 20px;
  border-radius:12px;

  display:inline-flex;
  align-items:center;
  justify-content:center;

  font-size:13px !important;
  font-weight:900;
}

.gt-button-main{
  background:var(--navy2);
  color:#fff !important;
}

.gt-button-sub{
  background:var(--cream);
  color:#795a27 !important;
}

.gt-hero-card{
  padding:23px;
  border:1px solid rgba(255,255,255,.9);
  border-radius:19px;

  background:rgba(255,255,255,.78);
  box-shadow:0 15px 45px rgba(16,35,63,.08);

  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
}

.gt-hero-card small{
  display:block;
  color:#989da6;
  font-size:9px !important;
  font-weight:900;
  letter-spacing:.13em;
}

.gt-hero-card strong{
  display:block;
  margin-top:8px;
  color:var(--navy);
  font-size:21px !important;
  font-weight:900;
}

.gt-hero-card-line{
  height:1px;
  margin:17px 0;
  background:#e5e7e9;
}

.gt-hero-card p{
  margin:0 !important;
  color:#707986;
  font-size:12px !important;
  line-height:1.7;
}

/* =========================
   SUMMARY
========================= */

.gt-summary{
  position:relative;
  z-index:5;
  margin-top:-25px;
}

.gt-summary-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);

  overflow:hidden;
  border:1px solid var(--line);
  border-radius:17px;

  background:#fff;
  box-shadow:0 12px 35px rgba(16,35,63,.07);
}

.gt-summary-item{
  padding:20px 22px;
}

.gt-summary-item + .gt-summary-item{
  border-left:1px solid var(--line);
}

.gt-summary-label{
  display:block;
  color:var(--gold);
  font-size:9px !important;
  font-weight:900;
  letter-spacing:.12em;
}

.gt-summary-item strong{
  display:block;
  margin-top:6px;
  color:var(--navy);
  font-size:15px !important;
  line-height:1.4;
}

.gt-summary-item p{
  margin:5px 0 0 !important;
  color:#7a8490;
  font-size:11px !important;
  line-height:1.55;
}

/* =========================
   SECTION
========================= */

.gt-section{
  padding:70px 0;
}

.gt-section-soft{
  background:var(--soft);
}

.gt-section-dark{
  background:var(--navy);
  color:#fff;
}

.gt-section-head{
  margin-bottom:27px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:50px;
}

.gt-section-copy{
  max-width:650px;
}

.gt-section-head h2{
  margin:9px 0 0 !important;

  color:var(--navy);
  font-size:30px !important;
  line-height:1.3;
  font-weight:900;
  letter-spacing:-.045em;
}

.gt-section-dark .gt-section-head h2{
  color:#fff;
}

.gt-section-head > p{
  max-width:430px;
  margin:0 !important;
  color:#727d8b;
  font-size:13px !important;
  line-height:1.75;
}

/* =========================
   SERVICES
========================= */

.gt-service-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
}

.gt-service-card{
  min-height:183px;
  padding:21px;
  border:1px solid var(--line);
  border-radius:17px;
  background:#fff;
}

.gt-number{
  width:34px;
  height:34px;
  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:9px;
  background:#f4ecdd;

  color:#8c692f;
  font-size:10px !important;
  font-weight:900;
}

.gt-service-card h3{
  margin:16px 0 0 !important;
  color:var(--navy);
  font-size:17px !important;
  line-height:1.4;
  font-weight:900;
  letter-spacing:-.03em;
}

.gt-service-card p{
  margin:8px 0 0 !important;
  color:#6f7987;
  font-size:12.5px !important;
  line-height:1.7;
}

/* =========================
   AREA FEATURE
========================= */

.gt-local-box{
  display:grid;
  grid-template-columns:.8fr 1.2fr;
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:20px;
  background:#fff;
}

.gt-local-title{
  padding:34px;
  background:var(--cream);
}

.gt-local-title span{
  color:#8d6a2e;
  font-size:9px !important;
  font-weight:900;
  letter-spacing:.14em;
}

.gt-local-title h2{
  margin:10px 0 0 !important;
  color:var(--navy);
  font-size:27px !important;
  line-height:1.35;
  letter-spacing:-.04em;
}

.gt-local-content{
  padding:34px;
  display:grid;
  gap:18px;
}

.gt-local-row{
  display:grid;
  grid-template-columns:42px 1fr;
  gap:13px;
}

.gt-local-row strong{
  color:var(--gold);
  font-size:11px !important;
}

.gt-local-row h3{
  margin:0 !important;
  color:var(--navy);
  font-size:16px !important;
  font-weight:900;
}

.gt-local-row p{
  margin:6px 0 0 !important;
  color:#727c89;
  font-size:12px !important;
  line-height:1.65;
}

/* =========================
   BEFORE AFTER
========================= */

.gt-photo-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:17px;
}

.gt-photo-card{
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:18px;
  background:#fff;
}

.gt-photo-images{
  display:grid;
  grid-template-columns:1fr 1fr;
}

.gt-photo-box{
  position:relative;
  aspect-ratio:1.15/1;
  overflow:hidden;
  background:#eee;
}

.gt-photo-box img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
}

.gt-photo-tag{
  position:absolute;
  left:8px;
  bottom:8px;

  padding:5px 8px;
  border-radius:999px;

  background:rgba(16,35,63,.86);
  color:#fff;

  font-size:8px !important;
  font-weight:900;
  letter-spacing:.04em;
}

.gt-photo-tag-after{
  background:rgba(177,137,65,.94);
}

.gt-photo-content{
  padding:18px 19px 19px;
}

.gt-photo-content span{
  color:#9a793e;
  font-size:8px !important;
  font-weight:900;
  letter-spacing:.12em;
}

.gt-photo-content h3{
  margin:6px 0 0 !important;
  color:var(--navy);
  font-size:16px !important;
  line-height:1.4;
  font-weight:900;
}

/* =========================
   PROCESS
========================= */

.gt-process{
  display:grid;
  grid-template-columns:repeat(4,1fr);

  overflow:hidden;
  border:1px solid rgba(255,255,255,.13);
  border-radius:18px;

  background:rgba(255,255,255,.08);
}

.gt-process-item{
  padding:25px 20px;
}

.gt-process-item + .gt-process-item{
  border-left:1px solid rgba(255,255,255,.12);
}

.gt-process-item span{
  color:#dabd80;
  font-size:9px !important;
  font-weight:900;
}

.gt-process-item h3{
  margin:12px 0 0 !important;
  color:#fff;
  font-size:15px !important;
  font-weight:900;
}

.gt-process-item p{
  margin:7px 0 0 !important;
  color:#c3ccd8;
  font-size:11px !important;
  line-height:1.65;
}

/* =========================
   CONSULT
========================= */

.gt-consult{
  padding:60px 0;
  background:#f2e8d5;
}

.gt-consult-inner{
  display:grid;
  grid-template-columns:1fr 290px;
  gap:40px;
  align-items:center;
}

.gt-consult h2{
  margin:9px 0 0 !important;
  color:var(--navy);
  font-size:29px !important;
  line-height:1.35;
  font-weight:900;
  letter-spacing:-.045em;
}

.gt-consult p{
  max-width:600px;
  margin:12px 0 0 !important;
  color:#776f63;
  font-size:13px !important;
  line-height:1.75;
}

.gt-consult-card{
  padding:21px;
  border-radius:17px;
  background:#fff;
  box-shadow:0 10px 30px rgba(82,59,24,.09);
}

.gt-consult-card strong{
  display:block;
  color:var(--navy);
  font-size:20px !important;
  font-weight:900;
}

.gt-consult-card small{
  display:block;
  margin-top:5px;
  color:#90949a;
  font-size:9px !important;
}

.gt-consult-card a{
  margin-top:16px;
  min-height:46px;
  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:10px;
  background:var(--navy2);
  color:#fff !important;

  font-size:12px !important;
  font-weight:900;
}

/* =========================
   FAQ
========================= */

.gt-faq-list{
  display:grid;
  gap:9px;
}

.gt-faq{
  padding:18px 19px;
  border:1px solid var(--line);
  border-radius:14px;
  background:#fff;
}

.gt-faq h3{
  margin:0 !important;
  color:var(--navy);
  font-size:14px !important;
  line-height:1.55;
  font-weight:900;
}

.gt-faq p{
  margin:7px 0 0 !important;
  color:#707a88;
  font-size:12px !important;
  line-height:1.7;
}

/* =========================
   OTHER SERVICE
========================= */

.gt-other-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
}

.gt-other-card{
  padding:22px;
  border:1px solid var(--line);
  border-radius:16px;
  background:#fff;
}

.gt-other-card h3{
  margin:0 !important;
  color:var(--navy);
  font-size:17px !important;
  font-weight:900;
}

.gt-other-card p{
  margin:8px 0 0 !important;
  color:#727c89;
  font-size:12px !important;
  line-height:1.65;
}

.gt-other-card a{
  margin-top:14px;
  display:inline-flex;
  color:#87672f !important;
  font-size:11px !important;
  font-weight:900;
}

/* =========================
   NEARBY LINKS
========================= */

.gt-area-links{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:8px;
}

.gt-area-link{
  min-height:43px;
  padding:8px;

  display:flex;
  align-items:center;
  justify-content:center;

  border:1px solid var(--line);
  border-radius:10px;

  background:#fff;
  color:var(--navy) !important;

  font-size:11px !important;
  font-weight:800;
}

/* =========================
   FOOTER
========================= */

.gt-footer{
  padding:38px 0 115px;
  background:#0b1b32;
  color:#fff;
}

.gt-footer-inner{
  display:flex;
  justify-content:space-between;
  gap:20px;
}

.gt-footer-name{
  font-size:16px !important;
  font-weight:900;
}

.gt-footer p{
  margin:7px 0 0 !important;
  color:#aeb8c7;
  font-size:11px !important;
  line-height:1.7;
}

.gt-footer a{
  color:#fff !important;
  font-size:13px !important;
  font-weight:900;
}

/* =========================
   MOBILE CTA
========================= */

.gt-mobile{
  display:none;
}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:767px){

  .gt-page{
    padding-bottom:78px;
  }

  .gt-wrap{
    width:calc(100% - 32px);
  }

  /* HEADER */

  .gt-header{
    height:62px;
  }

  .gt-brand{
    gap:9px;
  }

  .gt-brand-icon{
    width:37px;
    height:37px;
    border-radius:10px;
  }

  .gt-brand-icon::after{
    width:9px;
    height:9px;
  }

  .gt-brand-name{
    font-size:15px !important;
  }

  .gt-brand-en{
    margin-top:4px;
    font-size:6px !important;
  }

  .gt-header-button{
    min-height:34px;
    padding:0 12px;
    font-size:10px !important;
  }

  /* HERO */

  .gt-hero{
    padding:42px 0 52px;
  }

  .gt-breadcrumb{
    gap:4px;
    font-size:9px !important;
  }

  .gt-hero-content{
    display:block;
    margin-top:20px;
  }

  .gt-eyebrow{
    font-size:8px !important;
  }

  .gt-hero h1{
    max-width:330px;
    margin-top:9px;
    font-size:31px !important;
    line-height:1.13;
  }

  .gt-hero-desc{
    margin-top:15px !important;
    font-size:12.5px !important;
    line-height:1.72;
  }

  .gt-hero-actions{
    margin-top:20px;
  }

  .gt-button{
    flex:1;
    min-width:0;
    min-height:45px;
    padding:0 8px;
    font-size:11.5px !important;
  }

  .gt-hero-card{
    display:none;
  }

  /* SUMMARY */

  .gt-summary{
    margin-top:-17px;
  }

  .gt-summary-grid{
    grid-template-columns:repeat(3,1fr);
    border-radius:14px;
  }

  .gt-summary-item{
    padding:13px 10px;
  }

  .gt-summary-item + .gt-summary-item{
    border-left:1px solid var(--line);
  }

  .gt-summary-label{
    font-size:7px !important;
  }

  .gt-summary-item strong{
    margin-top:4px;
    font-size:11px !important;
  }

  .gt-summary-item p{
    display:none;
  }

  /* SECTION */

  .gt-section{
    padding:48px 0;
  }

  .gt-section-head{
    display:block;
    margin-bottom:19px;
  }

  .gt-section-head h2{
    margin-top:7px !important;
    font-size:22px !important;
    line-height:1.3;
  }

  .gt-section-head > p{
    margin-top:9px !important;
    font-size:11.5px !important;
    line-height:1.65;
  }

  /* SERVICE */

  .gt-service-grid{
    grid-template-columns:1fr 1fr;
    gap:8px;
  }

  .gt-service-card{
    min-height:145px;
    padding:15px;
    border-radius:14px;
  }

  .gt-number{
    width:29px;
    height:29px;
    border-radius:8px;
    font-size:8px !important;
  }

  .gt-service-card h3{
    margin-top:11px !important;
    font-size:13.5px !important;
  }

  .gt-service-card p{
    margin-top:6px !important;
    font-size:10.5px !important;
    line-height:1.58;
  }

  /* LOCAL */

  .gt-local-box{
    display:block;
    border-radius:16px;
  }

  .gt-local-title{
    padding:22px 19px;
  }

  .gt-local-title span{
    font-size:8px !important;
  }

  .gt-local-title h2{
    margin-top:7px !important;
    font-size:21px !important;
  }

  .gt-local-content{
    padding:21px 19px;
    gap:17px;
  }

  .gt-local-row{
    grid-template-columns:31px 1fr;
    gap:9px;
  }

  .gt-local-row strong{
    font-size:9px !important;
  }

  .gt-local-row h3{
    font-size:13.5px !important;
  }

  .gt-local-row p{
    font-size:10.5px !important;
  }

  /* PHOTO */

  .gt-photo-grid{
    grid-template-columns:1fr;
    gap:12px;
  }

  .gt-photo-card{
    border-radius:15px;
  }

  .gt-photo-content{
    padding:15px;
  }

  .gt-photo-content h3{
    font-size:14px !important;
  }

  /* PROCESS */

  .gt-process{
    grid-template-columns:1fr 1fr;
    border-radius:15px;
  }

  .gt-process-item{
    padding:18px 15px;
  }

  .gt-process-item:nth-child(3){
    border-left:0;
    border-top:1px solid rgba(255,255,255,.12);
  }

  .gt-process-item:nth-child(4){
    border-top:1px solid rgba(255,255,255,.12);
  }

  .gt-process-item h3{
    font-size:13px !important;
  }

  .gt-process-item p{
    font-size:9.5px !important;
  }

  /* CONSULT */

  .gt-consult{
    padding:45px 0;
  }

  .gt-consult-inner{
    display:block;
  }

  .gt-consult h2{
    font-size:22px !important;
  }

  .gt-consult p{
    font-size:11px !important;
  }

  .gt-consult-card{
    margin-top:18px;
    padding:17px;
  }

  .gt-consult-card strong{
    font-size:18px !important;
  }

  /* FAQ */

  .gt-faq{
    padding:15px;
  }

  .gt-faq h3{
    font-size:12.5px !important;
  }

  .gt-faq p{
    font-size:10.5px !important;
  }

  /* OTHER */

  .gt-other-grid{
    grid-template-columns:1fr;
    gap:9px;
  }

  .gt-other-card{
    padding:17px;
  }

  .gt-other-card h3{
    font-size:14px !important;
  }

  .gt-other-card p{
    font-size:10.5px !important;
  }

  /* AREA */

  .gt-area-links{
    grid-template-columns:repeat(2,1fr);
  }

  .gt-area-link{
    min-height:40px;
    font-size:10px !important;
  }

  /* FOOTER */

  .gt-footer{
    padding:30px 0 105px;
  }

  .gt-footer-inner{
    display:block;
  }

  .gt-footer-right{
    margin-top:15px;
  }

  /* MOBILE CTA */

  .gt-mobile{
    position:fixed;
    z-index:99999;

    left:12px;
    right:12px;

    bottom:
      calc(
        10px + env(safe-area-inset-bottom)
      );

    display:grid;
    grid-template-columns:1fr 1fr;
    gap:7px;

    padding:7px;

    border:
      1px solid rgba(16,35,63,.09);

    border-radius:16px;

    background:
      rgba(255,255,255,.95);

    box-shadow:
      0 8px 28px
      rgba(16,35,63,.14);

    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
  }

  .gt-mobile a{
    height:46px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:10px;

    background:var(--navy2);
    color:#fff !important;

    font-size:11.5px !important;
    font-weight:900;
  }

  .gt-mobile a:last-child{
    background:#efe3cb;
    color:#715327 !important;
  }
}
`;

/* =========================================================
   PAGE
========================================================= */

export default async function TileAreaPage({
  params,
}: PageProps) {
  const {
    category,
    region,
    district,
  } = await params;

  const area = getArea(
    region,
    district
  );

  if (
    !(category in SERVICES) ||
    !area
  ) {
    notFound();
  }

  const serviceKey =
    category as ServiceKey;

  const service =
    SERVICES[serviceKey];

  const areaContent =
    getAreaContent(
      region,
      district
    );

  const sms =
    getSmsLink(
      area.fullName,
      service.name
    );

  const url =
    `${SITE}/services/tile/${category}/${region}/${district}`;

  const photoOffset =
    hashText(
      `${category}-${region}-${district}`
    ) % service.photos.length;

  const photoIndexes = [
    ...service.photos.slice(
      photoOffset
    ),
    ...service.photos.slice(
      0,
      photoOffset
    ),
  ];

  const photos =
    photoIndexes.map(
      (index) => PHOTOS[index]
    );

  const regionDistricts =
    Object.entries(
      REGIONS[
        area.regionKey
      ].districts
    ) as [string, string][];

  const currentIndex =
    regionDistricts.findIndex(
      ([slug]) =>
        slug === district
    );

  const nearby =
    [
      ...regionDistricts.slice(
        currentIndex + 1
      ),
      ...regionDistricts.slice(
        0,
        currentIndex
      ),
    ].slice(0, 8);

  const otherServices =
    (
      Object.keys(
        SERVICES
      ) as ServiceKey[]
    ).filter(
      (key) =>
        key !== serviceKey
    );

  const schema = [
    {
      "@context":
        "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,

      name:
        `${area.fullName} ${service.name}`,

      description:
        service.short,

      serviceType:
        service.name,

      url,

      areaServed: {
        "@type":
          "AdministrativeArea",

        name:
          area.fullName,
      },

      provider: {
        "@type":
          "HomeAndConstructionBusiness",

        "@id":
          `${SITE}/#business`,

        name:
          COMPANY,

        url:
          SITE,

        telephone:
          PHONE_TEXT,
      },
    },

    {
      "@context":
        "https://schema.org",

      "@type":
        "BreadcrumbList",

      itemListElement: [
        {
          "@type":
            "ListItem",

          position: 1,

          name:
            "홈",

          item:
            SITE,
        },
        {
          "@type":
            "ListItem",

          position: 2,

          name:
            service.name,

          item:
            `${SITE}/services/tile/${category}`,
        },
        {
          "@type":
            "ListItem",

          position: 3,

          name:
            area.fullName,

          item:
            url,
        },
      ],
    },

    {
      "@context":
        "https://schema.org",

      "@type":
        "FAQPage",

      mainEntity:
        service.questions.map(
          (item) => ({
            "@type":
              "Question",

            name:
              item.q,

            acceptedAnswer: {
              "@type":
                "Answer",

              text:
                item.a,
            },
          })
        ),
    },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            PAGE_CSS,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              schema
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <main className="gt-page">
        {/* HEADER */}

        <header className="gt-header">
          <div className="gt-wrap gt-header-inner">
            <Link
              href="/"
              className="gt-brand"
            >
              <div className="gt-brand-icon" />

              <div>
                <div className="gt-brand-name">
                  {COMPANY}
                </div>

                <div className="gt-brand-en">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <a
              href={PHONE_LINK}
              className="gt-header-button"
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* HERO */}

        <section className="gt-hero">
          <div className="gt-wrap">
            <nav
              className="gt-breadcrumb"
              aria-label="현재 위치"
            >
              <Link href="/">
                홈
              </Link>

              <span>›</span>

              <Link href="/services/tile">
                타일 전문
              </Link>

              <span>›</span>

              <Link
                href={`/services/tile/${category}`}
              >
                {service.name}
              </Link>

              <span>›</span>

              <strong>
                {area.fullName}
              </strong>
            </nav>

            <div className="gt-hero-content">
              <div>
                <div className="gt-eyebrow">
                  {service.en}
                </div>

                <h1>
                  {area.fullName}
                  <br />
                  {service.name}
                </h1>

                <p className="gt-hero-desc">
                  {service.short}
                </p>

                <div className="gt-hero-actions">
                  <a
                    href={PHONE_LINK}
                    className="gt-button gt-button-main"
                  >
                    전화 상담
                  </a>

                  <a
                    href={sms}
                    className="gt-button gt-button-sub"
                  >
                    사진 상담
                  </a>
                </div>
              </div>

              <aside className="gt-hero-card">
                <small>
                  PHOTO CONSULT
                </small>

                <strong>
                  {PHONE_TEXT}
                </strong>

                <div className="gt-hero-card-line" />

                <p>
                  파손 부위와 주변까지
                  함께 보이는 사진을
                  보내주시면 상담에
                  도움이 됩니다.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* SUMMARY */}

        <section className="gt-summary">
          <div className="gt-wrap">
            <div className="gt-summary-grid">
              <div className="gt-summary-item">
                <span className="gt-summary-label">
                  AREA
                </span>

                <strong>
                  {area.fullName}
                </strong>

                <p>
                  지역별 타일 상담
                </p>
              </div>

              <div className="gt-summary-item">
                <span className="gt-summary-label">
                  SERVICE
                </span>

                <strong>
                  {service.name}
                </strong>

                <p>
                  필요한 범위 위주 작업
                </p>
              </div>

              <div className="gt-summary-item">
                <span className="gt-summary-label">
                  CONTACT
                </span>

                <strong>
                  사진 먼저 상담
                </strong>

                <p>
                  파손 사진 문자 접수
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE */}

        <section className="gt-section">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  TILE SERVICE
                </div>

                <h2>
                  {area.fullName}
                  <br />
                  {service.hero}
                </h2>
              </div>

              <p>
                손상된 부분과 주변 상태를
                확인하고 전체 철거보다
                필요한 범위 위주로
                작업 가능한지 확인합니다.
              </p>
            </div>

            <div className="gt-service-grid">
              {service.items.map(
                (
                  item,
                  index
                ) => (
                  <article
                    key={
                      item.title
                    }
                    className="gt-service-card"
                  >
                    <div className="gt-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.desc}
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* LOCAL GUIDE */}

        <section className="gt-section gt-section-soft">
          <div className="gt-wrap">
            <div className="gt-local-box">
              <div className="gt-local-title">
                <span>
                  LOCAL GUIDE
                </span>

                <h2>
                  {area.fullName}
                  <br />
                  작업 전 확인사항
                </h2>
              </div>

              <div className="gt-local-content">
                <div className="gt-local-row">
                  <strong>
                    01
                  </strong>

                  <div>
                    <h3>
                      {
                        areaContent
                          .topic
                          .title
                      }
                    </h3>

                    <p>
                      {
                        areaContent
                          .topic
                          .text
                      }
                    </p>
                  </div>
                </div>

                <div className="gt-local-row">
                  <strong>
                    02
                  </strong>

                  <div>
                    <h3>
                      부분 작업 가능 여부
                    </h3>

                    <p>
                      {
                        areaContent
                          .guide
                      }
                    </p>
                  </div>
                </div>

                <div className="gt-local-row">
                  <strong>
                    03
                  </strong>

                  <div>
                    <h3>
                      사진으로 먼저 확인
                    </h3>

                    <p>
                      손상 부위 가까운
                      사진과 주변 공간이
                      함께 보이는 사진을
                      보내주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEFORE AFTER */}

        <section className="gt-section">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  BEFORE & AFTER
                </div>

                <h2>
                  실제 타일
                  시공 전후
                </h2>
              </div>

              <p>
                금손종합보수의
                실제 작업 사진을 통해
                시공 전후 상태를
                확인할 수 있습니다.
              </p>
            </div>

            <div className="gt-photo-grid">
              {photos.map(
                (
                  photo,
                  index
                ) => (
                  <article
                    key={
                      `${photo.title}-${index}`
                    }
                    className="gt-photo-card"
                  >
                    <div className="gt-photo-images">
                      <div className="gt-photo-box">
                        <img
                          src={
                            photo.before
                          }
                          alt={`${photo.title} 작업 전`}
                          loading="lazy"
                        />

                        <span className="gt-photo-tag">
                          BEFORE
                        </span>
                      </div>

                      <div className="gt-photo-box">
                        <img
                          src={
                            photo.after
                          }
                          alt={`${photo.title} 작업 후`}
                          loading="lazy"
                        />

                        <span className="gt-photo-tag gt-photo-tag-after">
                          AFTER
                        </span>
                      </div>
                    </div>

                    <div className="gt-photo-content">
                      <span>
                        ACTUAL WORK
                      </span>

                      <h3>
                        {photo.title}
                      </h3>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="gt-section gt-section-dark">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  PROCESS
                </div>

                <h2>
                  상담부터 마감까지
                  <br />
                  필요한 과정만
                  깔끔하게
                </h2>
              </div>
            </div>

            <div className="gt-process">
              <article className="gt-process-item">
                <span>
                  STEP 01
                </span>

                <h3>
                  사진 접수
                </h3>

                <p>
                  파손 부위와
                  주변 사진을
                  확인합니다.
                </p>
              </article>

              <article className="gt-process-item">
                <span>
                  STEP 02
                </span>

                <h3>
                  상태 확인
                </h3>

                <p>
                  타일 규격과
                  작업 범위를
                  확인합니다.
                </p>
              </article>

              <article className="gt-process-item">
                <span>
                  STEP 03
                </span>

                <h3>
                  타일 작업
                </h3>

                <p>
                  필요한 구간을
                  철거하고
                  시공합니다.
                </p>
              </article>

              <article className="gt-process-item">
                <span>
                  STEP 04
                </span>

                <h3>
                  마감 확인
                </h3>

                <p>
                  줄눈과 주변
                  마감을 확인하고
                  마무리합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONSULT */}

        <section className="gt-consult">
          <div className="gt-wrap gt-consult-inner">
            <div>
              <div className="gt-eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                사진으로 먼저
                <br />
                상담해보세요
              </h2>

              <p>
                지역, 작업 내용,
                파손 부위의 가까운 사진,
                주변이 함께 보이는 사진을
                보내주시면 상담에 도움이 됩니다.
              </p>
            </div>

            <div className="gt-consult-card">
              <strong>
                {PHONE_TEXT}
              </strong>

              <small>
                금손종합보수
                사진 문자 상담
              </small>

              <a href={sms}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="gt-section">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  FAQ
                </div>

                <h2>
                  {service.name}
                  <br />
                  자주 묻는 질문
                </h2>
              </div>
            </div>

            <div className="gt-faq-list">
              {service.questions.map(
                (item) => (
                  <article
                    key={item.q}
                    className="gt-faq"
                  >
                    <h3>
                      {item.q}
                    </h3>

                    <p>
                      {item.a}
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}

        <section className="gt-section gt-section-soft">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  OTHER SERVICES
                </div>

                <h2>
                  {area.fullName}
                  <br />
                  다른 타일 서비스
                </h2>
              </div>
            </div>

            <div className="gt-other-grid">
              {otherServices.map(
                (key) => (
                  <article
                    key={key}
                    className="gt-other-card"
                  >
                    <h3>
                      {
                        SERVICES[
                          key
                        ].name
                      }
                    </h3>

                    <p>
                      {
                        SERVICES[
                          key
                        ].short
                      }
                    </p>

                    <Link
                      href={`/services/tile/${key}/${region}/${district}`}
                    >
                      {
                        area.fullName
                      }{" "}
                      {
                        SERVICES[
                          key
                        ].name
                      } 보기 →
                    </Link>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* NEARBY */}

        <section className="gt-section">
          <div className="gt-wrap">
            <div className="gt-section-head">
              <div className="gt-section-copy">
                <div className="gt-eyebrow">
                  NEARBY AREA
                </div>

                <h2>
                  다른 지역
                  {service.name}
                </h2>
              </div>
            </div>

            <div className="gt-area-links">
              {nearby.map(
                ([
                  nearbySlug,
                  nearbyName,
                ]) => (
                  <Link
                    key={
                      nearbySlug
                    }
                    href={`/services/tile/${category}/${region}/${nearbySlug}`}
                    className="gt-area-link"
                  >
                    {
                      area.regionKey ===
                      "gyeonggi"
                        ? nearbyName
                        : `${
                            area.regionName
                          } ${nearbyName}`
                    }
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="gt-footer">
          <div className="gt-wrap gt-footer-inner">
            <div>
              <div className="gt-footer-name">
                {COMPANY}
              </div>

              <p>
                대표자 {OWNER}
                <br />
                {area.fullName}{" "}
                {service.name}
              </p>
            </div>

            <div className="gt-footer-right">
              <a
                href={PHONE_LINK}
              >
                {PHONE_TEXT}
              </a>
            </div>
          </div>
        </footer>

        {/* MOBILE */}

        <div className="gt-mobile">
          <a href={PHONE_LINK}>
            전화 상담
          </a>

          <a href={sms}>
            사진 상담
          </a>
        </div>
      </main>
    </>
  );
}
