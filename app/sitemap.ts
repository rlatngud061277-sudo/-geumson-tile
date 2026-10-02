import type { MetadataRoute } from "next";

/* =========================================
   기본 주소
========================================= */

const SITE_URL = "https://www.geumsontile.com";

/* =========================================
   카테고리
========================================= */

const CATEGORIES = [
  "repair",
  "maintenance",
  "replacement",
];

/* =========================================
   서울 25개 구
========================================= */

const SEOUL = [
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
   경기 9개
========================================= */

const GYEONGGI = [
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
   인천 10개
========================================= */

const INCHEON = [
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
   SITEMAP
========================================= */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    /* =====================================
       메인
    ===================================== */

    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    /* =====================================
       기본 타일 페이지
    ===================================== */

    {
      url: `${SITE_URL}/services/tile`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/services/tile/seoul`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${SITE_URL}/services/tile/gyeonggi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${SITE_URL}/services/tile/incheon`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  /* =========================================
     기존 서울 지역페이지
  ========================================= */

  SEOUL.forEach((district) => {
    urls.push({
      url:
        `${SITE_URL}/services/tile/seoul/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  /* =========================================
     기존 경기 지역페이지
  ========================================= */

  GYEONGGI.forEach((district) => {
    urls.push({
      url:
        `${SITE_URL}/services/tile/gyeonggi/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  /* =========================================
     기존 인천 지역페이지
  ========================================= */

  INCHEON.forEach((district) => {
    urls.push({
      url:
        `${SITE_URL}/services/tile/incheon/${district}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  /* =========================================
     신규
     타일수리 / 타일보수 / 타일교체

     서울
  ========================================= */

  CATEGORIES.forEach((category) => {
    SEOUL.forEach((district) => {
      urls.push({
        url:
          `${SITE_URL}/services/tile/${category}/seoul/${district}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  /* =========================================
     신규 카테고리

     경기
  ========================================= */

  CATEGORIES.forEach((category) => {
    GYEONGGI.forEach((district) => {
      urls.push({
        url:
          `${SITE_URL}/services/tile/${category}/gyeonggi/${district}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  /* =========================================
     신규 카테고리

     인천
  ========================================= */

  CATEGORIES.forEach((category) => {
    INCHEON.forEach((district) => {
      urls.push({
        url:
          `${SITE_URL}/services/tile/${category}/incheon/${district}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  return urls;
}
