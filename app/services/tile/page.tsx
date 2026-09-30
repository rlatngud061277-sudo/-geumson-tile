import type { Metadata } from "next";

const SITE_URL = "https://www.geumsontile.com";

const PHONE = "01080561990";
const PHONE_DISPLAY = "010-8056-1990";
const PHONE_LINK = `tel:${PHONE}`;

const SMS_MESSAGE = `안녕하세요. 금손종합보수 타일 시공 문의드립니다.

지역:
작업내용:
파손된 타일 사진을 첨부해서 보내드리겠습니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

export const metadata: Metadata = {
  title: {
    absolute:
      "타일 수리·보수·교체 전문 | 금손종합보수",
  },

  description:
    "금손종합보수는 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 전문업체입니다. 서울 전 지역, 인천, 김포, 고양, 부천, 파주, 시흥, 광명, 안산, 안양, 군포 출장 상담.",

  alternates: {
    canonical: `${SITE_URL}/services/tile`,
  },
};

const services = [
  {
    title: "벽타일 부분 수리·보수",
    desc: "깨짐, 균열, 들뜸, 탈락된 벽타일을 현장 상태에 맞춰 필요한 부분 위주로 보수합니다.",
  },
  {
    title: "바닥타일 부분 수리·보수",
    desc: "파손되거나 들뜬 바닥타일을 확인해 부분 수리 및 교체 작업을 진행합니다.",
  },
  {
    title: "타일 부분 교체",
    desc: "전체 철거 없이 손상된 타일만 선별해 부분 교체할 수 있는 현장을 상담합니다.",
  },
  {
    title: "타일 부분 복원",
    desc: "기존 마감과 최대한 자연스럽게 연결될 수 있도록 부분 복원 작업을 진행합니다.",
  },
];

const spaces = [
  "주방 타일",
  "거실 타일",
  "화장실 타일",
  "욕실 타일",
  "상가 타일",
];

const regions = [
  "서울 전 지역",
  "인천",
  "김포",
  "고양",
  "부천",
  "파주",
  "시흥",
  "광명",
  "안산",
  "안양",
  "군포",
];

export default function TileServicePage() {
  return (
    <main className="tile-page">
      <section className="tile-sub-hero">
        <div className="container tile-sub-inner">
          <div>
            <div className="eyebrow">
              TILE REPAIR SPECIALIST
            </div>

            <h1>
              벽타일 · 바닥타일
              <br />
              부분 수리·보수 전문
            </h1>

            <p>
              깨짐, 균열, 들뜸, 탈락 등 타일 문제를
              <br />
              현장 상태에 맞춰 필요한 부분 위주로
              수리·보수·교체합니다.
            </p>

            <div className="hero-buttons">
              <a
                href={PHONE_LINK}
                className="primary-button"
              >
                📞 전화 상담
              </a>

              <a
                href={SMS_LINK}
                className="sms-button"
              >
                💬 문자로 사진 보내기
              </a>
            </div>
          </div>

          <div className="tile-sub-visual">
            <div className="tile-sub-grid">
              <div className="tile-box navy" />
              <div className="tile-box cream" />
              <div className="tile-box gray" />
              <div className="tile-box gold" />
            </div>

            <div className="tile-sub-logo">
              금손종합보수
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">
              TILE SERVICE
            </div>

            <h2>
              타일 수리·보수·교체
            </h2>

            <p>
              전체 철거가 부담스러운 경우
              필요한 부분만 선별해 작업할 수 있도록
              현장 상태에 맞춰 상담합니다.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card"
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">
              SPACE
            </div>

            <h2>공간별 타일 작업</h2>
          </div>

          <div className="space-grid">
            {spaces.map((space) => (
              <div
                key={space}
                className="space-card"
              >
                <div className="space-image" />
                <div className="space-title">
                  {space}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="region-section">
        <div className="container">
          <div className="section-head section-head-light">
            <div className="eyebrow light">
              SERVICE AREA
            </div>

            <h2>출장 지역</h2>

            <p>
              서울 전 지역을 중심으로 인천 및 경기 주요 지역
              타일 작업 상담을 진행합니다.
            </p>
          </div>

          <div className="region-grid">
            {regions.map((region) => (
              <div
                key={region}
                className="region-card"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sms-section">
        <div className="container sms-inner">
          <div className="sms-content">
            <div className="eyebrow">
              PHOTO CONSULTATION
            </div>

            <h2>
              타일 사진으로
              <br />
              빠르게 상담받으세요
            </h2>

            <p>
              파손된 타일의 전체 모습과 가까이 찍은 사진,
              작업 지역을 문자로 보내주세요.
            </p>
          </div>

          <div className="sms-box">
            <div className="sms-icon">
              💬
            </div>

            <div className="sms-box-title">
              사진 문자 상담
            </div>

            <div className="sms-phone">
              {PHONE_DISPLAY}
            </div>

            <a
              href={SMS_LINK}
              className="sms-big-button"
            >
              문자로 사진 보내기
            </a>
          </div>
        </div>
      </section>

      <div className="mobile-actions">
        <a
          href={PHONE_LINK}
          className="mobile-call"
        >
          📞 전화
        </a>

        <a
          href={SMS_LINK}
          className="mobile-sms"
        >
          💬 문자
        </a>
      </div>
    </main>
  );
}
