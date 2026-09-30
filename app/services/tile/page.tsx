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
   지역
========================================= */

const REGIONS = [
  {
    name: "서울",
    desc: "서울 25개 구 전 지역",
    href: "/services/tile/seoul",
  },
  {
    name: "경기",
    desc: "김포·고양·부천 등 주요 지역",
    href: "/services/tile/gyeonggi",
  },
  {
    name: "인천",
    desc: "인천 10개 군·구 전 지역",
    href: "/services/tile/incheon",
  },
];

/* =========================================
   SEO
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "타일수리·타일보수·부분교체 | 서울·경기·인천 | 금손종합보수",
  },

  description:
    "금손종합보수 타일 전문 페이지. 서울·경기·인천 벽타일·바닥타일 깨짐, 균열, 들뜸, 탈락, 부분수리, 부분보수, 부분교체 상담.",

  keywords: [
    "타일수리",
    "타일보수",
    "타일부분수리",
    "타일부분보수",
    "타일부분교체",
    "타일복원",
    "벽타일수리",
    "벽타일보수",
    "바닥타일수리",
    "바닥타일보수",
    "욕실타일수리",
    "화장실타일수리",
    "주방타일수리",
    "서울타일수리",
    "경기타일수리",
    "인천타일수리",
  ],

  alternates: {
    canonical: `${SITE_URL}/services/tile`,
  },

  openGraph: {
    title:
      "타일 수리·보수·부분교체 | 금손종합보수",
    description:
      "서울·경기·인천 벽타일·바닥타일 부분수리, 보수, 교체 상담.",
    url: `${SITE_URL}/services/tile`,
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
   PAGE
========================================= */

export default function TileServicePage() {
  return (
    <main className="clean-area-page">
      {/* HERO */}

      <section className="clean-area-hero">
        <div className="clean-area-container">
          <div className="clean-area-label">
            금손종합보수 · 타일 수리 전문
          </div>

          <h1>
            벽타일 · 바닥타일
            <br />
            수리·보수·부분교체
          </h1>

          <p>
            깨짐, 균열, 들뜸, 탈락 등 타일 문제를
            현장 상태에 맞춰
            <br className="desktop-br" />
            필요한 부분 위주로 수리·보수·교체합니다.
          </p>

          <div className="clean-area-actions">
            <a
              href={PHONE_LINK}
              className="clean-call-button"
            >
              전화 상담
            </a>

            <a
              href={SMS_LINK}
              className="clean-sms-button"
            >
              사진 문자 상담
            </a>
          </div>

          <div className="clean-phone">
            {PHONE_DISPLAY}
          </div>
        </div>
      </section>

      {/* SERVICE */}

      <section className="clean-section">
        <div className="clean-area-container">
          <div className="clean-section-heading center">
            <span>TILE SERVICE</span>

            <h2>
              타일 수리·보수
              <br />
              주요 서비스
            </h2>
          </div>

          <div className="clean-service-grid">
            <article className="clean-service-card">
              <div className="clean-service-number">
                01
              </div>

              <h3>
                벽타일 수리·보수
              </h3>

              <p>
                주방, 욕실, 화장실, 거실, 상가 등의
                벽타일 깨짐·균열·들뜸·탈락 부위를
                확인해 필요한 부분 위주로 작업합니다.
              </p>
            </article>

            <article className="clean-service-card">
              <div className="clean-service-number">
                02
              </div>

              <h3>
                바닥타일 수리·보수
              </h3>

              <p>
                들뜨거나 파손된 바닥타일의 상태를
                확인한 뒤 필요한 범위만 수리 또는
                교체합니다.
              </p>
            </article>

            <article className="clean-service-card">
              <div className="clean-service-number">
                03
              </div>

              <h3>
                타일 부분교체
              </h3>

              <p>
                전체 철거가 필요하지 않은 현장은
                손상된 타일만 선별해 부분교체를
                진행합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WORK SPACE */}

      <section className="clean-section clean-soft-section">
        <div className="clean-area-container">
          <div className="clean-section-heading center">
            <span>WORK SPACE</span>

            <h2>
              다양한 공간의
              <br />
              타일 문제 상담
            </h2>
          </div>

          <div className="clean-space-grid">
            <div className="clean-space-item">
              <div>주방</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>화장실</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>욕실</div>
              <span>부분수리 · 교체</span>
            </div>

            <div className="clean-space-item">
              <div>거실</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>상가</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>기타 공간</div>
              <span>사진 상담 가능</span>
            </div>
          </div>
        </div>
      </section>

      {/* REGION */}

      <section className="clean-section">
        <div className="clean-area-container">
          <div className="clean-section-heading center">
            <span>SERVICE AREA</span>

            <h2>
              지역별
              <br />
              타일 수리·보수
            </h2>
          </div>

          <div className="clean-service-grid">
            {REGIONS.map((region) => (
              <Link
                key={region.name}
                href={region.href}
                className="clean-service-card"
                style={{
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div className="clean-service-number">
                  SERVICE AREA
                </div>

                <h3>
                  {region.name} 타일수리
                </h3>

                <p>
                  {region.desc}
                </p>

                <div
                  style={{
                    marginTop: "18px",
                    color: "#a17f49",
                    fontSize: "12px",
                    fontWeight: 900,
                  }}
                >
                  지역 보기 →
                </div>
              </Link>
            ))}
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
              작업 지역과 타일 상태가 잘 보이는
              사진을 보내주시면
              <br className="desktop-br" />
              확인 후 상담을 도와드립니다.
            </p>
          </div>

          <div className="clean-photo-card">
            <strong>
              {PHONE_DISPLAY}
            </strong>

            <span>
              지역 + 작업내용 + 사진
            </span>

            <a href={SMS_LINK}>
              문자로 사진 보내기
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="clean-bottom-cta">
        <div className="clean-area-container clean-bottom-inner">
          <div>
            <span>
              금손종합보수
            </span>

            <h2>
              타일 수리·보수
            </h2>

            <p>
              서울 · 경기 · 인천 출장 상담
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
  );
}
