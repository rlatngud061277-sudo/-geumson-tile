import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.geumsontile.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "금손종합보수 | 타일수리·타일보수·타일교체",
    template: "%s",
  },

  description:
    "서울·경기·인천 타일수리, 타일보수, 깨진 타일 부분교체, 욕실 벽타일, 바닥타일 전문 금손종합보수.",

  verification: {
    other: {
      "naver-site-verification":
        "d96d8c809fcd0610fada17e8a15fa352fceaf1bb",
    },
  },

  icons: {
    icon: [
      {
        url: "/D620C268-6E3F-4753-9B36-458DACF14CCC.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/D620C268-6E3F-4753-9B36-458DACF14CCC.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/D620C268-6E3F-4753-9B36-458DACF14CCC.png",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "금손종합보수",
    title: "금손종합보수 | 타일수리·타일보수·타일교체",
    description:
      "서울·경기·인천 깨진 타일 수리, 타일보수, 벽타일·바닥타일 부분교체 상담.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="format-detection"
          content="telephone=no"
        />

        <link
          rel="icon"
          href="/D620C268-6E3F-4753-9B36-458DACF14CCC.png"
          type="image/png"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                -webkit-text-size-adjust: 100% !important;
                text-size-adjust: 100% !important;
                font-size: 16px !important;
              }

              body {
                -webkit-text-size-adjust: 100% !important;
                text-size-adjust: 100% !important;
                margin: 0;
                padding: 0;
                font-size: 16px;
              }

              button,
              input,
              textarea,
              select,
              a,
              p,
              span,
              div,
              li,
              dt,
              dd,
              article,
              section {
                -webkit-text-size-adjust: 100% !important;
                text-size-adjust: 100% !important;
              }

              img {
                max-width: 100%;
              }
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
