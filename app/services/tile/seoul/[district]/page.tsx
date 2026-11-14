import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =========================================
   기본 정보
========================================= */

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
   지역별 고유 콘텐츠

   단순 지역명 치환이 아니라
   페이지마다 첫 문단과 설명 구조를 다르게 구성
========================================= */

const DISTRICT_CONTENT: Record<
  DistrictSlug,
  {
    intro: string;
    detail: string;
    property: string;
    focus: string;
  }
> = {
  gangnam: {
    intro:
      "욕실 벽타일 한 장의 파손부터 거실 바닥타일, 상가 내부 타일까지 손상 범위를 먼저 확인한 뒤 필요한 부분 위주로 작업합니다.",
    detail:
      "전체 타일을 철거할 필요가 없는 현장은 기존 마감 상태와 타일 규격을 확인해 부분 수리 또는 부분교체 가능 여부를 안내합니다.",
    property:
      "아파트·오피스텔·상가 등 공간의 사용 상태를 고려해 작업 범위를 확인합니다.",
    focus:
      "깨짐, 균열, 들뜸, 탈락처럼 눈에 보이는 손상뿐 아니라 주변 타일 상태도 함께 살펴보는 것이 중요합니다.",
  },

  gangdong: {
    intro:
      "깨진 욕실 타일이나 들뜬 벽타일은 손상된 한 장만 문제가 있는지 주변까지 영향을 받은 상태인지 먼저 확인합니다.",
    detail:
      "기존 타일을 최대한 유지하면서 필요한 범위만 정리하는 부분보수와 부분교체 작업을 중심으로 상담합니다.",
    property:
      "주거공간의 욕실·주방·거실과 상가 바닥 등 다양한 타일 손상 상담이 가능합니다.",
    focus:
      "타일이 흔들리거나 두드렸을 때 빈 소리가 나는 경우에는 주변 접착 상태 확인이 필요할 수 있습니다.",
  },

  gangbuk: {
    intro:
      "오래된 타일의 균열이나 깨짐은 단순 표면 손상인지 접착 상태까지 문제가 있는지 구분하는 과정이 중요합니다.",
    detail:
      "현장 사진을 먼저 확인하고 부분 수리, 부분교체 또는 한 면 교체 가운데 적절한 작업 범위를 안내합니다.",
    property:
      "욕실 벽면과 바닥, 거실 바닥, 현관 및 상가 타일 보수 상담을 진행합니다.",
    focus:
      "기존과 동일한 타일이 없을 경우에는 규격과 색상, 패턴이 비슷한 자재 적용 여부를 함께 검토합니다.",
  },

  gangseo: {
    intro:
      "바닥타일이 깨졌거나 욕실 벽타일 일부가 떨어진 경우 전체 철거 전에 부분교체가 가능한지 먼저 확인할 수 있습니다.",
    detail:
      "파손 위치와 타일 크기, 주변 타일 상태를 확인해 불필요한 철거를 줄이는 방향으로 상담합니다.",
    property:
      "아파트·빌라·상가 등에서 발생한 벽타일과 바닥타일 손상을 폭넓게 확인합니다.",
    focus:
      "사진을 보낼 때 파손 부위뿐 아니라 주변까지 함께 촬영하면 작업 범위를 판단하는 데 도움이 됩니다.",
  },

  gwanak: {
    intro:
      "욕실이나 주방처럼 습기가 많은 공간의 타일 손상은 주변 마감과 접착 상태까지 함께 살펴보는 것이 좋습니다.",
    detail:
      "깨진 타일 한 장부터 여러 장의 부분교체, 코너 마감보수까지 현장 상태에 맞춰 작업 범위를 정합니다.",
    property:
      "주택·빌라·아파트·상가의 부분 타일 수리와 보수 상담을 진행합니다.",
    focus:
      "파손된 부위가 작더라도 날카로운 단면이 노출되어 있다면 안전을 위해 빠르게 상태를 확인하는 것이 좋습니다.",
  },

  gwangjin: {
    intro:
      "벽타일 균열이나 거실 바닥타일 파손은 기존 타일을 모두 철거하지 않고 손상된 부분만 교체할 수 있는 경우가 있습니다.",
    detail:
      "타일 크기와 두께, 줄눈 간격, 주변 마감 상태를 확인한 뒤 작업 방법을 안내합니다.",
    property:
      "욕실·거실·현관·주방·상가 등 타일이 사용된 다양한 공간을 상담합니다.",
    focus:
      "같은 디자인의 타일 확보 여부에 따라 동일 자재 또는 유사 자재를 사용하는 방법을 검토할 수 있습니다.",
  },

  guro: {
    intro:
      "상가 바닥이나 주거공간의 타일이 깨진 경우 통행에 불편을 주기 전에 파손 범위를 확인하는 것이 좋습니다.",
    detail:
      "손상된 타일 주변의 들뜸 여부를 확인하고 필요한 부분 위주로 철거와 재시공을 진행합니다.",
    property:
      "상가·사무공간·아파트·빌라의 벽타일 및 바닥타일 부분보수를 상담합니다.",
    focus:
      "바닥타일은 파손 부위 주변까지 움직임이 있는지 확인하면 추가 보수 범위를 판단하는 데 도움이 됩니다.",
  },

  geumcheon: {
    intro:
      "깨지거나 금이 간 타일은 파손 위치와 사용 공간에 따라 부분 수리와 교체 방법이 달라질 수 있습니다.",
    detail:
      "기존 마감재를 최대한 유지하면서 필요한 타일만 제거하고 새 타일을 맞추는 작업을 우선 검토합니다.",
    property:
      "욕실 벽면과 바닥, 거실, 현관, 상업공간 등의 타일 손상을 확인합니다.",
    focus:
      "타일 주변 실리콘이나 줄눈 마감까지 손상된 경우 함께 정리해야 마감 상태가 깔끔해집니다.",
  },

  nowon: {
    intro:
      "욕실 벽타일이나 거실 바닥타일의 부분 파손은 전체 리모델링 없이 해당 부위만 보수할 수 있는 경우가 많습니다.",
    detail:
      "사진으로 1차 상태를 확인한 뒤 타일 규격과 작업 범위에 맞춰 상담을 진행합니다.",
    property:
      "아파트와 주거공간을 중심으로 벽·바닥 타일 부분수리 및 교체 상담이 가능합니다.",
    focus:
      "파손된 타일 외에 주변 타일의 들뜸이나 흔들림이 있는지도 함께 확인하는 것이 중요합니다.",
  },

  dobong: {
    intro:
      "노후된 욕실이나 주거공간에서 발생하는 타일 균열과 탈락은 손상 원인을 확인한 뒤 적절한 범위만 보수합니다.",
    detail:
      "한 장 부분교체부터 여러 장 교체, 벽면 일부 정리까지 현장 상태에 따라 작업 방법을 구분합니다.",
    property:
      "주택·빌라·아파트의 욕실과 거실을 비롯해 다양한 타일 공간을 상담합니다.",
    focus:
      "기존 타일을 보유하고 있다면 상담 사진과 함께 타일 사진도 보내주면 자재 확인에 도움이 됩니다.",
  },

  dongdaemun: {
    intro:
      "깨진 바닥타일이나 벽면 타일 손상은 사용에 불편을 주는 부분부터 우선 확인해 보수 범위를 결정합니다.",
    detail:
      "전체 철거가 필요하지 않은 현장은 부분교체 방식으로 기존 마감을 최대한 유지하도록 상담합니다.",
    property:
      "주거공간은 물론 상가와 사무공간의 타일 파손 및 부분보수도 상담합니다.",
    focus:
      "통행량이 많은 바닥은 주변 타일까지 흔들림이 없는지 확인하는 과정이 중요합니다.",
  },

  dongjak: {
    intro:
      "벽타일 깨짐, 바닥타일 균열, 욕실 코너 마감 손상 등 부분적인 문제를 현장 상태에 맞춰 확인합니다.",
    detail:
      "파손 부위 크기와 주변 접착 상태를 살펴보고 부분보수 또는 교체 가운데 적절한 방법을 안내합니다.",
    property:
      "아파트·빌라·주택·상가의 욕실, 거실, 주방 및 바닥 타일을 상담합니다.",
    focus:
      "사진 상담 시 가까운 사진과 공간 전체가 보이는 사진을 함께 보내면 상태 파악이 쉽습니다.",
  },

  mapo: {
    intro:
      "벽과 바닥의 타일 손상은 공간을 모두 철거하기보다 필요한 구간만 정리해 복원할 수 있는 경우가 있습니다.",
    detail:
      "기존 타일의 규격과 색상, 파손 정도를 확인하고 부분교체 가능 여부부터 안내합니다.",
    property:
      "주거공간과 상업공간에서 발생한 다양한 벽·바닥 타일 손상을 상담합니다.",
    focus:
      "유사 타일을 사용해야 하는 경우 주변 마감과 어색하지 않도록 크기와 색감을 함께 확인합니다.",
  },

  seodaemun: {
    intro:
      "욕실이나 거실의 타일이 한두 장 깨졌다면 전체 철거보다 부분교체가 효율적인 현장인지 먼저 확인합니다.",
    detail:
      "손상된 타일을 제거할 때 주변 타일에 영향을 줄 수 있는 상태인지도 함께 살펴 작업 범위를 정합니다.",
    property:
      "아파트·주택·빌라·상가 등에서 발생한 타일 깨짐과 들뜸, 탈락을 상담합니다.",
    focus:
      "타일 파손 원인이 충격인지 들뜸인지에 따라 필요한 보수 범위가 달라질 수 있습니다.",
  },

  seocho: {
    intro:
      "깨진 욕실 벽타일과 거실 바닥타일은 기존 마감을 최대한 살리면서 필요한 부분만 교체하는 방법을 우선 검토합니다.",
    detail:
      "타일 크기, 줄눈 간격, 주변 타일 상태를 확인해 한 장 교체부터 여러 장 부분교체까지 상담합니다.",
    property:
      "아파트·오피스텔·주택·상가의 벽타일과 바닥타일 손상을 확인합니다.",
    focus:
      "깔끔한 부분교체를 위해서는 기존 타일과 새 타일의 규격 및 두께 차이를 확인하는 과정이 중요합니다.",
  },

  seongdong: {
    intro:
      "타일 표면이 깨졌거나 벽면 일부가 들뜬 경우 주변 상태까지 확인한 뒤 필요한 부분만 보수합니다.",
    detail:
      "기존 타일을 유지할 수 있는 범위와 철거가 필요한 범위를 구분해 작업 방법을 안내합니다.",
    property:
      "욕실·주방·거실·현관과 상가 바닥 등 다양한 타일 공간의 상담이 가능합니다.",
    focus:
      "벽타일 탈락은 주변 타일도 접착력이 약해진 상태인지 함께 확인하는 것이 좋습니다.",
  },

  seongbuk: {
    intro:
      "노후된 주거공간에서 생기는 타일 균열과 들뜸은 단순히 새 타일을 붙이기 전에 기존 바탕 상태를 확인해야 합니다.",
    detail:
      "손상 정도와 작업 위치를 확인한 후 부분보수, 부분교체 또는 면 단위 교체 여부를 상담합니다.",
    property:
      "주택·아파트·빌라의 욕실과 거실을 포함한 타일 보수 작업을 상담합니다.",
    focus:
      "오래된 타일은 동일 제품을 구하기 어려울 수 있어 보유 자재 여부를 미리 확인하면 좋습니다.",
  },

  songpa: {
    intro:
      "욕실 벽타일 한 장부터 거실이나 현관의 바닥타일까지 파손 범위에 맞춰 부분 수리와 교체를 상담합니다.",
    detail:
      "전체 철거 전에 기존 타일의 상태를 확인해 사용할 수 있는 마감은 최대한 유지하는 방향으로 작업합니다.",
    property:
      "아파트·오피스텔·상가 등 다양한 공간의 벽과 바닥 타일 손상을 확인합니다.",
    focus:
      "들뜬 타일은 겉으로 깨지지 않았더라도 움직임이나 빈 소리가 나타날 수 있어 상태 확인이 필요합니다.",
  },

  yangcheon: {
    intro:
      "깨진 타일이나 벌어진 마감은 손상된 부위의 크기와 주변 상태를 확인한 뒤 필요한 범위를 선택해 보수합니다.",
    detail:
      "욕실과 거실에서 발생하는 부분 파손은 기존 타일을 모두 철거하지 않고 해결 가능한지 먼저 확인합니다.",
    property:
      "아파트와 주택을 비롯해 상가 바닥 및 벽타일 수리 상담을 진행합니다.",
    focus:
      "작업 전 파손 위치와 타일 전체 크기가 보이는 사진을 보내면 상담에 도움이 됩니다.",
  },

  yeongdeungpo: {
    intro:
      "주거공간뿐 아니라 상가와 업무공간에서 발생한 바닥타일 깨짐과 들뜸도 상태에 따라 부분보수가 가능합니다.",
    detail:
      "파손 범위와 주변 타일의 상태를 먼저 확인해 필요한 타일만 선별적으로 철거하는 방법을 검토합니다.",
    property:
      "아파트·오피스텔·상가·사무공간의 벽타일과 바닥타일을 상담합니다.",
    focus:
      "상가 바닥처럼 사용량이 많은 공간은 파손 부위 주변의 추가 들뜸 여부도 함께 확인하는 것이 좋습니다.",
  },

  yongsan: {
    intro:
      "벽면과 바닥의 타일 파손은 기존 마감을 유지하면서 부분적으로 복원할 수 있는지를 먼저 확인합니다.",
    detail:
      "깨진 타일의 크기와 위치, 주변 마감 상태를 확인해 수리·보수·교체 가운데 필요한 방식을 안내합니다.",
    property:
      "주거공간과 상업공간의 욕실, 거실, 현관 및 바닥 타일 상담이 가능합니다.",
    focus:
      "동일 타일이 없는 현장은 유사한 규격과 색상의 자재 적용 가능 여부를 함께 확인할 수 있습니다.",
  },

  eunpyeong: {
    intro:
      "욕실이나 거실 타일이 부분적으로 깨졌다면 전체 철거가 필요한 상태인지부터 확인하는 것이 좋습니다.",
    detail:
      "기존 타일과 바탕면 상태를 살펴 필요한 부분만 교체할 수 있는 현장은 부분시공 방식으로 상담합니다.",
    property:
      "주택·빌라·아파트의 벽타일과 바닥타일 손상 및 마감보수를 상담합니다.",
    focus:
      "타일이 떨어진 현장은 접착면 상태를 확인해야 같은 문제가 반복되는 것을 줄일 수 있습니다.",
  },

  jongno: {
    intro:
      "오래된 벽타일이나 바닥타일의 깨짐과 균열은 기존 마감 상태를 확인한 뒤 필요한 부분 위주로 복원합니다.",
    detail:
      "부분교체가 가능한지, 주변 타일까지 철거가 필요한지를 먼저 판단해 작업 범위를 안내합니다.",
    property:
      "주택과 상가 등 다양한 형태의 공간에서 발생한 타일 손상을 상담합니다.",
    focus:
      "노후 타일은 같은 자재가 단종된 경우가 있어 기존 타일 보유 여부가 작업 방법 결정에 도움이 됩니다.",
  },

  jung: {
    intro:
      "상가와 주거공간에서 발생하는 타일 파손은 사용에 불편한 부분을 우선 확인하고 필요한 범위만 보수합니다.",
    detail:
      "벽타일, 바닥타일, 욕실 마감 등 손상 위치에 따라 철거와 재시공 방법을 구분해 상담합니다.",
    property:
      "상업공간·주거공간의 벽과 바닥 타일 수리 및 부분교체 상담을 진행합니다.",
    focus:
      "바닥타일은 파손 부위가 작아도 통행 중 추가로 깨질 수 있어 주변 상태 확인이 중요합니다.",
  },

  jungnang: {
    intro:
      "깨지거나 들뜬 타일은 전체 공간을 철거하기 전에 부분적으로 수리할 수 있는 상태인지 먼저 확인합니다.",
    detail:
      "타일 한 장 교체부터 욕실 벽면 일부, 거실 바닥 여러 장까지 현장 상태에 맞춰 상담합니다.",
    property:
      "아파트·주택·빌라·상가의 욕실 및 벽·바닥 타일 손상을 확인합니다.",
    focus:
      "사진 상담 시 파손 부위와 함께 타일 줄눈과 주변 벽·바닥까지 나오도록 촬영하면 좋습니다.",
  },
};

/* =========================================
   실제 시공사례

   특정 지역에서 작업한 것처럼 표시하지 않고
   금손종합보수의 실제 작업 참고 사례로 사용
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc:
      "깨진 욕실 벽타일을 철거하고 기존 마감과 어울리도록 새 타일을 맞춰 부분 교체한 사례입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    beforeAlt: "깨진 욕실 벽타일 부분교체 전 실제 작업 사진",
    afterAlt: "욕실 벽타일 부분교체 후 실제 작업 사진",
  },
  {
    title: "거실 벽타일 복원",
    desc:
      "손상된 벽타일 부위를 정리한 뒤 새 타일을 맞춰 벽면을 복원한 사례입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    beforeAlt: "거실 벽타일 손상 복원 전 실제 작업 사진",
    afterAlt: "거실 벽타일 복원 후 실제 작업 사진",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc:
      "기존 욕실 바닥 타일을 철거하고 바닥과 코너 부분의 마감을 정리한 사례입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    beforeAlt: "욕실 바닥 코너 타일 보수 전 실제 작업 사진",
    afterAlt: "욕실 바닥 코너 타일 보수 후 실제 작업 사진",
  },
  {
    title: "욕실 타일 마감보수",
    desc:
      "욕실 코너의 손상되고 벌어진 타일 주변 마감을 깔끔하게 정리한 사례입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    beforeAlt: "욕실 타일 마감보수 전 실제 작업 사진",
    afterAlt: "욕실 타일 마감보수 후 실제 작업 사진",
  },
  {
    title: "샤워부스 주변 타일 마감보수",
    desc:
      "샤워부스 프레임 주변의 손상된 타일과 마감 부위를 확인해 보수한 사례입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
    beforeAlt: "샤워부스 주변 타일 보수 전 실제 작업 사진",
    afterAlt: "샤워부스 주변 타일 보수 후 실제 작업 사진",
  },
  {
    title: "벽타일 부분교체·수평시공",
    desc:
      "기존 벽타일을 부분 철거한 뒤 수평과 줄눈 간격을 확인하며 새 타일을 시공한 사례입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    beforeAlt: "벽타일 부분교체 수평시공 전 실제 작업 사진",
    afterAlt: "벽타일 부분교체 수평시공 후 실제 작업 사진",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc:
      "기존 화장실 벽타일 한 면을 철거하고 새 타일로 정리한 실제 작업 사례입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
    beforeAlt: "화장실 벽타일 한 면 교체 전 실제 작업 사진",
    afterAlt: "화장실 벽타일 한 면 교체 후 실제 작업 사진",
  },
  {
    title: "거실 깨진 바닥타일 보수",
    desc:
      "깨지고 파손된 바닥타일을 제거하고 새 타일로 부분 보수한 실제 작업 사례입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
    beforeAlt: "거실 깨진 바닥타일 보수 전 실제 작업 사진",
    afterAlt: "거실 깨진 바닥타일 보수 후 실제 작업 사진",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc:
      "상가 복도의 파손된 바닥타일을 철거하고 바탕면을 정리한 뒤 새 타일을 시공한 사례입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
    beforeAlt: "상가 복도 바닥타일 보수 전 실제 작업 사진",
    afterAlt: "상가 복도 바닥타일 보수 후 실제 작업 사진",
  },
];

/* =========================================
   FAQ
========================================= */

function getFaqs(districtName: string) {
  return [
    {
      question: `${districtName}에서 깨진 타일 한 장만 교체할 수 있나요?`,
      answer:
        "현장 상태에 따라 가능합니다. 파손된 타일 주변의 들뜸 여부와 기존 타일 규격을 먼저 확인한 뒤 한 장 또는 필요한 범위만 부분교체할 수 있는지 안내합니다.",
    },
    {
      question: "기존과 같은 타일이 없으면 어떻게 하나요?",
      answer:
        "동일 제품이 단종되었거나 구하기 어려운 경우에는 기존 타일의 크기, 두께, 색상과 비슷한 자재를 사용할 수 있는지 확인합니다. 기존 여분 타일을 보유하고 있다면 상담할 때 알려주세요.",
    },
    {
      question: "사진만 보내도 먼저 상담할 수 있나요?",
      answer:
        "네. 파손 부위를 가까이 촬영한 사진과 주변 공간까지 보이는 사진을 함께 문자로 보내주시면 작업 범위를 파악하는 데 도움이 됩니다.",
    },
    {
      question: "타일 전체를 철거해야 하나요?",
      answer:
        "모든 현장이 전체 철거를 필요로 하는 것은 아닙니다. 주변 타일과 바탕면 상태에 문제가 없다면 필요한 부분만 철거해 보수하거나 교체할 수 있습니다.",
    },
    {
      question: `${districtName} 욕실 벽타일과 바닥타일 모두 상담 가능한가요?`,
      answer:
        "네. 욕실 벽타일, 바닥타일, 코너 마감, 거실 바닥타일, 현관 및 상가 타일 등 다양한 부분보수와 교체 상담이 가능합니다.",
    },
  ];
}

/* =========================================
   정적 페이지 생성
========================================= */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DISTRICTS).map((district) => ({
    district,
  }));
}

/* =========================================
   Metadata
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

  const title = `${districtName} 타일수리·타일보수·타일교체 | 금손종합보수`;

  const description = `${districtName} 깨진 타일 수리·부분보수·교체 상담. ${content.intro} 욕실 벽타일, 바닥타일, 거실·상가 타일 실제 작업사례를 확인하세요.`;

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
      googleBot: {
        index: true,
        follow: true,
      },
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
          width: 1200,
          height: 630,
          alt: `${COMPANY} 타일 수리 및 부분교체 실제 작업사례`,
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

  const canonical = `${SITE_URL}/services/tile/seoul/${slug}`;

  const districtEntries = Object.entries(DISTRICTS) as [
    DistrictSlug,
    string,
  ][];

  const currentIndex = districtEntries.findIndex(
    ([districtSlug]) => districtSlug === slug
  );

  /*
    각 지역 페이지에서 실제 사례가 같은 순서로
    반복되지 않도록 시작 위치를 변경합니다.
    실제 사례 자체를 특정 지역 시공이라고 주장하지 않습니다.
  */
  const orderedCases = [
    ...beforeAfter.slice(currentIndex % beforeAfter.length),
    ...beforeAfter.slice(0, currentIndex % beforeAfter.length),
  ];

  const visibleCases = orderedCases.slice(0, 6);

  /*
    주변 지역 내부링크 역시 현재 지역을 기준으로
    순서를 변경합니다.
  */
  const nearbyDistricts = [
    ...districtEntries.slice(currentIndex + 1),
    ...districtEntries.slice(0, currentIndex),
  ].slice(0, 8);

  const faqs = getFaqs(districtName);

  /* =========================================
     구조화 데이터
  ========================================= */

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    founder: OWNER,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "서울특별시",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: `${districtName} 타일수리·타일보수·타일교체`,
    url: canonical,
    description: `${districtName} 깨진 타일, 벽타일, 바닥타일의 부분수리·보수·교체 상담 서비스입니다.`,
    serviceType: [
      "타일수리",
      "타일보수",
      "타일교체",
      "깨진 타일 부분교체",
      "욕실 타일 보수",
      "벽타일 수리",
      "바닥타일 보수",
    ],
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `서울특별시 ${districtName}`,
    },
  };

  const breadcrumbSchema = {
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
        name: "타일 수리",
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schemaData = [
    businessSchema,
    serviceSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="clean-area-page">
        {/* =========================================
            HEADER
        ========================================= */}

        <header className="clean-area-header">
          <div className="container clean-area-header-inner">
            <Link href="/" className="brand">
              <div className="brand-mark">◆</div>

              <div>
                <div className="brand-name">금손종합보수</div>

                <div className="brand-sub">TILE REPAIR</div>
              </div>
            </Link>

            <a
              href={PHONE_LINK}
              className="clean-area-header-call"
              aria-label={`${COMPANY} 전화 상담`}
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* =========================================
            HERO
        ========================================= */}

        <section className="clean-area-hero">
          <div className="container">
            <nav
              className="clean-area-breadcrumb"
              aria-label="현재 페이지 위치"
            >
              <Link href="/">홈</Link>

              <span>›</span>

              <Link href="/services/tile">
                타일 수리
              </Link>

              <span>›</span>

              <Link href="/services/tile/seoul">
                서울
              </Link>

              <span>›</span>

              <strong>{districtName}</strong>
            </nav>

            <div className="clean-area-label">
              SEOUL TILE REPAIR
            </div>

            <h1>
              {districtName} 타일수리
              <br />
              타일보수·타일교체
            </h1>

            <p>
              {content.intro}
            </p>

            <div className="clean-area-hero-buttons">
              <a
                href={PHONE_LINK}
                className="clean-area-primary"
              >
                전화 상담
              </a>

              <a
                href={SMS_LINK}
                className="clean-area-secondary"
              >
                사진 문자 상담
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            지역 작업 안내
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>LOCAL TILE SERVICE</span>

              <h2>
                {districtName} 타일 작업 안내
              </h2>

              <p>
                깨진 타일 한 장부터 벽면·바닥의
                부분보수까지 현장 상태에 맞춰
                작업 범위를 확인합니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>01</strong>

                <h3>
                  필요한 부분부터 확인
                </h3>

                <p>{content.detail}</p>
              </article>

              <article>
                <strong>02</strong>

                <h3>
                  다양한 공간 상담
                </h3>

                <p>{content.property}</p>
              </article>

              <article>
                <strong>03</strong>

                <h3>
                  주변 타일까지 확인
                </h3>

                <p>{content.focus}</p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
            서비스 종류
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>TILE SERVICE</span>

              <h2>
                {districtName} 타일수리·보수 서비스
              </h2>

              <p>
                파손 위치와 타일 상태에 따라
                수리, 부분보수, 부분교체 방법을
                구분합니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>01</strong>

                <h3>깨진 타일 수리</h3>

                <p>
                  충격이나 노후로 금이 가거나
                  깨진 타일의 상태를 확인합니다.
                </p>
              </article>

              <article>
                <strong>02</strong>

                <h3>벽타일 보수</h3>

                <p>
                  욕실과 주방 등의 벽타일 깨짐,
                  들뜸, 탈락을 확인합니다.
                </p>
              </article>

              <article>
                <strong>03</strong>

                <h3>바닥타일 보수</h3>

                <p>
                  거실·욕실·현관·상가의 깨진
                  바닥타일을 부분 보수합니다.
                </p>
              </article>

              <article>
                <strong>04</strong>

                <h3>타일 부분교체</h3>

                <p>
                  전체 철거가 필요하지 않은 경우
                  필요한 타일만 선별해 교체합니다.
                </p>
              </article>

              <article>
                <strong>05</strong>

                <h3>욕실 타일 보수</h3>

                <p>
                  욕실 벽과 바닥, 코너 주변의
                  파손과 마감 상태를 확인합니다.
                </p>
              </article>

              <article>
                <strong>06</strong>

                <h3>상가 타일 보수</h3>

                <p>
                  상가와 업무공간의 깨진 바닥 및
                  벽타일 부분보수를 상담합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
            실제 시공사례
        ========================================= */}

        <section className="before-after-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                금손종합보수 실제 타일 시공사례
              </h2>

              <p>
                {districtName} 타일수리·보수 상담 전
                작업 범위를 참고할 수 있는
                금손종합보수의 실제 시공 전후
                사례입니다.
              </p>
            </div>

            <div className="before-after-grid">
              {visibleCases.map((item) => (
                <article
                  key={item.title}
                  className="before-after-card"
                >
                  <div className="before-after-images">
                    <div className="before-after-image-box">
                      <img
                        src={item.before}
                        alt={item.beforeAlt}
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={item.afterAlt}
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="after-label">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="before-after-content">
                    <span>
                      실제 타일 작업사례
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            이런 경우 문의
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>CHECK POINT</span>

              <h2>
                이런 타일 손상이라면
                상담해보세요
              </h2>

              <p>
                작은 파손이라도 주변 상태에 따라
                작업 범위가 달라질 수 있습니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>01</strong>
                <h3>타일 한 장 깨짐</h3>
                <p>
                  충격으로 벽 또는 바닥타일
                  한 장이 깨진 경우
                </p>
              </article>

              <article>
                <strong>02</strong>
                <h3>타일 균열</h3>
                <p>
                  표면에 금이 가거나 균열이
                  점점 길어지는 경우
                </p>
              </article>

              <article>
                <strong>03</strong>
                <h3>타일 들뜸</h3>
                <p>
                  타일이 흔들리거나 두드렸을 때
                  빈 소리가 나는 경우
                </p>
              </article>

              <article>
                <strong>04</strong>
                <h3>벽타일 탈락</h3>
                <p>
                  욕실이나 주방의 벽타일이
                  떨어지거나 벌어진 경우
                </p>
              </article>

              <article>
                <strong>05</strong>
                <h3>코너 마감 손상</h3>
                <p>
                  타일 코너와 주변 마감이
                  깨지거나 벌어진 경우
                </p>
              </article>

              <article>
                <strong>06</strong>
                <h3>상가 바닥 파손</h3>
                <p>
                  통행이 많은 공간의 바닥타일이
                  깨지거나 들뜬 경우
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
            작업 과정
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>WORK PROCESS</span>

              <h2>
                타일 보수 상담 진행 과정
              </h2>

              <p>
                먼저 사진으로 상태를 확인하면
                필요한 작업 범위를 파악하는 데
                도움이 됩니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>STEP 01</strong>

                <h3>사진 확인</h3>

                <p>
                  파손 부위와 주변 공간이 보이는
                  사진을 문자로 보내주세요.
                </p>
              </article>

              <article>
                <strong>STEP 02</strong>

                <h3>상태 상담</h3>

                <p>
                  타일 위치, 크기, 손상 범위와
                  기존 자재 보유 여부를 확인합니다.
                </p>
              </article>

              <article>
                <strong>STEP 03</strong>

                <h3>작업 범위 확인</h3>

                <p>
                  한 장 수리인지 여러 장 교체인지
                  필요한 범위를 확인합니다.
                </p>
              </article>

              <article>
                <strong>STEP 04</strong>

                <h3>기존 타일 철거</h3>

                <p>
                  주변 마감을 고려해 손상된
                  타일을 필요한 범위만 철거합니다.
                </p>
              </article>

              <article>
                <strong>STEP 05</strong>

                <h3>타일 시공</h3>

                <p>
                  수평과 줄눈 간격을 확인하며
                  새 타일을 맞춰 시공합니다.
                </p>
              </article>

              <article>
                <strong>STEP 06</strong>

                <h3>마감 확인</h3>

                <p>
                  작업 부위와 주변 마감을
                  확인한 뒤 작업을 마무리합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
            견적에 필요한 정보
        ========================================= */}

        <section className="clean-area-photo">
          <div className="container clean-area-photo-inner">
            <div>
              <span>PHOTO CONSULT</span>

              <h2>
                {districtName} 타일수리
                <br />
                사진으로 먼저 상담하세요
              </h2>

              <p>
                아래 정보와 사진을 문자로 보내주시면
                작업 범위를 확인하는 데 도움이 됩니다.
              </p>

              <p>
                ① 작업 지역
                <br />
                ② 파손 위치
                <br />
                ③ 타일 전체 크기
                <br />
                ④ 가까운 사진
                <br />
                ⑤ 주변까지 보이는 사진
                <br />
                ⑥ 기존 여분 타일 보유 여부
              </p>
            </div>

            <div className="clean-area-photo-card">
              <strong>{PHONE_DISPLAY}</strong>

              <p>
                지역 + 작업내용 + 사진
              </p>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            FAQ
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>FAQ</span>

              <h2>
                {districtName} 타일수리
                자주 묻는 질문
              </h2>

              <p>
                부분보수와 타일교체 상담 전
                많이 문의하는 내용을 정리했습니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              {faqs.map((faq, index) => (
                <article key={faq.question}>
                  <strong>
                    Q{String(index + 1).padStart(2, "0")}
                  </strong>

                  <h3>{faq.question}</h3>

                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            주변 서울 지역 내부링크
        ========================================= */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>SEOUL AREA</span>

              <h2>
                서울 다른 지역 타일수리
              </h2>

              <p>
                금손종합보수의 다른 서울 지역
                타일수리·보수 페이지도
                확인할 수 있습니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              {nearbyDistricts.map(
                ([nearbySlug, nearbyName], index) => (
                  <article key={nearbySlug}>
                    <strong>
                      {String(index + 1).padStart(2, "0")}
                    </strong>

                    <h3>
                      {nearbyName} 타일수리
                    </h3>

                    <p>
                      {nearbyName} 깨진 타일,
                      벽타일·바닥타일 부분보수 및
                      교체 안내
                    </p>

                    <Link
                      href={`/services/tile/seoul/${nearbySlug}`}
                    >
                      {nearbyName} 페이지 보기 →
                    </Link>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}

        <section className="clean-area-cta">
          <div className="container clean-area-cta-inner">
            <div>
              <span>{COMPANY}</span>

              <h2>
                {districtName} 타일수리·보수 문의
              </h2>

              <p>
                깨진 타일 한 장부터
                벽·바닥 부분교체까지
                사진으로 먼저 상담해보세요.
              </p>
            </div>

            <a href={PHONE_LINK}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-company">
                {COMPANY}
              </div>

              <div className="footer-text">
                대표자 {OWNER}
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                서울 {districtName} 타일수리 ·
                타일보수 · 타일교체
              </div>
            </div>
          </div>
        </footer>

        {/* =========================================
            모바일 고정 상담버튼
        ========================================= */}

        <div className="clean-mobile-actions">
          <a href={PHONE_LINK}>
            전화 상담
          </a>

          <a href={SMS_LINK}>
            문자 상담
          </a>
        </div>
      </main>
    </>
  );
}
