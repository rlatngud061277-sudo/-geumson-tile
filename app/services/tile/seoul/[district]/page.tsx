import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
깨지거나 파손된 타일 사진을 첨부해서 보내드리겠습니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

/* =========================================
   서울 25개 구
========================================= */

const DISTRICTS: Record<string, string> = {
  gangnam: "강남구",
  gangdong: "강동구",
  gangbuk: "강북구",
  gangseo: "강서구",
  gwanak: "관악구",
  gwangjin: "광진구",
  guro: "구로구",
  geumcheon: "금천구",
  nowon: "노원구",
  dobong: "도봉구",
  dongdaemun: "동대문구",
  dongjak: "동작구",
  mapo: "마포구",
  seodaemun: "서대문구",
  seocho: "서초구",
  seongdong: "성동구",
  seongbuk: "성북구",
  songpa: "송파구",
  yangcheon: "양천구",
  yeongdeungpo: "영등포구",
  yongsan: "용산구",
  eunpyeong: "은평구",
  jongno: "종로구",
  jung: "중구",
  jungnang: "중랑구",
};

/* =========================================
   시공사례
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "깨진 욕실 벽타일을 철거하고 기존 타일과 자연스럽게 맞춰 부분 교체한 현장입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    beforeAlt: "깨진 욕실 벽타일 교체 전",
    afterAlt: "욕실 벽타일 부분교체 후",
  },
  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일 부위를 정리한 뒤 새 타일을 맞춰 수리·복원한 현장입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    beforeAlt: "거실 벽타일 수리 전",
    afterAlt: "거실 벽타일 복원 후",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc: "파손된 욕실 바닥타일을 정리한 뒤 바닥과 코너를 보수한 현장입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    beforeAlt: "욕실 바닥타일 보수 전",
    afterAlt: "욕실 바닥타일 보수 후",
  },
  {
    title: "욕실 타일 마감보수",
    desc: "욕실 코너 부분의 깨짐과 벌어진 마감을 정리해 보수한 현장입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    beforeAlt: "욕실 타일 깨짐 마감보수 전",
    afterAlt: "욕실 타일 마감보수 후",
  },
  {
    title: "샤워부스 주변 타일 마감보수",
    desc: "샤워부스 주변의 손상된 타일과 마감 부위를 정리해 수리한 현장입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
    beforeAlt: "샤워부스 타일 수리 전",
    afterAlt: "샤워부스 타일 보수 후",
  },
  {
    title: "벽타일 부분교체·수평시공",
    desc: "기존 벽타일을 부분 철거한 뒤 수평을 확인하며 새 타일로 교체한 현장입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    beforeAlt: "벽타일 부분교체 전",
    afterAlt: "벽타일 부분교체 후",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc: "기존 화장실 벽타일 한 면을 철거한 뒤 새 타일로 교체한 현장입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
    beforeAlt: "화장실 벽타일 교체 전",
    afterAlt: "화장실 벽타일 교체 후",
  },
  {
    title: "거실 깨진 바닥타일 보수",
    desc: "깨지고 파손된 거실 바닥타일을 철거한 뒤 새 타일로 부분 교체한 현장입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
    beforeAlt: "거실 깨진 바닥타일 수리 전",
    afterAlt: "거실 바닥타일 교체 후",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc: "상가 복도의 깨진 바닥타일을 철거하고 바탕면을 정리한 뒤 새 타일로 교체한 현장입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
    beforeAlt: "상가 깨진 바닥타일 교체 전",
    afterAlt: "상가 복도 바닥타일 교체 후",
  },
];

export function generateStaticParams() {
  return Object.keys(DISTRICTS).map((district) => ({
    district,
  }));
}

/* =========================================
   SEO
========================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ district: string }>;
}): Promise<Metadata> {
  const { district } = await params;

  const districtName = DISTRICTS[district];

  if (!districtName) {
    return {};
  }

  const title =
    `${districtName} 타일교체·타일수리·깨진타일보수 | 금손종합보수`;

  const description =
    `${districtName} 깨진 타일 수리 및 교체 상담. 욕실 벽타일 교체, 바닥타일 부분교체, 타일 깨짐·들뜸·파손 보수와 실제 시공사례를 확인하세요.`;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      `${districtName} 타일교체`,
      `${districtName} 타일수리`,
      `${districtName} 타일보수`,
      `${districtName} 깨진타일`,
      `${districtName} 깨진타일수리`,
      `${districtName} 벽타일교체`,
      `${districtName} 바닥타일교체`,
      `${districtName} 타일부분교체`,
      `${districtName} 욕실타일교체`,
    ],

    alternates: {
      canonical:
        `${SITE_URL}/services/tile/seoul/${district}`,
    },

    openGraph: {
      title,
      description,
      url:
        `${SITE_URL}/services/tile/seoul/${district}`,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
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

  const districtName = DISTRICTS[district];

  if (!districtName) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",

    name:
      `${districtName} 타일교체·타일수리·타일보수`,

    description:
      `${districtName} 깨진 타일 수리, 벽타일 교체, 바닥타일 부분교체, 욕실 타일보수 서비스`,

    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY,
      telephone: PHONE_DISPLAY,
      url: SITE_URL,
    },

    areaServed: districtName,

    serviceType: [
      "깨진 타일 수리",
      "타일 교체",
      "타일 보수",
      "벽타일 교체",
      "바닥타일 교체",
      "욕실 타일 수리",
      "타일 부분교체",
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

      <main className="clean-area-page">
        {/* HEADER */}

        <header className="clean-area-header">
          <div className="container clean-area-header-inner">
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

            <a
              href={PHONE_LINK}
              className="clean-area-header-call"
            >
              전화 상담
            </a>
          </div>
        </header>

        {/* HERO */}

        <section className="clean-area-hero">
          <div className="container">
            <div className="clean-area-breadcrumb">
              <Link href="/">
                홈
              </Link>

              <span>›</span>

              <Link href="/services/tile">
                타일 수리
              </Link>

              <span>›</span>

              <Link href="/services/tile/seoul">
                서울
              </Link>

              <span>›</span>

              <strong>
                {districtName}
              </strong>
            </div>

            <div className="clean-area-label">
              TILE REPAIR · REPLACEMENT
            </div>

            <h1>
              {districtName}
              <br />
              타일 교체·수리·보수
            </h1>

            <p>
              {districtName} 깨진 타일, 금이 간 타일,
              들뜬 타일, 탈락한 타일을
              현장 상태에 맞춰 수리하거나 교체합니다.
              욕실 벽타일·바닥타일·거실·상가 타일까지
              부분교체 상담이 가능합니다.
            </p>

            <div className="clean-area-hero-buttons">
              <a
                href={PHONE_LINK}
                className="clean-area-primary"
              >
                전화 상담
              </a>

              <a
                href={SMS_LINK}
                className="clean-area-secondary"
              >
                깨진 타일 사진 상담
              </a>
            </div>
          </div>
        </section>

        {/* SERVICE */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>
                TILE SERVICE
              </span>

              <h2>
                {districtName} 깨진 타일
                수리·교체
              </h2>

              <p>
                전체 철거가 필요하지 않은 경우
                파손된 부분만 확인해 부분 수리와
                타일 교체를 진행합니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>
                  01
                </strong>

                <h3>
                  깨진 타일 수리
                </h3>

                <p>
                  충격이나 노후로 깨지고 금이 간
                  벽타일·바닥타일을 확인해
                  필요한 범위를 수리합니다.
                </p>
              </article>

              <article>
                <strong>
                  02
                </strong>

                <h3>
                  타일 부분교체
                </h3>

                <p>
                  파손된 타일만 철거한 뒤
                  새 타일로 부분 교체해
                  주변 타일과 맞춰 시공합니다.
                </p>
              </article>

              <article>
                <strong>
                  03
                </strong>

                <h3>
                  벽·바닥타일 교체
                </h3>

                <p>
                  욕실 벽타일, 거실 바닥타일,
                  상가 바닥타일 등
                  현장별 타일 교체가 가능합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* KEYWORD CONTENT */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>
                REPAIR GUIDE
              </span>

              <h2>
                이런 타일 문제를
                수리·교체합니다
              </h2>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <h3>
                  타일 깨짐·파손
                </h3>

                <p>
                  물건 충격이나 노후로 타일이
                  깨지거나 모서리가 파손된 경우
                  부분교체를 검토할 수 있습니다.
                </p>
              </article>

              <article>
                <h3>
                  타일 들뜸·탈락
                </h3>

                <p>
                  벽타일이나 바닥타일이 들뜨거나
                  떨어진 경우 바탕면 상태를 확인한 뒤
                  수리·재시공합니다.
                </p>
              </article>

              <article>
                <h3>
                  욕실·거실·상가 타일
                </h3>

                <p>
                  욕실 벽타일 교체부터
                  거실 깨진 바닥타일,
                  상가 복도 타일보수까지
                  상담 가능합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BEFORE AFTER */}

        <section className="before-after-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                {districtName} 타일
                수리·교체 시공사례
              </h2>

              <p>
                {districtName}에서 타일 수리나
                교체를 알아보실 때 참고할 수 있는
                금손종합보수의 실제 시공 전후 사례입니다.
              </p>
            </div>

            <div className="before-after-grid">
              {beforeAfter.map((item) => (
                <article
                  key={item.title}
                  className="before-after-card"
                >
                  <div className="before-after-images">
                    <div className="before-after-image-box">
                      <img
                        src={item.before}
                        alt={`${districtName} ${item.beforeAlt}`}
                      />

                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={`${districtName} ${item.afterAlt}`}
                      />

                      <span className="after-label">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="before-after-content">
                    <span>
                      {districtName} 타일
                      수리·교체 사례
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

        {/* PHOTO CONSULT */}

        <section className="clean-area-photo">
          <div className="container clean-area-photo-inner">
            <div>
              <span>
                PHOTO CONSULT
              </span>

              <h2>
                {districtName} 깨진 타일
                <br />
                사진으로 먼저 상담하세요
              </h2>

              <p>
                깨짐·파손·들뜸이 보이는 사진과
                작업 지역을 문자로 보내주시면
                타일 수리·교체 상담이 가능합니다.
              </p>
            </div>

            <div className="clean-area-photo-card">
              <strong>
                {PHONE_DISPLAY}
              </strong>

              <p>
                지역 + 깨진 타일 사진 + 작업내용
              </p>

              <a href={SMS_LINK}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="clean-area-cta">
          <div className="container clean-area-cta-inner">
            <div>
              <span>
                금손종합보수
              </span>

              <h2>
                {districtName}
                타일교체·타일수리 문의
              </h2>
            </div>

            <a href={PHONE_LINK}>
              {PHONE_DISPLAY}
            </a>
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
                깨진 타일 수리 · 타일교체 · 부분보수
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                {districtName} 타일교체·타일수리
              </div>
            </div>
          </div>
        </footer>

        <div className="clean-mobile-actions">
          <a href={PHONE_LINK}>
            전화 상담
          </a>

          <a href={SMS_LINK}>
            사진 상담
          </a>
        </div>
      </main>
    </>
  );
}
