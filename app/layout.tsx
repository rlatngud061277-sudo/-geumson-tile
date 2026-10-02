import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

/* =========================================
   기본 정보
========================================= */

const SITE_URL = "https://www.geumsontile.com";

const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·경기·인천 타일 수리·보수·교체";

const SITE_DESCRIPTION =
  "금손종합보수는 서울·경기·인천 지역의 타일 수리, 타일 보수, 깨진 타일 교체, 벽타일 부분교체, 바닥타일 보수, 욕실 타일 보수 작업을 진행합니다.";

/* =========================================
   파비콘
========================================= */

const FAVICON_URL =
  "https://www.geumsontile.com/D620C268-6E3F-4753-9B36-458DACF14CCC.png";

/* =========================================
   메타데이터
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
    "깨진타일수리",
    "깨진타일교체",
    "타일부분교체",
    "벽타일수리",
    "벽타일교체",
    "바닥타일수리",
    "바닥타일교체",
    "욕실타일수리",
    "욕실타일교체",
    "화장실타일수리",
    "화장실타일교체",
    "거실바닥타일수리",
    "상가바닥타일수리",
    "서울타일수리",
    "서울타일교체",
    "경기타일수리",
    "경기타일교체",
    "인천타일수리",
    "인천타일교체",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  /* =========================================
     네이버/브라우저 파비콘
  ========================================= */

  icons: {
    icon: [
      {
        url: FAVICON_URL,
        type: "image/png",
      },
    ],

    shortcut: FAVICON_URL,

    apple: FAVICON_URL,
  },

  /* =========================================
     네이버 서치어드바이저
  ========================================= */

  verification: {
    other: {
      "naver-site-verification":
        "d96d8c809fcd0610fada17e8a15fa352fceaf1bb",
    },
  },

  /* =========================================
     OPEN GRAPH
  ========================================= */

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title:
      "금손종합보수 | 타일 수리·보수·교체",

    description:
      "서울·경기·인천 깨진 타일 수리, 벽타일·바닥타일 부분교체 및 타일보수 전문.",
  },

  /* =========================================
     검색엔진 수집 허용
  ========================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="shortcut icon"
          href={FAVICON_URL}
          type="image/png"
        />

        <link
          rel="icon"
          href={FAVICON_URL}
          type="image/png"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
