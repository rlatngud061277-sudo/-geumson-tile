import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import faviconImage from "./D620C268-6E3F-4753-9B36-458DACE14CCC.png";

/* =========================================
   기본 정보
========================================= */

const SITE_URL = "https://www.geumsontile.com";

const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·경기·인천 타일 수리·보수 전문";

const SITE_DESCRIPTION =
  "금손종합보수는 서울·경기·인천 지역의 타일 수리, 타일 보수, 벽타일 부분교체, 바닥타일 보수, 욕실 타일 보수, 상가 타일 보수 작업을 진행합니다.";

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
    "타일부분교체",
    "벽타일수리",
    "벽타일보수",
    "바닥타일수리",
    "바닥타일보수",
    "욕실타일수리",
    "욕실타일보수",
    "화장실타일수리",
    "거실바닥타일수리",
    "상가바닥타일수리",
    "서울타일수리",
    "경기타일수리",
    "인천타일수리",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  /* =========================================
     파비콘
     파일명 변경 필요 없음
  ========================================= */

  icons: {
    icon: [
      {
        url: faviconImage.src,
        type: "image/png",
      },
    ],

    shortcut: [
      {
        url: faviconImage.src,
        type: "image/png",
      },
    ],

    apple: [
      {
        url: faviconImage.src,
        type: "image/png",
      },
    ],
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

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title:
      "금손종합보수 | 타일 수리·보수 전문",

    description:
      "서울·경기·인천 타일 수리, 벽타일·바닥타일 부분교체 및 보수 전문.",
  },

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
      <body>
        {children}
      </body>
    </html>
  );
}
