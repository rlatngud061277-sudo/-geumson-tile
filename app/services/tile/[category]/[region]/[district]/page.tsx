
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =========================================
   금손종합보수 지역별 SEO
   디자인 / 지역 URL / 기존 CSS 유지
========================================= */

const SITE_URL = "https://www.geumsontile.com";
const COMPANY = "금손종합보수";
const OWNER = "김영호";
const PHONE = "01080561990";
const PHONE_DISPLAY = "010-8056-1990";
const PHONE_LINK = `tel:${PHONE}`;

const SMS_MESSAGE =
  "안녕하세요. 금손종합보수 상담 문의드립니다.\n지역:\n작업 내용:\n타일 상태 사진:";
const SMS_LINK =
  `sms:${PHONE}?body=${encodeURIComponent(SMS_MESSAGE)}`;

/* =========================================
   서비스별 차별화
========================================= */

const CATEGORIES = {
  repair: {
    name: "타일수리",
    label: "TILE REPAIR",
    title: "타일 수리",
    description:
      "깨지거나 금이 간 타일, 들뜨거나 탈락한 타일의 상태를 확인하고 적절한 수리 방법을 안내합니다.",
    serviceTitle: "깨짐·균열·들뜸 타일수리",
    serviceDescription:
      "손상 범위와 주변 타일의 접착 상태를 살펴 부분 수리 또는 교체가 필요한지 판단합니다.",
    keywords: [
      "타일수리",
      "깨진타일수리",
      "벽타일수리",
      "바닥타일수리",
      "욕실타일수리",
    ],
    services: [
      {
        title: "깨진 타일 수리",
        desc: "타일 한 장의 깨짐과 균열, 모서리 손상을 확인하고 수리 가능 여부를 상담합니다.",
      },
      {
        title: "들뜬 타일 수리",
        desc: "타일을 두드렸을 때 빈 소리가 나거나 움직임이 있다면 접착 상태와 주변 손상을 확인합니다.",
      },
      {
        title: "욕실 타일 수리",
        desc: "욕실 벽과 바닥의 깨짐, 탈락, 균열을 확인하고 방수층에 영향을 주지 않는 작업 범위를 검토합니다.",
      },
    ],
    process: [
      "깨짐·균열·들뜸 상태 확인",
      "주변 타일과 바탕면 점검",
      "수리 또는 부분교체 방법 결정",
      "작업 후 마감 상태 확인",
    ],
    imageIds: [1, 7, 8],
    faqs: [
      {
        q: "깨진 타일 한 장도 수리할 수 있나요?",
        a: "손상된 위치와 타일 상태에 따라 가능합니다. 동일한 타일 확보 여부와 바탕면 상태에 따라 교체가 필요할 수 있습니다.",
      },
      {
        q: "들뜬 타일을 그대로 사용해도 되나요?",
        a: "들뜸이 심해지면 탈락이나 파손 위험이 있으므로 현장 상태를 확인하는 것이 좋습니다.",
      },
    ],
  },

  maintenance: {
    name: "타일보수",
    label: "TILE MAINTENANCE",
    title: "타일 보수",
    description:
      "욕실 코너와 타일 마감부, 벽·바닥의 부분적인 손상을 확인하고 필요한 범위의 보수를 상담합니다.",
    serviceTitle: "타일 부분보수·마감보수",
    serviceDescription:
      "전체 면을 교체하기 전에 부분 보수가 가능한지 확인하고 손상된 마감 상태에 맞는 방법을 검토합니다.",
    keywords: [
      "타일보수",
      "타일부분보수",
      "욕실타일보수",
      "타일마감보수",
      "바닥타일보수",
    ],
    services: [
      {
        title: "타일 부분보수",
        desc: "부분적으로 깨지거나 손상된 타일의 상태를 확인하고 필요한 범위를 보수합니다.",
      },
      {
        title: "욕실 코너 마감보수",
        desc: "욕실 코너와 벽·바닥 연결부의 마감 손상, 틈 벌어짐 등을 확인합니다.",
      },
      {
        title: "바닥타일 보수",
        desc: "거실·상가·욕실 바닥의 부분 파손과 들뜸을 확인하고 적절한 보수 범위를 결정합니다.",
      },
    ],
    process: [
      "손상 위치와 마감 상태 확인",
      "부분 보수 가능 범위 검토",
      "필요한 부분의 보수 작업",
      "주변 타일과 마감 상태 확인",
    ],
    imageIds: [2, 3, 4, 7, 8],
    faqs: [
      {
        q: "전체 타일을 철거하지 않고 보수할 수 있나요?",
        a: "손상이 국소적이고 주변 타일이 안정적이라면 부분 보수가 가능할 수 있습니다.",
      },
      {
        q: "타일 보수와 교체는 어떤 차이가 있나요?",
        a: "보수는 손상된 부분과 마감의 복구에 초점을 두며, 교체는 기존 타일을 제거하고 새 타일을 시공하는 작업입니다.",
      },
    ],
  },

  replacement: {
    name: "타일교체",
    label: "TILE REPLACEMENT",
    title: "타일 교체",
    description:
      "깨지거나 들뜬 기존 타일을 제거한 뒤 새 타일을 시공하는 부분교체와 한 면 교체를 상담합니다.",
    serviceTitle: "벽타일·바닥타일 부분교체",
    serviceDescription:
      "타일 한 장부터 욕실 벽 한 면, 거실과 상가 바닥까지 손상 범위에 맞는 교체 방법을 안내합니다.",
    keywords: [
      "타일교체",
      "타일부분교체",
      "벽타일교체",
      "바닥타일교체",
      "욕실타일교체",
    ],
    services: [
      {
        title: "타일 한 장 교체",
        desc: "깨진 타일을 제거하고 규격과 두께에 맞는 새 타일로 부분교체합니다.",
      },
      {
        title: "욕실 벽타일 교체",
        desc: "벽타일 일부 또는 한 면의 손상 상태를 확인하고 필요한 교체 범위를 결정합니다.",
      },
      {
        title: "거실·상가 바닥타일 교체",
        desc: "바닥타일의 깨짐이나 들뜸을 확인하고 주변 타일과 높이를 맞춰 시공합니다.",
      },
    ],
    process: [
      "기존 타일 상태와 규격 확인",
      "타일 확보 및 교체 범위 결정",
      "기존 타일 철거와 바탕면 정리",
      "새 타일 시공과 마감 확인",
    ],
    imageIds: [0, 5, 6, 7, 8],
    faqs: [
      {
        q: "타일 한 장만 교체할 수 있나요?",
        a: "동일하거나 호환되는 규격의 타일을 확보하고 주변 타일을 손상시키지 않을 수 있다면 부분교체가 가능합니다.",
      },
      {
        q: "기존 타일과 색상이 똑같아지나요?",
        a: "제조 시기와 제품 단종 여부에 따라 색상과 무늬 차이가 발생할 수 있으므로 시공 전에 확인해야 합니다.",
      },
    ],
  },
} as const;

type CategoryKey = keyof typeof CATEGORIES;

/* =========================================
   기존 지역 전체 유지
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
   기존 시공사진 파일명 유지
   지역별 현장 사진이라고 허위 표기하지 않음
========================================= */

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "손상된 욕실 벽타일을 제거하고 새 타일로 교체한 시공사례입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
  },
  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일을 정리하고 복원한 시공사례입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc: "바닥과 코너 부분의 손상된 마감을 보수한 사례입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
  },
  {
    title: "욕실 타일 마감보수",
    desc: "욕실 코너와 타일 마감 부분을 보수한 사례입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
  },
  {
    title: "샤워부스 주변 타일 보수",
    desc: "샤워부스 주변 손상된 타일과 마감을 보수한 사례입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
  },
  {
    title: "벽타일 부분교체",
    desc: "기존 벽타일을 제거하고 수평을 맞춰 교체한 사례입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc: "욕실 벽 한 면의 기존 타일을 철거하고 교체한 사례입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
  },
  {
    title: "거실 바닥타일 부분시공",
    desc: "거실 바닥의 손상된 타일을 정리하고 시공한 사례입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc: "상가 복도의 손상된 바닥타일을 보수한 사례입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
  },
];

/* =========================================
   지역 정보
========================================= */

function getArea(
  region: string,
  district: string
) {
  if (!(region in REGIONS)) return null;

  const regionData =
    REGIONS[region as RegionKey];

  const districtName =
    (regionData.districts as Record<string, string>)[
      district
    ];

  if (!districtName) return null;

  return {
    name:
      region === "incheon"
        ? `인천 ${districtName}`
        : region === "seoul"
        ? `서울 ${districtName}`
        : districtName,

    shortName:
      region === "incheon"
        ? `인천 ${districtName}`
        : districtName,

    regionName: regionData.name,
  };
}

/* =========================================
   정적 지역 페이지 생성
========================================= */

export function generateStaticParams() {
  const results: {
    category: string;
    region: string;
    district: string;
  }[] = [];

  for (const category of Object.keys(CATEGORIES)) {
    for (const [region, data] of Object.entries(REGIONS)) {
      for (const district of Object.keys(data.districts)) {
        results.push({
          category,
          region,
          district,
        });
      }
    }
  }

  return results;
}

type PageProps = {
  params: Promise<{
    category: string;
    region: string;
    district: string;
  }>;
};

/* =========================================
   지역별 메타데이터
========================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, region, district } =
    await params;

  const area = getArea(region, district);

  if (!(category in CATEGORIES) || !area) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  const service =
    CATEGORIES[category as CategoryKey];

  const url =
    `${SITE_URL}/services/tile/${category}/${region}/${district}`;

  const title =
    `${area.shortName} ${service.name} | ${service.serviceTitle} | 금손종합보수`;

  const description =
    `${area.name} ${service.name} 상담. ${service.description} 벽타일·바닥타일 시공사례, 작업 방법과 사진 상담 안내를 확인하세요.`;

  const image =
    `${SITE_URL}${beforeAfter[service.imageIds[0]].after}`;

  return {
    title: { absolute: title },
    description,

    keywords: [
      `${area.shortName} ${service.name}`,
      `${area.name} ${service.name}`,
      ...service.keywords.map(
        (keyword) => `${area.shortName} ${keyword}`
      ),
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      url,
      title,
      description,
      images: [
        {
          url: image,
          alt: `${service.name} 시공사례`,
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
   지역별 상세페이지
========================================= */

export default async function TileCategoryPage({
  params,
}: PageProps) {
  const { category, region, district } =
    await params;

  const area = getArea(region, district);

  if (!(category in CATEGORIES) || !area) {
    notFound();
  }

  const categoryKey = category as CategoryKey;
  const service = CATEGORIES[categoryKey];

  const pageUrl =
    `${SITE_URL}/services/tile/${category}/${region}/${district}`;

  const selectedPhotos =
    service.imageIds.map((id) => beforeAfter[id]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} ${service.name}`,
    description: service.description,
    serviceType: service.name,
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY,
      telephone: PHONE_DISPLAY,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="clean-area-page">

        {/* HEADER */}
        <header className="clean-area-header">
          <div className="container clean-area-header-inner">
            <Link href="/" className="brand">
              <div className="brand-mark">◆</div>
              <div>
                <div className="brand-name">
                  {COMPANY}
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

            <nav
              className="clean-area-breadcrumb"
              aria-label="현재 위치"
            >
              <Link href="/">홈</Link>
              <span>›</span>
              <Link href="/services/tile">
                타일
              </Link>
              <span>›</span>
              <Link
                href={`/services/tile/${category}`}
              >
                {service.name}
              </Link>
              <span>›</span>
              <strong>{area.name}</strong>
            </nav>

            <div className="clean-area-label">
              {service.label}
            </div>

            <h1>
              {area.shortName}
              <br />
              {service.title}
            </h1>

            <p>{service.description}</p>

            <p>
              {area.name} 지역의 타일 손상 상태를
              사진으로 보내주시면 작업 가능 범위와
              필요한 확인 사항을 안내해드립니다.
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

        {/* SERVICE */}
        <section className="clean-area-section">
          <div className="container">

            <div className="clean-area-section-head">
              <span>{service.label}</span>
              <h2>
                {area.shortName}{" "}
                {service.serviceTitle}
              </h2>
              <p>
                {service.serviceDescription}
              </p>
            </div>

            <div className="clean-area-service-grid">
              {service.services.map((item, index) => (
                <article key={item.title}>
                  <strong>
                    {String(index + 1).padStart(2, "0")}
                  </strong>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="clean-area-section">
          <div className="container">

            <div className="clean-area-section-head">
              <span>WORK PROCESS</span>
              <h2>
                {service.name} 작업 진행 안내
              </h2>
              <p>
                타일 상태와 시공 환경에 따라
                실제 작업 범위와 순서는
                달라질 수 있습니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              {service.process.map((item, index) => (
                <article key={item}>
                  <strong>
                    {String(index + 1).padStart(2, "0")}
                  </strong>
                  <h3>{item}</h3>
                </article>
              ))}
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
                {service.name} 시공 전후
              </h2>

              <p>
                금손종합보수의 기존 시공사례
                중 {service.name}와 관련된
                사진을 모았습니다.
                아래 사진은 {area.name} 현장
                사진만을 의미하지는 않습니다.
              </p>
            </div>

            <div className="before-after-grid">
              {selectedPhotos.map((item) => (
                <article
                  key={item.title}
                  className="before-after-card"
                >
                  <div className="before-after-images">

                    <div className="before-after-image-box">
                      <img
                        src={item.before}
                        alt={`${item.title} 작업 전 모습`}
                        loading="lazy"
                      />
                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={`${item.title} 작업 후 모습`}
                        loading="lazy"
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
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="clean-area-section">
          <div className="container">

            <div className="clean-area-section-head">
              <span>FAQ</span>
              <h2>
                {service.name} 자주 묻는 질문
              </h2>
            </div>

            <div className="clean-area-service-grid">
              {service.faqs.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY LINKS */}
        <section className="clean-area-section">
          <div className="container">

            <div className="clean-area-section-head">
              <span>OTHER SERVICES</span>
              <h2>
                {area.shortName} 다른 타일 서비스
              </h2>
            </div>

            <div className="clean-area-service-grid">
              {(Object.keys(CATEGORIES) as CategoryKey[])
                .filter((key) => key !== categoryKey)
                .map((key) => (
                  <article key={key}>
                    <h3>{CATEGORIES[key].name}</h3>
                    <p>
                      {CATEGORIES[key].description}
                    </p>
                    <Link
                      href={`/services/tile/${key}/${region}/${district}`}
                    >
                      {area.shortName}{" "}
                      {CATEGORIES[key].name} 보기 →
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* PHOTO CONSULT */}
        <section className="clean-area-photo">
          <div className="container clean-area-photo-inner">

            <div>
              <span>PHOTO CONSULT</span>
              <h2>
                {area.shortName} {service.name}
                <br />
                사진으로 먼저 상담하세요
              </h2>
              <p>
                작업 지역과 손상된 타일의 전체 사진,
                가까이 촬영한 사진을 보내주세요.
                타일 규격을 알고 있다면
                함께 알려주시면 좋습니다.
              </p>
            </div>

            <div className="clean-area-photo-card">
              <strong>{PHONE_DISPLAY}</strong>
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
              <span>{COMPANY}</span>
              <h2>
                {area.shortName}{" "}
                {service.name} 문의
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
                {COMPANY}
              </div>
              <div className="footer-text">
                대표자 {OWNER}
              </div>
            </div>

            <div className="footer-right">
              <a href={PHONE_LINK}>
                {PHONE_DISPLAY}
              </a>
              <div className="footer-text">
                {area.name} {service.name} 상담
              </div>
            </div>

          </div>
        </footer>

        {/* MOBILE CTA */}
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
