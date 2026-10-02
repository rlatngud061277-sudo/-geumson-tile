import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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

const DISTRICTS: Record<string, string> = {
  jung: "중구",
  dong: "동구",
  michuhol: "미추홀구",
  yeonsu: "연수구",
  namdong: "남동구",
  bupyeong: "부평구",
  gyeyang: "계양구",
  seo: "서구",
  ganghwa: "강화군",
  ongjin: "옹진군",
};

const REPRESENTATIVE_IMAGES = [
  "/IMG_1179.jpeg",
  "/IMG_1175.jpeg",
  "/IMG_1184.jpeg",
  "/IMG_1182.jpeg",
  "/IMG_1177.jpeg",
  "/IMG_1188.jpeg",
  "/IMG_1206.jpeg",
  "/IMG_1190.jpeg",
  "/IMG_1186.jpeg",
];

function getRepresentativeImage(district: string) {
  const keys = Object.keys(DISTRICTS);
  const index = keys.indexOf(district);

  const image =
    REPRESENTATIVE_IMAGES[
      Math.max(index, 0) % REPRESENTATIVE_IMAGES.length
    ];

  return `${SITE_URL}${image}`;
}

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "깨진 욕실 벽타일을 철거하고 새 타일로 부분 교체한 현장입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    beforeAlt: "깨진 욕실 벽타일 교체 전",
    afterAlt: "욕실 벽타일 부분교체 후",
  },
  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일 부위를 정리하고 수리·복원한 현장입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    beforeAlt: "거실 벽타일 수리 전",
    afterAlt: "거실 벽타일 복원 후",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc: "파손된 욕실 바닥타일과 코너를 보수한 현장입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    beforeAlt: "욕실 바닥타일 수리 전",
    afterAlt: "욕실 바닥타일 보수 후",
  },
  {
    title: "욕실 타일 마감보수",
    desc: "욕실 타일 깨짐과 벌어진 마감 부분을 보수한 현장입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    beforeAlt: "욕실 타일 깨짐 보수 전",
    afterAlt: "욕실 타일 마감보수 후",
  },
  {
    title: "샤워부스 주변 타일 마감보수",
    desc: "샤워부스 주변의 손상된 타일과 마감 부위를 수리한 현장입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
    beforeAlt: "샤워부스 타일 수리 전",
    afterAlt: "샤워부스 타일 보수 후",
  },
  {
    title: "벽타일 부분교체·수평시공",
    desc: "벽타일을 철거한 뒤 수평을 맞춰 새 타일로 부분 교체한 현장입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    beforeAlt: "벽타일 부분교체 전",
    afterAlt: "벽타일 부분교체 후",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc: "화장실 벽타일 한 면을 새 타일로 교체한 현장입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
    beforeAlt: "화장실 벽타일 교체 전",
    afterAlt: "화장실 벽타일 교체 후",
  },
  {
    title: "거실 깨진 바닥타일 보수",
    desc: "깨진 거실 바닥타일을 철거한 뒤 새 타일로 부분 교체한 현장입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
    beforeAlt: "거실 깨진 바닥타일 수리 전",
    afterAlt: "거실 바닥타일 교체 후",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc: "상가 복도의 깨진 바닥타일을 철거하고 새 타일로 교체한 현장입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
    beforeAlt: "상가 바닥타일 교체 전",
    afterAlt: "상가 바닥타일 교체 후",
  },
];

export function generateStaticParams() {
  return Object.keys(DISTRICTS).map((district) => ({
    district,
  }));
}

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

  const areaName = `인천 ${districtName}`;

  const pageUrl =
    `${SITE_URL}/services/tile/incheon/${district}`;

  const representativeImage =
    getRepresentativeImage(district);

  const title =
    `${areaName} 타일교체·타일수리·깨진타일보수 | 금손종합보수`;

  const description =
    `${areaName} 깨진 타일 수리·교체 상담. 욕실 벽타일, 바닥타일, 타일 깨짐·파손·들뜸 및 부분교체 시공사례 안내.`;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      `${areaName} 타일교체`,
      `${areaName} 타일수리`,
      `${areaName} 타일보수`,
      `${areaName} 깨진타일`,
      `${areaName} 깨진타일수리`,
      `${areaName} 벽타일교체`,
      `${areaName} 바닥타일교체`,
      `${areaName} 타일부분교체`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",

      images: [
        {
          url: representativeImage,
          alt:
            `${areaName} 타일 수리·보수·교체 시공사례`,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IncheonDistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district } = await params;

  const districtName = DISTRICTS[district];

  if (!districtName) {
    notFound();
  }

  const areaName = `인천 ${districtName}`;

  const representativeImage =
    getRepresentativeImage(district);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",

    name:
      `${areaName} 타일교체·타일수리·타일보수`,

    image: representativeImage,

    description:
      `${areaName} 깨진 타일 수리, 벽타일 교체, 바닥타일 부분교체 서비스`,

    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY,
      telephone: PHONE_DISPLAY,
      url: SITE_URL,
    },

    areaServed: areaName,

    serviceType: [
      "깨진 타일 수리",
      "타일 교체",
      "타일 보수",
      "벽타일 교체",
      "바닥타일 교체",
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

        <section className="clean-area-hero">
          <div className="container">
            <div className="clean-area-breadcrumb">
              <Link href="/">홈</Link>
              <span>›</span>

              <Link href="/services/tile">
                타일 수리
              </Link>

              <span>›</span>

              <Link href="/services/tile/incheon">
                인천
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
              {areaName}
              <br />
              타일 교체·수리·보수
            </h1>

            <p>
              {areaName} 깨진 타일, 금이 간 타일,
              들뜬 타일, 탈락한 타일을 수리하거나
              교체합니다. 욕실 벽타일·바닥타일과
              주택·상가 타일 부분교체도 상담 가능합니다.
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

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>TILE SERVICE</span>

              <h2>
                {areaName} 깨진 타일
                수리·교체
              </h2>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>01</strong>

                <h3>
                  깨진 타일 수리
                </h3>

                <p>
                  깨지고 금이 간 벽타일과
                  바닥타일을 확인해 보수합니다.
                </p>
              </article>

              <article>
                <strong>02</strong>

                <h3>
                  타일 부분교체
                </h3>

                <p>
                  파손된 부분만 철거한 뒤
                  새 타일로 교체합니다.
                </p>
              </article>

              <article>
                <strong>03</strong>

                <h3>
                  벽·바닥타일 교체
                </h3>

                <p>
                  욕실 벽타일과 바닥타일,
                  거실·상가 타일 교체를 진행합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="before-after-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                {areaName} 타일
                수리·교체 시공사례
              </h2>

              <p>
                타일 수리·교체 상담 시 참고할 수 있는
                금손종합보수 실제 시공 전후 사례입니다.
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
                        alt={`${areaName} ${item.beforeAlt}`}
                      />

                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={`${areaName} ${item.afterAlt}`}
                      />

                      <span className="after-label">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="before-after-content">
                    <span>
                      {areaName} 타일
                      수리·교체 참고사례
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

        <section className="clean-area-photo">
          <div className="container clean-area-photo-inner">
            <div>
              <span>
                PHOTO CONSULT
              </span>

              <h2>
                {areaName} 깨진 타일
                <br />
                사진으로 먼저 상담하세요
              </h2>

              <p>
                깨진 타일의 전체 모습과
                파손 부분이 보이는 사진을
                문자로 보내주세요.
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

        <section className="clean-area-cta">
          <div className="container clean-area-cta-inner">
            <div>
              <span>
                금손종합보수
              </span>

              <h2>
                {areaName}
                타일교체·타일수리 문의
              </h2>
            </div>

            <a href={PHONE_LINK}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-company">
                금손종합보수
              </div>

              <div className="footer-text">
                대표자 김영호
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                {areaName} 타일교체·타일수리
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
