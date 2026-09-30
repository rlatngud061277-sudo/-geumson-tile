import type { Metadata, Viewport } from "next";
import "./globals.css";

/* =========================================
   기본 정보
========================================= */

const SITE_URL = "https://www.geumsontile.com";
const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·인천·경기 타일 수리·보수·부분교체";

const SITE_DESCRIPTION =
  "금손종합보수는 서울 전 지역, 인천 및 경기 주요 지역의 벽타일·바닥타일 수리, 보수, 부분교체, 복원 상담을 진행합니다.";

/* =========================================
   전체 사이트 메타데이터
========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "금손종합보수",
    "타일수리",
    "타일보수",
    "타일교체",
    "타일복원",
    "타일부분수리",
    "타일부분보수",
    "타일부분교체",
    "벽타일수리",
    "벽타일보수",
    "바닥타일수리",
    "바닥타일보수",
    "서울타일수리",
    "서울타일보수",
    "인천타일수리",
    "인천타일보수",
    "경기타일수리",
    "경기타일보수",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  /* =========================================
     네이버 서치어드바이저 소유확인
  ========================================= */

  verification: {
    other: {
      "naver-site-verification":
        "d96d8c809fcd0610fada17e8a15fa352fceaf1bb",
    },
  },

  /* =========================================
     검색엔진
  ========================================= */

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* =========================================
     OPEN GRAPH
  ========================================= */

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },

  /* =========================================
     기타
  ========================================= */

  category: "home improvement",
};

/* =========================================
   모바일 화면
========================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
