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
    "금손종합보수는 서울 전 지역, 인천 및 경기 주요 지역의 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 상담을 진행합니다.",

  keywords: [
    "금손종합보수",
    "타일수리",
    "타일보수",
    "타일교체",
    "타일복원",
    "타일부분수리",
    "타일부분교체",
    "벽타일수리",
    "벽타일보수",
    "바닥타일수리",
    "바닥타일보수",
    "욕실타일수리",
    "욕실타일보수",
    "화장실타일수리",
    "화장실벽타일교체",
    "욕실벽타일교체",
    "타일마감보수",
    "샤워부스타일보수",
    "서울타일수리",
    "인천타일수리",
    "경기타일수리",
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
      "금손종합보수 | 타일 수리·보수·부분교체",
    description:
      "서울·인천·경기 주요 지역 벽타일·바닥타일 부분수리, 보수, 교체 상담.",
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
    desc: "깨짐, 균열, 들뜸, 탈락 등 벽타일과 바닥타일의 손상 상태를 확인해 필요한 부분 위주로 작업합니다.",
  },
  {
    number: "02",
    title: "타일 부분 교체",
    desc: "전체 철거가 필요하지 않은 현장은 파손된 타일만 선별해 부분 교체를 진행합니다.",
  },
  {
    number: "03",
    title: "타일 부분 복원",
    desc: "기존 타일과 최대한 자연스럽게 이어질 수 있도록 현장 상태에 맞춰 보수합니다.",
  },
];

/* =========================================
   실제 시공 전후
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "깨진 욕실 벽타일을 철거하고 기존 타일과 자연스럽게 맞춰 부분 교체한 현장입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    beforeAlt: "욕실 벽타일 파손 시공 전",
    afterAlt: "욕실 벽타일 부분교체 시공 후",
  },

  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일 부위를 정리한 뒤 새 타일을 맞춰 복원한 현장입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    beforeAlt: "거실 벽타일 복원 시공 전",
    afterAlt: "거실 벽타일 복원 시공 후",
  },

  {
    title: "욕실 바닥·코너 보수",
    desc: "기존 욕실 바닥 타일을 철거한 뒤 바닥과 코너 부분을 깔끔하게 보수한 현장입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    beforeAlt: "욕실 바닥 코너 보수 시공 전",
    afterAlt: "욕실 바닥 코너 보수 시공 후",
  },

  {
    title: "욕실 타일 마감보수",
    desc: "욕실 코너 부분의 손상되고 벌어진 마감을 정리해 깔끔하게 보수한 현장입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    beforeAlt: "욕실 타일 마감보수 시공 전",
    afterAlt: "욕실 타일 마감보수 시공 후",
  },

  {
    title: "샤워부스 주변 타일 마감보수",
    desc: "샤워부스 프레임 주변의 손상된 타일과 마감 부위를 정리해 보수한 현장입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
    beforeAlt: "샤워부스 주변 타일 마감보수 시공 전",
    afterAlt: "샤워부스 주변 타일 마감보수 시공 후",
  },

  {
    title: "벽타일 부분교체·수평시공",
    desc: "기존 벽타일을 부분 철거한 뒤 수평을 확인하며 새 타일을 맞춰 시공한 현장입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    beforeAlt: "벽타일 부분교체 수평시공 시공 전",
    afterAlt: "벽타일 부분교체 수평시공 시공 후",
  },

  /* =========================================
     신규 시공사례
  ========================================= */

  {
    title: "화장실 벽타일 한 면 교체",
    desc: "기존 화장실 벽타일 한 면을 철거한 뒤 새 타일로 깔끔하게 전체 교체한 현장입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
    beforeAlt: "화장실 벽타일 한 면 교체 시공 전",
    afterAlt: "화장실 벽타일 한 면 교체 시공 후",
  },
];

/* =========================================
   서울
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

/* =========================================
   경기
========================================= */

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

/* =========================================
   인천
========================================= */

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
   PAGE
========================================= */

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    founder: OWNER,

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
      "욕실 타일 마감보수",
      "샤워부스 주변 타일 보수",
      "화장실 벽타일 한 면 교체",
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
              <div className="brand-mark">
                ◆
              </div>

              <div>
                <div className="brand-name">
                  금손종합보수
                </div>

                <div className="brand-sub">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <nav className="nav">
              <a href="#service">
                타일 서비스
              </a>

              <a href="#case">
                시공 전후
              </a>

              <a href="#region">
                출장 지역
              </a>

              <a href="#contact">
                견적 문의
              </a>
            </nav>

            <div className="header-actions">
              <a
                href={SMS_LINK}
                className="header-sms"
              >
                문자 상담
              </a>

              <a
                href={PHONE_LINK}
                className="call-button"
              >
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
                타일 수리 · 보수 · 부분교체
              </div>

              <h1>
                필요한 부분만
                <br />
                깔끔하게
                <br />
                타일 보수
              </h1>

              <p className="hero-description">
                벽타일·바닥타일의 깨짐, 균열,
                들뜸, 탈락 등
                <br />
                현장 상태에 맞춰 필요한 범위를
                수리·보수·교체합니다.
              </p>

              <div className="keyword-list">
                <span>
                  벽타일 수리
                </span>

                <span>
                  바닥타일 보수
                </span>

                <span>
                  타일 부분교체
                </span>

                <span>
                  타일 부분복원
                </span>
              </div>

              <div className="hero-buttons">
                <a
                  href={PHONE_LINK}
                  className="primary-button"
                >
                  전화 상담
                </a>

                <a
                  href={SMS_LINK}
                  className="sms-button"
                >
                  사진 문자 상담
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

        <section
          id="service"
          className="section"
        >
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                TILE SERVICE
              </div>

              <h2>
                타일 수리·보수 서비스
              </h2>

              <p>
                불필요한 전체 철거보다
                현장 상태에 맞는 부분 수리와
                부분 교체를 우선합니다.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card"
                >
                  <div className="service-number">
                    {service.number}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            BEFORE & AFTER
        ========================================= */}

        <section
          id="case"
          className="before-after-section"
        >
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                실제 시공 전후
              </h2>

              <p>
                실제 타일 수리·보수 현장의
                시공 전과 시공 후 모습을
                비교해보세요.
              </p>
            </div>

            <div className="before-after-grid">
              {beforeAfter.map((item) => (
                <article
                  key={item.title}
                  className="before-after-card"
                >
                  <div className="before-after-images">
                    {/* 시공 전 */}

                    <div className="before-after-image-box">
                      <img
                        src={item.before}
                        alt={item.beforeAlt}
                      />

                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    {/* 시공 후 */}

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={item.afterAlt}
                      />

                      <span className="after-label">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="before-after-content">
                    <span>
                      금손종합보수 시공사례
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REGION */}

        <section
          id="region"
          className="home-region-section"
        >
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                SERVICE AREA
              </div>

              <h2>
                지역별 타일 수리·보수
              </h2>

              <p>
                지역명을 누르면 해당 지역
                타일 수리·보수 안내 페이지로
                이동합니다.
              </p>
            </div>

            <div className="home-region-groups">
              {/* 서울 */}

              <article className="home-region-card">
                <div className="home-region-card-top">
                  <div>
                    <span className="home-region-en">
                      SEOUL
                    </span>

                    <h3>
                      서울 전 지역
                    </h3>

                    <p>
                      서울 25개 구 타일 수리·보수
                    </p>
                  </div>

                  <Link
                    href="/services/tile/seoul"
                    className="home-region-all"
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
              </article>

              {/* 경기 */}

              <article className="home-region-card">
                <div className="home-region-card-top">
                  <div>
                    <span className="home-region-en">
                      GYEONGGI
                    </span>

                    <h3>
                      경기 주요 지역
                    </h3>

                    <p>
                      김포·고양·부천 등 주요 지역
                    </p>
                  </div>

                  <Link
                    href="/services/tile/gyeonggi"
                    className="home-region-all"
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
              </article>

              {/* 인천 */}

              <article className="home-region-card">
                <div className="home-region-card-top">
                  <div>
                    <span className="home-region-en">
                      INCHEON
                    </span>

                    <h3>
                      인천 전 지역
                    </h3>

                    <p>
                      인천 10개 군·구 타일 수리·보수
                    </p>
                  </div>

                  <Link
                    href="/services/tile/incheon"
                    className="home-region-all"
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
              </article>
            </div>
          </div>
        </section>

        {/* PHOTO CONSULT */}

        <section className="photo-consult-section">
          <div className="container photo-consult-inner">
            <div>
              <div className="eyebrow">
                PHOTO CONSULT
              </div>

              <h2>
                파손된 타일 사진을
                <br />
                보내주세요
              </h2>

              <p>
                작업 지역과 타일 상태가
                잘 보이는 사진을 문자로 보내주시면
                확인 후 상담해드립니다.
              </p>
            </div>

            <div className="photo-consult-card">
              <span>
                사진 문자 상담
              </span>

              <strong>
                {PHONE_DISPLAY}
              </strong>

              <p>
                지역 + 작업 내용 + 사진
              </p>

              <a href={SMS_LINK}>
                문자로 사진 보내기
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section-new"
        >
          <div className="container contact-new-inner">
            <div>
              <span>
                금손종합보수
              </span>

              <h2>
                타일 수리·보수
                <br />
                편하게 문의하세요
              </h2>

              <p>
                서울 · 인천 · 경기 주요 지역 출장
              </p>
            </div>

            <div className="contact-new-buttons">
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
                타일 수리 · 보수 · 부분교체
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                서울 · 인천 · 경기 주요 지역
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
