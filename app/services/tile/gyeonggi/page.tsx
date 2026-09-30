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
      "경기 타일수리·타일보수·부분교체 전문 | 금손종합보수",
  },

  description:
    "김포, 고양, 부천, 파주, 시흥, 광명, 안산, 안양, 군포 지역의 벽타일·바닥타일 부분수리, 보수, 교체, 복원 전문. 주방, 거실, 화장실, 욕실, 상가 타일 상담.",

  keywords: [
    "경기 타일수리",
    "경기 타일보수",
    "경기 타일교체",
    "경기 타일복원",
    "김포 타일수리",
    "고양 타일수리",
    "부천 타일수리",
    "파주 타일수리",
    "시흥 타일수리",
    "광명 타일수리",
    "안산 타일수리",
    "안양 타일수리",
    "군포 타일수리",
  ],

  alternates: {
    canonical: `${SITE_URL}/services/tile/gyeonggi`,
  },

  openGraph: {
    title:
      "경기 타일 수리·보수 전문 | 금손종합보수",
    description:
      "김포·고양·부천·파주·시흥·광명·안산·안양·군포 타일 수리, 보수, 교체, 복원 상담.",
    url: `${SITE_URL}/services/tile/gyeonggi`,
    siteName: "금손종합보수",
    locale: "ko_KR",
    type: "website",
  },
};

const districts = [
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

export default function GyeonggiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "경기 타일 수리·보수",
    serviceType: [
      "벽타일 수리",
      "바닥타일 수리",
      "타일 부분보수",
      "타일 부분교체",
      "타일 부분복원",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "경기도",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "금손종합보수",
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    url: `${SITE_URL}/services/tile/gyeonggi`,
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
                GYEONGGI TILE REPAIR
              </div>

              <h1>
                경기 타일수리
                <br />
                타일보수·부분교체
              </h1>

              <p>
                김포, 고양, 부천, 파주, 시흥, 광명, 안산,
                안양, 군포 지역의
                <br />
                벽타일·바닥타일 부분 수리·보수·교체 상담을
                진행합니다.
              </p>

              <div className="district-keywords">
                <span>경기 타일수리</span>
                <span>경기 타일보수</span>
                <span>경기 타일교체</span>
                <span>경기 타일복원</span>
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
                GYEONGGI
              </div>

              <div className="district-name">
                경기
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
                경기 타일 부분수리·보수
              </h2>

              <p>
                현장 상태를 확인한 뒤 필요한 범위 위주로
                수리·보수·부분교체 작업을 상담합니다.
              </p>
            </div>

            <div className="district-service-grid">
              <div className="district-service-card">
                <div className="district-service-number">
                  01
                </div>

                <h3>벽타일 수리·보수</h3>

                <p>
                  주방, 욕실, 화장실, 상가 등에 시공된
                  벽타일의 깨짐·균열·들뜸·탈락 부위를
                  확인해 부분 보수합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  02
                </div>

                <h3>바닥타일 수리·보수</h3>

                <p>
                  거실, 화장실, 욕실, 상가 바닥의
                  파손되거나 들뜬 타일을 확인해
                  부분 수리 및 교체를 진행합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  03
                </div>

                <h3>타일 부분교체</h3>

                <p>
                  전체 철거가 필요하지 않은 현장은
                  손상된 타일만 선별해
                  부분 교체 상담을 진행합니다.
                </p>
              </div>

              <div className="district-service-card">
                <div className="district-service-number">
                  04
                </div>

                <h3>타일 부분복원</h3>

                <p>
                  기존 마감과 최대한 자연스럽게
                  연결되도록 현장 상태에 맞춰
                  복원 작업을 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GYEONGGI AREA */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                GYEONGGI AREA
              </div>

              <h2>
                경기 주요 출장 지역
              </h2>

              <p>
                아래 지역을 누르면 해당 지역의
                타일 수리·보수 페이지로 이동합니다.
              </p>
            </div>

            <div className="district-space-grid">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/services/tile/gyeonggi/${district.slug}`}
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
                경기 타일 작업
                <br />
                사진으로 상담하세요
              </h2>

              <p>
                작업 지역과 파손된 타일 사진을 보내주시면
                현장 상태 확인 후 상담을 도와드립니다.
              </p>

              <div className="sms-guide">
                <span>① 경기 작업 위치</span>
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
                경기 타일 수리·보수
                <br />
                금손종합보수
              </h2>

              <p>
                김포 · 고양 · 부천 · 파주 · 시흥 · 광명 ·
                안산 · 안양 · 군포
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
