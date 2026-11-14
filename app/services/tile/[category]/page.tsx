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

const SMS_MESSAGE = `안녕하세요. 금손종합보수 타일 시공 문의드립니다.

지역:
작업내용:
타일 상태 사진을 첨부하겠습니다.`;

const SMS_LINK =
  `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

/* =========================================================
   서비스
========================================================= */

const SERVICES = {
  repair: {
    name: "타일수리",
    en: "TILE REPAIR",

    title:
      "깨진 타일·들뜬 타일 수리",

    hero:
      "깨짐, 균열, 들뜸, 탈락 등 손상된 벽타일과 바닥타일을 현장 상태에 맞춰 수리합니다.",

    intro:
      "깨진 타일 한 장부터 욕실 벽타일, 거실 바닥타일, 상가 타일까지 필요한 범위를 먼저 확인합니다.",

    image:
      "/IMG_1190.jpeg",

    services: [
      {
        title: "깨진 타일 수리",
        text:
          "금이 가거나 파손된 타일의 손상 범위와 주변 상태를 확인합니다.",
      },
      {
        title: "들뜬 타일 수리",
        text:
          "빈 소리나 움직임이 있는 타일의 접착 상태를 확인합니다.",
      },
      {
        title: "욕실 타일 수리",
        text:
          "욕실 벽과 바닥의 파손, 탈락, 마감 손상을 확인합니다.",
      },
    ],
  },

  maintenance: {
    name: "타일보수",
    en: "TILE MAINTENANCE",

    title:
      "부분보수·마감보수",

    hero:
      "타일 코너, 벽과 바닥 연결부, 깨짐과 마감 손상을 필요한 범위 위주로 보수합니다.",

    intro:
      "전체 철거가 필요하지 않은 현장은 손상된 구간을 확인해 부분보수 가능 여부부터 안내합니다.",

    image:
      "/IMG_1182.jpeg",

    services: [
      {
        title: "타일 부분보수",
        text:
          "손상 범위를 확인해 필요한 부분 위주로 보수합니다.",
      },
      {
        title: "욕실 마감보수",
        text:
          "욕실 코너와 샤워부스 주변의 깨짐과 마감을 확인합니다.",
      },
      {
        title: "바닥타일 보수",
        text:
          "거실·상가 바닥의 깨짐과 들뜸 상태를 확인합니다.",
      },
    ],
  },

  replacement: {
    name: "타일교체",
    en: "TILE REPLACEMENT",

    title:
      "벽타일·바닥타일 부분교체",

    hero:
      "깨진 기존 타일을 철거하고 한 장 교체부터 여러 장 부분교체까지 필요한 범위를 시공합니다.",

    intro:
      "타일 규격과 주변 상태를 확인한 뒤 전체 철거보다 부분교체가 가능한 현장인지 먼저 확인합니다.",

    image:
      "/IMG_1206.jpeg",

    services: [
      {
        title: "타일 한 장 교체",
        text:
          "파손된 타일만 제거하고 새 타일로 교체합니다.",
      },
      {
        title: "욕실 벽타일 교체",
        text:
          "욕실 벽 한 장부터 한 면까지 손상 범위에 맞춰 확인합니다.",
      },
      {
        title: "바닥타일 교체",
        text:
          "거실·욕실·상가 바닥의 손상 타일을 부분 교체합니다.",
      },
    ],
  },
} as const;

type ServiceKey =
  keyof typeof SERVICES;

/* =========================================================
   지역
========================================================= */

const REGIONS = {
  seoul: {
    en: "SEOUL",
    name: "서울",
    description:
      "서울 25개 구",

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
    en: "GYEONGGI",
    name: "경기",
    description:
      "경기도 주요 9개 지역",

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
    en: "INCHEON",
    name: "인천",
    description:
      "인천 10개 군·구",

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

/* =========================================================
   타입
========================================================= */

type Props = {
  params: Promise<{
    category: string;
  }>;
};

/* =========================================================
   STATIC
========================================================= */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(
    SERVICES
  ).map((category) => ({
    category,
  }));
}

/* =========================================================
   META
========================================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category } =
    await params;

  if (
    !(category in SERVICES)
  ) {
    return {
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
    `${SITE}/services/tile/${category}`;

  const title =
    `${service.name} 전문 | 서울·경기·인천 ${service.title} | 금손종합보수`;

  const description =
    `${service.name} 전문 금손종합보수. ${service.hero} 서울·경기·인천 지역별 ${service.name} 페이지와 실제 시공사례를 확인하세요.`;

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
            `${SITE}${service.image}`,

          alt:
            `${COMPANY} ${service.name}`,
        },
      ],
    },
  };
}

/* =========================================================
   CSS
========================================================= */

const CSS = `
html{
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

.gtcat{
  --navy:#10233f;
  --navy2:#1b4273;
  --gold:#b48e4e;
  --gold2:#dabc7a;
  --cream:#f3ead9;
  --soft:#f6f7f8;
  --line:#e5e7ea;
  --text:#17243a;
  --muted:#707a88;

  width:100%;
  overflow:hidden;

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
  padding-bottom:78px;
}

.gtcat *,
.gtcat *::before,
.gtcat *::after{
  box-sizing:border-box;
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

.gtcat a{
  color:inherit !important;
  text-decoration:none !important;
}

.gtcat h1,
.gtcat h2,
.gtcat h3,
.gtcat p{
  margin-top:0;
}

.gtcat-wrap{
  width:min(
    1120px,
    calc(100% - 40px)
  );

  margin:0 auto;
}

/* HEADER */

.gtcat-header{
  height:72px;

  display:flex;
  align-items:center;

  background:#fff;

  border-bottom:
    1px solid #eceef0;
}

.gtcat-header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.gtcat-brand{
  display:flex;
  align-items:center;
  gap:11px;
}

.gtcat-logo{
  width:43px;
  height:43px;

  border-radius:12px;

  display:flex;
  align-items:center;
  justify-content:center;

  background:var(--navy2);
}

.gtcat-logo::after{
  content:"";

  width:11px;
  height:11px;

  background:var(--gold2);

  transform:rotate(45deg);
}

.gtcat-brand-name{
  color:var(--navy);

  font-size:17px !important;
  line-height:1.1;

  font-weight:900;
  letter-spacing:-.04em;
}

.gtcat-brand-en{
  margin-top:4px;

  color:var(--gold);

  font-size:7px !important;
  font-weight:900;

  letter-spacing:.24em;
}

.gtcat-call{
  min-height:38px;

  padding:0 15px;

  display:flex;
  align-items:center;

  border-radius:999px;

  background:var(--navy);

  color:#fff !important;

  font-size:11px !important;
  font-weight:900;
}

/* HERO */

.gtcat-hero{
  padding:64px 0 66px;

  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(180,142,78,.15),
      transparent 35%
    ),
    linear-gradient(
      180deg,
      #fbfaf7,
      #f5f6f7
    );
}

.gtcat-breadcrumb{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:5px;

  color:#7e8794;

  font-size:10px !important;
}

.gtcat-hero-grid{
  margin-top:28px;

  display:grid;
  grid-template-columns:
    minmax(0,1fr)
    320px;

  gap:55px;
  align-items:center;
}

.gtcat-kicker{
  color:var(--gold);

  font-size:9px !important;
  font-weight:900;

  letter-spacing:.17em;
}

.gtcat-hero h1{
  margin:
    10px 0 0 !important;

  max-width:650px;

  color:var(--navy);

  font-size:44px !important;
  line-height:1.13;

  font-weight:900;
  letter-spacing:-.055em;
}

.gtcat-hero-copy{
  margin:
    18px 0 0 !important;

  max-width:650px;

  color:#677281;

  font-size:14px !important;
  line-height:1.8;
}

.gtcat-actions{
  margin-top:24px;

  display:flex;
  gap:9px;
}

.gtcat-button{
  min-height:48px;

  padding:0 19px;

  border-radius:11px;

  display:inline-flex;
  align-items:center;
  justify-content:center;

  font-size:12px !important;
  font-weight:900;
}

.gtcat-button-main{
  background:var(--navy2);
  color:#fff !important;
}

.gtcat-button-sub{
  background:var(--cream);
  color:#725326 !important;
}

.gtcat-hero-image{
  position:relative;

  overflow:hidden;

  aspect-ratio:1 / 1;

  border-radius:24px;

  background:#ddd;

  box-shadow:
    0 18px 50px
    rgba(16,35,63,.12);
}

.gtcat-hero-image img{
  width:100%;
  height:100%;

  object-fit:cover;

  display:block;
}

.gtcat-image-label{
  position:absolute;

  left:16px;
  right:16px;
  bottom:16px;

  padding:14px 15px;

  border-radius:13px;

  background:
    rgba(255,255,255,.9);

  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
}

.gtcat-image-label span{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.12em;
}

.gtcat-image-label strong{
  display:block;

  margin-top:4px;

  color:var(--navy);

  font-size:14px !important;
}

/* SECTION */

.gtcat-section{
  padding:68px 0;
}

.gtcat-section-soft{
  background:var(--soft);
}

.gtcat-head{
  margin-bottom:26px;
}

.gtcat-eyebrow{
  color:var(--gold);

  font-size:9px !important;
  font-weight:900;

  letter-spacing:.16em;
}

.gtcat-head h2{
  margin:
    8px 0 0 !important;

  color:var(--navy);

  font-size:29px !important;
  line-height:1.3;

  font-weight:900;
  letter-spacing:-.045em;
}

.gtcat-head p{
  max-width:650px;

  margin:
    10px 0 0 !important;

  color:var(--muted);

  font-size:12.5px !important;
  line-height:1.75;
}

/* SERVICE */

.gtcat-service-grid{
  display:grid;

  grid-template-columns:
    repeat(3,1fr);

  gap:12px;
}

.gtcat-service{
  padding:22px;

  border:
    1px solid var(--line);

  border-radius:17px;

  background:#fff;
}

.gtcat-service-num{
  width:33px;
  height:33px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:9px;

  background:#f4ecdd;

  color:#8a672d;

  font-size:9px !important;
  font-weight:900;
}

.gtcat-service h3{
  margin:
    15px 0 0 !important;

  color:var(--navy);

  font-size:16px !important;
  font-weight:900;
}

.gtcat-service p{
  margin:
    8px 0 0 !important;

  color:#717b89;

  font-size:11.5px !important;
  line-height:1.68;
}

/* AREA */

.gtcat-regions{
  display:grid;
  gap:15px;
}

.gtcat-region{
  display:grid;

  grid-template-columns:
    190px
    minmax(0,1fr);

  overflow:hidden;

  border:
    1px solid var(--line);

  border-radius:19px;

  background:#fff;
}

.gtcat-region-title{
  padding:26px 24px;

  background:
    linear-gradient(
      145deg,
      #10233f,
      #1d4679
    );

  color:#fff;
}

.gtcat-region-title span{
  color:#d9bb78;

  font-size:9px !important;
  font-weight:900;

  letter-spacing:.15em;
}

.gtcat-region-title h3{
  margin:
    8px 0 0 !important;

  color:#fff;

  font-size:20px !important;
  font-weight:900;
}

.gtcat-region-title p{
  margin:
    6px 0 0 !important;

  color:#c5ceda;

  font-size:10px !important;
}

.gtcat-districts{
  padding:22px;

  display:grid;

  grid-template-columns:
    repeat(5,1fr);

  gap:8px;
}

.gtcat-district{
  min-height:42px;

  padding:7px;

  display:flex;
  align-items:center;
  justify-content:center;

  border:
    1px solid #e0e4e8;

  border-radius:10px;

  background:#fff;

  color:#445064 !important;

  font-size:10.5px !important;
  font-weight:800;

  transition:
    .18s ease;
}

.gtcat-district:hover{
  border-color:#b99a66;

  color:var(--navy) !important;

  background:#fbf7ef;
}

/* CTA */

.gtcat-cta{
  padding:58px 0;

  background:var(--cream);
}

.gtcat-cta-inner{
  display:grid;

  grid-template-columns:
    1fr
    280px;

  gap:38px;

  align-items:center;
}

.gtcat-cta h2{
  margin:
    8px 0 0 !important;

  color:var(--navy);

  font-size:28px !important;
  line-height:1.35;

  font-weight:900;
  letter-spacing:-.045em;
}

.gtcat-cta p{
  margin:
    10px 0 0 !important;

  color:#756e62;

  font-size:12px !important;
  line-height:1.7;
}

.gtcat-contact{
  padding:19px;

  border-radius:16px;

  background:#fff;

  box-shadow:
    0 10px 28px
    rgba(70,52,25,.08);
}

.gtcat-contact strong{
  color:var(--navy);

  font-size:19px !important;
  font-weight:900;
}

.gtcat-contact small{
  display:block;

  margin-top:4px;

  color:#92969c;

  font-size:9px !important;
}

.gtcat-contact a{
  min-height:45px;

  margin-top:14px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:10px;

  background:var(--navy2);

  color:#fff !important;

  font-size:11px !important;
  font-weight:900;
}

/* FOOTER */

.gtcat-footer{
  padding:
    35px 0 110px;

  background:#0b1b32;

  color:#fff;
}

.gtcat-footer-inner{
  display:flex;

  justify-content:space-between;

  gap:20px;
}

.gtcat-footer-name{
  font-size:15px !important;
  font-weight:900;
}

.gtcat-footer p{
  margin:
    6px 0 0 !important;

  color:#aeb8c7;

  font-size:10px !important;
  line-height:1.7;
}

.gtcat-footer a{
  color:#fff !important;

  font-size:12px !important;
  font-weight:900;
}

/* MOBILE CTA */

.gtcat-mobile{
  display:none;
}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:767px){

  .gtcat{
    padding-bottom:74px;
  }

  .gtcat-wrap{
    width:
      calc(100% - 32px);
  }

  /* HEADER */

  .gtcat-header{
    height:61px;
  }

  .gtcat-brand{
    gap:8px;
  }

  .gtcat-logo{
    width:36px;
    height:36px;

    border-radius:10px;
  }

  .gtcat-logo::after{
    width:9px;
    height:9px;
  }

  .gtcat-brand-name{
    font-size:14px !important;
  }

  .gtcat-brand-en{
    font-size:6px !important;
  }

  .gtcat-call{
    min-height:33px;

    padding:0 11px;

    font-size:9.5px !important;
  }

  /* HERO */

  .gtcat-hero{
    padding:42px 0 48px;
  }

  .gtcat-breadcrumb{
    font-size:8px !important;
  }

  .gtcat-hero-grid{
    display:block;

    margin-top:20px;
  }

  .gtcat-kicker{
    font-size:7.5px !important;
  }

  .gtcat-hero h1{
    max-width:330px;

    margin-top:8px !important;

    font-size:30px !important;
    line-height:1.14;
  }

  .gtcat-hero-copy{
    margin-top:14px !important;

    font-size:11.5px !important;
    line-height:1.68;
  }

  .gtcat-actions{
    margin-top:19px;
  }

  .gtcat-button{
    flex:1;

    min-width:0;
    min-height:43px;

    padding:0 8px;

    font-size:10.5px !important;
  }

  .gtcat-hero-image{
    margin-top:25px;

    width:100%;

    aspect-ratio:1.65/1;

    border-radius:16px;
  }

  .gtcat-image-label{
    left:10px;
    right:10px;
    bottom:10px;

    padding:10px 11px;

    border-radius:10px;
  }

  .gtcat-image-label span{
    font-size:7px !important;
  }

  .gtcat-image-label strong{
    font-size:11px !important;
  }

  /* SECTION */

  .gtcat-section{
    padding:48px 0;
  }

  .gtcat-head{
    margin-bottom:19px;
  }

  .gtcat-eyebrow{
    font-size:7.5px !important;
  }

  .gtcat-head h2{
    margin-top:6px !important;

    font-size:21px !important;
  }

  .gtcat-head p{
    margin-top:8px !important;

    font-size:10.5px !important;
    line-height:1.65;
  }

  /* SERVICE */

  .gtcat-service-grid{
    grid-template-columns:
      1fr 1fr;

    gap:8px;
  }

  .gtcat-service{
    padding:15px;

    border-radius:14px;
  }

  .gtcat-service:last-child{
    grid-column:
      1 / -1;
  }

  .gtcat-service-num{
    width:28px;
    height:28px;

    font-size:7.5px !important;
  }

  .gtcat-service h3{
    margin-top:10px !important;

    font-size:12.5px !important;
  }

  .gtcat-service p{
    margin-top:6px !important;

    font-size:9.5px !important;
    line-height:1.58;
  }

  /* REGION */

  .gtcat-regions{
    gap:12px;
  }

  .gtcat-region{
    display:block;

    border-radius:16px;
  }

  .gtcat-region-title{
    padding:17px 18px;
  }

  .gtcat-region-title span{
    font-size:7px !important;
  }

  .gtcat-region-title h3{
    margin-top:5px !important;

    font-size:16px !important;
  }

  .gtcat-region-title p{
    margin-top:4px !important;

    font-size:8.5px !important;
  }

  .gtcat-districts{
    padding:15px;

    grid-template-columns:
      repeat(3,1fr);

    gap:7px;
  }

  .gtcat-district{
    min-height:38px;

    padding:6px;

    border-radius:9px;

    font-size:9.5px !important;
  }

  /* CTA */

  .gtcat-cta{
    padding:45px 0;
  }

  .gtcat-cta-inner{
    display:block;
  }

  .gtcat-cta h2{
    font-size:21px !important;
  }

  .gtcat-cta p{
    font-size:10.5px !important;
  }

  .gtcat-contact{
    margin-top:18px;

    padding:16px;
  }

  .gtcat-contact strong{
    font-size:17px !important;
  }

  /* FOOTER */

  .gtcat-footer{
    padding:
      30px 0 100px;
  }

  .gtcat-footer-inner{
    display:block;
  }

  .gtcat-footer-right{
    margin-top:14px;
  }

  /* MOBILE */

  .gtcat-mobile{
    position:fixed;

    z-index:99999;

    left:12px;
    right:12px;

    bottom:
      calc(
        10px +
        env(
          safe-area-inset-bottom
        )
      );

    display:grid;

    grid-template-columns:
      1fr 1fr;

    gap:7px;

    padding:7px;

    border:
      1px solid
      rgba(16,35,63,.09);

    border-radius:15px;

    background:
      rgba(255,255,255,.95);

    box-shadow:
      0 8px 28px
      rgba(16,35,63,.14);

    backdrop-filter:
      blur(14px);

    -webkit-backdrop-filter:
      blur(14px);
  }

  .gtcat-mobile a{
    height:45px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:10px;

    background:var(--navy2);

    color:#fff !important;

    font-size:10.5px !important;
    font-weight:900;
  }

  .gtcat-mobile a:last-child{
    background:#efe3cb;

    color:#715327 !important;
  }
}
`;

/* =========================================================
   PAGE
========================================================= */

export default async function CategoryPage({
  params,
}: Props) {
  const { category } =
    await params;

  if (
    !(category in SERVICES)
  ) {
    notFound();
  }

  const serviceKey =
    category as ServiceKey;

  const service =
    SERVICES[serviceKey];

  const schema = [
    {
      "@context":
        "https://schema.org",

      "@type":
        "Service",

      name:
        service.name,

      serviceType:
        service.name,

      description:
        service.hero,

      url:
        `${SITE}/services/tile/${category}`,

      provider: {
        "@type":
          "HomeAndConstructionBusiness",

        name:
          COMPANY,

        url:
          SITE,

        telephone:
          PHONE_TEXT,
      },

      areaServed: [
        {
          "@type":
            "AdministrativeArea",
          name:
            "서울",
        },
        {
          "@type":
            "AdministrativeArea",
          name:
            "경기",
        },
        {
          "@type":
            "AdministrativeArea",
          name:
            "인천",
        },
      ],
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

          position:1,

          name:"홈",

          item:
            SITE,
        },

        {
          "@type":
            "ListItem",

          position:2,

          name:
            "타일 전문",

          item:
            `${SITE}/services/tile`,
        },

        {
          "@type":
            "ListItem",

          position:3,

          name:
            service.name,

          item:
            `${SITE}/services/tile/${category}`,
        },
      ],
    },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:CSS,
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

      <main className="gtcat">
        {/* HEADER */}

        <header className="gtcat-header">
          <div className="gtcat-wrap gtcat-header-inner">
            <Link
              href="/"
              className="gtcat-brand"
            >
              <div className="gtcat-logo" />

              <div>
                <div className="gtcat-brand-name">
                  금손종합보수
                </div>

                <div className="gtcat-brand-en">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <a
              href={PHONE_LINK}
              className="gtcat-call"
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* HERO */}

        <section className="gtcat-hero">
          <div className="gtcat-wrap">
            <nav className="gtcat-breadcrumb">
              <Link href="/">
                홈
              </Link>

              <span>›</span>

              <Link href="/services/tile">
                타일 전문
              </Link>

              <span>›</span>

              <strong>
                {service.name}
              </strong>
            </nav>

            <div className="gtcat-hero-grid">
              <div>
                <div className="gtcat-kicker">
                  {service.en}
                </div>

                <h1>
                  금손종합보수
                  <br />
                  {service.name}
                </h1>

                <p className="gtcat-hero-copy">
                  {service.hero}
                  <br />
                  {service.intro}
                </p>

                <div className="gtcat-actions">
                  <a
                    href={PHONE_LINK}
                    className="gtcat-button gtcat-button-main"
                  >
                    전화 상담
                  </a>

                  <a
                    href={SMS_LINK}
                    className="gtcat-button gtcat-button-sub"
                  >
                    사진 상담
                  </a>
                </div>
              </div>

              <div className="gtcat-hero-image">
                <img
                  src={service.image}
                  alt={`${COMPANY} ${service.name} 실제 작업`}
                />

                <div className="gtcat-image-label">
                  <span>
                    ACTUAL WORK
                  </span>

                  <strong>
                    실제 타일 작업사례
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE */}

        <section className="gtcat-section">
          <div className="gtcat-wrap">
            <div className="gtcat-head">
              <div className="gtcat-eyebrow">
                SERVICE
              </div>

              <h2>
                {service.title}
              </h2>

              <p>
                현장 상태를 확인하고
                필요한 부분 위주로
                작업 범위를 안내합니다.
              </p>
            </div>

            <div className="gtcat-service-grid">
              {service.services.map(
                (
                  item,
                  index
                ) => (
                  <article
                    key={
                      item.title
                    }
                    className="gtcat-service"
                  >
                    <div className="gtcat-service-num">
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
                      {item.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* AREAS */}

        <section className="gtcat-section gtcat-section-soft">
          <div className="gtcat-wrap">
            <div className="gtcat-head">
              <div className="gtcat-eyebrow">
                SERVICE AREA
              </div>

              <h2>
                지역을 선택하세요
              </h2>

              <p>
                서울·경기·인천 지역별
                {service.name} 상세 페이지를
                확인할 수 있습니다.
              </p>
            </div>

            <div className="gtcat-regions">
              {Object.entries(
                REGIONS
              ).map(
                ([
                  regionSlug,
                  region,
                ]) => (
                  <section
                    key={
                      regionSlug
                    }
                    className="gtcat-region"
                  >
                    <div className="gtcat-region-title">
                      <span>
                        {
                          region.en
                        }
                      </span>

                      <h3>
                        {
                          region.name
                        }{" "}
                        {service.name}
                      </h3>

                      <p>
                        {
                          region.description
                        }
                      </p>
                    </div>

                    <div className="gtcat-districts">
                      {Object.entries(
                        region.districts
                      ).map(
                        ([
                          districtSlug,
                          districtName,
                        ]) => (
                          <Link
                            key={
                              districtSlug
                            }
                            href={`/services/tile/${category}/${regionSlug}/${districtSlug}`}
                            className="gtcat-district"
                          >
                            {
                              districtName
                            }
                          </Link>
                        )
                      )}
                    </div>
                  </section>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="gtcat-cta">
          <div className="gtcat-wrap gtcat-cta-inner">
            <div>
              <div className="gtcat-eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                타일 상태를
                <br />
                사진으로 먼저 보내주세요
              </h2>

              <p>
                지역, 작업 내용,
                파손 부위 가까운 사진과
                주변이 함께 보이는 사진을
                보내주시면 상담에 도움이 됩니다.
              </p>
            </div>

            <div className="gtcat-contact">
              <strong>
                {PHONE_TEXT}
              </strong>

              <small>
                금손종합보수
                사진 문자 상담
              </small>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="gtcat-footer">
          <div className="gtcat-wrap gtcat-footer-inner">
            <div>
              <div className="gtcat-footer-name">
                {COMPANY}
              </div>

              <p>
                대표자 {OWNER}
                <br />
                서울 · 경기 · 인천
                {service.name}
              </p>
            </div>

            <div className="gtcat-footer-right">
              <a href={PHONE_LINK}>
                {PHONE_TEXT}
              </a>
            </div>
          </div>
        </footer>

        {/* MOBILE CTA */}

        <div className="gtcat-mobile">
          <a href={PHONE_LINK}>
            전화 상담
          </a>

          <a href={SMS_LINK}>
            사진 상담
          </a>
        </div>
      </main>
    </>
  );
}
