import type { Metadata } from "next";
import Link from "next/link";

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
파손된 타일 사진을 첨부하겠습니다.`;

const SMS_LINK =
  `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

/* =========================================================
   서비스
========================================================= */

const SERVICES = [
  {
    number: "01",
    name: "타일수리",
    en: "TILE REPAIR",
    href: "/services/tile/repair",
    description:
      "깨짐, 균열, 들뜸, 탈락 등 손상된 벽타일과 바닥타일을 상태에 맞춰 수리합니다.",
    keywords: [
      "깨진 타일",
      "들뜬 타일",
      "욕실 타일",
    ],
    image: "/IMG_1190.jpeg",
  },

  {
    number: "02",
    name: "타일보수",
    en: "TILE MAINTENANCE",
    href: "/services/tile/maintenance",
    description:
      "전체 철거가 필요하지 않은 현장은 손상된 부분을 확인해 필요한 범위 위주로 보수합니다.",
    keywords: [
      "부분보수",
      "마감보수",
      "바닥타일",
    ],
    image: "/IMG_1182.jpeg",
  },

  {
    number: "03",
    name: "타일교체",
    en: "TILE REPLACEMENT",
    href: "/services/tile/replacement",
    description:
      "타일 한 장부터 욕실 벽 한 면, 거실·상가 바닥까지 필요한 구간을 부분교체합니다.",
    keywords: [
      "한 장 교체",
      "벽타일 교체",
      "바닥타일",
    ],
    image: "/IMG_1206.jpeg",
  },
];

/* =========================================================
   실제 시공사례
========================================================= */

const WORKS = [
  {
    title: "욕실 벽타일 부분교체",
    category: "BATHROOM TILE",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    description:
      "파손된 욕실 벽타일을 필요한 범위만 철거하고 새 타일로 부분 교체한 사례입니다.",
  },

  {
    title: "거실 벽타일 복원",
    category: "WALL TILE",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    description:
      "손상된 벽타일 부위를 정리하고 기존 마감과 자연스럽게 이어지도록 복원한 사례입니다.",
  },

  {
    title: "욕실 바닥·코너 보수",
    category: "FLOOR TILE",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    description:
      "욕실 바닥과 코너 부분의 파손된 타일 및 마감을 정리한 사례입니다.",
  },

  {
    title: "욕실 타일 마감보수",
    category: "DETAIL REPAIR",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    description:
      "욕실 코너의 손상된 타일과 벌어진 마감을 깔끔하게 정리한 사례입니다.",
  },

  {
    title: "벽타일 부분교체",
    category: "WALL REPLACEMENT",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    description:
      "기존 벽타일을 철거한 뒤 수평과 줄눈 간격을 맞춰 새 타일을 시공한 사례입니다.",
  },

  {
    title: "거실 바닥타일 보수",
    category: "LIVING FLOOR",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
    description:
      "깨지고 파손된 거실 바닥타일을 제거하고 새 타일로 부분 보수한 사례입니다.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const FAQS = [
  {
    q: "깨진 타일 한 장만 수리하거나 교체할 수 있나요?",
    a:
      "주변 타일과 바탕면 상태가 안정적이고 적합한 규격의 타일을 확보할 수 있다면 한 장 또는 필요한 부분만 작업할 수 있습니다.",
  },

  {
    q: "기존과 같은 타일이 없으면 어떻게 하나요?",
    a:
      "동일 제품이 단종되었거나 구하기 어려운 경우 기존 타일과 크기, 두께, 색상이 비슷한 자재 적용 가능 여부를 확인합니다.",
  },

  {
    q: "사진으로 먼저 상담이 가능한가요?",
    a:
      "네. 파손 부위 가까운 사진과 주변 공간까지 함께 보이는 사진을 보내주시면 작업 범위 확인에 도움이 됩니다.",
  },

  {
    q: "전체 타일을 다 철거해야 하나요?",
    a:
      "모든 현장이 전체 철거를 필요로 하지는 않습니다. 주변 상태가 양호하다면 부분수리, 부분보수, 부분교체로 진행할 수 있습니다.",
  },
];

/* =========================================================
   META
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "금손종합보수 | 타일수리·타일보수·타일교체 전문",
  },

  description:
    "서울·경기·인천 타일수리, 타일보수, 타일교체 전문 금손종합보수. 깨진 타일, 들뜬 타일, 욕실 벽타일, 바닥타일 부분교체 실제 시공사례와 사진 상담.",

  alternates: {
    canonical: SITE,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: COMPANY,
    title:
      "금손종합보수 | 타일수리·타일보수·타일교체 전문",
    description:
      "깨진 타일 한 장부터 욕실·거실·상가 타일 부분보수와 교체까지. 실제 시공사례를 확인하세요.",
    url: SITE,

    images: [
      {
        url: `${SITE}/IMG_1190.jpeg`,
        alt: "금손종합보수 실제 타일 시공사례",
      },
    ],
  },
};

/* =========================================================
   페이지 전용 CSS
========================================================= */

const CSS = `
html{
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

body{
  margin:0;
}

.gh{
  --navy:#0e223e;
  --navy2:#183f70;
  --navy3:#244d7d;
  --gold:#b59050;
  --gold2:#d8bb7b;
  --cream:#f3ead9;
  --ivory:#fbfaf7;
  --soft:#f5f6f7;
  --line:#e5e7ea;
  --text:#17243a;
  --muted:#6d7785;

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

.gh *,
.gh *::before,
.gh *::after{
  box-sizing:border-box;
  -webkit-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

.gh a{
  color:inherit !important;
  text-decoration:none !important;
}

.gh h1,
.gh h2,
.gh h3,
.gh p{
  margin-top:0;
}

.gh-wrap{
  width:min(1160px,calc(100% - 40px));
  margin:0 auto;
}

/* =========================================================
   HEADER
========================================================= */

.gh-header{
  height:76px;
  display:flex;
  align-items:center;

  background:rgba(255,255,255,.96);
  border-bottom:1px solid #eceef0;
}

.gh-header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.gh-brand{
  display:flex;
  align-items:center;
  gap:12px;
}

.gh-logo{
  width:45px;
  height:45px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:13px;
  background:var(--navy2);
}

.gh-logo::after{
  content:"";
  width:11px;
  height:11px;
  background:var(--gold2);
  transform:rotate(45deg);
}

.gh-brand-name{
  font-size:18px !important;
  line-height:1.1;
  font-weight:900;
  letter-spacing:-.04em;
  color:var(--navy);
}

.gh-brand-en{
  margin-top:5px;

  color:var(--gold);

  font-size:7px !important;
  line-height:1;

  font-weight:900;
  letter-spacing:.25em;
}

.gh-header-nav{
  display:flex;
  align-items:center;
  gap:25px;
}

.gh-header-nav a{
  color:#4e5b6d !important;
  font-size:12px !important;
  font-weight:800;
}

.gh-header-contact{
  min-height:40px;
  padding:0 16px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:999px;

  background:var(--navy);

  color:#fff !important;

  font-size:11px !important;
  font-weight:900;
}

/* =========================================================
   HERO
========================================================= */

.gh-hero{
  position:relative;
  overflow:hidden;

  min-height:660px;

  display:flex;
  align-items:center;

  background:
    radial-gradient(
      circle at 85% 5%,
      rgba(181,144,80,.15),
      transparent 34%
    ),
    linear-gradient(
      135deg,
      #fcfbf8 0%,
      #f4f6f8 100%
    );
}

.gh-hero::after{
  content:"";

  position:absolute;
  right:-180px;
  top:-170px;

  width:540px;
  height:540px;

  border-radius:50%;

  border:
    1px solid rgba(24,63,112,.06);
}

.gh-hero-grid{
  position:relative;
  z-index:2;

  width:100%;

  display:grid;

  grid-template-columns:
    minmax(0,1fr)
    470px;

  gap:75px;
  align-items:center;
}

.gh-hero-kicker{
  display:inline-flex;
  align-items:center;
  gap:9px;

  color:var(--gold);

  font-size:9px !important;
  font-weight:900;

  letter-spacing:.16em;
}

.gh-hero-kicker::before{
  content:"";

  width:28px;
  height:1px;

  background:var(--gold);
}

.gh-hero h1{
  max-width:660px;

  margin:
    17px 0 0 !important;

  color:var(--navy);

  font-size:53px !important;
  line-height:1.11;

  font-weight:900;
  letter-spacing:-.06em;
}

.gh-hero h1 em{
  font-style:normal;
  color:var(--gold);
}

.gh-hero-copy{
  max-width:640px;

  margin:
    22px 0 0 !important;

  color:#65717f;

  font-size:15px !important;
  line-height:1.85;
}

.gh-hero-actions{
  margin-top:28px;

  display:flex;
  gap:9px;
}

.gh-btn{
  min-height:51px;

  padding:0 22px;

  display:inline-flex;
  align-items:center;
  justify-content:center;

  border-radius:12px;

  font-size:12px !important;
  font-weight:900;
}

.gh-btn-main{
  background:var(--navy2);
  color:#fff !important;
}

.gh-btn-sub{
  background:var(--cream);
  color:#765729 !important;
}

.gh-hero-note{
  margin-top:23px;

  display:flex;
  gap:22px;
}

.gh-hero-note-item{
  display:flex;
  align-items:center;
  gap:8px;

  color:#77818e;

  font-size:10px !important;
  font-weight:700;
}

.gh-hero-note-dot{
  width:6px;
  height:6px;

  border-radius:50%;
  background:var(--gold);
}

/* HERO PHOTOS */

.gh-showcase{
  display:grid;

  grid-template-columns:
    1.1fr .9fr;

  gap:10px;

  height:520px;
}

.gh-showcase-main,
.gh-showcase-small{
  overflow:hidden;
  position:relative;

  border-radius:22px;

  background:#ddd;
}

.gh-showcase-main{
  grid-row:span 2;
}

.gh-showcase img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.gh-showcase-main::after{
  content:"ACTUAL WORK";

  position:absolute;
  left:15px;
  bottom:15px;

  padding:8px 11px;

  border-radius:999px;

  background:rgba(14,34,62,.82);

  color:#fff;

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.1em;
}

.gh-showcase-small{
  min-height:0;
}

/* =========================================================
   INTRO BAR
========================================================= */

.gh-trust{
  position:relative;
  z-index:5;

  margin-top:-38px;
}

.gh-trust-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);

  overflow:hidden;

  border:
    1px solid var(--line);

  border-radius:19px;

  background:#fff;

  box-shadow:
    0 16px 42px
    rgba(14,34,62,.08);
}

.gh-trust-item{
  padding:24px;
}

.gh-trust-item + .gh-trust-item{
  border-left:
    1px solid var(--line);
}

.gh-trust-item span{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.13em;
}

.gh-trust-item strong{
  display:block;

  margin-top:7px;

  color:var(--navy);

  font-size:15px !important;
  font-weight:900;
}

.gh-trust-item p{
  margin:
    6px 0 0 !important;

  color:#7a8491;

  font-size:10.5px !important;
  line-height:1.55;
}

/* =========================================================
   COMMON SECTION
========================================================= */

.gh-section{
  padding:82px 0;
}

.gh-section-soft{
  background:var(--soft);
}

.gh-section-dark{
  background:var(--navy);
  color:#fff;
}

.gh-section-head{
  display:flex;

  justify-content:space-between;
  align-items:flex-end;

  gap:55px;

  margin-bottom:33px;
}

.gh-section-main{
  max-width:700px;
}

.gh-eyebrow{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.17em;
}

.gh-section-head h2{
  margin:
    9px 0 0 !important;

  color:var(--navy);

  font-size:33px !important;
  line-height:1.28;

  font-weight:900;
  letter-spacing:-.05em;
}

.gh-section-dark .gh-section-head h2{
  color:#fff;
}

.gh-section-head > p{
  max-width:420px;

  margin:0 !important;

  color:#747e8c;

  font-size:12.5px !important;
  line-height:1.75;
}

/* =========================================================
   SERVICES
========================================================= */

.gh-service-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}

.gh-service-card{
  overflow:hidden;

  border:
    1px solid var(--line);

  border-radius:20px;

  background:#fff;
}

.gh-service-image{
  position:relative;
  height:235px;
  overflow:hidden;
}

.gh-service-image img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;

  transition:
    transform .35s ease;
}

.gh-service-card:hover .gh-service-image img{
  transform:scale(1.025);
}

.gh-service-number{
  position:absolute;

  left:13px;
  top:13px;

  width:34px;
  height:34px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:50%;

  background:
    rgba(255,255,255,.92);

  color:var(--navy);

  font-size:9px !important;
  font-weight:900;
}

.gh-service-body{
  padding:23px;
}

.gh-service-body span{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.14em;
}

.gh-service-body h3{
  margin:
    7px 0 0 !important;

  color:var(--navy);

  font-size:20px !important;
  font-weight:900;
}

.gh-service-body p{
  margin:
    9px 0 0 !important;

  color:#707b89;

  font-size:11.5px !important;
  line-height:1.7;
}

.gh-service-tags{
  margin-top:15px;

  display:flex;
  flex-wrap:wrap;
  gap:6px;
}

.gh-service-tags small{
  padding:6px 8px;

  border-radius:999px;

  background:#f3f4f5;

  color:#637081;

  font-size:8.5px !important;
  font-weight:800;
}

.gh-service-link{
  margin-top:17px;

  display:inline-flex;

  color:#85652f !important;

  font-size:10px !important;
  font-weight:900;
}

/* =========================================================
   EXPERTISE
========================================================= */

.gh-expert-grid{
  display:grid;

  grid-template-columns:
    .8fr
    1.2fr;

  overflow:hidden;

  border:
    1px solid var(--line);

  border-radius:23px;

  background:#fff;
}

.gh-expert-left{
  padding:45px;

  background:
    linear-gradient(
      145deg,
      #10233f,
      #1e497c
    );

  color:#fff;
}

.gh-expert-left span{
  color:#d8ba79;

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.15em;
}

.gh-expert-left h2{
  margin:
    12px 0 0 !important;

  color:#fff;

  font-size:31px !important;
  line-height:1.35;

  font-weight:900;
  letter-spacing:-.05em;
}

.gh-expert-left p{
  margin:
    16px 0 0 !important;

  color:#cbd4df;

  font-size:12px !important;
  line-height:1.75;
}

.gh-expert-right{
  padding:35px;

  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1px;

  background:var(--line);
}

.gh-expert-item{
  padding:24px;

  background:#fff;
}

.gh-expert-num{
  color:var(--gold);

  font-size:9px !important;
  font-weight:900;
}

.gh-expert-item h3{
  margin:
    13px 0 0 !important;

  color:var(--navy);

  font-size:16px !important;
  font-weight:900;
}

.gh-expert-item p{
  margin:
    7px 0 0 !important;

  color:#717b89;

  font-size:10.5px !important;
  line-height:1.65;
}

/* =========================================================
   WORK
========================================================= */

.gh-work-grid{
  display:grid;

  grid-template-columns:
    repeat(2,1fr);

  gap:18px;
}

.gh-work{
  overflow:hidden;

  border:
    1px solid var(--line);

  border-radius:19px;

  background:#fff;
}

.gh-work-images{
  display:grid;

  grid-template-columns:
    1fr 1fr;
}

.gh-work-image{
  position:relative;

  overflow:hidden;

  aspect-ratio:1.15/1;

  background:#eee;
}

.gh-work-image img{
  width:100%;
  height:100%;

  object-fit:cover;

  display:block;
}

.gh-work-label{
  position:absolute;

  left:9px;
  bottom:9px;

  padding:5px 8px;

  border-radius:999px;

  background:
    rgba(14,34,62,.86);

  color:#fff;

  font-size:7px !important;
  font-weight:900;
}

.gh-work-label.after{
  background:
    rgba(174,135,65,.93);
}

.gh-work-body{
  padding:20px;
}

.gh-work-body span{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.13em;
}

.gh-work-body h3{
  margin:
    6px 0 0 !important;

  color:var(--navy);

  font-size:16px !important;
  font-weight:900;
}

.gh-work-body p{
  margin:
    7px 0 0 !important;

  color:#707b89;

  font-size:10.5px !important;
  line-height:1.65;
}

/* =========================================================
   PROCESS
========================================================= */

.gh-process{
  display:grid;

  grid-template-columns:
    repeat(4,1fr);

  overflow:hidden;

  border:
    1px solid
    rgba(255,255,255,.14);

  border-radius:20px;

  background:
    rgba(255,255,255,.07);
}

.gh-process-item{
  padding:29px 24px;
}

.gh-process-item + .gh-process-item{
  border-left:
    1px solid
    rgba(255,255,255,.12);
}

.gh-process-item span{
  color:#d9bc7c;

  font-size:8px !important;
  font-weight:900;
}

.gh-process-item h3{
  margin:
    15px 0 0 !important;

  color:#fff;

  font-size:15px !important;
  font-weight:900;
}

.gh-process-item p{
  margin:
    8px 0 0 !important;

  color:#c3ccd8;

  font-size:10px !important;
  line-height:1.65;
}

/* =========================================================
   AREAS
========================================================= */

.gh-area-grid{
  display:grid;

  grid-template-columns:
    repeat(3,1fr);

  gap:13px;
}

.gh-area{
  padding:25px;

  border:
    1px solid var(--line);

  border-radius:18px;

  background:#fff;
}

.gh-area span{
  color:var(--gold);

  font-size:8px !important;
  font-weight:900;

  letter-spacing:.14em;
}

.gh-area h3{
  margin:
    8px 0 0 !important;

  color:var(--navy);

  font-size:20px !important;
  font-weight:900;
}

.gh-area p{
  margin:
    7px 0 0 !important;

  color:#727c89;

  font-size:10.5px !important;
  line-height:1.65;
}

.gh-area-links{
  margin-top:16px;

  display:flex;
  flex-wrap:wrap;
  gap:7px;
}

.gh-area-link{
  min-height:35px;

  padding:0 10px;

  display:flex;
  align-items:center;

  border:
    1px solid var(--line);

  border-radius:9px;

  color:#536074 !important;

  font-size:9px !important;
  font-weight:800;
}

/* =========================================================
   CONSULT
========================================================= */

.gh-consult{
  padding:70px 0;

  background:var(--cream);
}

.gh-consult-inner{
  display:grid;

  grid-template-columns:
    1fr 310px;

  gap:45px;

  align-items:center;
}

.gh-consult h2{
  margin:
    9px 0 0 !important;

  color:var(--navy);

  font-size:32px !important;
  line-height:1.33;

  font-weight:900;
  letter-spacing:-.05em;
}

.gh-consult p{
  max-width:620px;

  margin:
    13px 0 0 !important;

  color:#746d62;

  font-size:12px !important;
  line-height:1.75;
}

.gh-consult-card{
  padding:23px;

  border-radius:18px;

  background:#fff;

  box-shadow:
    0 12px 30px
    rgba(72,52,23,.09);
}

.gh-consult-card strong{
  display:block;

  color:var(--navy);

  font-size:21px !important;
  font-weight:900;
}

.gh-consult-card small{
  display:block;

  margin-top:5px;

  color:#91959b;

  font-size:8.5px !important;
}

.gh-consult-card a{
  min-height:46px;

  margin-top:16px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:10px;

  background:var(--navy2);

  color:#fff !important;

  font-size:11px !important;
  font-weight:900;
}

/* =========================================================
   FAQ
========================================================= */

.gh-faq-list{
  display:grid;
  gap:9px;
}

.gh-faq{
  padding:20px;

  border:
    1px solid var(--line);

  border-radius:15px;

  background:#fff;
}

.gh-faq h3{
  margin:0 !important;

  color:var(--navy);

  font-size:13.5px !important;
  line-height:1.55;

  font-weight:900;
}

.gh-faq p{
  margin:
    7px 0 0 !important;

  color:#717b89;

  font-size:10.5px !important;
  line-height:1.7;
}

/* =========================================================
   FOOTER
========================================================= */

.gh-footer{
  padding:
    43px 0 120px;

  background:#09192e;

  color:#fff;
}

.gh-footer-grid{
  display:grid;

  grid-template-columns:
    1fr auto;

  gap:30px;
}

.gh-footer-name{
  font-size:16px !important;
  font-weight:900;
}

.gh-footer p{
  margin:
    7px 0 0 !important;

  color:#abb6c5;

  font-size:10px !important;
  line-height:1.75;
}

.gh-footer a{
  color:#fff !important;

  font-size:12px !important;
  font-weight:900;
}

/* =========================================================
   MOBILE CTA
========================================================= */

.gh-mobile{
  display:none;
}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:767px){

  .gh{
    padding-bottom:74px;
  }

  .gh-wrap{
    width:
      calc(100% - 32px);
  }

  /* HEADER */

  .gh-header{
    height:61px;
  }

  .gh-logo{
    width:36px;
    height:36px;

    border-radius:10px;
  }

  .gh-logo::after{
    width:9px;
    height:9px;
  }

  .gh-brand{
    gap:8px;
  }

  .gh-brand-name{
    font-size:14px !important;
  }

  .gh-brand-en{
    font-size:6px !important;
  }

  .gh-header-nav{
    display:none;
  }

  .gh-header-contact{
    min-height:33px;

    padding:0 11px;

    font-size:9.5px !important;
  }

  /* HERO */

  .gh-hero{
    min-height:0;

    padding:
      49px 0 61px;
  }

  .gh-hero-grid{
    display:block;
  }

  .gh-hero-kicker{
    font-size:7.5px !important;
  }

  .gh-hero-kicker::before{
    width:20px;
  }

  .gh-hero h1{
    max-width:340px;

    margin-top:12px !important;

    font-size:32px !important;
    line-height:1.12;
  }

  .gh-hero-copy{
    margin-top:15px !important;

    font-size:11.5px !important;
    line-height:1.7;
  }

  .gh-hero-actions{
    margin-top:20px;
  }

  .gh-btn{
    flex:1;

    min-width:0;
    min-height:44px;

    padding:0 8px;

    font-size:10.5px !important;
  }

  .gh-hero-note{
    margin-top:17px;
    gap:13px;
  }

  .gh-hero-note-item{
    gap:5px;

    font-size:8.5px !important;
  }

  .gh-hero-note-dot{
    width:5px;
    height:5px;
  }

  .gh-showcase{
    margin-top:29px;

    height:300px;

    gap:7px;
  }

  .gh-showcase-main,
  .gh-showcase-small{
    border-radius:14px;
  }

  .gh-showcase-main::after{
    left:9px;
    bottom:9px;

    padding:5px 7px;

    font-size:6px !important;
  }

  /* TRUST */

  .gh-trust{
    margin-top:-18px;
  }

  .gh-trust-grid{
    grid-template-columns:
      1fr 1fr;

    border-radius:15px;
  }

  .gh-trust-item{
    padding:14px;
  }

  .gh-trust-item + .gh-trust-item{
    border-left:0;
  }

  .gh-trust-item:nth-child(2),
  .gh-trust-item:nth-child(4){
    border-left:
      1px solid var(--line);
  }

  .gh-trust-item:nth-child(3),
  .gh-trust-item:nth-child(4){
    border-top:
      1px solid var(--line);
  }

  .gh-trust-item span{
    font-size:6.5px !important;
  }

  .gh-trust-item strong{
    margin-top:4px;

    font-size:11px !important;
  }

  .gh-trust-item p{
    display:none;
  }

  /* SECTION */

  .gh-section{
    padding:50px 0;
  }

  .gh-section-head{
    display:block;

    margin-bottom:20px;
  }

  .gh-eyebrow{
    font-size:7px !important;
  }

  .gh-section-head h2{
    margin-top:7px !important;

    font-size:22px !important;
    line-height:1.3;
  }

  .gh-section-head > p{
    margin-top:9px !important;

    font-size:10.5px !important;
    line-height:1.65;
  }

  /* SERVICE */

  .gh-service-grid{
    grid-template-columns:1fr;
    gap:11px;
  }

  .gh-service-card{
    display:grid;

    grid-template-columns:
      128px
      minmax(0,1fr);

    border-radius:15px;
  }

  .gh-service-image{
    height:100%;
    min-height:180px;
  }

  .gh-service-number{
    left:8px;
    top:8px;

    width:27px;
    height:27px;

    font-size:7px !important;
  }

  .gh-service-body{
    padding:17px;
  }

  .gh-service-body span{
    font-size:6.5px !important;
  }

  .gh-service-body h3{
    margin-top:5px !important;

    font-size:15px !important;
  }

  .gh-service-body p{
    margin-top:6px !important;

    font-size:9.5px !important;
    line-height:1.6;
  }

  .gh-service-tags{
    margin-top:10px;
    gap:4px;
  }

  .gh-service-tags small{
    padding:4px 6px;

    font-size:7px !important;
  }

  .gh-service-link{
    margin-top:11px;

    font-size:8.5px !important;
  }

  /* EXPERT */

  .gh-expert-grid{
    display:block;

    border-radius:16px;
  }

  .gh-expert-left{
    padding:24px 20px;
  }

  .gh-expert-left span{
    font-size:7px !important;
  }

  .gh-expert-left h2{
    margin-top:8px !important;

    font-size:22px !important;
  }

  .gh-expert-left p{
    margin-top:10px !important;

    font-size:10px !important;
  }

  .gh-expert-right{
    padding:1px;

    grid-template-columns:
      1fr 1fr;
  }

  .gh-expert-item{
    padding:17px;
  }

  .gh-expert-num{
    font-size:7px !important;
  }

  .gh-expert-item h3{
    margin-top:8px !important;

    font-size:12.5px !important;
  }

  .gh-expert-item p{
    margin-top:5px !important;

    font-size:9px !important;
  }

  /* WORK */

  .gh-work-grid{
    grid-template-columns:1fr;

    gap:12px;
  }

  .gh-work{
    border-radius:15px;
  }

  .gh-work-body{
    padding:15px;
  }

  .gh-work-body span{
    font-size:6.5px !important;
  }

  .gh-work-body h3{
    font-size:13.5px !important;
  }

  .gh-work-body p{
    font-size:9px !important;
  }

  /* PROCESS */

  .gh-process{
    grid-template-columns:
      1fr 1fr;

    border-radius:15px;
  }

  .gh-process-item{
    padding:18px 15px;
  }

  .gh-process-item:nth-child(3){
    border-left:0;

    border-top:
      1px solid
      rgba(255,255,255,.12);
  }

  .gh-process-item:nth-child(4){
    border-top:
      1px solid
      rgba(255,255,255,.12);
  }

  .gh-process-item span{
    font-size:7px !important;
  }

  .gh-process-item h3{
    margin-top:10px !important;

    font-size:12px !important;
  }

  .gh-process-item p{
    font-size:8.5px !important;
  }

  /* AREA */

  .gh-area-grid{
    grid-template-columns:1fr;
    gap:9px;
  }

  .gh-area{
    padding:18px;

    border-radius:14px;
  }

  .gh-area span{
    font-size:7px !important;
  }

  .gh-area h3{
    margin-top:5px !important;

    font-size:15px !important;
  }

  .gh-area p{
    font-size:9.5px !important;
  }

  .gh-area-links{
    margin-top:11px;
  }

  .gh-area-link{
    min-height:31px;

    font-size:8px !important;
  }

  /* CONSULT */

  .gh-consult{
    padding:47px 0;
  }

  .gh-consult-inner{
    display:block;
  }

  .gh-consult h2{
    font-size:22px !important;
  }

  .gh-consult p{
    font-size:10px !important;
  }

  .gh-consult-card{
    margin-top:18px;

    padding:17px;
  }

  .gh-consult-card strong{
    font-size:17px !important;
  }

  /* FAQ */

  .gh-faq{
    padding:15px;
  }

  .gh-faq h3{
    font-size:12px !important;
  }

  .gh-faq p{
    font-size:9.5px !important;
  }

  /* FOOTER */

  .gh-footer{
    padding:
      31px 0 105px;
  }

  .gh-footer-grid{
    display:block;
  }

  .gh-footer-right{
    margin-top:15px;
  }

  /* MOBILE */

  .gh-mobile{
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
      rgba(14,34,62,.09);

    border-radius:15px;

    background:
      rgba(255,255,255,.95);

    box-shadow:
      0 8px 28px
      rgba(14,34,62,.14);

    backdrop-filter:
      blur(14px);

    -webkit-backdrop-filter:
      blur(14px);
  }

  .gh-mobile a{
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

  .gh-mobile a:last-child{
    background:#efe3cb;

    color:#715327 !important;
  }
}
`;

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  const schema = [
    {
      "@context": "https://schema.org",

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

      founder:
        OWNER,

      description:
        "서울·경기·인천 타일수리, 타일보수, 타일교체 전문업체 금손종합보수.",

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

      knowsAbout: [
        "타일수리",
        "타일보수",
        "타일교체",
        "깨진 타일",
        "벽타일",
        "바닥타일",
        "욕실 타일",
      ],
    },

    {
      "@context":
        "https://schema.org",

      "@type":
        "FAQPage",

      mainEntity:
        FAQS.map(
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
          __html: CSS,
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

      <main className="gh">
        {/* HEADER */}

        <header className="gh-header">
          <div className="gh-wrap gh-header-inner">
            <Link
              href="/"
              className="gh-brand"
            >
              <div className="gh-logo" />

              <div>
                <div className="gh-brand-name">
                  금손종합보수
                </div>

                <div className="gh-brand-en">
                  TILE SPECIALIST
                </div>
              </div>
            </Link>

            <nav className="gh-header-nav">
              <a href="#service">
                서비스
              </a>

              <a href="#work">
                시공사례
              </a>

              <a href="#process">
                작업과정
              </a>

              <a href="#area">
                시공지역
              </a>
            </nav>

            <a
              href={PHONE_LINK}
              className="gh-header-contact"
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* HERO */}

        <section className="gh-hero">
          <div className="gh-wrap gh-hero-grid">
            <div>
              <div className="gh-hero-kicker">
                TILE REPAIR SPECIALIST
              </div>

              <h1>
                필요한 부분만
                <br />
                정확하게,
                <br />
                <em>타일 전문 보수</em>
              </h1>

              <p className="gh-hero-copy">
                깨진 타일 한 장부터 욕실 벽면,
                거실 바닥, 상가 타일까지.
                <br />
                전체 철거보다 필요한 범위를 먼저
                확인하고 수리·보수·교체 방법을
                안내합니다.
              </p>

              <div className="gh-hero-actions">
                <a
                  href={PHONE_LINK}
                  className="gh-btn gh-btn-main"
                >
                  전화 상담
                </a>

                <a
                  href={SMS_LINK}
                  className="gh-btn gh-btn-sub"
                >
                  사진으로 상담
                </a>
              </div>

              <div className="gh-hero-note">
                <div className="gh-hero-note-item">
                  <span className="gh-hero-note-dot" />
                  서울 · 경기 · 인천
                </div>

                <div className="gh-hero-note-item">
                  <span className="gh-hero-note-dot" />
                  실제 시공사례 보유
                </div>
              </div>
            </div>

            <div className="gh-showcase">
              <div className="gh-showcase-main">
                <img
                  src="/IMG_1190.jpeg"
                  alt="금손종합보수 거실 바닥타일 보수 실제 시공"
                />
              </div>

              <div className="gh-showcase-small">
                <img
                  src="/IMG_1206.jpeg"
                  alt="금손종합보수 욕실 벽타일 교체 실제 시공"
                />
              </div>

              <div className="gh-showcase-small">
                <img
                  src="/IMG_1182.jpeg"
                  alt="금손종합보수 욕실 타일 마감보수 실제 시공"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}

        <section className="gh-trust">
          <div className="gh-wrap">
            <div className="gh-trust-grid">
              <div className="gh-trust-item">
                <span>SERVICE</span>

                <strong>
                  타일 전문
                </strong>

                <p>
                  수리 · 보수 · 교체
                </p>
              </div>

              <div className="gh-trust-item">
                <span>AREA</span>

                <strong>
                  수도권 시공
                </strong>

                <p>
                  서울 · 경기 · 인천
                </p>
              </div>

              <div className="gh-trust-item">
                <span>PHOTO</span>

                <strong>
                  사진 상담
                </strong>

                <p>
                  파손 상태 먼저 확인
                </p>
              </div>

              <div className="gh-trust-item">
                <span>WORK</span>

                <strong>
                  실제 시공사진
                </strong>

                <p>
                  Before & After
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE */}

        <section
          id="service"
          className="gh-section"
        >
          <div className="gh-wrap">
            <div className="gh-section-head">
              <div className="gh-section-main">
                <div className="gh-eyebrow">
                  OUR SERVICE
                </div>

                <h2>
                  타일 문제에 따라
                  <br />
                  필요한 작업은 다릅니다
                </h2>
              </div>

              <p>
                무조건 전체 철거부터 권하지 않습니다.
                파손 범위와 주변 타일 상태를 확인해
                수리, 보수, 교체 가운데 필요한 방법을
                구분합니다.
              </p>
            </div>

            <div className="gh-service-grid">
              {SERVICES.map(
                (service) => (
                  <article
                    key={
                      service.name
                    }
                    className="gh-service-card"
                  >
                    <div className="gh-service-image">
                      <img
                        src={
                          service.image
                        }
                        alt={`${service.name} 실제 작업`}
                        loading="lazy"
                      />

                      <div className="gh-service-number">
                        {
                          service.number
                        }
                      </div>
                    </div>

                    <div className="gh-service-body">
                      <span>
                        {
                          service.en
                        }
                      </span>

                      <h3>
                        {
                          service.name
                        }
                      </h3>

                      <p>
                        {
                          service.description
                        }
                      </p>

                      <div className="gh-service-tags">
                        {service.keywords.map(
                          (
                            keyword
                          ) => (
                            <small
                              key={
                                keyword
                              }
                            >
                              {
                                keyword
                              }
                            </small>
                          )
                        )}
                      </div>

                      <Link
                        href={
                          service.href
                        }
                        className="gh-service-link"
                      >
                        자세히 보기 →
                      </Link>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}

        <section className="gh-section gh-section-soft">
          <div className="gh-wrap">
            <div className="gh-expert-grid">
              <div className="gh-expert-left">
                <span>
                  WHY GEUMSON
                </span>

                <h2>
                  타일은
                  <br />
                  작은 차이가
                  <br />
                  마감을 만듭니다
                </h2>

                <p>
                  단순히 깨진 부분만 보는 것이 아니라
                  주변 타일 상태, 규격, 높이,
                  줄눈과 마감까지 함께 확인합니다.
                </p>
              </div>

              <div className="gh-expert-right">
                <article className="gh-expert-item">
                  <div className="gh-expert-num">
                    01
                  </div>

                  <h3>
                    필요한 범위 확인
                  </h3>

                  <p>
                    전체 철거보다 부분 작업이
                    가능한지 먼저 확인합니다.
                  </p>
                </article>

                <article className="gh-expert-item">
                  <div className="gh-expert-num">
                    02
                  </div>

                  <h3>
                    주변 타일까지 점검
                  </h3>

                  <p>
                    깨진 타일뿐 아니라 주변 들뜸과
                    접착 상태도 함께 살펴봅니다.
                  </p>
                </article>

                <article className="gh-expert-item">
                  <div className="gh-expert-num">
                    03
                  </div>

                  <h3>
                    규격과 마감 확인
                  </h3>

                  <p>
                    타일 크기, 두께와 줄눈 간격을
                    고려해 작업 범위를 정합니다.
                  </p>
                </article>

                <article className="gh-expert-item">
                  <div className="gh-expert-num">
                    04
                  </div>

                  <h3>
                    사진으로 먼저 상담
                  </h3>

                  <p>
                    현장 방문 전 파손 사진으로
                    작업 가능 여부를 먼저 확인합니다.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}

        <section
          id="work"
          className="gh-section"
        >
          <div className="gh-wrap">
            <div className="gh-section-head">
              <div className="gh-section-main">
                <div className="gh-eyebrow">
                  BEFORE & AFTER
                </div>

                <h2>
                  말보다
                  <br />
                  실제 작업으로 보여드립니다
                </h2>
              </div>

              <p>
                금손종합보수의 실제 시공 전후
                사진입니다. 타일 손상 상태와
                작업 후 마감을 직접 비교해보세요.
              </p>
            </div>

            <div className="gh-work-grid">
              {WORKS.map(
                (work) => (
                  <article
                    key={
                      work.title
                    }
                    className="gh-work"
                  >
                    <div className="gh-work-images">
                      <div className="gh-work-image">
                        <img
                          src={
                            work.before
                          }
                          alt={`${work.title} 작업 전`}
                          loading="lazy"
                        />

                        <span className="gh-work-label">
                          BEFORE
                        </span>
                      </div>

                      <div className="gh-work-image">
                        <img
                          src={
                            work.after
                          }
                          alt={`${work.title} 작업 후`}
                          loading="lazy"
                        />

                        <span className="gh-work-label after">
                          AFTER
                        </span>
                      </div>
                    </div>

                    <div className="gh-work-body">
                      <span>
                        {
                          work.category
                        }
                      </span>

                      <h3>
                        {
                          work.title
                        }
                      </h3>

                      <p>
                        {
                          work.description
                        }
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section
          id="process"
          className="gh-section gh-section-dark"
        >
          <div className="gh-wrap">
            <div className="gh-section-head">
              <div className="gh-section-main">
                <div className="gh-eyebrow">
                  WORK PROCESS
                </div>

                <h2>
                  복잡하지 않게,
                  <br />
                  필요한 순서대로 진행합니다
                </h2>
              </div>
            </div>

            <div className="gh-process">
              <article className="gh-process-item">
                <span>
                  STEP 01
                </span>

                <h3>
                  사진 상담
                </h3>

                <p>
                  파손 부위와 주변 사진을
                  먼저 확인합니다.
                </p>
              </article>

              <article className="gh-process-item">
                <span>
                  STEP 02
                </span>

                <h3>
                  상태 확인
                </h3>

                <p>
                  타일 규격, 파손 범위와
                  주변 상태를 확인합니다.
                </p>
              </article>

              <article className="gh-process-item">
                <span>
                  STEP 03
                </span>

                <h3>
                  수리·보수·교체
                </h3>

                <p>
                  필요한 범위를 정리하고
                  타일 작업을 진행합니다.
                </p>
              </article>

              <article className="gh-process-item">
                <span>
                  STEP 04
                </span>

                <h3>
                  마감 확인
                </h3>

                <p>
                  줄눈과 주변 마감 상태를
                  확인하고 마무리합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* AREA */}

        <section
          id="area"
          className="gh-section gh-section-soft"
        >
          <div className="gh-wrap">
            <div className="gh-section-head">
              <div className="gh-section-main">
                <div className="gh-eyebrow">
                  SERVICE AREA
                </div>

                <h2>
                  서울 · 경기 · 인천
                  <br />
                  지역별 상담
                </h2>
              </div>

              <p>
                지역별 타일수리·타일보수·타일교체
                상세 페이지를 운영하고 있습니다.
              </p>
            </div>

            <div className="gh-area-grid">
              <article className="gh-area">
                <span>
                  SEOUL
                </span>

                <h3>
                  서울
                </h3>

                <p>
                  서울 25개 구
                  타일수리·보수·교체
                </p>

                <div className="gh-area-links">
                  <Link
                    href="/services/tile/seoul/gangnam"
                    className="gh-area-link"
                  >
                    강남구
                  </Link>

                  <Link
                    href="/services/tile/seoul/seocho"
                    className="gh-area-link"
                  >
                    서초구
                  </Link>

                  <Link
                    href="/services/tile/seoul/songpa"
                    className="gh-area-link"
                  >
                    송파구
                  </Link>

                  <Link
                    href="/services/tile/seoul/yeongdeungpo"
                    className="gh-area-link"
                  >
                    영등포구
                  </Link>
                </div>
              </article>

              <article className="gh-area">
                <span>
                  GYEONGGI
                </span>

                <h3>
                  경기
                </h3>

                <p>
                  김포·고양·부천·파주 등
                  주요 경기 지역
                </p>

                <div className="gh-area-links">
                  <Link
                    href="/services/tile/gyeonggi/gimpo"
                    className="gh-area-link"
                  >
                    김포
                  </Link>

                  <Link
                    href="/services/tile/gyeonggi/goyang"
                    className="gh-area-link"
                  >
                    고양
                  </Link>

                  <Link
                    href="/services/tile/gyeonggi/bucheon"
                    className="gh-area-link"
                  >
                    부천
                  </Link>

                  <Link
                    href="/services/tile/gyeonggi/anyang"
                    className="gh-area-link"
                  >
                    안양
                  </Link>
                </div>
              </article>

              <article className="gh-area">
                <span>
                  INCHEON
                </span>

                <h3>
                  인천
                </h3>

                <p>
                  인천 10개 군·구
                  타일수리·보수·교체
                </p>

                <div className="gh-area-links">
                  <Link
                    href="/services/tile/incheon/bupyeong"
                    className="gh-area-link"
                  >
                    부평구
                  </Link>

                  <Link
                    href="/services/tile/incheon/seo"
                    className="gh-area-link"
                  >
                    서구
                  </Link>

                  <Link
                    href="/services/tile/incheon/namdong"
                    className="gh-area-link"
                  >
                    남동구
                  </Link>

                  <Link
                    href="/services/tile/incheon/yeonsu"
                    className="gh-area-link"
                  >
                    연수구
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONSULT */}

        <section className="gh-consult">
          <div className="gh-wrap gh-consult-inner">
            <div>
              <div className="gh-eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                타일 상태를
                <br />
                사진으로 먼저 보여주세요
              </h2>

              <p>
                작업 지역과 파손 부위의 가까운 사진,
                주변 공간이 함께 보이는 사진을
                문자로 보내주시면 작업 가능 여부와
                필요한 확인사항 안내에 도움이 됩니다.
              </p>
            </div>

            <div className="gh-consult-card">
              <strong>
                {PHONE_TEXT}
              </strong>

              <small>
                금손종합보수 사진 문자 상담
              </small>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="gh-section">
          <div className="gh-wrap">
            <div className="gh-section-head">
              <div className="gh-section-main">
                <div className="gh-eyebrow">
                  FAQ
                </div>

                <h2>
                  타일 작업 전
                  <br />
                  많이 묻는 질문
                </h2>
              </div>
            </div>

            <div className="gh-faq-list">
              {FAQS.map(
                (faq) => (
                  <article
                    key={
                      faq.q
                    }
                    className="gh-faq"
                  >
                    <h3>
                      {
                        faq.q
                      }
                    </h3>

                    <p>
                      {
                        faq.a
                      }
                    </p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="gh-footer">
          <div className="gh-wrap gh-footer-grid">
            <div>
              <div className="gh-footer-name">
                {COMPANY}
              </div>

              <p>
                대표자 {OWNER}
                <br />
                타일수리 · 타일보수 · 타일교체
                <br />
                서울 · 경기 · 인천
              </p>
            </div>

            <div className="gh-footer-right">
              <a href={PHONE_LINK}>
                {PHONE_TEXT}
              </a>
            </div>
          </div>
        </footer>

        {/* MOBILE CTA */}

        <div className="gh-mobile">
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
