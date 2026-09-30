import type { Metadata } from "next";
import "./globals.css";

/* =========================================
   사이트 기본 정보
========================================= */

const SITE_URL = "https://www.geumsontile.com";

const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·인천·경기 타일 수리·보수·교체 전문";

const SITE_DESCRIPTION =
  "금손종합보수는 서울 전 지역, 인천, 김포, 고양, 부천, 파주, 시흥, 광명, 안산, 안양, 군포 지역의 벽타일·바닥타일 부분 수리, 보수, 교체, 복원 전문업체입니다.";

/* =========================================
   사이트 공통 SEO
========================================= */

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
    "타일복원",

    "벽타일수리",
    "벽타일보수",
    "벽타일교체",
    "벽타일복원",

    "바닥타일수리",
    "바닥타일보수",
    "바닥타일교체",
    "바닥타일복원",

    "타일부분수리",
    "타일부분보수",
    "타일부분교체",
    "타일부분복원",

    "깨진타일수리",
    "들뜬타일수리",
    "타일깨짐",
    "타일들뜸",
    "타일탈락",

    "화장실타일수리",
    "욕실타일수리",
    "주방타일수리",
    "거실타일수리",
    "상가타일수리",

    "서울타일수리",
    "서울타일보수",
    "인천타일수리",
    "김포타일수리",
    "고양타일수리",
    "부천타일수리",
    "파주타일수리",
    "시흥타일수리",
    "광명타일수리",
    "안산타일수리",
    "안양타일수리",
    "군포타일수리",
  ],

  authors: [
    {
      name: "금손종합보수",
    },
  ],

  creator: "금손종합보수",

  publisher: "금손종합보수",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description: SITE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "타일 시공 및 보수",
};

/* =========================================
   VIEWPORT
========================================= */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,

  themeColor: "#172c56",
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
