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
파손된 타일 사진을 첨부해서 보내드리겠습니다.`;

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

const DISTRICTS: Record<string, string> = {
  gimpo: "김포",
  goyang: "고양",
  bucheon: "부천",
  paju: "파주",
  siheung: "시흥",
  gwangmyeong: "광명",
  ansan: "안산",
  anyang: "안양",
  gunpo: "군포",
};

const beforeAfter = [
  {
    title: "욕실 벽타일 부분교체",
    desc: "깨진 욕실 벽타일을 철거하고 기존 타일과 자연스럽게 맞춰 부분 교체한 현장입니다.",
    before: "/IMG_1176.jpeg",
    after: "/IMG_1179.jpeg",
    beforeAlt: "욕실 벽타일 부분교체 전",
    afterAlt: "욕실 벽타일 부분교체 후",
  },
  {
    title: "거실 벽타일 복원",
    desc: "손상된 벽타일 부위를 정리한 뒤 새 타일을 맞춰 복원한 현장입니다.",
    before: "/IMG_1178.jpeg",
    after: "/IMG_1175.jpeg",
    beforeAlt: "거실 벽타일 복원 전",
    afterAlt: "거실 벽타일 복원 후",
  },
  {
    title: "욕실 바닥·코너 보수",
    desc: "기존 욕실 바닥 타일을 철거한 뒤 바닥과 코너 부분을 깔끔하게 보수한 현장입니다.",
    before: "/IMG_1183.jpeg",
    after: "/IMG_1184.jpeg",
    beforeAlt: "욕실 바닥 코너 보수 전",
    afterAlt: "욕실 바닥 코너 보수 후",
  },
  {
    title: "욕실 타일 마감보수",
    desc: "욕실 코너 부분의 손상되고 벌어진 마감을 정리해 깔끔하게 보수한 현장입니다.",
    before: "/IMG_1181.jpeg",
    after: "/IMG_1182.jpeg",
    beforeAlt: "욕실 타일 마감보수 전",
    afterAlt: "욕실 타일 마감보수 후",
  },
  {
    title: "샤워부스 주변 타일 마감보수",
    desc: "샤워부스 프레임 주변의 손상된 타일과 마감 부위를 정리해 보수한 현장입니다.",
    before: "/IMG_1180.jpeg",
    after: "/IMG_1177.jpeg",
    beforeAlt: "샤워부스 주변 타일 보수 전",
    afterAlt: "샤워부스 주변 타일 보수 후",
  },
  {
    title: "벽타일 부분교체·수평시공",
    desc: "기존 벽타일을 부분 철거한 뒤 수평을 확인하며 새 타일을 맞춰 시공한 현장입니다.",
    before: "/IMG_1187.jpeg",
    after: "/IMG_1188.jpeg",
    beforeAlt: "벽타일 부분교체 수평시공 전",
    afterAlt: "벽타일 부분교체 수평시공 후",
  },
  {
    title: "화장실 벽타일 한 면 교체",
    desc: "기존 화장실 벽타일 한 면을 철거한 뒤 새 타일로 깔끔하게 교체한 현장입니다.",
    before: "/IMG_1207.jpeg",
    after: "/IMG_1206.jpeg",
    beforeAlt: "화장실 벽타일 한 면 교체 전",
    afterAlt: "화장실 벽타일 한 면 교체 후",
  },
  {
    title: "거실 깨진 바닥타일 보수",
    desc: "깨지고 파손된 바닥타일을 철거한 뒤 새 타일로 부분 보수한 현장입니다.",
    before: "/IMG_1189.jpeg",
    after: "/IMG_1190.jpeg",
    beforeAlt: "거실 깨진 바닥타일 보수 전",
    afterAlt: "거실 깨진 바닥타일 보수 후",
  },
  {
    title: "상가 복도 바닥타일 보수",
    desc: "상가 복도의 기존 바닥타일을 철거하고 바탕면을 정리한 뒤 새 타일로 보수한 현장입니다.",
    before: "/IMG_1185.jpeg",
    after: "/IMG_1186.jpeg",
    beforeAlt: "상가 복도 바닥타일 보수 전",
    afterAlt: "상가 복도 바닥타일 보수 후",
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

  if (!districtName) return {};

  const title = `${districtName} 타일수리·타일보수·부분교체 | 금손종합보수`;

  const description = `${districtName} 타일 수리·보수 상담. 욕실, 거실, 상가 벽타일·바닥타일 부분교체 및 실제 시공사례 안내.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: `${SITE_URL}/services/tile/gyeonggi/${district}`,
    },

    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/tile/gyeonggi/${district}`,
      siteName: COMPANY,
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function GyeonggiDistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district } = await params;

  const districtName = DISTRICTS[district];

  if (!districtName) {
    notFound();
  }

  return (
    <main className="clean-area-page">
      <header className="clean-area-header">
        <div className="container clean-area-header-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">◆</div>

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
            <Link href="/services/tile/gyeonggi">
              경기
            </Link>
            <span>›</span>
            <strong>{districtName}</strong>
          </div>

          <div className="clean-area-label">
            GYEONGGI TILE REPAIR
          </div>

          <h1>
            {districtName}
            <br />
            타일 수리·보수
          </h1>

          <p>
            {districtName} 벽타일·바닥타일 깨짐,
            균열, 들뜸, 탈락 및 부분교체 상담을
            진행합니다.
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

      <section className="clean-area-section">
        <div className="container">
          <div className="clean-area-section-head">
            <span>TILE SERVICE</span>

            <h2>
              {districtName} 타일 보수 서비스
            </h2>
          </div>

          <div className="clean-area-service-grid">
            <article>
              <strong>01</strong>
              <h3>벽타일 수리</h3>
              <p>
                깨지거나 들뜬 벽타일을
                필요한 부분 위주로 보수합니다.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>바닥타일 보수</h3>
              <p>
                주택·상가 바닥의 깨진 타일을
                부분 교체합니다.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>타일 부분교체</h3>
              <p>
                전체 철거 없이 파손된 부분만
                선별해 교체합니다.
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
              {districtName} 타일 시공사례
            </h2>

            <p>
              {districtName} 타일 수리·보수 상담 시
              참고할 수 있는 실제 시공 전후입니다.
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
                    {districtName} 타일 시공사례
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
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
              {districtName} 타일 수리
              <br />
              사진으로 먼저 상담하세요
            </h2>

            <p>
              파손 부위가 잘 보이는 사진을
              문자로 보내주세요.
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

      <section className="clean-area-cta">
        <div className="container clean-area-cta-inner">
          <div>
            <span>금손종합보수</span>

            <h2>
              {districtName} 타일 수리·보수 문의
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
              {districtName} 타일 수리·보수
            </div>
          </div>
        </div>
      </footer>

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
