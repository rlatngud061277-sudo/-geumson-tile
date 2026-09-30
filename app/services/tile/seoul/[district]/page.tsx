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

const SMS_LINK = `sms:${PHONE}?body=${encodeURIComponent(
  SMS_MESSAGE
)}`;

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

  const area = DISTRICTS[district];

  if (!area) {
    return {};
  }

  const pageUrl = `${SITE_URL}/services/tile/seoul/${district}`;

  return {
    title: {
      absolute: `${area} 타일수리·타일보수·부분교체 | 금손종합보수`,
    },

    description: `${area} 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 전문. 주방, 거실, 화장실, 욕실, 상가 타일 깨짐, 균열, 들뜸, 탈락 상담.`,

    keywords: [
      `${area} 타일수리`,
      `${area} 타일보수`,
      `${area} 타일교체`,
      `${area} 타일복원`,
      `${area} 벽타일수리`,
      `${area} 바닥타일수리`,
      `${area} 화장실타일수리`,
      `${area} 욕실타일수리`,
      `${area} 주방타일수리`,
      `${area} 상가타일수리`,
      `${area} 타일부분수리`,
      `${area} 타일부분보수`,
      `${area} 타일부분교체`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: `${area} 타일 수리·보수 | 금손종합보수`,
      description: `${area} 벽타일·바닥타일 부분 수리, 보수, 교체 상담.`,
      url: pageUrl,
      siteName: "금손종합보수",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function SeoulDistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district } = await params;

  const area = DISTRICTS[district];

  if (!area) {
    notFound();
  }

  return (
    <main className="clean-area-page">
      {/* HERO */}

      <section className="clean-area-hero">
        <div className="clean-area-container">
          <div className="clean-area-label">
            금손종합보수 · 타일 전문
          </div>

          <h1>
            {area}
            <br />
            타일 수리·보수
          </h1>

          <p>
            벽타일·바닥타일의 깨짐, 균열, 들뜸,
            탈락 등
            <br className="desktop-br" />
            필요한 부분만 깔끔하게 수리·보수·교체합니다.
          </p>

          <div className="clean-area-actions">
            <a
              href={PHONE_LINK}
              className="clean-call-button"
            >
              전화 상담
            </a>

            <a
              href={SMS_LINK}
              className="clean-sms-button"
            >
              사진 문자 상담
            </a>
          </div>

          <div className="clean-phone">
            {PHONE_DISPLAY}
          </div>
        </div>
      </section>

      {/* SERVICE */}

      <section className="clean-section">
        <div className="clean-area-container">
          <div className="clean-section-heading">
            <span>주요 서비스</span>

            <h2>
              필요한 부분만
              <br />
              깔끔하게 작업합니다
            </h2>
          </div>

          <div className="clean-service-grid">
            <div className="clean-service-card">
              <div className="clean-service-number">
                01
              </div>

              <h3>벽타일 수리·보수</h3>

              <p>
                주방, 화장실, 욕실, 상가 등의
                벽타일 깨짐·균열·탈락 부위를
                확인해 부분 작업합니다.
              </p>
            </div>

            <div className="clean-service-card">
              <div className="clean-service-number">
                02
              </div>

              <h3>바닥타일 수리·보수</h3>

              <p>
                들뜨거나 파손된 바닥타일의 상태를
                확인해 필요한 범위만 수리 또는
                교체합니다.
              </p>
            </div>

            <div className="clean-service-card">
              <div className="clean-service-number">
                03
              </div>

              <h3>타일 부분교체</h3>

              <p>
                전체 철거가 필요하지 않은 현장은
                손상된 타일만 선별해
                부분교체를 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPACE */}

      <section className="clean-section clean-soft-section">
        <div className="clean-area-container">
          <div className="clean-section-heading center">
            <span>작업 공간</span>

            <h2>
              다양한 공간의
              타일 문제를 상담합니다
            </h2>
          </div>

          <div className="clean-space-grid">
            <div className="clean-space-item">
              <div>주방</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>화장실</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>욕실</div>
              <span>부분수리 · 교체</span>
            </div>

            <div className="clean-space-item">
              <div>거실</div>
              <span>바닥타일 보수</span>
            </div>

            <div className="clean-space-item">
              <div>상가</div>
              <span>벽 · 바닥 타일</span>
            </div>

            <div className="clean-space-item">
              <div>기타 공간</div>
              <span>현장 사진 상담</span>
            </div>
          </div>
        </div>
      </section>

      {/* SMS */}

      <section className="clean-photo-section">
        <div className="clean-area-container clean-photo-inner">
          <div>
            <span className="clean-photo-label">
              사진 문자 상담
            </span>

            <h2>
              파손된 타일 사진을
              <br />
              보내주세요
            </h2>

            <p>
              작업 지역과 타일 상태가 보이는 사진을
              보내주시면
              <br className="desktop-br" />
              확인 후 상담을 도와드립니다.
            </p>
          </div>

          <div className="clean-photo-card">
            <strong>{PHONE_DISPLAY}</strong>

            <span>
              지역 + 작업내용 + 사진
            </span>

            <a href={SMS_LINK}>
              문자로 사진 보내기
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="clean-bottom-cta">
        <div className="clean-area-container clean-bottom-inner">
          <div>
            <span>금손종합보수</span>

            <h2>
              {area} 타일 수리·보수
            </h2>

            <p>
              벽타일 · 바닥타일 · 부분수리 · 부분교체
            </p>
          </div>

          <div className="clean-bottom-buttons">
            <a href={PHONE_LINK}>
              전화 상담
            </a>

            <a href={SMS_LINK}>
              문자 상담
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE */}

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
