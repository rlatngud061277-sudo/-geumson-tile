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
타일 상태가 보이는 사진을 첨부해서 보내드리겠습니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

/* =========================================
   카테고리
========================================= */

const CATEGORIES = {
  repair: {
    name: "타일수리",

    label: "TILE REPAIR",

    title: "타일 수리",

    description:
      "깨짐, 균열, 들뜸, 탈락 등 손상된 타일을 현장 상태에 맞춰 수리합니다.",

    serviceTitle: "깨진 타일 수리",

    serviceDescription:
      "충격이나 노후로 깨지고 금이 간 벽타일·바닥타일을 확인해 필요한 범위를 수리합니다.",

    keywords: [
      "타일수리",
      "깨진타일수리",
      "벽타일수리",
      "바닥타일수리",
      "욕실타일수리",
      "타일깨짐수리",
    ],
  },

  maintenance: {
    name: "타일보수",

    label: "TILE MAINTENANCE",

    title: "타일 보수",

    description:
      "타일 깨짐, 틈 벌어짐, 마감 손상, 들뜸 등 부분적인 문제를 보수합니다.",

    serviceTitle: "타일 부분보수",

    serviceDescription:
      "전체 철거가 필요하지 않은 현장은 손상된 부분을 확인해 필요한 범위 위주로 보수합니다.",

    keywords: [
      "타일보수",
      "타일부분보수",
      "욕실타일보수",
      "벽타일보수",
      "바닥타일보수",
      "타일마감보수",
    ],
  },

  replacement: {
    name: "타일교체",

    label: "TILE REPLACEMENT",

    title: "타일 교체",

    description:
      "깨지거나 파손된 기존 타일을 철거하고 새 타일로 부분교체 또는 한 면 교체를 진행합니다.",

    serviceTitle: "타일 부분교체",

    serviceDescription:
      "깨진 타일 한 장부터 욕실 벽 한 면, 거실·상가 바닥타일까지 필요한 범위를 교체합니다.",

    keywords: [
      "타일교체",
      "타일부분교체",
      "벽타일교체",
      "바닥타일교체",
      "욕실타일교체",
      "깨진타일교체",
    ],
  },
} as const;

type CategoryKey = keyof typeof CATEGORIES;

/* =========================================
   지역
========================================= */

const REGIONS = {
  seoul: {
    name: "서울",

    districts: {
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
    },
  },

  gyeonggi: {
    name: "경기",

    districts: {
      gimpo: "김포",
      goyang: "고양",
      bucheon: "부천",
      paju: "파주",
      siheung: "시흥",
      gwangmyeong: "광명",
      ansan: "안산",
      anyang: "안양",
      gunpo: "군포",
    },
  },

  incheon: {
    name: "인천",

    districts: {
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
    },
  },
} as const;

type RegionKey = keyof typeof REGIONS;

/* =========================================
   시공사진
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "깨진 욕실 벽타일을 철거한 뒤 새 타일로 부분교체한 현장입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
  },

  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일을 정리하고 수리·복원한 현장입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
  },

  {
    title: "욕실 바닥·코너 보수",
    desc: "욕실 바닥과 코너의 손상된 부분을 정리하고 보수한 현장입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
  },

  {
    title: "욕실 타일 마감보수",
    desc: "욕실 코너의 깨짐과 벌어진 마감을 정리해 보수한 현장입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
  },

  {
    title: "샤워부스 주변 타일 보수",
    desc: "샤워부스 주변의 손상된 타일과 마감 부분을 보수한 현장입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
  },

  {
    title: "벽타일 부분교체",
    desc: "기존 벽타일을 철거하고 수평을 맞춰 새 타일로 교체한 현장입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },

  {
    title: "화장실 벽타일 한 면 교체",
    desc: "화장실 벽타일 한 면을 철거하고 새 타일로 교체한 현장입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
  },

  {
    title: "거실 깨진 바닥타일 보수",
    desc: "깨진 거실 바닥타일을 철거한 뒤 새 타일로 부분 보수한 현장입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },

  {
    title: "상가 복도 바닥타일 보수",
    desc: "상가 복도의 손상된 바닥타일을 철거한 뒤 새 타일로 보수한 현장입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
  },
];

/* =========================================
   대표 이미지
========================================= */

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

function getRepresentativeImage(
  category: string,
  region: string,
  district: string
) {
  const text = `${category}-${region}-${district}`;

  let total = 0;

  for (let i = 0; i < text.length; i++) {
    total += text.charCodeAt(i);
  }

  const image =
    REPRESENTATIVE_IMAGES[
      total % REPRESENTATIVE_IMAGES.length
    ];

  return `${SITE_URL}${image}`;
}

/* =========================================
   STATIC PARAMS
========================================= */

export function generateStaticParams() {
  const params: {
    category: string;
    region: string;
    district: string;
  }[] = [];

  Object.keys(CATEGORIES).forEach((category) => {
    Object.entries(REGIONS).forEach(
      ([region, regionData]) => {
        Object.keys(regionData.districts).forEach(
          (district) => {
            params.push({
              category,
              region,
              district,
            });
          }
        );
      }
    );
  });

  return params;
}

/* =========================================
   SEO
========================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
    region: string;
    district: string;
  }>;
}): Promise<Metadata> {
  const {
    category,
    region,
    district,
  } = await params;

  if (
    !(category in CATEGORIES) ||
    !(region in REGIONS)
  ) {
    return {};
  }

  const categoryData =
    CATEGORIES[category as CategoryKey];

  const regionData =
    REGIONS[region as RegionKey];

  const districtName =
    (regionData.districts as Record<string, string>)[
      district
    ];

  if (!districtName) {
    return {};
  }

  const areaName =
    region === "incheon"
      ? `인천 ${districtName}`
      : districtName;

  const pageUrl =
    `${SITE_URL}/services/tile/${category}/${region}/${district}`;

  const representativeImage =
    getRepresentativeImage(
      category,
      region,
      district
    );

  const title =
    `${areaName} ${categoryData.name} | 깨짐·부분시공 | 금손종합보수`;

  const description =
    `${areaName} ${categoryData.name} 상담. ${categoryData.description} 실제 타일 시공 전후 사진과 상담 정보를 확인하세요.`;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: categoryData.keywords.map(
      (keyword) => `${areaName} ${keyword}`
    ),

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
            `${areaName} ${categoryData.name} 시공사례`,
        },
      ],
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

export default async function TileCategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
    region: string;
    district: string;
  }>;
}) {
  const {
    category,
    region,
    district,
  } = await params;

  if (
    !(category in CATEGORIES) ||
    !(region in REGIONS)
  ) {
    notFound();
  }

  const categoryData =
    CATEGORIES[category as CategoryKey];

  const regionData =
    REGIONS[region as RegionKey];

  const districtName =
    (regionData.districts as Record<string, string>)[
      district
    ];

  if (!districtName) {
    notFound();
  }

  const areaName =
    region === "incheon"
      ? `인천 ${districtName}`
      : districtName;

  const representativeImage =
    getRepresentativeImage(
      category,
      region,
      district
    );

  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Service",

    name:
      `${areaName} ${categoryData.name}`,

    description:
      `${areaName} ${categoryData.description}`,

    image: representativeImage,

    provider: {
      "@type":
        "HomeAndConstructionBusiness",

      name: COMPANY,

      telephone: PHONE_DISPLAY,

      url: SITE_URL,
    },

    areaServed: areaName,

    serviceType:
      categoryData.name,
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
            <Link
              href="/"
              className="brand"
            >
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
                타일
              </Link>

              <span>›</span>

              <strong>
                {categoryData.name}
              </strong>

              <span>›</span>

              <strong>
                {areaName}
              </strong>
            </div>

            <div className="clean-area-label">
              {categoryData.label}
            </div>

            <h1>
              {areaName}
              <br />
              {categoryData.title}
            </h1>

            <p>
              {areaName} 지역의{" "}
              {categoryData.description}
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
                사진 문자 상담
              </a>
            </div>
          </div>
        </section>

        {/* CATEGORY SERVICE */}

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>
                {categoryData.label}
              </span>

              <h2>
                {areaName}{" "}
                {categoryData.serviceTitle}
              </h2>

              <p>
                {
                  categoryData.serviceDescription
                }
              </p>
            </div>

            <div className="clean-area-service-grid">
              {category === "repair" && (
                <>
                  <article>
                    <strong>01</strong>
                    <h3>깨진 타일 수리</h3>
                    <p>
                      충격으로 깨지거나 금이 간
                      타일을 확인해 수리합니다.
                    </p>
                  </article>

                  <article>
                    <strong>02</strong>
                    <h3>들뜬 타일 수리</h3>
                    <p>
                      벽이나 바닥에서 들뜬 타일의
                      상태를 확인해 재시공합니다.
                    </p>
                  </article>

                  <article>
                    <strong>03</strong>
                    <h3>욕실 타일 수리</h3>
                    <p>
                      욕실 벽·바닥의 깨짐과
                      파손 부위를 수리합니다.
                    </p>
                  </article>
                </>
              )}

              {category === "maintenance" && (
                <>
                  <article>
                    <strong>01</strong>
                    <h3>타일 부분보수</h3>
                    <p>
                      전체 철거 없이 손상된 부분만
                      정리해 보수합니다.
                    </p>
                  </article>

                  <article>
                    <strong>02</strong>
                    <h3>마감 보수</h3>
                    <p>
                      코너와 줄눈 주변의 벌어짐과
                      마감 손상을 보수합니다.
                    </p>
                  </article>

                  <article>
                    <strong>03</strong>
                    <h3>바닥타일 보수</h3>
                    <p>
                      거실·상가·욕실 바닥의
                      파손 부분을 보수합니다.
                    </p>
                  </article>
                </>
              )}

              {category === "replacement" && (
                <>
                  <article>
                    <strong>01</strong>
                    <h3>타일 한 장 교체</h3>
                    <p>
                      깨진 타일 한 장부터
                      필요한 부분만 교체합니다.
                    </p>
                  </article>

                  <article>
                    <strong>02</strong>
                    <h3>벽타일 교체</h3>
                    <p>
                      욕실·주방 벽타일을
                      부분 또는 한 면 교체합니다.
                    </p>
                  </article>

                  <article>
                    <strong>03</strong>
                    <h3>바닥타일 교체</h3>
                    <p>
                      거실·상가·욕실의 깨진
                      바닥타일을 교체합니다.
                    </p>
                  </article>
                </>
              )}
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}

        <section className="before-after-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">
                BEFORE & AFTER
              </div>

              <h2>
                {areaName}{" "}
                {categoryData.name} 시공사례
              </h2>

              <p>
                실제 금손종합보수
                시공 전후 사진입니다.
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
                        alt={`${areaName} ${categoryData.name} ${item.title} 시공 전`}
                      />

                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={`${areaName} ${categoryData.name} ${item.title} 시공 후`}
                      />

                      <span className="after-label">
                        시공 후
                      </span>
                    </div>
                  </div>

                  <div className="before-after-content">
                    <span>
                      금손종합보수 실제 시공사례
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
                {areaName}{" "}
                {categoryData.name}
                <br />
                사진으로 먼저 상담하세요
              </h2>

              <p>
                타일 상태가 잘 보이는 사진과
                작업 지역을 보내주시면
                상담해드립니다.
              </p>
            </div>

            <div className="clean-area-photo-card">
              <strong>
                {PHONE_DISPLAY}
              </strong>

              <p>
                지역 + 작업 내용 + 사진
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
                {areaName}{" "}
                {categoryData.name} 문의
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
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>

              <div className="footer-text">
                {areaName}{" "}
                {categoryData.name}
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
