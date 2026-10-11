
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

/* =====================================
   금손종합보수 기본 정보
===================================== */

const SITE_URL = "https://www.geumsontile.com";

const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·경기·인천 타일수리·타일보수·타일교체";

const SITE_DESCRIPTION =
  "금손종합보수 타일 전문업체. 서울·경기·인천 지역 욕실 타일수리, 벽타일 보수, 바닥타일 부분교체, 깨진 타일 복원 및 교체 상담. 실제 시공 전후 사진과 지역별 서비스 안내를 확인하세요.";

/* =====================================
   네이버 SEO 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "금손종합보수",
    "타일수리",
    "타일보수",
    "타일교체",
    "타일부분수리",
    "타일부분보수",
    "타일부분교체",
    "깨진타일수리",
    "욕실타일수리",
    "화장실타일보수",
    "바닥타일교체",
    "벽타일수리",
    "서울타일보수",
    "경기타일수리",
    "인천타일교체",
  ],

  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

/* =====================================
   공통 레이아웃

   기존 글로벌 CSS 연결
   기존 메인 홈페이지 디자인 유지
   기존 지역 페이지 유지
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
