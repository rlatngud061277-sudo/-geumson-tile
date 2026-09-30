import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.geumsontile.com";

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

const SEOUL_DISTRICTS: Record<
  string,
  {
    name: string;
    keywords: string[];
  }
> = {
  gangnam: {
    name: "강남구",
    keywords: [
      "강남구 타일수리",
      "강남 타일보수",
      "강남구 타일교체",
      "강남구 타일복원",
    ],
  },

  gangdong: {
    name: "강동구",
    keywords: [
      "강동구 타일수리",
      "강동 타일보수",
      "강동구 타일교체",
      "강동구 타일복원",
    ],
  },

  gangbuk: {
    name: "강북구",
    keywords: [
      "강북구 타일수리",
      "강북 타일보수",
      "강북구 타일교체",
      "강북구 타일복원",
    ],
  },

  gangseo: {
    name: "강서구",
    keywords: [
      "강서구 타일수리",
      "강서 타일보수",
      "강서구 타일교체",
      "강서구 타일복원",
    ],
  },

  gwanak: {
    name: "관악구",
    keywords: [
      "관악구 타일수리",
      "관악 타일보수",
      "관악구 타일교체",
      "관악구 타일복원",
    ],
  },

  gwangjin: {
    name: "광진구",
    keywords: [
      "광진구 타일수리",
      "광진 타일보수",
      "광진구 타일교체",
      "광진구 타일복원",
    ],
  },

  guro: {
    name: "구로구",
    keywords: [
      "구로구 타일수리",
      "구로 타일보수",
      "구로구 타일교체",
      "구로구 타일복원",
    ],
  },

  geumcheon: {
    name: "금천구",
    keywords: [
      "금천구 타일수리",
      "금천 타일보수",
      "금천구 타일교체",
      "금천구 타일복원",
    ],
  },

  nowon: {
    name: "노원구",
    keywords: [
      "노원구 타일수리",
      "노원 타일보수",
      "노원구 타일교체",
      "노원구 타일복원",
    ],
  },

  dobong: {
    name: "도봉구",
    keywords: [
      "도봉구 타일수리",
      "도봉 타일보수",
      "도봉구 타일교체",
      "도봉구 타일복원",
    ],
  },

  dongdaemun: {
    name: "동대문구",
    keywords: [
      "동대문구 타일수리",
      "동대문 타일보수",
      "동대문구 타일교체",
      "동대문구 타일복원",
    ],
  },

  dongjak: {
    name: "동작구",
    keywords: [
      "동작구 타일수리",
      "동작 타일보수",
      "동작구 타일교체",
      "동작구 타일복원",
    ],
  },

  mapo: {
    name: "마포구",
    keywords: [
      "마포구 타일수리",
      "마포 타일보수",
      "마포구 타일교체",
      "마포구 타일복원",
    ],
  },

  seodaemun: {
    name: "서대문구",
    keywords: [
      "서대문구 타일수리",
      "서대문 타일보수",
      "서대문구 타일교체",
      "서대문구 타일복원",
    ],
  },

  seocho: {
    name: "서초구",
    keywords: [
      "서초구 타일수리",
      "서초 타일보수",
      "서초구 타일교체",
      "서초구 타일복원",
    ],
  },

  seongdong: {
    name: "성동구",
    keywords: [
      "성동구 타일수리",
      "성동 타일보수",
      "성동구 타일교체",
      "성동구 타일복원",
    ],
  },

  seongbuk: {
    name: "성북구",
    keywords: [
      "성북구 타일수리",
      "성북 타일보수",
      "성북구 타일교체",
      "성북구 타일복원",
    ],
  },

  songpa: {
    name: "송파구",
    keywords: [
      "송파구 타일수리",
      "송파 타일보수",
      "송파구 타일교체",
      "송파구 타일복원",
    ],
  },

  yangcheon: {
    name: "양천구",
    keywords: [
      "양천구 타일수리",
      "양천 타일보수",
      "양천구 타일교체",
      "양천구 타일복원",
    ],
  },

  yeongdeungpo: {
    name: "영등포구",
    keywords: [
      "영등포구 타일수리",
      "영등포 타일보수",
      "영등포구 타일교체",
      "영등포구 타일복원",
    ],
  },

  yongsan: {
    name: "용산구",
    keywords: [
      "용산구 타일수리",
      "용산 타일보수",
      "용산구 타일교체",
      "용산구 타일복원",
    ],
  },

  eunpyeong: {
    name: "은평구",
    keywords: [
      "은평구 타일수리",
      "은평 타일보수",
      "은평구 타일교체",
      "은평구 타일복원",
    ],
  },

  jongno: {
    name: "종로구",
    keywords: [
      "종로구 타일수리",
      "종로 타일보수",
      "종로구 타일교체",
      "종로구 타일복원",
    ],
  },

  jung: {
    name: "중구",
    keywords: [
      "중구 타일수리",
      "중구 타일보수",
      "중구 타일교체",
      "중구 타일복원",
    ],
  },

  jungnang: {
    name: "중랑구",
    keywords: [
      "중랑구 타일수리",
      "중랑 타일보수",
      "중랑구 타일교체",
      "중랑구 타일복원",
    ],
  },
};

/* =========================================
   SEO
========================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ district: string }>;
}): Promise<Metadata> {
  const { district } = await params;

  const area = SEOUL_DISTRICTS[district];

  if (!area) {
    return {};
  }

  const pageUrl = `${SITE_URL}/services/tile/seoul/${district}`;

  return {
    title: {
      absolute: `${area.name} 타일수리·타일보수·부분교체 | 금손종합보수`,
    },

    description: `${area.name} 벽타일·바닥타일 부분수리, 보수, 교체, 복원 전문. 주방, 거실, 화장실, 욕실, 상가 타일 파손·깨짐·들뜸 작업 상담. 금손종합보수 010-8056-1990.`,

    keywords: [
      ...area.keywords,
      `${area.name} 벽타일수리`,
      `${area.name} 바닥타일수리`,
      `${area.name} 화장실타일수리`,
      `${area.name} 욕실타일수리`,
      `${area.name} 주방타일수리`,
      `${area.name} 상가타일수리`,
      `${area.name} 깨진타일수리`,
      `${area.name} 타일부분수리`,
      `${area.name} 타일부분보수`,
      `${area.name} 타일부분교체`,
      `${area.name} 타일부분복원`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: `${area.name} 타일 수리·보수 전문 | 금손종합보수`,
      description: `${area.name} 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 상담.`,
      url: pageUrl,
      siteName: "금손종합보수",
      locale: "ko_KR",
      type: "website",
    },
  };
}

/* =========================================
   STATIC PARAMS
========================================= */

export function generateStaticParams() {
  return Object.keys(SEOUL_DISTRICTS).map((district) => ({
    district,
  }));
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

  const area = SEOUL_DISTRICTS[district];

  if (!area) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/services/tile/seoul/${district}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} 타일 수리·보수`,
    serviceType: [
      "벽타일 수리",
      "바닥타일 수리",
      "타일 부분보수",
      "타일 부분교체",
      "타일 부분복원",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: `서울특별시 ${area.name}`,
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "금손종합보수",
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="district-page">
        {/* HERO */}

        <section className="district-hero">
          <div className="container district-hero-inner">
            <div>
              <div className="eyebrow">
                SEOUL TILE REPAIR
              </div>

              <h1>
                {area.name} 타일수리
                <br />
                타일보수·부분교체
              </h1>

              <p>
                {area.name} 벽타일·바닥타일 깨짐,
                균열, 들뜸, 탈락 등
                <br />
                필요한 부분 위주로 수리·보수·교체 상담을
                진행합니다.
              </p>

              <div className="district-keywords">
                <span>{area.name} 타일수리</span>
                <span>{area.name} 타일보수</span>
                <span>{area.name} 타일교체</span>
                <span>{area.name} 타일복원</span>
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
                {area.name}
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

        {/* SERVICES */}

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                TILE SERVICE
              </div>

              <h2>
                {area.name} 타일 부분수리·보수
              </h2>

              <p>
                타일 전체를 철거하기보다
                파손된 위치와 현장 상태를 확인해
                필요한 범위 위주로 작업합니다.
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
                  거실, 화장실, 욕실, 상가 등
                  바닥타일 파손 부위를 확인해
                  부분 수리 또는 교체를 진행합니다.
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
                  연결될 수 있도록 현장 상태에 맞춰
                  복원 작업을 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SPACE */}

        <section className="section section-gray">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                SPACE
              </div>

              <h2>
                {area.name} 공간별 타일 작업
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

                  <strong>
                    {area.name} {item}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}

        <section className="section">
          <div className="container problem-layout">
            <div>
              <div className="eyebrow">
                TILE DAMAGE
              </div>

              <h2 className="left-title">
                이런 타일 문제
                <br />
                상담 가능합니다
              </h2>
            </div>

            <div className="problem-grid">
              {[
                "깨진 타일",
                "금이 간 타일",
                "들뜬 타일",
                "탈락한 타일",
                "부분 파손",
                "노후 타일",
                "벽타일 파손",
                "바닥타일 파손",
              ].map((problem) => (
                <div
                  className="problem-item"
                  key={problem}
                >
                  <span>✓</span>
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULT */}

        <section className="sms-section">
          <div className="container sms-inner">
            <div className="sms-content">
              <div className="eyebrow">
                PHOTO CONSULTATION
              </div>

              <h2>
                {area.name} 타일 작업
                <br />
                사진으로 상담하세요
              </h2>

              <p>
                작업 지역과 파손된 타일 사진을 보내주시면
                현장 상태 확인 후 상담을 도와드립니다.
              </p>

              <div className="sms-guide">
                <span>① {area.name} 작업 위치</span>
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

        {/* FOOTER CTA */}

        <section className="district-contact">
          <div className="container district-contact-inner">
            <div>
              <div className="eyebrow light">
                GEUMSON TILE
              </div>

              <h2>
                {area.name} 타일 수리·보수
                <br />
                금손종합보수
              </h2>

              <p>
                벽타일 · 바닥타일 · 주방 · 거실 · 화장실 ·
                욕실 · 상가
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
