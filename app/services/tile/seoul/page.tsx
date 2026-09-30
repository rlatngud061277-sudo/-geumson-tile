import type { Metadata } from "next";
import Link from "next/link";

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
      "서울 타일수리·타일보수·부분교체 전문 | 금손종합보수",
  },

  description:
    "서울 전 지역 벽타일·바닥타일 부분수리, 보수, 교체, 복원 전문. 주방, 거실, 화장실, 욕실, 상가 타일 깨짐·들뜸·파손 상담. 금손종합보수 010-8056-1990.",

  keywords: [
    "서울 타일수리",
    "서울 타일보수",
    "서울 타일교체",
    "서울 타일복원",
    "서울 벽타일수리",
    "서울 바닥타일수리",
    "서울 화장실타일수리",
    "서울 욕실타일수리",
    "서울 주방타일수리",
    "서울 상가타일수리",
    "서울 깨진타일수리",
    "서울 타일부분수리",
    "서울 타일부분보수",
    "서울 타일부분교체",
    "서울 타일부분복원",
  ],

  alternates: {
    canonical: `${SITE_URL}/services/tile/seoul`,
  },

  openGraph: {
    title:
      "서울 타일 수리·보수 전문 | 금손종합보수",
    description:
      "서울 전 지역 벽타일·바닥타일 부분수리, 보수, 교체, 복원 상담.",
    url: `${SITE_URL}/services/tile/seoul`,
    siteName: "금손종합보수",
    locale: "ko_KR",
    type: "website",
  },
};

const districts = [
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

export default function SeoulPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "서울 타일 수리·보수",
    serviceType: [
      "벽타일 수리",
      "바닥타일 수리",
      "타일 부분보수",
      "타일 부분교체",
      "타일 부분복원",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "서울특별시",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "금손종합보수",
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    url: `${SITE_URL}/services/tile/seoul`,
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
        {/* HERO */}
        <section className="district-hero">
          <div className="container district-hero-inner">
            <div>
              <div className="eyebrow">
                SEOUL TILE REPAIR
              </div>

              <h1>
                서울 타일수리
                <br />
                타일보수·부분교체
              </h1>

              <p>
                서울 25개 구 전 지역
                벽타일·바닥타일 깨짐, 균열, 들뜸, 탈락 등
                <br />
                필요한 부분 위주로 수리·보수·교체 상담을
                진행합니다.
              </p>

              <div className="district-keywords">
                <span>서울 타일수리</span>
                <span>서울 타일보수</span>
                <span>서울 타일교체</span>
                <span>서울 타일복원</span>
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

            <div className="district-visual">
              <div className="district-logo">
                금손종합보수
              </div>

              <div className="district-area">
                SEOUL
              </div>

              <div className="district-name">
                서울
              </div>

              <div className="district-tile-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                TILE SERVICE
              </div>

              <h2>
                서울 타일 부분수리·보수
              </h2>

              <p>
                전체 철거보다 필요한 부분만
                수리·보수·교체하는 작업을 중심으로 상담합니다.
              </p>
            </div>

            <div className="district-service-grid">
              <div className="district-service-card">
                <div className="district-service-number">
                  01
                </div>

                <h3>벽타일 수리·보수</h3>

                <p>
                  주방, 욕실, 화장실, 상가 등의
                  벽타일 깨짐·균열·들뜸·탈락 부위를
                  현장 상태에 맞춰 보수합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  02
                </div>

                <h3>바닥타일 수리·보수</h3>

                <p>
                  거실, 욕실, 화장실, 상가 바닥의
                  타일 파손 부위를 확인해
                  부분 수리 및 교체를 진행합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  03
                </div>

                <h3>타일 부분교체</h3>

                <p>
                  전체 철거가 필요하지 않은 경우
                  손상된 타일만 선별해
                  부분 교체 작업을 상담합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  04
                </div>

                <h3>타일 부분복원</h3>

                <p>
                  기존 마감과 자연스럽게 연결될 수 있도록
                  현장 상태에 맞춰 복원 작업을 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEOUL DISTRICTS */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                SEOUL AREA
              </div>

              <h2>
                서울 25개 구 출장
              </h2>

              <p>
                아래 지역을 누르면 해당 지역의
                타일 수리·보수 안내 페이지로 이동합니다.
              </p>
            </div>

            <div className="district-space-grid">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/services/tile/seoul/${district.slug}`}
                  className="district-space-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="district-space-icon">
                    ◆
                  </div>

                  <strong>
                    {district.name} 타일수리
                  </strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SPACE */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                SPACE
              </div>

              <h2>
                공간별 타일 작업
              </h2>
            </div>

            <div className="district-space-grid">
              {[
                "주방 타일 수리",
                "거실 타일 수리",
                "화장실 타일 수리",
                "욕실 타일 수리",
                "상가 타일 수리",
                "바닥 타일 보수",
              ].map((item) => (
                <div
                  className="district-space-card"
                  key={item}
                >
                  <div className="district-space-icon">
                    ◆
                  </div>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SMS */}
        <section className="sms-section">
          <div className="container sms-inner">
            <div className="sms-content">
              <div className="eyebrow">
                PHOTO CONSULTATION
              </div>

              <h2>
                서울 타일 작업
                <br />
                사진으로 상담하세요
              </h2>

              <p>
                작업 지역과 파손된 타일 사진을 보내주시면
                현장 상태 확인 후 상담을 도와드립니다.
              </p>

              <div className="sms-guide">
                <span>① 서울 작업 위치</span>
                <span>② 벽 또는 바닥</span>
                <span>③ 파손 부위 사진</span>
              </div>
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

              <p>
                사진과 간단한 작업 내용을
                <br />
                문자로 보내주세요.
              </p>

              <a
                href={SMS_LINK}
                className="sms-big-button"
              >
                문자로 사진 보내기
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="district-contact">
          <div className="container district-contact-inner">
            <div>
              <div className="eyebrow light">
                GEUMSON TILE
              </div>

              <h2>
                서울 타일 수리·보수
                <br />
                금손종합보수
              </h2>

              <p>
                서울 25개 구 · 벽타일 · 바닥타일 · 주방 ·
                거실 · 화장실 · 욕실 · 상가
              </p>
            </div>

            <div className="contact-buttons">
              <a
                href={PHONE_LINK}
                className="district-call"
              >
                📞 {PHONE_DISPLAY}
              </a>

              <a
                href={SMS_LINK}
                className="district-sms"
              >
                💬 사진 문자 상담
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
    </>
  );
}
