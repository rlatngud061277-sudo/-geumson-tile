import type { Metadata } from "next";
import Link from "next/link";

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

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

/* =========================================
   SEO
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "금손종합보수 | 서울·인천·경기 타일 수리·보수·부분교체",
  },

  description:
    "금손종합보수는 서울 전 지역, 인천, 김포, 고양, 부천, 파주, 시흥, 광명, 안산, 안양, 군포 지역의 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 전문업체입니다.",

  keywords: [
    "금손종합보수",
    "타일수리",
    "타일보수",
    "타일교체",
    "타일복원",
    "타일부분수리",
    "타일부분보수",
    "타일부분교체",
    "벽타일수리",
    "바닥타일수리",
    "서울타일수리",
    "인천타일수리",
    "김포타일수리",
    "고양타일수리",
    "부천타일수리",
    "파주타일수리",
    "시흥타일수리",
    "광명타일수리",
    "안산타일수리",
    "안양타일수리",
    "군포타일수리",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title:
      "금손종합보수 | 타일 수리·보수·부분교체 전문",
    description:
      "서울 전 지역·인천·경기 주요 지역 벽타일·바닥타일 부분수리, 보수, 교체, 복원 상담.",
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
    number: "01",
    title: "타일 수리 · 보수",
    desc: "깨짐, 균열, 들뜸, 탈락 등 벽타일·바닥타일의 손상 부위를 확인해 필요한 부분 위주로 수리·보수합니다.",
  },
  {
    number: "02",
    title: "타일 부분 교체",
    desc: "전체 철거가 필요하지 않은 경우 파손된 타일만 선별해 부분 교체합니다.",
  },
  {
    number: "03",
    title: "타일 부분 복원",
    desc: "기존 타일과 최대한 자연스럽게 연결될 수 있도록 현장 상태에 맞춰 복원합니다.",
  },
];

/* =========================================
   공간
========================================= */

const spaces = [
  {
    title: "주방 타일",
    desc: "벽 · 바닥 타일",
  },
  {
    title: "화장실 타일",
    desc: "벽 · 바닥 타일",
  },
  {
    title: "욕실 타일",
    desc: "부분수리 · 교체",
  },
  {
    title: "거실 타일",
    desc: "바닥타일 보수",
  },
  {
    title: "상가 타일",
    desc: "벽 · 바닥 타일",
  },
  {
    title: "기타 공간",
    desc: "현장 사진 상담",
  },
];

/* =========================================
   지역
========================================= */

const seoulDistricts = [
  { name: "강남구", slug: "gangnam" },
  { name: "강동구", slug: "gangdong" },
  { name: "강북구", slug: "gangbuk" },
  { name: "강서구", slug: "gangseo" },
  { name: "관악구", slug: "gwanak" },
  { name: "광진구", slug: "gwangjin" },
  { name: "구로구", slug: "guro" },
  { name: "금천구", slug: "geumcheon" },
  { name: "노원구", slug: "nowon" },
  { name: "도봉구", slug: "dobong" },
  { name: "동대문구", slug: "dongdaemun" },
  { name: "동작구", slug: "dongjak" },
  { name: "마포구", slug: "mapo" },
  { name: "서대문구", slug: "seodaemun" },
  { name: "서초구", slug: "seocho" },
  { name: "성동구", slug: "seongdong" },
  { name: "성북구", slug: "seongbuk" },
  { name: "송파구", slug: "songpa" },
  { name: "양천구", slug: "yangcheon" },
  { name: "영등포구", slug: "yeongdeungpo" },
  { name: "용산구", slug: "yongsan" },
  { name: "은평구", slug: "eunpyeong" },
  { name: "종로구", slug: "jongno" },
  { name: "중구", slug: "jung" },
  { name: "중랑구", slug: "jungnang" },
];

const gyeonggiDistricts = [
  { name: "김포", slug: "gimpo" },
  { name: "고양", slug: "goyang" },
  { name: "부천", slug: "bucheon" },
  { name: "파주", slug: "paju" },
  { name: "시흥", slug: "siheung" },
  { name: "광명", slug: "gwangmyeong" },
  { name: "안산", slug: "ansan" },
  { name: "안양", slug: "anyang" },
  { name: "군포", slug: "gunpo" },
];

const incheonDistricts = [
  { name: "중구", slug: "jung" },
  { name: "동구", slug: "dong" },
  { name: "미추홀구", slug: "michuhol" },
  { name: "연수구", slug: "yeonsu" },
  { name: "남동구", slug: "namdong" },
  { name: "부평구", slug: "bupyeong" },
  { name: "계양구", slug: "gyeyang" },
  { name: "서구", slug: "seo" },
  { name: "강화군", slug: "ganghwa" },
  { name: "옹진군", slug: "ongjin" },
];

/* =========================================
   메인
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
      "서울·인천·경기 주요 지역 벽타일·바닥타일 부분수리, 보수, 교체, 복원 전문업체",
    areaServed: [
      "서울특별시",
      "인천광역시",
      "김포",
      "고양",
      "부천",
      "파주",
      "시흥",
      "광명",
      "안산",
      "안양",
      "군포",
    ],
    serviceType: [
      "벽타일 수리",
      "바닥타일 수리",
      "타일 부분보수",
      "타일 부분교체",
      "타일 부분복원",
      "주방 타일",
      "화장실 타일",
      "욕실 타일",
      "거실 타일",
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
            <Link href="/" className="brand">
              <div className="brand-mark">◆</div>

              <div>
                <div className="brand-name">금손종합보수</div>
                <div className="brand-sub">TILE REPAIR</div>
              </div>
            </Link>

            <nav className="nav">
              <a href="#service">타일 서비스</a>
              <a href="#space">작업 공간</a>
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
                타일 수리 · 보수 · 부분교체 전문
              </div>

              <h1>
                벽타일 · 바닥타일
                <br />
                필요한 부분만
                <br />
                깔끔하게
              </h1>

              <p className="hero-description">
                깨짐, 균열, 들뜸, 탈락 등
                <br />
                전체 철거가 필요하지 않은 현장은
                <br />
                필요한 범위 위주로 작업합니다.
              </p>

              <div className="keyword-list">
                <span>벽타일 수리</span>
                <span>바닥타일 보수</span>
                <span>타일 부분교체</span>
                <span>타일 부분복원</span>
              </div>

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
                  💬 사진 문자 상담
                </a>
              </div>
            </div>

            <div className="hero-visual">
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
              <div className="eyebrow">
                TILE SERVICE
              </div>

              <h2>
                타일 전문 시공 서비스
              </h2>

              <p>
                현장 상태를 확인한 뒤 불필요한 전체 철거 없이
                필요한 부분 위주로 작업합니다.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <div
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-number">
                    {service.number}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPACE */}
        <section
          id="space"
          className="clean-section clean-soft-section"
        >
          <div className="clean-area-container">
            <div className="clean-section-heading center">
              <span>작업 공간</span>

              <h2>
                다양한 공간의
                <br />
                타일 문제를 상담합니다
              </h2>
            </div>

            <div className="clean-space-grid">
              {spaces.map((space) => (
                <div
                  key={space.title}
                  className="clean-space-item"
                >
                  <div>{space.title}</div>
                  <span>{space.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            REGION CATEGORY
        ====================================== */}

        <section id="region" className="home-region-section">
          <div className="home-region-container">
            <div className="home-region-head">
              <span>출장 지역</span>

              <h2>
                지역별 타일 수리·보수
              </h2>

              <p>
                서울 전 지역과 인천, 경기 주요 지역에서
                타일 수리·보수·부분교체 상담을 진행합니다.
              </p>
            </div>

            <div className="home-region-groups">
              {/* 서울 */}
              <div className="home-region-group">
                <div className="home-region-top">
                  <div>
                    <span className="home-region-label">
                      SEOUL
                    </span>

                    <h3>서울 전 지역</h3>

                    <p>
                      서울 25개 구 타일 수리·보수
                    </p>
                  </div>

                  <Link
                    href="/services/tile/seoul"
                    className="home-region-view"
                  >
                    전체보기
                  </Link>
                </div>

                <div className="home-region-links">
                  {seoulDistricts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/tile/seoul/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 경기 */}
              <div className="home-region-group">
                <div className="home-region-top">
                  <div>
                    <span className="home-region-label">
                      GYEONGGI
                    </span>

                    <h3>경기 주요 지역</h3>

                    <p>
                      김포·고양·부천 등 주요 지역
                    </p>
                  </div>

                  <Link
                    href="/services/tile/gyeonggi"
                    className="home-region-view"
                  >
                    전체보기
                  </Link>
                </div>

                <div className="home-region-links">
                  {gyeonggiDistricts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/tile/gyeonggi/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 인천 */}
              <div className="home-region-group">
                <div className="home-region-top">
                  <div>
                    <span className="home-region-label">
                      INCHEON
                    </span>

                    <h3>인천 전 지역</h3>

                    <p>
                      인천 10개 군·구 타일 수리·보수
                    </p>
                  </div>

                  <Link
                    href="/services/tile/incheon"
                    className="home-region-view"
                  >
                    전체보기
                  </Link>
                </div>

                <div className="home-region-links">
                  {incheonDistricts.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/tile/incheon/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO CONSULT */}
        <section className="clean-photo-section">
          <div className="clean-area-container clean-photo-inner">
            <div>
              <span className="clean-photo-label">
                사진 문자 상담
              </span>

              <h2>
                파손된 타일 사진을
                <br />
                보내주세요
              </h2>

              <p>
                작업 지역과 타일 상태가 보이는 사진을
                보내주시면
                <br className="desktop-br" />
                확인 후 상담을 도와드립니다.
              </p>
            </div>

            <div className="clean-photo-card">
              <strong>{PHONE_DISPLAY}</strong>

              <span>
                지역 + 작업내용 + 사진
              </span>

              <a href={SMS_LINK}>
                문자로 사진 보내기
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="clean-bottom-cta">
          <div className="clean-area-container clean-bottom-inner">
            <div>
              <span>금손종합보수</span>

              <h2>
                타일 수리·보수
                <br />
                편하게 문의하세요
              </h2>

              <p>
                서울 · 인천 · 경기 주요 지역 출장
              </p>
            </div>

            <div className="clean-bottom-buttons">
              <a href={PHONE_LINK}>
                전화 상담
              </a>

              <a href={SMS_LINK}>
                문자 상담
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
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                서울 · 인천 · 경기 주요 지역 출장
              </div>
            </div>
          </div>
        </footer>

        {/* MOBILE */}
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
