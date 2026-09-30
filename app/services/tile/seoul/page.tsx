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
   서울 25개 구
========================================= */

const DISTRICTS = [
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
   SEO
========================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "서울 타일수리·타일보수·부분교체 | 금손종합보수",
  },

  description:
    "서울 25개 구 전 지역 벽타일·바닥타일 수리, 보수, 부분교체, 복원 상담. 주방, 욕실, 화장실, 거실, 상가 타일 깨짐, 균열, 들뜸, 탈락 보수.",

  keywords: [
    "서울 타일수리",
    "서울 타일보수",
    "서울 타일교체",
    "서울 타일복원",
    "서울 벽타일수리",
    "서울 바닥타일수리",
    "서울 타일부분수리",
    "서울 타일부분교체",
    "서울 욕실타일수리",
    "서울 화장실타일수리",
  ],

  alternates: {
    canonical: `${SITE_URL}/services/tile/seoul`,
  },

  openGraph: {
    title:
      "서울 타일수리·타일보수 | 금손종합보수",
    description:
      "서울 25개 구 벽타일·바닥타일 부분수리, 보수, 교체 상담.",
    url: `${SITE_URL}/services/tile/seoul`,
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

export default function SeoulTilePage() {
  return (
    <main className="clean-area-page">
      {/* HERO */}

      <section className="clean-area-hero">
        <div className="clean-area-container">
          <div className="clean-area-label">
            금손종합보수 · 서울 타일 전문
          </div>

          <h1>
            서울 타일
            <br />
            수리·보수
          </h1>

          <p>
            서울 25개 구 전 지역의 벽타일·바닥타일
            깨짐, 균열, 들뜸, 탈락 등
            <br className="desktop-br" />
            필요한 부분 위주로 수리·보수·부분교체 상담을
            진행합니다.
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
          <div className="clean-section-heading">
            <span>TILE SERVICE</span>

            <h2>
              필요한 부분만
              <br />
              깔끔하게 작업합니다
            </h2>
          </div>

          <div className="clean-service-grid">
            <div className="clean-service-card">
              <div className="clean-service-number">
                01
              </div>

              <h3>벽타일 수리·보수</h3>

              <p>
                주방, 욕실, 화장실, 상가 등의 벽타일
                깨짐·균열·들뜸·탈락 부위를 확인해
                필요한 부분 위주로 보수합니다.
              </p>
            </div>

            <div className="clean-service-card">
              <div className="clean-service-number">
                02
              </div>

              <h3>바닥타일 수리·보수</h3>

              <p>
                파손되거나 들뜬 바닥타일의 상태를
                확인해 필요한 범위만 수리 또는
                교체합니다.
              </p>
            </div>

            <div className="clean-service-card">
              <div className="clean-service-number">
                03
              </div>

              <h3>타일 부분교체</h3>

              <p>
                전체 철거가 필요하지 않은 현장은
                손상된 타일을 선별해 부분교체를
                진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEOUL DISTRICTS */}

      <section className="clean-section clean-soft-section">
        <div className="clean-area-container">
          <div className="clean-section-heading center">
            <span>SERVICE AREA</span>

            <h2>
              서울 25개 구
              <br />
              출장 상담
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {DISTRICTS.map((district) => (
              <Link
                key={district.slug}
                href={`/services/tile/seoul/${district.slug}`}
                style={{
                  padding: "11px 14px",
                  background: "#ffffff",
                  border: "1px solid #e1e5ea",
                  borderRadius: "9px",
                  color: "#4f5968",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 800,
                }}
              >
                {district.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO */}

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
            <span>금손종합보수</span>

            <h2>
              서울 타일 수리·보수
            </h2>

            <p>
              벽타일 · 바닥타일 · 부분수리 · 부분교체
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
