
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* 금손종합보수 기본 정보 */

const SITE = "https://www.geumsontile.com";
const COMPANY = "금손종합보수";
const PHONE = "01080561990";
const PHONE_TEXT = "010-8056-1990";

/* 서비스 3개 */

const SERVICES = {
  repair: {
    name: "타일수리",
    en: "TILE REPAIR",
    title: "깨진 타일·들뜬 타일 수리",
    intro:
      "깨짐, 균열, 들뜸, 탈락 등 손상된 벽타일과 바닥타일의 상태를 확인하고 적절한 수리 방법을 안내합니다.",
    items: [
      {
        title: "깨진 타일 수리",
        desc: "충격으로 파손되거나 균열이 발생한 타일의 손상 범위와 교체 필요 여부를 확인합니다.",
      },
      {
        title: "들뜬 타일 수리",
        desc: "타일에서 빈 소리가 나거나 움직이는 경우 접착 상태와 바탕면을 점검합니다.",
      },
      {
        title: "욕실 타일 수리",
        desc: "욕실 벽과 바닥의 파손 부위, 주변 마감 상태, 방수층 영향 여부를 확인합니다.",
      },
    ],
    photos: [1, 7, 8],
    questions: [
      {
        q: "깨진 타일 한 장만 수리할 수 있나요?",
        a: "타일 규격과 주변 상태에 따라 부분 수리가 가능합니다. 동일한 타일이 없다면 유사 제품으로 교체해야 할 수도 있습니다.",
      },
      {
        q: "들뜬 타일을 그대로 둬도 되나요?",
        a: "들뜸이 심해지면 타일이 탈락할 수 있어 상태를 점검하는 것이 좋습니다.",
      },
    ],
  },
  maintenance: {
    name: "타일보수",
    en: "TILE MAINTENANCE",
    title: "타일 부분보수·마감보수",
    intro:
      "타일 코너, 벽과 바닥 연결부, 부분적인 깨짐과 마감 손상을 확인하고 필요한 범위의 보수를 상담합니다.",
    items: [
      {
        title: "타일 부분보수",
        desc: "부분적으로 손상된 타일을 확인하여 전체 철거 없이 보수가 가능한지 검토합니다.",
      },
      {
        title: "욕실 마감보수",
        desc: "욕실 코너와 샤워부스 주변의 깨짐, 틈 벌어짐, 마감 손상을 확인합니다.",
      },
      {
        title: "바닥타일 보수",
        desc: "거실과 상가 바닥의 깨짐 및 들뜸 부위를 확인하고 부분 보수 범위를 결정합니다.",
      },
    ],
    photos: [2, 3, 4, 7, 8],
    questions: [
      {
        q: "전체 타일을 철거해야 하나요?",
        a: "손상된 부분이 작고 주변 타일이 안정적이라면 부분 보수가 가능할 수 있습니다.",
      },
      {
        q: "보수 비용은 어떻게 결정되나요?",
        a: "손상 면적, 타일 종류, 철거 범위, 현장 접근성과 마감 작업에 따라 달라집니다.",
      },
    ],
  },
  replacement: {
    name: "타일교체",
    en: "TILE REPLACEMENT",
    title: "벽타일·바닥타일 부분교체",
    intro:
      "기존 타일을 철거하고 새 타일을 시공하는 한 장 교체, 부분교체, 욕실 벽 한 면 교체를 상담합니다.",
    items: [
      {
        title: "타일 한 장 교체",
        desc: "깨진 타일을 제거하고 규격과 두께가 적합한 새 타일로 교체하는 작업입니다.",
      },
      {
        title: "욕실 벽타일 교체",
        desc: "욕실 벽의 부분 파손 또는 넓은 손상 부위를 확인하고 적절한 교체 범위를 결정합니다.",
      },
      {
        title: "바닥타일 교체",
        desc: "거실, 상가, 욕실 바닥의 손상된 타일을 제거하고 높이와 마감을 맞춰 시공합니다.",
      },
    ],
    photos: [0, 5, 6, 7, 8],
    questions: [
      {
        q: "타일 한 장만 교체할 수 있나요?",
        a: "적합한 규격의 타일을 확보할 수 있고 주변 타일에 손상을 주지 않는 조건이면 가능합니다.",
      },
      {
        q: "기존 타일과 똑같은 색상으로 교체되나요?",
        a: "단종 여부와 제조 시기 차이로 색상과 무늬가 달라질 수 있으므로 사전에 확인해야 합니다.",
      },
    ],
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

/* 서울·경기·인천 지역 */

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

/* 기존 시공사진 유지 */

const PHOTOS = [
  {
    title: "욕실 벽타일 부분교체",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
  },
  {
    title: "거실 벽타일 복원",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
  },
  {
    title: "욕실 바닥·코너 보수",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
  },
  {
    title: "욕실 타일 마감보수",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
  },
  {
    title: "샤워부스 주변 타일 보수",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
  },
  {
    title: "벽타일 부분교체",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
  },
  {
    title: "거실 바닥타일 부분시공",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
  },
  {
    title: "상가 복도 바닥타일 보수",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
  },
];

/* 지역별 안내 주제
   실제 시공장소를 의미하지 않음 */

const AREA_TOPICS = [
  {
    title: "욕실 벽타일",
    description:
      "욕실 벽의 균열과 타일 탈락, 코너 마감 상태를 먼저 확인합니다.",
  },
  {
    title: "거실 바닥타일",
    description:
      "바닥타일의 깨짐과 들뜸, 주변 타일의 높이 차이를 확인합니다.",
  },
  {
    title: "상가 바닥타일",
    description:
      "보행이 많은 바닥의 파손 범위와 사용 환경을 고려합니다.",
  },
  {
    title: "주방 벽타일",
    description:
      "주방 벽의 타일 파손과 접착 상태, 주변 마감을 확인합니다.",
  },
];

function getArea(region: string, district: string) {
  if (!(region in REGIONS)) return null;

  const data = REGIONS[region as RegionKey];

  const districtName = (
    data.districts as Record<string, string>
  )[district];

  if (!districtName) return null;

  const fullName =
    region === "seoul"
      ? `서울 ${districtName}`
      : region === "incheon"
      ? `인천 ${districtName}`
      : districtName;

  return {
    fullName,
    districtName,
    regionName: data.name,
  };
}

function getTopic(region: string, district: string) {
  const key = `${region}-${district}`;
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return AREA_TOPICS[hash % AREA_TOPICS.length];
}

function getSmsLink(area: string, service: string) {
  const message =
    `안녕하세요. 금손종합보수 상담 문의드립니다.\n` +
    `지역: ${area}\n` +
    `작업: ${service}\n` +
    `타일 상태 사진을 첨부하겠습니다.`;

  return `sms:${PHONE}?body=${encodeURIComponent(message)}`;
}

type Params = {
  category: string;
  region: string;
  district: string;
};

type PageProps = {
  params: Promise<Params>;
};

/* 지역별 URL 정적 생성 */

export function generateStaticParams(): Params[] {
  const result: Params[] = [];

  for (const category of Object.keys(SERVICES)) {
    for (const [region, data] of Object.entries(REGIONS)) {
      for (const district of Object.keys(data.districts)) {
        result.push({
          category,
          region,
          district,
        });
      }
    }
  }

  return result;
}

/* 네이버 SEO */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, region, district } = await params;
  const area = getArea(region, district);

  if (!(category in SERVICES) || !area) {
    return {
      title: "페이지를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  const service = SERVICES[category as ServiceKey];

  const url =
    `${SITE}/services/tile/${category}/${region}/${district}`;

  const title =
    `${area.fullName} ${service.name} | ${service.title} | 금손종합보수`;

  const description =
    `${area.fullName} ${service.name} 상담 안내. ` +
    `${service.intro} ` +
    `금손종합보수의 타일 시공 전후 사진과 상담 방법을 확인하세요.`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      title,
      description,
      url,
      images: [
        {
          url: `${SITE}${PHOTOS[service.photos[0]].after}`,
          alt: `${service.name} 작업 사례 사진`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/* 상세 페이지 */

export default async function TileAreaPage({
  params,
}: PageProps) {
  const { category, region, district } = await params;

  const area = getArea(region, district);

  if (!(category in SERVICES) || !area) {
    notFound();
  }

  const serviceKey = category as ServiceKey;
  const service = SERVICES[serviceKey];

  const topic = getTopic(region, district);

  const photos = service.photos.map(
    (index) => PHOTOS[index]
  );

  const sms = getSmsLink(
    area.fullName,
    service.name
  );

  const url =
    `${SITE}/services/tile/${category}/${region}/${district}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.fullName} ${service.name}`,
    description: service.intro,
    serviceType: service.name,
    url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY,
      url: SITE,
      telephone: PHONE_TEXT,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.fullName,
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
              href={`tel:${PHONE}`}
              className="clean-area-header-call"
            >
              전화 상담
            </a>
          </div>
        </header>

        <section className="clean-area-hero">
          <div className="container">
            <nav
              className="clean-area-breadcrumb"
              aria-label="현재 위치"
            >
              <Link href="/">홈</Link>
              <span>›</span>
              <Link href="/services/tile">
                타일 전문
              </Link>
              <span>›</span>
              <Link href={`/services/tile/${category}`}>
                {service.name}
              </Link>
              <span>›</span>
              <strong>{area.fullName}</strong>
            </nav>

            <div className="clean-area-label">
              {service.en}
            </div>

            <h1>
              {area.fullName}
              <br />
              {service.name}
            </h1>

            <p>{service.intro}</p>

            <p>
              {area.fullName} 지역의 타일 상태를
              사진으로 보내주시면 작업 가능 여부와
              필요한 확인 사항을 안내합니다.
            </p>

            <div className="clean-area-hero-buttons">
              <a
                href={`tel:${PHONE}`}
                className="clean-area-primary"
              >
                전화 상담
              </a>
              <a
                href={sms}
                className="clean-area-secondary"
              >
                사진 문자 상담
              </a>
            </div>
          </div>
        </section>

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>{service.en}</span>
              <h2>
                {area.fullName} {service.title}
              </h2>
              <p>{service.intro}</p>
            </div>

            <div className="clean-area-service-grid">
              {service.items.map((item, index) => (
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

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>AREA GUIDE</span>
              <h2>
                {area.fullName} 타일 작업 상담 안내
              </h2>
              <p>
                지역별 상담 페이지에서 우선 확인할
                작업 유형을 안내합니다.
              </p>
            </div>

            <div className="clean-area-service-grid">
              <article>
                <strong>01</strong>
                <h3>{topic.title} 상태 확인</h3>
                <p>{topic.description}</p>
              </article>
              <article>
                <strong>02</strong>
                <h3>부분 작업 가능 여부</h3>
                <p>
                  손상 면적과 주변 타일의 접착 상태,
                  규격 등을 확인해 필요한 작업 범위를
                  검토합니다.
                </p>
              </article>
              <article>
                <strong>03</strong>
                <h3>사진으로 상담</h3>
                <p>
                  손상 부위의 근접 사진과 공간 전체
                  사진을 함께 보내주시면 상담에
                  도움이 됩니다.
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
                {service.name} 시공 전후 사진
              </h2>
              <p>
                금손종합보수의 기존 시공사진 중
                {service.name}와 관련된 사례입니다.
                사진의 실제 시공 지역은 확인되지
                않았으며, {area.fullName}에서
                시공한 사례라는 의미는 아닙니다.
              </p>
            </div>

            <div className="before-after-grid">
              {photos.map((item) => (
                <article
                  className="before-after-card"
                  key={item.title}
                >
                  <div className="before-after-images">
                    <div className="before-after-image-box">
                      <img
                        src={item.before}
                        alt={`${item.title} 작업 전`}
                        loading="lazy"
                      />
                      <span className="before-label">
                        시공 전
                      </span>
                    </div>

                    <div className="before-after-image-box">
                      <img
                        src={item.after}
                        alt={`${item.title} 작업 후`}
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
                    <p>
                      시공 전후 사진을 통해 작업
                      범위와 마감 상태를 확인할 수
                      있습니다.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>FAQ</span>
              <h2>
                {service.name} 자주 묻는 질문
              </h2>
            </div>

            <div className="clean-area-service-grid">
              {service.questions.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clean-area-section">
          <div className="container">
            <div className="clean-area-section-head">
              <span>OTHER SERVICES</span>
              <h2>
                {area.fullName} 다른 타일 서비스
              </h2>
            </div>

            <div className="clean-area-service-grid">
              {(Object.keys(SERVICES) as ServiceKey[])
                .filter((key) => key !== serviceKey)
                .map((key) => (
                  <article key={key}>
                    <h3>{SERVICES[key].name}</h3>
                    <p>{SERVICES[key].intro}</p>
                    <Link
                      href={`/services/tile/${key}/${region}/${district}`}
                    >
                      {area.fullName}{" "}
                      {SERVICES[key].name} 보기 →
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>

        <section className="clean-area-photo">
          <div className="container clean-area-photo-inner">
            <div>
              <span>PHOTO CONSULT</span>
              <h2>
                {area.fullName} {service.name}
                <br />
                사진으로 먼저 상담하세요
              </h2>
              <p>
                작업 지역, 타일 전체 사진,
                깨지거나 손상된 부분의 근접 사진,
                타일 크기를 알려주시면 좋습니다.
              </p>
            </div>

            <div className="clean-area-photo-card">
              <strong>{PHONE_TEXT}</strong>
              <p>지역 + 작업 내용 + 사진</p>
              <a href={sms}>
                사진 문자 보내기
              </a>
            </div>
          </div>
        </section>

        <section className="clean-area-cta">
          <div className="container clean-area-cta-inner">
            <div>
              <span>{COMPANY}</span>
              <h2>
                {area.fullName} {service.name} 문의
              </h2>
            </div>
            <a href={`tel:${PHONE}`}>
              {PHONE_TEXT}
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-company">
                {COMPANY}
              </div>
              <div className="footer-text">
                대표자 김영호
              </div>
            </div>

            <div className="footer-right">
              <a href={`tel:${PHONE}`}>
                {PHONE_TEXT}
              </a>
              <div className="footer-text">
                {area.fullName} {service.name} 상담
              </div>
            </div>
          </div>
        </footer>

        <div className="clean-mobile-actions">
          <a href={`tel:${PHONE}`}>전화 상담</a>
          <a href={sms}>사진 상담</a>
        </div>
      </main>
    </>
  );
}
