import type { MetadataRoute } from "next";

const SITE_URL = "https://www.geumsontile.com";

/* =========================================
   서울 25개 구
========================================= */

const SEOUL_DISTRICTS = [
  "gangnam",
  "gangdong",
  "gangbuk",
  "gangseo",
  "gwanak",
  "gwangjin",
  "guro",
  "geumcheon",
  "nowon",
  "dobong",
  "dongdaemun",
  "dongjak",
  "mapo",
  "seodaemun",
  "seocho",
  "seongdong",
  "seongbuk",
  "songpa",
  "yangcheon",
  "yeongdeungpo",
  "yongsan",
  "eunpyeong",
  "jongno",
  "jung",
  "jungnang",
];

/* =========================================
   경기 주요 지역
========================================= */

const GYEONGGI_DISTRICTS = [
  "gimpo",
  "goyang",
  "bucheon",
  "paju",
  "siheung",
  "gwangmyeong",
  "ansan",
  "anyang",
  "gunpo",
];

/* =========================================
   인천 10개 군·구
========================================= */

const INCHEON_DISTRICTS = [
  "jung",
  "dong",
  "michuhol",
  "yeonsu",
  "namdong",
  "bupyeong",
  "gyeyang",
  "seo",
  "ganghwa",
  "ongjin",
];

/* =========================================
   사이트맵
========================================= */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/services/tile`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${SITE_URL}/services/tile/seoul`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/tile/incheon`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/tile/gyeonggi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* =========================================
     서울 지역 페이지
  ========================================= */

  const seoulPages: MetadataRoute.Sitemap =
    SEOUL_DISTRICTS.map((district) => ({
      url: `${SITE_URL}/services/tile/seoul/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  /* =========================================
     경기 지역 페이지
  ========================================= */

  const gyeonggiPages: MetadataRoute.Sitemap =
    GYEONGGI_DISTRICTS.map((district) => ({
      url: `${SITE_URL}/services/tile/gyeonggi/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  /* =========================================
     인천 지역 페이지
  ========================================= */

  const incheonPages: MetadataRoute.Sitemap =
    INCHEON_DISTRICTS.map((district) => ({
      url: `${SITE_URL}/services/tile/incheon/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  return [
    ...staticPages,
    ...seoulPages,
    ...gyeonggiPages,
    ...incheonPages,
  ];
}
