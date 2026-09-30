import type { Metadata } from "next";
import Link from "next/link";

/* =========================================
   기본 정보
========================================= */

const SITE_URL = "https://www.geumsontile.com";

const COMPANY = "금손종합보수";

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
      "타일 수리·보수 시공사례 | 금손종합보수",
  },

  description:
    "금손종합보수 실제 타일 수리·보수 시공사례. 욕실 타일, 벽타일, 바닥타일, 코너 보수, 부분교체 시공 전후 사진을 확인하세요.",

  keywords: [
    "타일시공사례",
    "타일수리시공사례",
    "타일보수시공사례",
    "욕실타일보수",
    "욕실타일수리",
    "벽타일수리",
    "벽타일보수",
    "바닥타일수리",
    "타일부분교체",
    "타일코너보수",
    "서울타일수리",
    "인천타일수리",
    "경기타일수리",
  ],

  alternates: {
    canonical: `${SITE_URL}/cases`,
  },

  openGraph: {
    title:
      "타일 수리·보수 시공사례 | 금손종합보수",
    description:
      "실제 타일 수리·보수 현장의 시공 전후 사진을 확인하세요.",
    url: `${SITE_URL}/cases`,
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
   시공사례
========================================= */

const cases = [
  {
    category: "욕실 타일",
    title: "욕실 바닥 코너 보수",
    description:
      "파손되고 마감이 들뜬 욕실 바닥 코너를 정리한 뒤 코너와 줄눈 부위를 깔끔하게 보수한 현장입니다.",

    before: "/IMG_1181(1).jpeg",
    after: "/IMG_1182(2).jpeg",

    beforeAlt:
      "욕실 바닥 코너 파손 시공 전",
    afterAlt:
      "욕실 바닥 코너 보수 시공 후",
  },

  {
    category: "욕실 벽타일",
    title: "샤워부스 주변 벽타일 보수",
    description:
      "샤워부스 프레임 주변 손상 부위를 확인하고 벽타일과 주변 마감을 정리한 보수 현장입니다.",

    before: "/IMG_1180.jpeg",
    after: "/IMG_1177(1).jpeg",

    beforeAlt:
      "샤워부스 주변 벽타일 시공 전",
    afterAlt:
      "샤워부스 주변 벽타일 보수 시공 후",
  },

  {
    category: "벽타일 부분교체",
    title: "벽타일 부분교체·수평 시공",
    description:
      "기존 벽타일을 철거한 뒤 수평을 확인하며 새 타일을 맞춰 부분교체한 현장입니다.",

    before: "/IMG_1187(2).jpeg",
    after: "/IMG_1188(1).jpeg",

    beforeAlt:
      "벽타일 부분교체 작업 시공 전",
    afterAlt:
      "벽타일 부분교체 및 수평 시공 후",
  },
];

/* =========================================
   PAGE
========================================= */

export default function CasesPage() {
  return (
    <>
      <style>{`
        .case-page {
          background: #ffffff;
          color: #17233d;
        }

        .case-container {
          width: min(1100px, calc(100% - 40px));
          margin: 0 auto;
        }

        .case-header {
          border-bottom: 1px solid #e8ebef;
          background: rgba(255,255,255,.97);
        }

        .case-header-inner {
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .case-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
        }

        .case-logo {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          background: #193660;
          color: #d8b872;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }

        .case-brand-name {
          color: #193660;
          font-size: 19px;
          font-weight: 950;
        }

        .case-brand-sub {
          margin-top: 2px;
          color: #9d7a42;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2.5px;
        }

        .case-home-link {
          padding: 10px 14px;
          border-radius: 9px;
          background: #f2ecdf;
          color: #6c542e;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
        }

        .case-hero {
          padding: 90px 0 78px;
          text-align: center;
          background:
            linear-gradient(
              135deg,
              #faf8f3 0%,
              #f3efe7 60%,
              #eef1f5 100%
            );
        }

        .case-eyebrow {
          color: #a17f49;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.8px;
        }

        .case-hero h1 {
          margin: 12px 0 0;
          color: #193660;
          font-size: clamp(40px, 6vw, 58px);
          line-height: 1.15;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .case-hero p {
          max-width: 620px;
          margin: 20px auto 0;
          color: #646e7b;
          font-size: 15px;
          line-height: 1.8;
        }

        .case-hero-buttons {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .case-hero-buttons a {
          min-height: 50px;
          min-width: 150px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 900;
        }

        .case-hero-buttons a:first-child {
          background: #193660;
          color: white;
        }

        .case-hero-buttons a:last-child {
          background: white;
          color: #193660;
          border: 1px solid #dbe0e6;
        }

        .case-section {
          padding: 85px 0;
        }

        .case-section-head {
          text-align: center;
          margin-bottom: 42px;
        }

        .case-section-head span {
          color: #a17f49;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.6px;
        }

        .case-section-head h2 {
          margin: 10px 0 0;
          color: #193660;
          font-size: 38px;
          font-weight: 950;
          letter-spacing: -2px;
        }

        .case-grid {
          display: grid;
          gap: 28px;
        }

        .case-card {
          overflow: hidden;
          border: 1px solid #e2e6ea;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(25,54,96,.06);
        }

        .case-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: #ffffff;
        }

        .case-image-box {
          position: relative;
          height: 430px;
          overflow: hidden;
          background: #e9ebee;
        }

        .case-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-label {
          position: absolute;
          left: 14px;
          bottom: 14px;
          padding: 8px 11px;
          border-radius: 8px;
          color: white;
          font-size: 11px;
          font-weight: 950;
          backdrop-filter: blur(5px);
        }

        .case-label.before {
          background: rgba(37,44,54,.88);
        }

        .case-label.after {
          background: rgba(25,54,96,.92);
        }

        .case-content {
          padding: 28px;
        }

        .case-category {
          color: #a17f49;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .case-content h3 {
          margin: 8px 0 0;
          color: #193660;
          font-size: 25px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .case-content p {
          margin: 11px 0 0;
          color: #6e7783;
          font-size: 14px;
          line-height: 1.8;
        }

        .case-photo-cta {
          padding: 75px 0;
          background: #eee9df;
          text-align: center;
        }

        .case-photo-cta h2 {
          margin: 10px 0 0;
          color: #193660;
          font-size: 36px;
          font-weight: 950;
          letter-spacing: -2px;
        }

        .case-photo-cta p {
          margin: 14px 0 0;
          color: #69717c;
          line-height: 1.8;
        }

        .case-phone {
          margin-top: 18px;
          color: #9a7740;
          font-size: 22px;
          font-weight: 950;
        }

        .case-photo-cta a {
          max-width: 310px;
          min-height: 51px;
          margin: 20px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #193660;
          color: white;
          text-decoration: none;
          font-weight: 900;
        }

        .case-footer {
          padding: 42px 0;
          background: #111e36;
          text-align: center;
        }

        .case-footer strong {
          color: white;
          font-size: 18px;
        }

        .case-footer p {
          margin: 8px 0 0;
          color: #9da9ba;
          font-size: 12px;
        }

        .case-mobile-actions {
          display: none;
        }

        @media (max-width: 700px) {
          body {
            padding-bottom: 78px;
          }

          .case-container {
            width: calc(100% - 30px);
          }

          .case-header-inner {
            min-height: 67px;
          }

          .case-logo {
            width: 40px;
            height: 40px;
          }

          .case-brand-name {
            font-size: 17px;
          }

          .case-hero {
            padding: 64px 0 58px;
          }

          .case-hero h1 {
            font-size: 37px;
            letter-spacing: -2px;
          }

          .case-hero p {
            font-size: 14px;
          }

          .case-hero-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .case-hero-buttons a {
            min-width: 0;
            padding: 0 8px;
          }

          .case-section {
            padding: 64px 0;
          }

          .case-section-head {
            margin-bottom: 30px;
          }

          .case-section-head h2 {
            font-size: 29px;
          }

          .case-grid {
            gap: 18px;
          }

          .case-card {
            border-radius: 17px;
          }

          .case-images {
            grid-template-columns: 1fr 1fr;
          }

          .case-image-box {
            height: 245px;
          }

          .case-label {
            left: 8px;
            bottom: 8px;
            padding: 6px 8px;
            font-size: 9px;
          }

          .case-content {
            padding: 19px;
          }

          .case-content h3 {
            font-size: 19px;
          }

          .case-content p {
            font-size: 12px;
          }

          .case-photo-cta {
            padding: 60px 0;
          }

          .case-photo-cta h2 {
            font-size: 29px;
          }

          .case-mobile-actions {
            position: fixed;
            left: 12px;
            right: 12px;
            bottom: 12px;
            z-index: 9999;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;

            padding: 8px;

            background: rgba(255,255,255,.97);
            border: 1px solid #e2e5e9;
            border-radius: 15px;

            box-shadow:
              0 10px 30px rgba(20,35,60,.17);
          }

          .case-mobile-actions a {
            min-height: 47px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 950;
          }

          .case-mobile-actions a:first-child {
            background: #193660;
            color: white;
          }

          .case-mobile-actions a:last-child {
            background: #ece2cf;
            color: #6c522b;
          }
        }
      `}</style>

      <main className="case-page">
        {/* HEADER */}

        <header className="case-header">
          <div className="case-container case-header-inner">
            <Link href="/" className="case-brand">
              <div className="case-logo">◆</div>

              <div>
                <div className="case-brand-name">
                  금손종합보수
                </div>

                <div className="case-brand-sub">
                  TILE REPAIR
                </div>
              </div>
            </Link>

            <Link href="/" className="case-home-link">
              메인으로
            </Link>
          </div>
        </header>

        {/* HERO */}

        <section className="case-hero">
          <div className="case-container">
            <div className="case-eyebrow">
              BEFORE & AFTER
            </div>

            <h1>
              타일 수리·보수
              <br />
              실제 시공사례
            </h1>

            <p>
              타일 파손과 들뜸, 코너 손상,
              벽타일 부분교체 등
              실제 현장의 시공 전후 모습을
              확인하실 수 있습니다.
            </p>

            <div className="case-hero-buttons">
              <a href={PHONE_LINK}>
                전화 상담
              </a>

              <a href={SMS_LINK}>
                사진 문자 상담
              </a>
            </div>
          </div>
        </section>

        {/* CASES */}

        <section className="case-section">
          <div className="case-container">
            <div className="case-section-head">
              <span>WORK CASES</span>

              <h2>
                시공 전후 비교
              </h2>
            </div>

            <div className="case-grid">
              {cases.map((item) => (
                <article
                  key={item.title}
                  className="case-card"
                >
                  <div className="case-images">
                    <div className="case-image-box">
                      <img
                        src={item.before}
                        alt={item.beforeAlt}
                      />

                      <span className="case-label before">
                        시공 전
                      </span>
                    </div>

                    <div className="case-image-box">
                      <img
                        src={item.after}
                        alt={item.afterAlt}
                      />

                      <span className="case-label after">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="case-content">
                    <span className="case-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO CTA */}

        <section className="case-photo-cta">
          <div className="case-container">
            <div className="case-eyebrow">
              PHOTO CONSULT
            </div>

            <h2>
              타일 상태를
              <br />
              사진으로 보내주세요
            </h2>

            <p>
              작업 지역과 파손된 부분이 잘 보이는
              사진을 보내주시면 상담해드립니다.
            </p>

            <div className="case-phone">
              {PHONE_DISPLAY}
            </div>

            <a href={SMS_LINK}>
              문자로 사진 보내기
            </a>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="case-footer">
          <div className="case-container">
            <strong>
              금손종합보수
            </strong>

            <p>
              타일 수리 · 보수 · 부분교체
            </p>
          </div>
        </footer>

        {/* MOBILE */}

        <div className="case-mobile-actions">
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
