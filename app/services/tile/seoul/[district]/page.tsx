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

/* =========================================
   서울 25개 구
========================================= */

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

/* =========================================
   지역별 고유 SEO 문장
========================================= */

const DISTRICT_CONTENT: Record<
  DistrictSlug,
  {
    intro: string;
    detail: string;
    point: string;
  }
> = {
  gangnam: {
    intro:
      "욕실 벽타일 한 장의 파손부터 거실 바닥타일, 상가 내부 타일까지 손상 범위를 먼저 확인한 뒤 필요한 부분 위주로 작업합니다.",
    detail:
      "아파트·오피스텔·상가 등 공간의 사용 상태와 기존 타일 규격을 확인해 부분 수리 또는 부분교체 가능 여부를 안내합니다.",
    point:
      "깨짐, 균열, 들뜸, 탈락처럼 눈에 보이는 손상과 주변 타일 상태를 함께 확인합니다.",
  },
  gangdong: {
    intro:
      "깨진 욕실 타일이나 들뜬 벽타일은 손상된 한 장만 문제인지 주변까지 영향을 받은 상태인지 먼저 확인합니다.",
    detail:
      "기존 타일을 최대한 유지하면서 필요한 범위만 정리하는 부분보수와 부분교체를 중심으로 상담합니다.",
    point:
      "타일이 흔들리거나 두드렸을 때 빈 소리가 나는 경우 주변 접착 상태도 함께 확인합니다.",
  },
  gangbuk: {
    intro:
      "오래된 타일의 균열이나 깨짐은 단순 표면 손상인지 접착 상태까지 문제가 있는지 구분하는 과정이 중요합니다.",
    detail:
      "현장 사진을 확인하고 부분 수리, 부분교체 또는 한 면 교체 가운데 필요한 작업 범위를 안내합니다.",
    point:
      "기존과 동일한 타일이 없는 경우 규격과 색상, 패턴이 비슷한 자재 적용 여부를 검토합니다.",
  },
  gangseo: {
    intro:
      "바닥타일이 깨졌거나 욕실 벽타일 일부가 떨어진 경우 전체 철거 전에 부분교체가 가능한지 먼저 확인합니다.",
    detail:
      "파손 위치와 타일 크기, 주변 상태를 확인해 불필요한 철거를 줄이는 방향으로 상담합니다.",
    point:
      "파손 부위와 주변까지 함께 촬영한 사진을 보내주시면 작업 범위 확인에 도움이 됩니다.",
  },
  gwanak: {
    intro:
      "욕실이나 주방처럼 습기가 많은 공간의 타일 손상은 주변 마감과 접착 상태까지 함께 살펴보는 것이 좋습니다.",
    detail:
      "깨진 타일 한 장부터 여러 장 부분교체, 코너 마감보수까지 현장 상태에 맞춰 범위를 정합니다.",
    point:
      "날카로운 파손 단면이 노출된 경우 안전을 위해 상태를 빠르게 확인하는 것이 좋습니다.",
  },
  gwangjin: {
    intro:
      "벽타일 균열이나 거실 바닥타일 파손은 전체 철거 없이 손상된 부분만 교체할 수 있는 경우가 있습니다.",
    detail:
      "타일 크기와 두께, 줄눈 간격, 주변 마감 상태를 확인한 뒤 작업 방법을 안내합니다.",
    point:
      "같은 디자인 타일 확보가 어려우면 규격과 색상이 비슷한 자재 적용 여부를 확인합니다.",
  },
  guro: {
    intro:
      "상가 바닥이나 주거공간의 타일이 깨진 경우 통행에 불편을 주기 전에 파손 범위를 확인하는 것이 좋습니다.",
    detail:
      "손상된 타일 주변 들뜸 여부를 확인하고 필요한 부분 위주로 철거와 재시공을 진행합니다.",
    point:
      "통행량이 많은 바닥은 주변 타일까지 흔들림이 없는지 함께 확인합니다.",
  },
  geumcheon: {
    intro:
      "깨지거나 금이 간 타일은 파손 위치와 사용 공간에 따라 부분 수리와 교체 방법이 달라질 수 있습니다.",
    detail:
      "기존 마감재를 최대한 유지하면서 필요한 타일만 제거하고 새 타일을 맞추는 작업을 검토합니다.",
    point:
      "타일 주변 실리콘이나 줄눈 마감까지 손상된 경우 함께 정리하는 것이 좋습니다.",
  },
  nowon: {
    intro:
      "욕실 벽타일이나 거실 바닥타일의 부분 파손은 전체 리모델링 없이 해당 부위만 보수할 수 있는 경우가 있습니다.",
    detail:
      "사진으로 1차 상태를 확인한 뒤 타일 규격과 작업 범위에 맞춰 상담을 진행합니다.",
    point:
      "파손된 타일 외에 주변 타일 들뜸이나 흔들림이 있는지도 함께 확인합니다.",
  },
  dobong: {
    intro:
      "노후된 욕실이나 주거공간에서 발생하는 타일 균열과 탈락은 손상 상태를 확인한 뒤 필요한 부분 위주로 보수합니다.",
    detail:
      "한 장 부분교체부터 여러 장 교체, 벽면 일부 정리까지 현장 상태에 따라 방법을 구분합니다.",
    point:
      "기존 타일을 보유하고 있다면 상담 사진과 함께 타일 사진도 보내주세요.",
  },
  dongdaemun: {
    intro:
      "깨진 바닥타일이나 벽면 타일 손상은 사용에 불편한 부분부터 우선 확인해 보수 범위를 결정합니다.",
    detail:
      "전체 철거가 필요하지 않은 현장은 부분교체 방식으로 기존 마감을 최대한 유지하도록 상담합니다.",
    point:
      "통행량이 많은 바닥은 주변 타일까지 들뜸이 없는지 확인하는 것이 중요합니다.",
  },
  dongjak: {
    intro:
      "벽타일 깨짐, 바닥타일 균열, 욕실 코너 마감 손상 등 부분적인 문제를 현장 상태에 맞춰 확인합니다.",
    detail:
      "파손 부위 크기와 주변 접착 상태를 살펴보고 부분보수 또는 교체 가운데 필요한 방법을 안내합니다.",
    point:
      "사진 상담 시 가까운 사진과 공간 전체가 보이는 사진을 함께 보내주세요.",
  },
  mapo: {
    intro:
      "벽과 바닥 타일 손상은 공간을 모두 철거하기보다 필요한 구간만 정리해 복원할 수 있는 경우가 있습니다.",
    detail:
      "기존 타일 규격과 색상, 파손 정도를 확인하고 부분교체 가능 여부부터 안내합니다.",
    point:
      "유사 타일 사용 시 주변 마감과 어색하지 않도록 크기와 색감을 함께 확인합니다.",
  },
  seodaemun: {
    intro:
      "욕실이나 거실 타일이 한두 장 깨졌다면 전체 철거보다 부분교체가 가능한 현장인지 먼저 확인합니다.",
    detail:
      "손상 타일 제거 시 주변 타일에 영향을 줄 수 있는 상태인지도 함께 살펴 작업 범위를 정합니다.",
    point:
      "타일 파손 원인이 충격인지 들뜸인지에 따라 필요한 보수 범위가 달라질 수 있습니다.",
  },
  seocho: {
    intro:
      "깨진 욕실 벽타일과 거실 바닥타일은 기존 마감을 최대한 살리면서 필요한 부분만 교체하는 방법을 검토합니다.",
    detail:
      "타일 크기, 줄눈 간격, 주변 상태를 확인해 한 장 교체부터 여러 장 부분교체까지 상담합니다.",
    point:
      "깔끔한 부분교체를 위해 기존 타일과 새 타일의 규격 및 두께 차이를 확인합니다.",
  },
  seongdong: {
    intro:
      "타일 표면이 깨졌거나 벽면 일부가 들뜬 경우 주변 상태까지 확인한 뒤 필요한 부분만 보수합니다.",
    detail:
      "기존 타일을 유지할 수 있는 범위와 철거가 필요한 범위를 구분해 작업 방법을 안내합니다.",
    point:
      "벽타일 탈락은 주변 타일도 접착력이 약해진 상태인지 함께 확인하는 것이 좋습니다.",
  },
  seongbuk: {
    intro:
      "노후된 주거공간 타일 균열과 들뜸은 새 타일을 붙이기 전에 기존 바탕 상태부터 확인합니다.",
    detail:
      "손상 정도와 작업 위치를 확인한 뒤 부분보수, 부분교체 또는 면 단위 교체 여부를 상담합니다.",
    point:
      "오래된 타일은 동일 제품을 구하기 어려울 수 있어 기존 여분 타일 보유 여부를 확인하면 좋습니다.",
  },
  songpa: {
    intro:
      "욕실 벽타일 한 장부터 거실이나 현관 바닥타일까지 파손 범위에 맞춰 부분 수리와 교체를 상담합니다.",
    detail:
      "전체 철거 전에 기존 타일 상태를 확인해 사용할 수 있는 마감은 최대한 유지하는 방향으로 작업합니다.",
    point:
      "들뜬 타일은 깨지지 않았더라도 움직임이나 빈 소리가 나타날 수 있습니다.",
  },
  yangcheon: {
    intro:
      "깨진 타일이나 벌어진 마감은 손상 부위 크기와 주변 상태를 확인한 뒤 필요한 범위를 선택해 보수합니다.",
    detail:
      "욕실과 거실에서 발생하는 부분 파손은 기존 타일 전체를 철거하지 않고 해결 가능한지 먼저 확인합니다.",
    point:
      "작업 전 파손 위치와 타일 전체 크기가 보이는 사진을 보내주세요.",
  },
  yeongdeungpo: {
    intro:
      "주거공간뿐 아니라 상가와 업무공간에서 발생한 바닥타일 깨짐과 들뜸도 상태에 따라 부분보수가 가능합니다.",
    detail:
      "파손 범위와 주변 타일 상태를 확인해 필요한 타일만 선별적으로 철거하는 방법을 검토합니다.",
    point:
      "상가 바닥처럼 사용량이 많은 공간은 주변 추가 들뜸 여부도 함께 확인합니다.",
  },
  yongsan: {
    intro:
      "벽면과 바닥 타일 파손은 기존 마감을 유지하면서 부분적으로 복원할 수 있는지를 먼저 확인합니다.",
    detail:
      "깨진 타일의 크기와 위치, 주변 마감 상태를 확인해 수리·보수·교체 방식을 안내합니다.",
    point:
      "동일 타일이 없는 현장은 유사한 규격과 색상의 자재 적용 가능 여부를 확인합니다.",
  },
  eunpyeong: {
    intro:
      "욕실이나 거실 타일이 부분적으로 깨졌다면 전체 철거가 필요한 상태인지부터 확인하는 것이 좋습니다.",
    detail:
      "기존 타일과 바탕면 상태를 살펴 필요한 부분만 교체 가능한 현장은 부분시공으로 상담합니다.",
    point:
      "타일이 떨어진 현장은 접착면 상태를 확인해야 같은 문제가 반복되는 것을 줄일 수 있습니다.",
  },
  jongno: {
    intro:
      "오래된 벽타일이나 바닥타일 깨짐과 균열은 기존 마감 상태를 확인한 뒤 필요한 부분 위주로 복원합니다.",
    detail:
      "부분교체가 가능한지, 주변 타일까지 철거가 필요한지를 먼저 판단해 작업 범위를 안내합니다.",
    point:
      "노후 타일은 같은 자재가 단종된 경우가 있어 기존 타일 보유 여부가 도움이 됩니다.",
  },
  jung: {
    intro:
      "상가와 주거공간에서 발생하는 타일 파손은 사용에 불편한 부분을 우선 확인하고 필요한 범위만 보수합니다.",
    detail:
      "벽타일, 바닥타일, 욕실 마감 등 손상 위치에 따라 철거와 재시공 방법을 구분합니다.",
    point:
      "바닥타일은 파손 부위가 작아도 통행 중 추가로 깨질 수 있어 주변 상태 확인이 중요합니다.",
  },
  jungnang: {
    intro:
      "깨지거나 들뜬 타일은 전체 공간을 철거하기 전에 부분적으로 수리할 수 있는 상태인지 먼저 확인합니다.",
    detail:
      "타일 한 장 교체부터 욕실 벽면 일부, 거실 바닥 여러 장까지 현장 상태에 맞춰 상담합니다.",
    point:
      "파손 부위와 함께 타일 줄눈과 주변 벽·바닥까지 나오도록 촬영해 주세요.",
  },
};

/* =========================================
   실제 시공사례
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc:
      "깨진 욕실 벽타일을 철거하고 기존 마감과 어울리도록 새 타일을 맞춰 부분 교체한 사례입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
  },
  {
    title: "거실 벽타일 복원",
    desc:
      "손상된 벽타일 부위를 정리한 뒤 새 타일을 맞춰 벽면을 복원한 사례입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc:
      "욕실 바닥 타일을 철거하고 바닥과 코너 부분의 마감을 정리한 사례입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
  },
  {
    title: "욕실 타일 마감보수",
    desc:
      "욕실 코너의 손상되고 벌어진 타일 주변 마감을 깔끔하게 정리한 사례입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
  },
  {
    title: "샤워부스 주변 타일 마감보수",
    desc:
      "샤워부스 프레임 주변의 손상된 타일과 마감 부위를 보수한 사례입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
  },
  {
    title: "벽타일 부분교체",
    desc:
      "기존 벽타일을 부분 철거한 뒤 수평과 줄눈 간격을 확인하며 시공한 사례입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc:
      "기존 화장실 벽타일 한 면을 철거하고 새 타일로 정리한 사례입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
  },
  {
    title: "거실 깨진 바닥타일 보수",
    desc:
      "깨지고 파손된 바닥타일을 제거하고 새 타일로 부분 보수한 사례입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc:
      "상가 복도의 파손된 바닥타일을 철거하고 새 타일을 시공한 사례입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
  },
];

function getFaqs(districtName: string) {
  return [
    {
      q: `${districtName}에서 타일 한 장만 교체할 수 있나요?`,
      a: "현장 상태에 따라 가능합니다. 주변 타일의 들뜸 여부와 기존 타일 규격을 확인한 뒤 필요한 범위를 안내합니다.",
    },
    {
      q: "기존과 같은 타일이 없으면 어떻게 하나요?",
      a: "동일 제품이 없으면 기존 타일의 크기, 두께, 색상과 비슷한 자재 사용 가능 여부를 확인합니다.",
    },
    {
      q: "사진만 보내도 상담할 수 있나요?",
      a: "네. 파손 부위 가까운 사진과 주변 공간이 함께 보이는 사진을 보내주시면 도움이 됩니다.",
    },
    {
      q: "전체 타일을 철거해야 하나요?",
      a: "모든 현장이 전체 철거가 필요한 것은 아닙니다. 상태가 괜찮다면 필요한 부분만 보수할 수 있습니다.",
    },
  ];
}

/* =========================================
   전용 CSS
========================================= */

const PAGE_CSS = `
.gs-page{
  --navy:#122442;
  --navy2:#1d4273;
  --cream:#f5ecd9;
  --gold:#b89456;
  --bg:#f8f8f6;
  --line:#e8e8e4;
  --text:#15233c;
  --muted:#667085;
  background:#fff;
  color:var(--text);
  font-family:-apple-system,BlinkMacSystemFont,"Pretendard","Noto Sans KR","Apple SD Gothic Neo",sans-serif;
  word-break:keep-all;
  overflow-x:hidden;
  padding-bottom:92px;
}

.gs-page *{
  box-sizing:border-box;
}

.gs-page a{
  color:inherit;
  text-decoration:none;
}

.gs-container{
  width:min(1100px,calc(100% - 40px));
  margin:0 auto;
}

.gs-header{
  height:78px;
  display:flex;
  align-items:center;
  background:#fff;
  border-bottom:1px solid #eee;
}

.gs-header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
}

.gs-brand{
  display:flex;
  align-items:center;
  gap:12px;
}

.gs-logo{
  width:48px;
  height:48px;
  border-radius:13px;
  background:var(--navy2);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#d8b66d;
  font-size:20px;
}

.gs-brand-name{
  font-size:20px;
  font-weight:900;
  line-height:1.1;
  letter-spacing:-.04em;
}

.gs-brand-sub{
  margin-top:5px;
  color:var(--gold);
  font-size:10px;
  font-weight:900;
  letter-spacing:.25em;
}

.gs-header-call{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:42px;
  padding:0 17px;
  border-radius:999px;
  background:var(--navy);
  color:#fff!important;
  font-size:14px;
  font-weight:800;
}

.gs-hero{
  padding:68px 0 76px;
  text-align:center;
  background:
    radial-gradient(circle at 50% 0%,rgba(184,148,86,.10),transparent 38%),
    #fafaf9;
  border-bottom:1px solid var(--line);
}

.gs-breadcrumb{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:7px;
  color:#77808e;
  font-size:13px;
  line-height:1.5;
}

.gs-breadcrumb strong{
  color:var(--navy);
}

.gs-label{
  margin-top:24px;
  color:var(--gold);
  font-size:12px;
  font-weight:900;
  letter-spacing:.18em;
}

.gs-hero h1{
  margin:14px auto 0;
  max-width:800px;
  font-size:48px;
  line-height:1.14;
  letter-spacing:-.055em;
  font-weight:900;
  color:var(--navy2);
}

.gs-hero-copy{
  max-width:720px;
  margin:24px auto 0;
  color:#626b78;
  font-size:18px;
  line-height:1.85;
}

.gs-hero-buttons{
  margin-top:30px;
  display:flex;
  justify-content:center;
  gap:10px;
}

.gs-btn{
  min-width:150px;
  min-height:52px;
  padding:0 22px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:14px;
  font-size:15px;
  font-weight:900;
}

.gs-btn-primary{
  background:var(--navy2);
  color:#fff!important;
}

.gs-btn-secondary{
  background:var(--cream);
  color:#71542b!important;
}

.gs-section{
  padding:78px 0;
}

.gs-section-soft{
  background:var(--bg);
}

.gs-head{
  margin-bottom:32px;
}

.gs-head-center{
  text-align:center;
}

.gs-eyebrow{
  color:var(--gold);
  font-size:12px;
  line-height:1;
  font-weight:900;
  letter-spacing:.16em;
  text-transform:uppercase;
}

.gs-head h2{
  margin:12px 0 0;
  color:var(--navy);
  font-size:34px;
  line-height:1.3;
  letter-spacing:-.045em;
  font-weight:900;
}

.gs-head p{
  max-width:720px;
  margin:14px 0 0;
  color:var(--muted);
  font-size:16px;
  line-height:1.8;
}

.gs-head-center p{
  margin-left:auto;
  margin-right:auto;
}

.gs-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:16px;
}

.gs-card{
  border:1px solid var(--line);
  border-radius:20px;
  background:#fff;
  padding:26px;
  box-shadow:0 8px 30px rgba(18,36,66,.04);
}

.gs-card-num{
  display:block;
  margin-bottom:22px;
  color:var(--gold);
  font-size:13px;
  font-weight:900;
  letter-spacing:.05em;
}

.gs-card h3{
  margin:0;
  color:var(--navy);
  font-size:20px;
  line-height:1.4;
  letter-spacing:-.035em;
  font-weight:900;
}

.gs-card p{
  margin:12px 0 0;
  color:#667085;
  font-size:15px;
  line-height:1.8;
}

.gs-gallery{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:22px;
}

.gs-case{
  border:1px solid var(--line);
  border-radius:22px;
  overflow:hidden;
  background:#fff;
}

.gs-case-images{
  display:grid;
  grid-template-columns:1fr 1fr;
}

.gs-case-image{
  position:relative;
  aspect-ratio:1/1;
  overflow:hidden;
  background:#eee;
}

.gs-case-image img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.gs-tag{
  position:absolute;
  left:10px;
  bottom:10px;
  padding:6px 9px;
  border-radius:999px;
  background:rgba(18,36,66,.88);
  color:#fff;
  font-size:11px;
  font-weight:800;
}

.gs-tag-after{
  background:rgba(184,148,86,.92);
}

.gs-case-body{
  padding:22px;
}

.gs-case-body span{
  color:var(--gold);
  font-size:11px;
  font-weight:900;
  letter-spacing:.08em;
}

.gs-case-body h3{
  margin:8px 0 0;
  color:var(--navy);
  font-size:20px;
  line-height:1.4;
  font-weight:900;
  letter-spacing:-.035em;
}

.gs-case-body p{
  margin:10px 0 0;
  color:#667085;
  font-size:14px;
  line-height:1.8;
}

.gs-photo{
  padding:70px 0;
  background:var(--navy);
  color:#fff;
}

.gs-photo-inner{
  display:grid;
  grid-template-columns:1.3fr .7fr;
  gap:36px;
  align-items:center;
}

.gs-photo .gs-eyebrow{
  color:#d4b474;
}

.gs-photo h2{
  margin:12px 0 0;
  font-size:36px;
  line-height:1.3;
  letter-spacing:-.045em;
}

.gs-photo p{
  margin:16px 0 0;
  color:#d7deea;
  font-size:15px;
  line-height:1.8;
}

.gs-photo-card{
  background:#fff;
  border-radius:22px;
  padding:26px;
  color:var(--navy);
}

.gs-photo-card strong{
  display:block;
  font-size:26px;
  letter-spacing:-.03em;
}

.gs-photo-card p{
  color:#697386;
  margin:10px 0 0;
}

.gs-photo-card a{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
  min-height:52px;
  border-radius:13px;
  background:var(--cream);
  color:#6b4d22;
  font-weight:900;
}

.gs-faq{
  display:grid;
  gap:12px;
}

.gs-faq-item{
  border:1px solid var(--line);
  border-radius:16px;
  padding:22px;
  background:#fff;
}

.gs-faq-item h3{
  margin:0;
  color:var(--navy);
  font-size:17px;
  line-height:1.55;
}

.gs-faq-item p{
  margin:10px 0 0;
  color:#667085;
  font-size:14px;
  line-height:1.8;
}

.gs-links{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
}

.gs-region-link{
  display:flex;
  min-height:50px;
  align-items:center;
  justify-content:center;
  padding:10px;
  border:1px solid var(--line);
  border-radius:13px;
  background:#fff;
  color:var(--navy)!important;
  font-size:14px;
  font-weight:800;
}

.gs-cta{
  padding:58px 0;
  background:#f4ecdc;
}

.gs-cta-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:26px;
}

.gs-cta span{
  color:var(--gold);
  font-size:12px;
  font-weight:900;
}

.gs-cta h2{
  margin:8px 0 0;
  font-size:30px;
  line-height:1.3;
  letter-spacing:-.04em;
  color:var(--navy);
}

.gs-cta a{
  flex:none;
  min-width:210px;
  min-height:56px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:15px;
  background:var(--navy);
  color:#fff!important;
  font-size:18px;
  font-weight:900;
}

.gs-footer{
  padding:34px 0 120px;
  background:#0d1c34;
  color:#fff;
}

.gs-footer-inner{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:20px;
}

.gs-footer-company{
  font-size:18px;
  font-weight:900;
}

.gs-footer-text{
  margin-top:8px;
  color:#b6c0cf;
  font-size:13px;
  line-height:1.7;
}

.gs-footer a{
  color:#fff!important;
  font-weight:800;
}

.gs-mobile{
  display:none;
}

/* ================================
   모바일
================================ */

@media(max-width:767px){

  .gs-page{
    padding-bottom:88px;
  }

  .gs-container{
    width:calc(100% - 36px);
  }

  .gs-header{
    height:68px;
  }

  .gs-logo{
    width:42px;
    height:42px;
    border-radius:11px;
    font-size:17px;
  }

  .gs-brand-name{
    font-size:17px;
  }

  .gs-brand-sub{
    margin-top:4px;
    font-size:8px;
  }

  .gs-header-call{
    min-height:38px;
    padding:0 14px;
    font-size:13px;
  }

  .gs-hero{
    padding:50px 0 56px;
  }

  .gs-breadcrumb{
    font-size:12px;
    gap:5px;
  }

  .gs-label{
    margin-top:20px;
    font-size:10px;
  }

  .gs-hero h1{
    margin-top:12px;
    font-size:36px;
    line-height:1.16;
    letter-spacing:-.055em;
  }

  .gs-hero-copy{
    margin-top:20px;
    font-size:15px;
    line-height:1.75;
  }

  .gs-hero-buttons{
    margin-top:26px;
  }

  .gs-btn{
    flex:1;
    min-width:0;
    min-height:48px;
    padding:0 12px;
    font-size:14px;
  }

  .gs-section{
    padding:54px 0;
  }

  .gs-head{
    margin-bottom:24px;
  }

  .gs-eyebrow{
    font-size:10px;
  }

  .gs-head h2{
    margin-top:9px;
    font-size:27px;
    line-height:1.32;
  }

  .gs-head p{
    margin-top:11px;
    font-size:14px;
    line-height:1.75;
  }

  .gs-grid{
    grid-template-columns:1fr;
    gap:12px;
  }

  .gs-card{
    border-radius:17px;
    padding:21px;
  }

  .gs-card-num{
    margin-bottom:14px;
    font-size:11px;
  }

  .gs-card h3{
    font-size:18px;
  }

  .gs-card p{
    margin-top:9px;
    font-size:14px;
    line-height:1.7;
  }

  .gs-gallery{
    grid-template-columns:1fr;
    gap:16px;
  }

  .gs-case{
    border-radius:18px;
  }

  .gs-case-body{
    padding:18px;
  }

  .gs-case-body h3{
    font-size:18px;
  }

  .gs-case-body p{
    font-size:13px;
  }

  .gs-photo{
    padding:54px 0;
  }

  .gs-photo-inner{
    grid-template-columns:1fr;
    gap:22px;
  }

  .gs-photo h2{
    font-size:28px;
  }

  .gs-photo p{
    font-size:14px;
  }

  .gs-photo-card{
    border-radius:17px;
    padding:21px;
  }

  .gs-photo-card strong{
    font-size:22px;
  }

  .gs-faq-item{
    padding:19px;
  }

  .gs-faq-item h3{
    font-size:16px;
  }

  .gs-faq-item p{
    font-size:13px;
  }

  .gs-links{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .gs-region-link{
    min-height:46px;
    font-size:13px;
  }

  .gs-cta{
    padding:46px 0;
  }

  .gs-cta-inner{
    flex-direction:column;
    align-items:flex-start;
  }

  .gs-cta h2{
    font-size:26px;
  }

  .gs-cta a{
    width:100%;
    min-width:0;
    min-height:52px;
    font-size:16px;
  }

  .gs-footer{
    padding:32px 0 120px;
  }

  .gs-footer-inner{
    display:block;
  }

  .gs-footer-right{
    margin-top:20px;
  }

  .gs-mobile{
    position:fixed;
    z-index:9999;
    left:16px;
    right:16px;
    bottom:18px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
    padding:10px;
    border:1px solid rgba(18,36,66,.10);
    border-radius:20px;
    background:rgba(255,255,255,.95);
    box-shadow:0 10px 35px rgba(13,28,52,.16);
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
  }

  .gs-mobile a{
    height:54px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:14px;
    background:var(--navy2);
    color:#fff!important;
    font-size:15px;
    font-weight:900;
  }

  .gs-mobile a:last-child{
    background:var(--cream);
    color:#6b4d22!important;
  }
}
`;

/* =========================================
   STATIC PARAMS
========================================= */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DISTRICTS).map((district) => ({
    district,
  }));
}

/* =========================================
   METADATA
========================================= */

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

  const canonical = `${SITE_URL}/services/tile/seoul/${slug}`;

  const title =
    `${districtName} 타일수리·타일보수·타일교체 | 금손종합보수`;

  const description =
    `${districtName} 깨진 타일 수리·부분보수·교체 상담. ${content.intro} 욕실 벽타일, 바닥타일, 거실·상가 타일 실제 작업사례를 확인하세요.`;

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
          alt: "금손종합보수 실제 타일 보수 사례",
        },
      ],
    },
  };
}

/* =========================================
   PAGE
========================================= */

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

  const allDistricts = Object.entries(DISTRICTS) as [
    DistrictSlug,
    string,
  ][];

  const currentIndex = allDistricts.findIndex(
    ([key]) => key === slug
  );

  const orderedCases = [
    ...beforeAfter.slice(currentIndex % beforeAfter.length),
    ...beforeAfter.slice(0, currentIndex % beforeAfter.length),
  ];

  const cases = orderedCases.slice(0, 6);

  const nearby = [
    ...allDistricts.slice(currentIndex + 1),
    ...allDistricts.slice(0, currentIndex),
  ].slice(0, 8);

  const faqs = getFaqs(districtName);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        `${districtName} 타일수리 타일보수 타일교체`,
      url: canonical,
      serviceType: [
        "타일수리",
        "타일보수",
        "타일교체",
        "깨진타일 부분교체",
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
          name: "타일",
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
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <>
      <style>{PAGE_CSS}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="gs-page">
        <header className="gs-header">
          <div className="gs-container gs-header-inner">
            <Link href="/" className="gs-brand">
              <div className="gs-logo">◆</div>

              <div>
                <div className="gs-brand-name">
                  금손종합보수
                </div>

                <div className="gs-brand-sub">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <a
              href={PHONE_LINK}
              className="gs-header-call"
            >
              전화 상담
            </a>
          </div>
        </header>

        <section className="gs-hero">
          <div className="gs-container">
            <nav className="gs-breadcrumb">
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

            <div className="gs-label">
              SEOUL TILE REPAIR
            </div>

            <h1>
              {districtName} 타일수리
              <br />
              타일보수·타일교체
            </h1>

            <p className="gs-hero-copy">
              {content.intro}
            </p>

            <div className="gs-hero-buttons">
              <a
                href={PHONE_LINK}
                className="gs-btn gs-btn-primary"
              >
                전화 상담
              </a>

              <a
                href={SMS_LINK}
                className="gs-btn gs-btn-secondary"
              >
                사진 문자 상담
              </a>
            </div>
          </div>
        </section>

        <section className="gs-section">
          <div className="gs-container">
            <div className="gs-head">
              <div className="gs-eyebrow">
                LOCAL SERVICE
              </div>

              <h2>
                {districtName} 타일 작업 안내
              </h2>

              <p>
                필요한 범위만 확인해 불필요한
                전체 철거를 줄이는 방향으로
                상담합니다.
              </p>
            </div>

            <div className="gs-grid">
              <article className="gs-card">
                <span className="gs-card-num">
                  01
                </span>

                <h3>현장 상태 확인</h3>

                <p>{content.detail}</p>
              </article>

              <article className="gs-card">
                <span className="gs-card-num">
                  02
                </span>

                <h3>부분 작업 가능 여부</h3>

                <p>
                  손상 면적과 주변 타일의 접착
                  상태를 확인해 필요한 작업
                  범위를 검토합니다.
                </p>
              </article>

              <article className="gs-card">
                <span className="gs-card-num">
                  03
                </span>

                <h3>사진으로 먼저 상담</h3>

                <p>{content.point}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="gs-section gs-section-soft">
          <div className="gs-container">
            <div className="gs-head gs-head-center">
              <div className="gs-eyebrow">
                TILE SERVICE
              </div>

              <h2>
                {districtName} 타일수리·보수
              </h2>

              <p>
                벽타일·바닥타일·욕실·거실·상가 등
                파손 위치와 상태에 따라 필요한
                작업을 확인합니다.
              </p>
            </div>

            <div className="gs-grid">
              {[
                [
                  "깨진 타일 수리",
                  "금이 가거나 깨진 벽·바닥타일의 상태를 확인합니다.",
                ],
                [
                  "벽타일 보수",
                  "욕실과 주방 벽타일의 들뜸·탈락·파손을 확인합니다.",
                ],
                [
                  "바닥타일 보수",
                  "거실·욕실·현관·상가의 깨진 바닥타일을 보수합니다.",
                ],
                [
                  "타일 부분교체",
                  "필요한 타일만 선별해 부분적으로 교체합니다.",
                ],
                [
                  "욕실 타일 수리",
                  "욕실 벽과 바닥, 코너 주변 손상 상태를 확인합니다.",
                ],
                [
                  "상가 타일 보수",
                  "상가·업무공간의 바닥과 벽타일 파손을 상담합니다.",
                ],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className="gs-card"
                >
                  <span className="gs-card-num">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gs-section">
          <div className="gs-container">
            <div className="gs-head gs-head-center">
              <div className="gs-eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                실제 타일 시공사례
              </h2>

              <p>
                금손종합보수의 실제 타일 수리·보수
                작업 전후 사례입니다.
              </p>
            </div>

            <div className="gs-gallery">
              {cases.map((item) => (
                <article
                  key={item.title}
                  className="gs-case"
                >
                  <div className="gs-case-images">
                    <div className="gs-case-image">
                      <img
                        src={item.before}
                        alt={`${item.title} 시공 전`}
                        loading="lazy"
                      />

                      <span className="gs-tag">
                        시공 전
                      </span>
                    </div>

                    <div className="gs-case-image">
                      <img
                        src={item.after}
                        alt={`${item.title} 시공 후`}
                        loading="lazy"
                      />

                      <span className="gs-tag gs-tag-after">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="gs-case-body">
                    <span>
                      ACTUAL WORK
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gs-photo">
          <div className="gs-container gs-photo-inner">
            <div>
              <div className="gs-eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                {districtName} 타일수리
                <br />
                사진으로 먼저 상담하세요
              </h2>

              <p>
                작업 지역, 파손 부위의 가까운
                사진과 주변까지 보이는 전체
                사진을 보내주시면 상담에 도움이
                됩니다.
              </p>
            </div>

            <div className="gs-photo-card">
              <strong>
                {PHONE_DISPLAY}
              </strong>

              <p>
                지역 + 작업내용 + 사진
              </p>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        <section className="gs-section gs-section-soft">
          <div className="gs-container">
            <div className="gs-head">
              <div className="gs-eyebrow">
                FAQ
              </div>

              <h2>
                {districtName} 타일수리
                자주 묻는 질문
              </h2>
            </div>

            <div className="gs-faq">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="gs-faq-item"
                >
                  <h3>{faq.q}</h3>

                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gs-section">
          <div className="gs-container">
            <div className="gs-head">
              <div className="gs-eyebrow">
                SEOUL AREA
              </div>

              <h2>
                서울 다른 지역
              </h2>

              <p>
                서울 지역별 타일수리·타일보수
                페이지를 확인하세요.
              </p>
            </div>

            <div className="gs-links">
              {nearby.map(
                ([nearSlug, nearName]) => (
                  <Link
                    key={nearSlug}
                    href={`/services/tile/seoul/${nearSlug}`}
                    className="gs-region-link"
                  >
                    {nearName} 타일수리
                  </Link>
                )
              )}
            </div>
          </div>
        </section>

        <section className="gs-cta">
          <div className="gs-container gs-cta-inner">
            <div>
              <span>금손종합보수</span>

              <h2>
                {districtName} 타일수리 문의
              </h2>
            </div>

            <a href={PHONE_LINK}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <footer className="gs-footer">
          <div className="gs-container gs-footer-inner">
            <div>
              <div className="gs-footer-company">
                금손종합보수
              </div>

              <div className="gs-footer-text">
                대표자 {OWNER}
              </div>
            </div>

            <div className="gs-footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="gs-footer-text">
                서울 {districtName}
                <br />
                타일수리 · 타일보수 · 타일교체
              </div>
            </div>
          </div>
        </footer>

        <div className="gs-mobile">
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
