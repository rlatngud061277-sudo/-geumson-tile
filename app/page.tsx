import type { Metadata } from "next";

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
   SEO
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "금손종합보수 | 서울 인천 김포 고양 부천 타일 수리·보수·교체",
  },

  description:
    "금손종합보수는 서울 전 지역, 인천, 김포, 고양, 부천, 파주, 시흥, 광명, 안산, 안양, 군포 지역의 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 전문업체입니다.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "금손종합보수 | 타일 수리·보수·교체 전문",
    description:
      "벽타일·바닥타일 부분수리, 보수, 교체, 복원 전문. 서울 전 지역 및 인천·경기 주요 지역 출장.",
    url: SITE_URL,
    siteName: COMPANY,
    locale: "ko_KR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================
   서비스
========================================= */

const services = [
  {
    title: "타일 수리 · 보수",
    desc: "깨짐, 균열, 들뜸, 탈락 등 벽타일·바닥타일의 손상 부위를 확인하고 필요한 부분 위주로 수리·보수합니다.",
  },
  {
    title: "타일 부분 교체",
    desc: "전체 철거가 필요하지 않은 경우 파손된 타일만 선별해 부분 교체합니다.",
  },
  {
    title: "타일 부분 복원",
    desc: "기존 타일과 최대한 자연스럽게 연결될 수 있도록 현장 상태에 맞춰 복원 작업을 진행합니다.",
  },
];

const spaces = [
  "주방 타일",
  "거실 타일",
  "화장실 타일",
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

const seoulDistricts = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const problems = [
  "타일 깨짐",
  "타일 균열",
  "타일 들뜸",
  "타일 탈락",
  "부분 파손",
  "노후 타일",
  "벽타일 교체",
  "바닥타일 교체",
];

/* =========================================
   메인 페이지
========================================= */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    founder: OWNER,
    description:
      "서울·인천·경기 주요 지역 벽타일·바닥타일 수리, 보수, 부분교체, 복원 전문업체",
    areaServed: regions,
    serviceType: [
      "벽타일 수리",
      "바닥타일 수리",
      "타일 부분보수",
      "타일 부분교체",
      "타일 부분복원",
      "주방 타일",
      "거실 타일",
      "화장실 타일",
      "상가 타일",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main>
        {/* HEADER */}
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="brand">
              <div className="brand-mark">◆</div>

              <div>
                <div className="brand-name">금손종합보수</div>
                <div className="brand-sub">TILE REPAIR</div>
              </div>
            </a>

            <nav className="nav">
              <a href="#service">타일 서비스</a>
              <a href="#space">시공 분야</a>
              <a href="#region">출장 지역</a>
              <a href="#contact">견적 문의</a>
            </nav>

            <div className="header-actions">
              <a href={SMS_LINK} className="header-sms">
                문자 상담
              </a>

              <a href={PHONE_LINK} className="call-button">
                전화 상담
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                타일 수리 · 보수 · 교체 전문
              </div>

              <h1>
                벽타일 · 바닥타일
                <br />
                부분 시공 전문
              </h1>

              <p className="hero-description">
                깨지거나 들뜬 타일,
                <br />
                전체 철거 없이 필요한 부분만
                <br />
                깔끔하게 수리·보수·교체합니다.
              </p>

              <div className="keyword-list">
                <span>타일 부분수리</span>
                <span>타일 부분보수</span>
                <span>타일 부분교체</span>
                <span>타일 부분복원</span>
              </div>

              <div className="hero-buttons">
                <a href={PHONE_LINK} className="primary-button">
                  📞 전화 상담
                </a>

                <a href={SMS_LINK} className="sms-button">
                  💬 문자로 사진 보내기
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="house-roof" />

              <div className="tile-grid">
                <div className="tile tile-1" />
                <div className="tile tile-2" />
                <div className="tile tile-3" />
                <div className="tile tile-4" />
              </div>

              <div className="hero-logo-text">
                금손종합보수
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE */}
        <section id="service" className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">TILE SERVICE</div>

              <h2>타일 전문 시공 서비스</h2>

              <p>
                현장 상태를 확인한 뒤 불필요한 전체 철거 없이
                필요한 부분 위주로 작업합니다.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <div className="service-card" key={service.title}>
                  <div className="service-number">
                    0{index + 1}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPACE */}
        <section id="space" className="section section-gray">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">SPACE</div>
              <h2>공간별 타일 시공</h2>
            </div>

            <div className="space-grid">
              {spaces.map((space) => (
                <div className="space-card" key={space}>
                  <div className="space-image" />
                  <div className="space-title">{space}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section">
          <div className="container problem-layout">
            <div>
              <div className="eyebrow">REPAIR TYPE</div>

              <h2 className="left-title">
                이런 타일 문제
                <br />
                상담 가능합니다
              </h2>
            </div>

            <div className="problem-grid">
              {problems.map((problem) => (
                <div className="problem-item" key={problem}>
                  <span>✓</span>
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGION */}
        <section id="region" className="region-section">
          <div className="container">
            <div className="section-head section-head-light">
              <div className="eyebrow light">SERVICE AREA</div>

              <h2>출장 지역</h2>

              <p>
                서울 전 지역을 중심으로 인천 및 경기 주요 지역
                타일 시공 상담을 진행합니다.
              </p>
            </div>

            <div className="region-grid">
              {regions.map((region) => (
                <div className="region-card" key={region}>
                  {region}
                </div>
              ))}
            </div>

            <div className="seoul-box">
              <h3>서울 전 지역</h3>

              <div className="district-list">
                {seoulDistricts.map((district) => (
                  <span key={district}>{district}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">PROCESS</div>
              <h2>견적 상담 방법</h2>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <div className="process-number">01</div>
                <h3>현장 위치</h3>
                <p>작업할 지역과 주소를 알려주세요.</p>
              </div>

              <div className="process-card">
                <div className="process-number">02</div>
                <h3>파손 범위</h3>
                <p>
                  벽 또는 바닥 타일의 파손 위치와 범위를
                  알려주세요.
                </p>
              </div>

              <div className="process-card">
                <div className="process-number">03</div>
                <h3>현장 사진</h3>
                <p>
                  타일 상태가 보이는 사진을 보내주시면 상담이
                  빠릅니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 문자 상담 */}
        <section className="sms-section">
          <div className="container sms-inner">
            <div className="sms-content">
              <div className="eyebrow">PHOTO CONSULTATION</div>

              <h2>
                타일 사진으로
                <br />
                빠르게 상담받으세요
              </h2>

              <p>
                파손된 타일의 전체 모습과 가까이 찍은 사진,
                작업 지역을 문자로 보내주세요.
                <br />
                현장 상태를 확인한 뒤 작업 가능 여부와 상담을
                도와드립니다.
              </p>

              <div className="sms-guide">
                <span>① 작업 지역</span>
                <span>② 벽 또는 바닥</span>
                <span>③ 파손 부위 사진</span>
              </div>
            </div>

            <div className="sms-box">
              <div className="sms-icon">💬</div>

              <div className="sms-box-title">
                사진 문자 상담
              </div>

              <div className="sms-phone">
                {PHONE_DISPLAY}
              </div>

              <p>
                사진과 간단한 작업 내용을
                <br />
                문자로 보내주세요.
              </p>

              <a href={SMS_LINK} className="sms-big-button">
                문자로 사진 보내기
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <div className="eyebrow">
                TILE REPAIR SPECIALIST
              </div>

              <h2>
                타일 수리·보수
                <br />
                편하게 문의하세요
              </h2>

              <p>
                주방 · 거실 · 화장실 · 상가
                <br />
                벽타일·바닥타일 부분 작업 상담
              </p>
            </div>

            <div className="contact-buttons">
              <a href={PHONE_LINK} className="contact-button">
                📞 전화 상담
              </a>

              <a href={SMS_LINK} className="contact-sms-button">
                💬 문자 상담
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-company">
                금손종합보수
              </div>

              <div className="footer-text">
                대표자 김영호
              </div>

              <div className="footer-text">
                타일 수리 · 보수 · 교체 · 복원 전문
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>

              <div className="footer-text">
                서울 · 인천 · 경기 주요 지역 출장
              </div>
            </div>
          </div>
        </footer>

        {/* MOBILE FIXED BUTTONS */}
        <div className="mobile-actions">
          <a href={PHONE_LINK} className="mobile-call">
            📞 전화
          </a>

          <a href={SMS_LINK} className="mobile-sms">
            💬 문자
          </a>
        </div>
      </main>
    </>
  );
}
