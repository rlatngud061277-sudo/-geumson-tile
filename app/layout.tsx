
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://www.geumsontile.com";

const SITE_NAME = "금손종합보수";

const SITE_TITLE =
  "금손종합보수 | 서울·경기·인천 타일수리·타일보수·타일교체";

const SITE_DESCRIPTION =
  "금손종합보수는 서울·경기·인천 지역에서 깨진 타일수리, 타일 부분보수, 욕실 벽타일 교체, 바닥타일 교체 등을 상담합니다. 실제 시공 전후 사진과 지역별 서비스 안내를 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ko_KR",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
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
