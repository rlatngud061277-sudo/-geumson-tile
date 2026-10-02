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

    english: "TILE REPAIR",

    title: "깨진 타일 수리",

    description:
      "깨짐, 균열, 들뜸, 탈락 등 손상된 벽타일과 바닥타일을 현장 상태에 맞춰 수리합니다.",

    detail:
      "깨진 타일, 금이 간 타일, 들뜬 타일, 탈락한 타일 등 손상 상태를 확인하고 필요한 부분 위주로 수리합니다.",

    image: "/IMG_1190.jpeg",
  },

  maintenance: {
    name: "타일보수",

    english: "TILE MAINTENANCE",

    title: "타일 부분보수",

    description:
      "타일 깨짐, 틈 벌어짐, 코너 마감, 부분 파손 등 전체 철거가 필요하지 않은 부분을 보수합니다.",

    detail:
      "욕실 코너, 샤워부스 주변, 벽타일과 바닥타일의 부분적인 손상을 현장 상태에 맞춰 보수합니다.",

    image: "/IMG_1182.jpeg",
  },

  replacement: {
    name: "타일교체",

    english: "TILE REPLACEMENT",

    title: "벽·바닥타일 교체",

    description:
      "깨지거나 파손된 기존 타일을 철거하고 한 장 교체부터 한 면 교체까지 진행합니다.",

    detail:
      "욕실 벽타일, 거실 바닥타일, 상가 바닥타일 등 파손된 타일을 철거하고 새 타일로 교체합니다.",

    image: "/IMG_1206.jpeg",
  },
} as const;

type CategoryKey =
  keyof typeof CATEGORIES;

/* =========================================
   서울
========================================= */

const SEOUL = [
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
   경기
========================================= */

const GYEONGGI = [
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

/* =========================================
   인천
========================================= */

const INCHEON = [
  { name: "중구", slug: "jung" },
  { name: "동구", slug: "dong" },
  { name: "미추홀구", slug: "michuhol" },
  { name: "연수구", slug: "yeonsu" },
  { name: "남동구", slug: "namdong" },
  { name: "부평구", slug: "bupyeong" },
  { name: "계양구", slug: "gyeyang" },
  { name: "서구", slug: "seo" },
  { name: "강화군", slug: "ganghwa" },
  { name: "옹진군", slug: "ongjin" },
];

/* =========================================
   STATIC
========================================= */

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(
    (category) => ({
      category,
    })
  );
}

/* =========================================
   SEO
========================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}): Promise<Metadata> {
  const { category } = await params;

  if (!(category in CATEGORIES)) {
    return {};
  }

  const data =
    CATEGORIES[category as CategoryKey];

  const pageUrl =
    `${SITE_URL}/services/tile/${category}`;

  const imageUrl =
    `${SITE_URL}${data.image}`;

  const title =
    `${data.name} | 서울·경기·인천 ${data.title} | 금손종합보수`;

  const description =
    `금손종합보수 ${data.name} 안내. ${data.description} 서울·경기·인천 지역별 페이지와 실제 시공사례를 확인하세요.`;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      data.name,
      data.title,
      `서울 ${data.name}`,
      `경기 ${data.name}`,
      `인천 ${data.name}`,
      `깨진 타일 ${data.name}`,
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
          url: imageUrl,
          alt:
            `금손종합보수 ${data.name} 시공사례`,
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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  if (!(category in CATEGORIES)) {
    notFound();
  }

  const data =
    CATEGORIES[category as CategoryKey];

  return (
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
              {data.name}
            </strong>
          </div>

          <div className="clean-area-label">
            {data.english}
          </div>

          <h1>
            금손종합보수
            <br />
            {data.name}
          </h1>

          <p>
            {data.description}
            <br />
            아래에서 서울·경기·인천 지역을
            선택할 수 있습니다.
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
            <span>
              {data.english}
            </span>

            <h2>
              {data.title}
            </h2>

            <p>
              {data.detail}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          서울
      ========================================= */}

      <section className="home-region-section">
        <div className="container">
          <div className="home-region-groups">
            <article className="home-region-card">
              <div className="home-region-card-top">
                <div>
                  <span className="home-region-en">
                    SEOUL
                  </span>

                  <h3>
                    서울 {data.name}
                  </h3>

                  <p>
                    서울 25개 구
                  </p>
                </div>
              </div>

              <div className="home-region-links">
                {SEOUL.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/tile/${category}/seoul/${item.slug}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>

            {/* 경기 */}

            <article className="home-region-card">
              <div className="home-region-card-top">
                <div>
                  <span className="home-region-en">
                    GYEONGGI
                  </span>

                  <h3>
                    경기 {data.name}
                  </h3>

                  <p>
                    경기 주요 지역
                  </p>
                </div>
              </div>

              <div className="home-region-links">
                {GYEONGGI.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/tile/${category}/gyeonggi/${item.slug}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>

            {/* 인천 */}

            <article className="home-region-card">
              <div className="home-region-card-top">
                <div>
                  <span className="home-region-en">
                    INCHEON
                  </span>

                  <h3>
                    인천 {data.name}
                  </h3>

                  <p>
                    인천 10개 군·구
                  </p>
                </div>
              </div>

              <div className="home-region-links">
                {INCHEON.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/tile/${category}/incheon/${item.slug}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CATEGORY SWITCH */}

      <section className="clean-area-section">
        <div className="container">
          <div className="clean-area-section-head">
            <span>
              OTHER SERVICE
            </span>

            <h2>
              다른 타일 서비스 보기
            </h2>
          </div>

          <div className="clean-area-service-grid">
            <article>
              <h3>
                타일수리
              </h3>

              <p>
                깨짐·균열·들뜸 등
                손상된 타일 수리
              </p>

              <Link
                href="/services/tile/repair"
                className="home-region-all"
              >
                타일수리 보기
              </Link>
            </article>

            <article>
              <h3>
                타일보수
              </h3>

              <p>
                부분 손상과 마감 문제
                타일 보수
              </p>

              <Link
                href="/services/tile/maintenance"
                className="home-region-all"
              >
                타일보수 보기
              </Link>
            </article>

            <article>
              <h3>
                타일교체
              </h3>

              <p>
                깨진 타일 한 장부터
                벽·바닥 교체
              </p>

              <Link
                href="/services/tile/replacement"
                className="home-region-all"
              >
                타일교체 보기
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PHOTO */}

      <section className="clean-area-photo">
        <div className="container clean-area-photo-inner">
          <div>
            <span>
              PHOTO CONSULT
            </span>

            <h2>
              {data.name}
              <br />
              사진으로 먼저 상담하세요
            </h2>

            <p>
              타일 상태가 잘 보이는 사진과
              작업 지역을 문자로 보내주세요.
            </p>
          </div>

          <div className="clean-area-photo-card">
            <strong>
              {PHONE_DISPLAY}
            </strong>

            <p>
              지역 + 작업내용 + 사진
            </p>

            <a href={SMS_LINK}>
              사진 문자 보내기
            </a>
          </div>
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
              타일수리 · 타일보수 · 타일교체
            </div>
          </div>

          <div className="footer-right">
            <a href={PHONE_LINK}>
              {PHONE_DISPLAY}
            </a>

            <div className="footer-text">
              서울 · 경기 · 인천
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
  );
}
