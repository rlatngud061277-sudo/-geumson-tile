import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.geumsontile.com";

const COMPANY = "금손종합보수";
const OWNER = "김영호";

const PHONE = "01080561990";
const PHONE_DISPLAY = "010-8056-1990";
const PHONE_LINK = `tel:${PHONE}`;

const SMS_MESSAGE = `안녕하세요. 금손종합보수 타일 시공 문의드립니다.

지역:
작업내용:
파손된 타일 사진을 첨부해서 보내드리겠습니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

/* =========================================================
   서울 25개 구
========================================================= */

const DISTRICTS = {
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
} as const;

type DistrictSlug = keyof typeof DISTRICTS;

/* =========================================================
   지역별 고유 문장
========================================================= */

const DISTRICT_CONTENT: Record<
  DistrictSlug,
  {
    hero: string;
    local: string;
    point: string;
  }
> = {
  gangnam: {
    hero:
      "욕실 벽타일 한 장부터 거실 바닥타일·상가 타일까지 손상 범위를 확인하고 필요한 부분 위주로 보수합니다.",
    local:
      "아파트·오피스텔·상업공간의 깨진 타일, 들뜸, 균열 및 부분교체 상담을 진행합니다.",
    point:
      "전체 철거보다 부분교체가 가능한 현장은 기존 마감을 최대한 유지하는 방향으로 확인합니다.",
  },

  gangdong: {
    hero:
      "깨진 욕실 타일과 들뜬 벽타일은 주변 접착 상태까지 확인한 뒤 필요한 범위를 정합니다.",
    local:
      "주거공간의 욕실·주방·거실과 상가 바닥 타일 보수를 상담합니다.",
    point:
      "타일이 흔들리거나 빈 소리가 나는 경우 주변 타일까지 상태 확인이 필요할 수 있습니다.",
  },

  gangbuk: {
    hero:
      "노후 타일의 균열과 깨짐은 표면 손상과 바탕면 상태를 구분해 작업 범위를 확인합니다.",
    local:
      "욕실 벽면·바닥, 거실, 현관 및 상가 타일 보수 상담을 진행합니다.",
    point:
      "동일 타일이 없을 경우 규격과 색상이 비슷한 자재 적용 여부를 함께 확인합니다.",
  },

  gangseo: {
    hero:
      "깨진 바닥타일과 욕실 벽타일은 전체 철거 전에 부분교체가 가능한 상태인지 먼저 확인합니다.",
    local:
      "아파트·빌라·상가 등 다양한 공간의 벽타일과 바닥타일 손상을 상담합니다.",
    point:
      "사진을 보내실 때 파손 부위와 주변까지 함께 촬영하면 작업 범위 확인에 도움이 됩니다.",
  },

  gwanak: {
    hero:
      "욕실·주방처럼 습기가 많은 공간의 타일 손상은 주변 마감과 접착 상태까지 함께 확인합니다.",
    local:
      "타일 한 장 부분교체부터 여러 장 교체, 코너 마감보수까지 상담합니다.",
    point:
      "파손된 타일의 날카로운 단면이 노출된 경우 빠르게 상태를 확인하는 것이 좋습니다.",
  },

  gwangjin: {
    hero:
      "벽타일 균열이나 거실 바닥타일 파손은 손상 부위만 교체할 수 있는 경우가 있습니다.",
    local:
      "욕실·거실·현관·주방·상가 등 타일이 사용된 다양한 공간을 상담합니다.",
    point:
      "타일 규격과 두께, 줄눈 간격을 확인해 부분교체 가능 여부를 안내합니다.",
  },

  guro: {
    hero:
      "상가 바닥이나 주거공간의 타일이 깨진 경우 주변 들뜸까지 확인한 뒤 보수 범위를 정합니다.",
    local:
      "상가·사무공간·아파트·빌라의 벽타일 및 바닥타일 부분보수를 상담합니다.",
    point:
      "통행량이 많은 바닥은 파손 부위 주변까지 움직임이 있는지 확인하는 것이 좋습니다.",
  },

  geumcheon: {
    hero:
      "깨지거나 금이 간 타일은 파손 위치와 사용 공간에 따라 보수와 교체 방법이 달라집니다.",
    local:
      "욕실 벽면·바닥, 거실, 현관, 상업공간 등의 타일 손상을 확인합니다.",
    point:
      "타일 주변 실리콘이나 줄눈까지 손상된 경우 마감 상태를 함께 확인합니다.",
  },

  nowon: {
    hero:
      "욕실 벽타일이나 거실 바닥타일의 부분 파손은 전체 철거 없이 보수 가능한 경우가 있습니다.",
    local:
      "아파트와 주거공간을 중심으로 벽·바닥 타일 부분수리 및 교체 상담을 진행합니다.",
    point:
      "파손된 타일 외에 주변 타일 들뜸이나 흔들림이 있는지도 함께 확인합니다.",
  },

  dobong: {
    hero:
      "노후 욕실과 주거공간의 타일 균열·탈락은 손상 상태를 먼저 확인한 뒤 필요한 부분만 보수합니다.",
    local:
      "주택·빌라·아파트의 욕실과 거실 타일 보수 상담을 진행합니다.",
    point:
      "기존 여분 타일을 보유하고 있다면 사진과 함께 알려주시면 상담에 도움이 됩니다.",
  },

  dongdaemun: {
    hero:
      "깨진 바닥타일과 벽면 타일 손상은 사용에 불편한 부분부터 우선 확인합니다.",
    local:
      "주거공간과 상가·사무공간의 타일 파손 및 부분보수를 상담합니다.",
    point:
      "통행량이 많은 바닥은 주변 타일까지 들뜸 여부를 함께 확인하는 것이 중요합니다.",
  },

  dongjak: {
    hero:
      "벽타일 깨짐, 바닥 균열, 욕실 코너 손상 등 부분적인 문제를 현장 상태에 맞춰 확인합니다.",
    local:
      "아파트·빌라·주택·상가의 욕실, 거실, 주방 및 바닥 타일을 상담합니다.",
    point:
      "사진 상담 시 가까운 사진과 공간 전체가 보이는 사진을 함께 보내주세요.",
  },

  mapo: {
    hero:
      "벽과 바닥 타일 손상은 전체 철거보다 필요한 구간만 정리해 복원 가능한지 먼저 확인합니다.",
    local:
      "주거공간과 상업공간의 벽·바닥 타일 손상을 상담합니다.",
    point:
      "유사 타일을 사용해야 할 경우 크기와 색감, 기존 마감과의 조화를 함께 확인합니다.",
  },

  seodaemun: {
    hero:
      "욕실이나 거실 타일 한두 장이 깨졌다면 전체 철거보다 부분교체 가능 여부를 먼저 확인합니다.",
    local:
      "아파트·주택·빌라·상가에서 발생한 타일 깨짐과 들뜸, 탈락을 상담합니다.",
    point:
      "타일 파손 원인이 충격인지 들뜸인지에 따라 필요한 작업 범위가 달라질 수 있습니다.",
  },

  seocho: {
    hero:
      "깨진 욕실 벽타일과 거실 바닥타일은 기존 마감을 살리면서 필요한 부분만 교체하는 방법을 검토합니다.",
    local:
      "아파트·오피스텔·주택·상가의 벽타일과 바닥타일 손상을 상담합니다.",
    point:
      "깔끔한 부분교체를 위해 기존 타일과 새 타일의 규격·두께 차이를 확인합니다.",
  },

  seongdong: {
    hero:
      "타일 표면이 깨졌거나 벽면 일부가 들뜬 경우 주변 상태까지 확인해 필요한 부분만 보수합니다.",
    local:
      "욕실·주방·거실·현관과 상가 바닥 등 다양한 타일 공간을 상담합니다.",
    point:
      "벽타일 탈락은 주변 타일까지 접착력이 약해진 상태인지 함께 확인하는 것이 좋습니다.",
  },

  seongbuk: {
    hero:
      "노후된 타일의 균열과 들뜸은 새 타일을 붙이기 전에 기존 바탕 상태를 먼저 확인합니다.",
    local:
      "주택·아파트·빌라의 욕실과 거실을 포함한 타일 보수 상담을 진행합니다.",
    point:
      "오래된 타일은 동일 제품 확보가 어려울 수 있어 기존 여분 타일 보유 여부를 확인하면 좋습니다.",
  },

  songpa: {
    hero:
      "욕실 벽타일 한 장부터 거실·현관 바닥타일까지 파손 범위에 맞춰 부분 수리와 교체를 상담합니다.",
    local:
      "아파트·오피스텔·상가 등 다양한 공간의 벽과 바닥 타일 손상을 확인합니다.",
    point:
      "들뜬 타일은 깨지지 않았더라도 움직임이나 빈 소리가 발생할 수 있습니다.",
  },

  yangcheon: {
    hero:
      "깨진 타일이나 벌어진 마감은 손상 범위와 주변 상태를 확인한 뒤 필요한 부분만 보수합니다.",
    local:
      "아파트와 주택, 상가 바닥 및 벽타일 수리 상담을 진행합니다.",
    point:
      "파손 위치와 타일 전체 크기가 보이는 사진을 보내주시면 상담에 도움이 됩니다.",
  },

  yeongdeungpo: {
    hero:
      "주거공간뿐 아니라 상가·업무공간의 바닥타일 깨짐과 들뜸도 상태에 따라 부분보수가 가능합니다.",
    local:
      "아파트·오피스텔·상가·사무공간의 벽타일과 바닥타일을 상담합니다.",
    point:
      "사용량이 많은 상가 바닥은 주변 추가 들뜸 여부도 함께 확인합니다.",
  },

  yongsan: {
    hero:
      "벽과 바닥의 타일 파손은 기존 마감을 유지하면서 부분적으로 복원 가능한지 먼저 확인합니다.",
    local:
      "주거공간과 상업공간의 욕실, 거실, 현관 및 바닥 타일 상담을 진행합니다.",
    point:
      "동일 타일이 없다면 유사한 규격과 색상의 자재 적용 여부를 확인합니다.",
  },

  eunpyeong: {
    hero:
      "욕실이나 거실 타일이 부분적으로 깨졌다면 전체 철거가 필요한 상태인지부터 확인합니다.",
    local:
      "주택·빌라·아파트의 벽타일과 바닥타일 손상 및 마감보수를 상담합니다.",
    point:
      "타일이 떨어진 현장은 접착면 상태를 확인해야 같은 문제가 반복되는 것을 줄일 수 있습니다.",
  },

  jongno: {
    hero:
      "오래된 벽타일과 바닥타일의 깨짐·균열은 기존 마감 상태를 확인한 뒤 필요한 부분 위주로 복원합니다.",
    local:
      "주택과 상가 등 다양한 형태의 공간에서 발생한 타일 손상을 상담합니다.",
    point:
      "노후 타일은 동일 자재가 단종된 경우가 있어 기존 타일 보유 여부가 도움이 됩니다.",
  },

  jung: {
    hero:
      "상가와 주거공간의 타일 파손은 사용에 불편한 부분부터 확인하고 필요한 범위만 보수합니다.",
    local:
      "상업공간·주거공간의 벽과 바닥 타일 수리 및 부분교체 상담을 진행합니다.",
    point:
      "바닥타일은 파손 부위가 작아도 통행 중 추가 파손이 발생할 수 있습니다.",
  },

  jungnang: {
    hero:
      "깨지거나 들뜬 타일은 전체 철거 전에 부분적으로 수리할 수 있는 상태인지 먼저 확인합니다.",
    local:
      "아파트·주택·빌라·상가의 욕실 및 벽·바닥 타일 손상을 상담합니다.",
    point:
      "파손 부위와 함께 줄눈과 주변 벽·바닥까지 보이도록 촬영해 주세요.",
  },
};

/* =========================================================
   실제 시공사례
========================================================= */

const WORKS = [
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
    title: "벽타일 부분교체",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },
  {
    title: "거실 바닥타일 보수",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },
];

/* =========================================================
   FAQ
========================================================= */

function getFaqs(districtName: string) {
  return [
    {
      q: `${districtName}에서 타일 한 장만 교체할 수 있나요?`,
      a: "주변 타일의 들뜸 여부와 기존 타일 규격을 확인한 뒤 한 장 또는 필요한 부분만 교체 가능한지 안내합니다.",
    },
    {
      q: "같은 타일이 없으면 어떻게 하나요?",
      a: "동일 제품이 없을 경우 기존 타일과 규격·두께·색상이 비슷한 자재 적용 가능 여부를 확인합니다.",
    },
    {
      q: "사진으로 먼저 견적 상담이 가능한가요?",
      a: "파손 부위 가까운 사진과 주변 공간 전체가 보이는 사진을 함께 보내주시면 1차 상담에 도움이 됩니다.",
    },
    {
      q: "전체 타일을 철거해야 하나요?",
      a: "주변 타일과 바탕면 상태가 양호하다면 전체 철거 없이 필요한 부분만 보수할 수 있습니다.",
    },
  ];
}

/* =========================================================
   CSS
========================================================= */

const CSS = `
html{
  -webkit-text-size-adjust:100%;
  text-size-adjust:100%;
}

.gst{
  --navy:#102442;
  --navy2:#193d69;
  --gold:#c2a063;
  --gold-dark:#85652e;
  --cream:#f5ecdc;
  --cream2:#fbf8f2;
  --text:#17243a;
  --muted:#697386;
  --line:#e8e9eb;

  width:100%;
  overflow:hidden;
  background:#fff;
  color:var(--text);
  font-family:-apple-system,BlinkMacSystemFont,"Pretendard","Noto Sans KR","Apple SD Gothic Neo",sans-serif;
  -webkit-text-size-adjust:100%;
  text-size-adjust:100%;
  word-break:keep-all;
}

.gst,
.gst *{
  box-sizing:border-box;
}

.gst a{
  color:inherit;
  text-decoration:none !important;
}

.gst-container{
  width:min(1120px,calc(100% - 40px));
  margin:0 auto;
}

/* HEADER */

.gst-header{
  position:relative;
  z-index:20;
  height:76px;
  display:flex;
  align-items:center;
  background:#fff;
  border-bottom:1px solid #eeeeef;
}

.gst-header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.gst-brand{
  display:flex;
  align-items:center;
  gap:12px;
}

.gst-brand-mark{
  width:44px;
  height:44px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:var(--navy2);
}

.gst-brand-mark span{
  width:12px;
  height:12px;
  display:block;
  background:#d6b66e;
  transform:rotate(45deg);
}

.gst-brand-name{
  color:var(--navy);
  font-size:18px;
  line-height:1.1;
  font-weight:900;
  letter-spacing:-.04em;
}

.gst-brand-small{
  margin-top:5px;
  color:var(--gold-dark);
  font-size:9px;
  font-weight:800;
  letter-spacing:.24em;
}

.gst-header-call{
  min-height:40px;
  padding:0 17px;
  border:1px solid #dce1e7;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--navy) !important;
  font-size:13px;
  font-weight:800;
}

/* HERO */

.gst-hero{
  position:relative;
  overflow:hidden;
  padding:72px 0 66px;
  background:
    radial-gradient(circle at 90% 0%,rgba(194,160,99,.15),transparent 32%),
    linear-gradient(180deg,#fbfaf7 0%,#f7f8f9 100%);
}

.gst-hero::after{
  content:"";
  position:absolute;
  width:270px;
  height:270px;
  right:-130px;
  bottom:-130px;
  border:1px solid rgba(25,61,105,.08);
  border-radius:50%;
}

.gst-breadcrumb{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:7px;
  color:#7e8795;
  font-size:12px;
  line-height:1.4;
}

.gst-breadcrumb strong{
  color:var(--navy);
}

.gst-hero-grid{
  margin-top:29px;
  display:grid;
  grid-template-columns:minmax(0,1fr) 310px;
  gap:64px;
  align-items:end;
}

.gst-kicker{
  color:var(--gold-dark);
  font-size:11px;
  line-height:1;
  font-weight:900;
  letter-spacing:.17em;
}

.gst-hero h1{
  max-width:650px;
  margin:13px 0 0;
  color:var(--navy);
  font-size:47px;
  line-height:1.16;
  letter-spacing:-.06em;
  font-weight:900;
}

.gst-hero-copy{
  max-width:650px;
  margin:20px 0 0;
  color:#667181;
  font-size:16px;
  line-height:1.8;
}

.gst-hero-actions{
  margin-top:27px;
  display:flex;
  gap:9px;
}

.gst-button{
  min-height:50px;
  min-width:145px;
  padding:0 19px;
  border-radius:12px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  font-weight:900;
}

.gst-button-dark{
  background:var(--navy2);
  color:#fff !important;
}

.gst-button-cream{
  background:#efe3cb;
  color:#725428 !important;
}

.gst-hero-panel{
  padding:24px;
  border:1px solid rgba(255,255,255,.8);
  border-radius:20px;
  background:rgba(255,255,255,.72);
  box-shadow:0 15px 45px rgba(16,36,66,.08);
  backdrop-filter:blur(14px);
}

.gst-hero-panel-label{
  color:#9299a5;
  font-size:10px;
  font-weight:800;
  letter-spacing:.13em;
}

.gst-hero-panel-number{
  margin-top:9px;
  color:var(--navy);
  font-size:23px;
  font-weight:900;
}

.gst-hero-panel-line{
  height:1px;
  margin:18px 0;
  background:#e5e6e8;
}

.gst-hero-panel p{
  margin:0;
  color:#697386;
  font-size:13px;
  line-height:1.7;
}

/* QUICK INFO */

.gst-quick{
  position:relative;
  margin-top:-26px;
  z-index:5;
}

.gst-quick-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  border:1px solid var(--line);
  border-radius:18px;
  background:#fff;
  box-shadow:0 12px 35px rgba(16,36,66,.06);
  overflow:hidden;
}

.gst-quick-item{
  padding:22px 24px;
}

.gst-quick-item + .gst-quick-item{
  border-left:1px solid var(--line);
}

.gst-quick-item span{
  color:var(--gold-dark);
  font-size:10px;
  font-weight:900;
  letter-spacing:.11em;
}

.gst-quick-item strong{
  display:block;
  margin-top:7px;
  color:var(--navy);
  font-size:16px;
  line-height:1.4;
}

.gst-quick-item p{
  margin:6px 0 0;
  color:#7a8492;
  font-size:12px;
  line-height:1.55;
}

/* SECTION */

.gst-section{
  padding:74px 0;
}

.gst-section-soft{
  background:#f8f8f7;
}

.gst-section-dark{
  background:var(--navy);
  color:#fff;
}

.gst-section-head{
  display:flex;
  justify-content:space-between;
  gap:50px;
  align-items:flex-end;
  margin-bottom:29px;
}

.gst-section-head-main{
  max-width:650px;
}

.gst-eyebrow{
  color:var(--gold-dark);
  font-size:10px;
  line-height:1;
  font-weight:900;
  letter-spacing:.16em;
}

.gst-section-dark .gst-eyebrow{
  color:#d6b872;
}

.gst-section-head h2{
  margin:10px 0 0;
  color:var(--navy);
  font-size:32px;
  line-height:1.25;
  font-weight:900;
  letter-spacing:-.05em;
}

.gst-section-dark .gst-section-head h2{
  color:#fff;
}

.gst-section-head p{
  max-width:430px;
  margin:0;
  color:#758090;
  font-size:14px;
  line-height:1.75;
}

/* SERVICE */

.gst-service-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:13px;
}

.gst-service-card{
  min-height:190px;
  padding:23px;
  border:1px solid var(--line);
  border-radius:18px;
  background:#fff;
  transition:.2s ease;
}

.gst-service-card:hover{
  transform:translateY(-3px);
  box-shadow:0 12px 30px rgba(16,36,66,.06);
}

.gst-service-icon{
  width:38px;
  height:38px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#f4eddf;
  color:#896829;
  font-size:12px;
  font-weight:900;
}

.gst-service-card h3{
  margin:18px 0 0;
  color:var(--navy);
  font-size:18px;
  line-height:1.35;
  font-weight:900;
  letter-spacing:-.03em;
}

.gst-service-card p{
  margin:9px 0 0;
  color:#717b89;
  font-size:13px;
  line-height:1.7;
}

/* WORK */

.gst-work-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:18px;
}

.gst-work{
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:19px;
  background:#fff;
}

.gst-work-images{
  display:grid;
  grid-template-columns:1fr 1fr;
}

.gst-work-image{
  position:relative;
  aspect-ratio:1.18/1;
  overflow:hidden;
  background:#eee;
}

.gst-work-image img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.gst-work-tag{
  position:absolute;
  left:9px;
  bottom:9px;
  min-width:48px;
  padding:5px 8px;
  border-radius:999px;
  background:rgba(16,36,66,.86);
  color:#fff;
  text-align:center;
  font-size:9px;
  font-weight:900;
}

.gst-work-tag.after{
  background:rgba(171,132,64,.92);
}

.gst-work-body{
  padding:19px 20px 20px;
}

.gst-work-body span{
  color:#9b7a3e;
  font-size:9px;
  font-weight:900;
  letter-spacing:.12em;
}

.gst-work-body h3{
  margin:6px 0 0;
  color:var(--navy);
  font-size:17px;
  line-height:1.4;
  font-weight:900;
}

/* PROCESS */

.gst-process{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.14);
  border-radius:18px;
  background:rgba(255,255,255,.12);
}

.gst-process-item{
  padding:27px 22px;
  background:rgba(255,255,255,.035);
}

.gst-process-num{
  color:#d7b976;
  font-size:10px;
  font-weight:900;
}

.gst-process-item h3{
  margin:15px 0 0;
  color:#fff;
  font-size:17px;
  font-weight:900;
}

.gst-process-item p{
  margin:8px 0 0;
  color:#c2ccda;
  font-size:12px;
  line-height:1.65;
}

/* PHOTO CONSULT */

.gst-consult{
  padding:65px 0;
  background:#f3ead9;
}

.gst-consult-inner{
  display:grid;
  grid-template-columns:1fr auto;
  gap:40px;
  align-items:center;
}

.gst-consult h2{
  margin:9px 0 0;
  color:var(--navy);
  font-size:31px;
  line-height:1.32;
  letter-spacing:-.05em;
}

.gst-consult p{
  margin:12px 0 0;
  color:#736b60;
  font-size:14px;
  line-height:1.7;
}

.gst-consult-card{
  width:300px;
  padding:23px;
  border-radius:18px;
  background:#fff;
  box-shadow:0 10px 28px rgba(85,62,28,.08);
}

.gst-consult-card strong{
  display:block;
  color:var(--navy);
  font-size:22px;
  font-weight:900;
}

.gst-consult-card small{
  display:block;
  margin-top:5px;
  color:#8c8f96;
  font-size:11px;
}

.gst-consult-card a{
  margin-top:17px;
  min-height:47px;
  border-radius:11px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:var(--navy2);
  color:#fff !important;
  font-size:13px;
  font-weight:900;
}

/* FAQ */

.gst-faq-list{
  display:grid;
  gap:10px;
}

.gst-faq{
  padding:19px 21px;
  border:1px solid var(--line);
  border-radius:15px;
  background:#fff;
}

.gst-faq h3{
  margin:0;
  color:var(--navy);
  font-size:15px;
  line-height:1.5;
  font-weight:900;
}

.gst-faq p{
  margin:8px 0 0;
  color:#717b89;
  font-size:13px;
  line-height:1.7;
}

/* AREAS */

.gst-area-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:9px;
}

.gst-area-link{
  min-height:45px;
  padding:10px;
  border:1px solid var(--line);
  border-radius:11px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
  color:var(--navy) !important;
  font-size:12px;
  font-weight:800;
}

/* FOOTER */

.gst-footer{
  padding:40px 0 125px;
  background:#0b1b33;
  color:#fff;
}

.gst-footer-inner{
  display:flex;
  justify-content:space-between;
  gap:20px;
}

.gst-footer-name{
  font-size:17px;
  font-weight:900;
}

.gst-footer p{
  margin:8px 0 0;
  color:#aeb8c7;
  font-size:12px;
  line-height:1.7;
}

.gst-footer a{
  color:#fff !important;
  font-size:14px;
  font-weight:900;
}

/* MOBILE FIXED */

.gst-mobile{
  display:none;
}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:767px){

  .gst-container{
    width:calc(100% - 36px);
  }

  .gst-header{
    height:66px;
  }

  .gst-brand-mark{
    width:40px;
    height:40px;
    border-radius:11px;
  }

  .gst-brand-mark span{
    width:10px;
    height:10px;
  }

  .gst-brand-name{
    font-size:16px;
  }

  .gst-brand-small{
    font-size:7px;
  }

  .gst-header-call{
    min-height:36px;
    padding:0 13px;
    font-size:12px;
  }

  .gst-hero{
    padding:46px 0 57px;
  }

  .gst-breadcrumb{
    font-size:10px;
  }

  .gst-hero-grid{
    display:block;
    margin-top:22px;
  }

  .gst-kicker{
    font-size:9px;
  }

  .gst-hero h1{
    margin-top:10px;
    max-width:330px;
    font-size:34px;
    line-height:1.13;
  }

  .gst-hero-copy{
    margin-top:16px;
    font-size:14px;
    line-height:1.75;
  }

  .gst-hero-actions{
    margin-top:22px;
  }

  .gst-button{
    flex:1;
    min-width:0;
    min-height:47px;
    padding:0 10px;
    font-size:13px;
  }

  .gst-hero-panel{
    display:none;
  }

  .gst-quick{
    margin-top:-20px;
  }

  .gst-quick-grid{
    grid-template-columns:1fr;
    border-radius:15px;
  }

  .gst-quick-item{
    padding:16px 18px;
  }

  .gst-quick-item + .gst-quick-item{
    border-left:0;
    border-top:1px solid var(--line);
  }

  .gst-quick-item strong{
    margin-top:5px;
    font-size:14px;
  }

  .gst-quick-item p{
    font-size:11px;
  }

  .gst-section{
    padding:55px 0;
  }

  .gst-section-head{
    display:block;
    margin-bottom:22px;
  }

  .gst-eyebrow{
    font-size:9px;
  }

  .gst-section-head h2{
    margin-top:8px;
    font-size:25px;
    line-height:1.28;
  }

  .gst-section-head p{
    margin-top:10px;
    max-width:none;
    font-size:13px;
    line-height:1.7;
  }

  .gst-service-grid{
    grid-template-columns:1fr 1fr;
    gap:9px;
  }

  .gst-service-card{
    min-height:158px;
    padding:17px;
    border-radius:15px;
  }

  .gst-service-icon{
    width:32px;
    height:32px;
    border-radius:8px;
    font-size:10px;
  }

  .gst-service-card h3{
    margin-top:13px;
    font-size:15px;
  }

  .gst-service-card p{
    margin-top:7px;
    font-size:11.5px;
    line-height:1.6;
  }

  .gst-work-grid{
    grid-template-columns:1fr;
    gap:13px;
  }

  .gst-work{
    border-radius:16px;
  }

  .gst-work-body{
    padding:16px;
  }

  .gst-work-body h3{
    font-size:15px;
  }

  .gst-process{
    grid-template-columns:1fr 1fr;
  }

  .gst-process-item{
    padding:21px 17px;
  }

  .gst-process-item h3{
    margin-top:10px;
    font-size:15px;
  }

  .gst-process-item p{
    font-size:11px;
  }

  .gst-consult{
    padding:52px 0;
  }

  .gst-consult-inner{
    display:block;
  }

  .gst-consult h2{
    font-size:25px;
  }

  .gst-consult p{
    font-size:13px;
  }

  .gst-consult-card{
    width:100%;
    margin-top:21px;
    padding:19px;
  }

  .gst-consult-card strong{
    font-size:20px;
  }

  .gst-faq{
    padding:17px;
  }

  .gst-faq h3{
    font-size:14px;
  }

  .gst-faq p{
    font-size:12px;
  }

  .gst-area-grid{
    grid-template-columns:1fr 1fr;
    gap:8px;
  }

  .gst-area-link{
    min-height:43px;
    font-size:11px;
  }

  .gst-footer{
    padding:34px 0 120px;
  }

  .gst-footer-inner{
    display:block;
  }

  .gst-footer-right{
    margin-top:18px;
  }

  .gst-mobile{
    position:fixed;
    left:14px;
    right:14px;
    bottom:calc(12px + env(safe-area-inset-bottom));
    z-index:10000;

    display:grid;
    grid-template-columns:1fr 1fr;
    gap:8px;

    padding:8px;
    border:1px solid rgba(16,36,66,.09);
    border-radius:17px;

    background:rgba(255,255,255,.94);
    box-shadow:0 9px 30px rgba(16,36,66,.15);

    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
  }

  .gst-mobile a{
    height:49px;
    border-radius:11px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:var(--navy2);
    color:#fff !important;
    font-size:13px;
    font-weight:900;
  }

  .gst-mobile a:last-child{
    background:#efe3cb;
    color:#715327 !important;
  }
}
`;

/* =========================================================
   STATIC
========================================================= */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DISTRICTS).map((district) => ({
    district,
  }));
}

/* =========================================================
   META
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ district: string }>;
}): Promise<Metadata> {
  const { district } = await params;

  if (!(district in DISTRICTS)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const slug = district as DistrictSlug;
  const districtName = DISTRICTS[slug];
  const content = DISTRICT_CONTENT[slug];

  const canonical =
    `${SITE_URL}/services/tile/seoul/${slug}`;

  const title =
    `${districtName} 타일수리·타일보수·타일교체 | 금손종합보수`;

  const description =
    `${districtName} 깨진 타일 수리·부분보수·타일교체 상담. ${content.hero} 욕실 벽타일, 바닥타일, 거실·상가 타일 실제 작업사례 확인.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/IMG_1179.jpeg`,
          alt: `${COMPANY} 타일 수리 실제 작업`,
        },
      ],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function SeoulDistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district } = await params;

  if (!(district in DISTRICTS)) {
    notFound();
  }

  const slug = district as DistrictSlug;
  const districtName = DISTRICTS[slug];
  const content = DISTRICT_CONTENT[slug];

  const canonical =
    `${SITE_URL}/services/tile/seoul/${slug}`;

  const districtEntries =
    Object.entries(DISTRICTS) as [
      DistrictSlug,
      string
    ][];

  const index = districtEntries.findIndex(
    ([key]) => key === slug
  );

  const nearby = [
    ...districtEntries.slice(index + 1),
    ...districtEntries.slice(0, index),
  ].slice(0, 8);

  const workOffset =
    index % WORKS.length;

  const works = [
    ...WORKS.slice(workOffset),
    ...WORKS.slice(0, workOffset),
  ].slice(0, 4);

  const faqs = getFaqs(districtName);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        `${districtName} 타일수리·타일보수·타일교체`,
      url: canonical,
      serviceType: [
        "타일수리",
        "타일보수",
        "타일교체",
        "깨진 타일 부분교체",
      ],
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: COMPANY,
        telephone: PHONE_DISPLAY,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: `서울특별시 ${districtName}`,
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "타일 전문",
          item: `${SITE_URL}/services/tile`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "서울",
          item: `${SITE_URL}/services/tile/seoul`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: districtName,
          item: canonical,
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  const services = [
    {
      title: "깨진 타일 수리",
      text: "깨짐·균열이 발생한 타일의 손상 범위를 확인합니다.",
    },
    {
      title: "들뜬 타일 보수",
      text: "빈 소리나 움직임이 있는 타일의 접착 상태를 확인합니다.",
    },
    {
      title: "벽타일 교체",
      text: "욕실·주방 등 벽타일의 부분 파손과 탈락을 보수합니다.",
    },
    {
      title: "바닥타일 보수",
      text: "거실·욕실·현관·상가 바닥의 깨진 타일을 보수합니다.",
    },
    {
      title: "타일 부분교체",
      text: "전체 철거 없이 필요한 부분만 선별해 교체합니다.",
    },
    {
      title: "욕실 타일 보수",
      text: "욕실 벽·바닥·코너 주변 파손과 마감 상태를 확인합니다.",
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
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="gst">
        {/* HEADER */}

        <header className="gst-header">
          <div className="gst-container gst-header-inner">
            <Link
              href="/"
              className="gst-brand"
            >
              <div className="gst-brand-mark">
                <span />
              </div>

              <div>
                <div className="gst-brand-name">
                  금손종합보수
                </div>

                <div className="gst-brand-small">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <a
              href={PHONE_LINK}
              className="gst-header-call"
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* HERO */}

        <section className="gst-hero">
          <div className="gst-container">
            <nav className="gst-breadcrumb">
              <Link href="/">홈</Link>
              <span>›</span>

              <Link href="/services/tile">
                타일 전문
              </Link>

              <span>›</span>

              <Link href="/services/tile/seoul">
                서울
              </Link>

              <span>›</span>

              <strong>{districtName}</strong>
            </nav>

            <div className="gst-hero-grid">
              <div>
                <div className="gst-kicker">
                  SEOUL TILE REPAIR
                </div>

                <h1>
                  {districtName}
                  <br />
                  타일수리·타일보수
                </h1>

                <p className="gst-hero-copy">
                  {content.hero}
                </p>

                <div className="gst-hero-actions">
                  <a
                    href={PHONE_LINK}
                    className="gst-button gst-button-dark"
                  >
                    전화 상담
                  </a>

                  <a
                    href={SMS_LINK}
                    className="gst-button gst-button-cream"
                  >
                    사진 상담
                  </a>
                </div>
              </div>

              <div className="gst-hero-panel">
                <div className="gst-hero-panel-label">
                  CONTACT
                </div>

                <div className="gst-hero-panel-number">
                  {PHONE_DISPLAY}
                </div>

                <div className="gst-hero-panel-line" />

                <p>
                  타일 파손 부위와 주변이 함께
                  보이는 사진을 문자로 보내주시면
                  상담에 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK */}

        <section className="gst-quick">
          <div className="gst-container">
            <div className="gst-quick-grid">
              <div className="gst-quick-item">
                <span>AREA</span>
                <strong>
                  서울 {districtName}
                </strong>
                <p>
                  지역별 타일 수리·보수 상담
                </p>
              </div>

              <div className="gst-quick-item">
                <span>SERVICE</span>
                <strong>
                  수리 · 보수 · 부분교체
                </strong>
                <p>
                  필요한 범위 위주로 확인
                </p>
              </div>

              <div className="gst-quick-item">
                <span>PHOTO</span>
                <strong>
                  사진 먼저 상담
                </strong>
                <p>
                  파손 부위 사진 문자 접수
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL */}

        <section className="gst-section">
          <div className="gst-container">
            <div className="gst-section-head">
              <div className="gst-section-head-main">
                <div className="gst-eyebrow">
                  LOCAL SERVICE
                </div>

                <h2>
                  {districtName}에서
                  <br />
                  이런 타일 문제를 상담합니다
                </h2>
              </div>

              <p>
                {content.local}
                <br />
                {content.point}
              </p>
            </div>

            <div className="gst-service-grid">
              {services.map(
                (service, serviceIndex) => (
                  <article
                    key={service.title}
                    className="gst-service-card"
                  >
                    <div className="gst-service-icon">
                      {String(
                        serviceIndex + 1
                      ).padStart(2, "0")}
                    </div>

                    <h3>
                      {service.title}
                    </h3>

                    <p>{service.text}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* WORK */}

        <section className="gst-section gst-section-soft">
          <div className="gst-container">
            <div className="gst-section-head">
              <div className="gst-section-head-main">
                <div className="gst-eyebrow">
                  BEFORE & AFTER
                </div>

                <h2>
                  실제 타일 시공사례
                </h2>
              </div>

              <p>
                금손종합보수의 실제 작업
                전·후 사진입니다.
              </p>
            </div>

            <div className="gst-work-grid">
              {works.map((work) => (
                <article
                  key={work.title}
                  className="gst-work"
                >
                  <div className="gst-work-images">
                    <div className="gst-work-image">
                      <img
                        src={work.before}
                        alt={`${work.title} 시공 전`}
                        loading="lazy"
                      />

                      <span className="gst-work-tag">
                        BEFORE
                      </span>
                    </div>

                    <div className="gst-work-image">
                      <img
                        src={work.after}
                        alt={`${work.title} 시공 후`}
                        loading="lazy"
                      />

                      <span className="gst-work-tag after">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <div className="gst-work-body">
                    <span>ACTUAL WORK</span>

                    <h3>{work.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="gst-section gst-section-dark">
          <div className="gst-container">
            <div className="gst-section-head">
              <div className="gst-section-head-main">
                <div className="gst-eyebrow">
                  PROCESS
                </div>

                <h2>
                  상담부터 마감까지
                  <br />
                  필요한 과정만 깔끔하게
                </h2>
              </div>
            </div>

            <div className="gst-process">
              <div className="gst-process-item">
                <div className="gst-process-num">
                  STEP 01
                </div>

                <h3>사진 접수</h3>

                <p>
                  파손 부위와 주변 사진을
                  문자로 확인합니다.
                </p>
              </div>

              <div className="gst-process-item">
                <div className="gst-process-num">
                  STEP 02
                </div>

                <h3>상태 확인</h3>

                <p>
                  타일 규격과 파손 범위를
                  확인합니다.
                </p>
              </div>

              <div className="gst-process-item">
                <div className="gst-process-num">
                  STEP 03
                </div>

                <h3>부분 시공</h3>

                <p>
                  필요한 범위를 철거하고
                  새 타일을 시공합니다.
                </p>
              </div>

              <div className="gst-process-item">
                <div className="gst-process-num">
                  STEP 04
                </div>

                <h3>마감 확인</h3>

                <p>
                  줄눈과 주변 마감을
                  확인하고 마무리합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULT */}

        <section className="gst-consult">
          <div className="gst-container gst-consult-inner">
            <div>
              <div className="gst-eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                사진 한 장으로
                <br />
                먼저 상담해보세요
              </h2>

              <p>
                지역 + 파손 위치 + 가까운 사진 +
                주변이 보이는 전체 사진을
                보내주세요.
              </p>
            </div>

            <div className="gst-consult-card">
              <strong>
                {PHONE_DISPLAY}
              </strong>

              <small>
                금손종합보수 문자 상담
              </small>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="gst-section">
          <div className="gst-container">
            <div className="gst-section-head">
              <div className="gst-section-head-main">
                <div className="gst-eyebrow">
                  FAQ
                </div>

                <h2>
                  {districtName}
                  <br />
                  타일수리 자주 묻는 질문
                </h2>
              </div>
            </div>

            <div className="gst-faq-list">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="gst-faq"
                >
                  <h3>{faq.q}</h3>

                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER AREA */}

        <section className="gst-section gst-section-soft">
          <div className="gst-container">
            <div className="gst-section-head">
              <div className="gst-section-head-main">
                <div className="gst-eyebrow">
                  SEOUL AREA
                </div>

                <h2>
                  서울 다른 지역
                </h2>
              </div>
            </div>

            <div className="gst-area-grid">
              {nearby.map(
                ([nearSlug, nearName]) => (
                  <Link
                    key={nearSlug}
                    href={`/services/tile/seoul/${nearSlug}`}
                    className="gst-area-link"
                  >
                    {nearName} 타일수리
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="gst-footer">
          <div className="gst-container gst-footer-inner">
            <div>
              <div className="gst-footer-name">
                {COMPANY}
              </div>

              <p>
                대표자 {OWNER}
                <br />
                서울 {districtName} 타일수리 ·
                타일보수 · 타일교체
              </p>
            </div>

            <div className="gst-footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </footer>

        {/* MOBILE CTA */}

        <div className="gst-mobile">
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
