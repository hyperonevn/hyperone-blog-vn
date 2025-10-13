/**
 * @type {import("pliny/config").PlinyConfig }
 */

const siteMetadata = {
  title: 'Hyper One Blog',
  author: 'HYPER ONE CO., LTD',
  headerTitle: 'HyperOneBlog',
  description: 'Blog chính thức của Hyper One – Công ty công nghệ, AI, Smart Home & Tự động hóa tại Việt Nam.',
  language: 'vi-vn',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.hyperonevn.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  // Thông tin công ty
  companyInfo: {
    name: 'CÔNG TY TNHH HYPER ONE',
    taxCode: '0318921926',
    department: 'Sở KHĐT TP.HCM',
    phone: ['0352 608068', '0342 608068'],
    email: ['smarthome@hyperonevn.com', 'info@hyperonevn.com'],
    addressMain: '68 Nguyễn Huệ, P. Sài Gòn, TP.HCM (Q.1 cũ)',
    addressBranch: '383 Nguyễn Duy Trinh, P. Bình Trưng, TP.HCM (Q.2 cũ)',
    poweredBy: 'HYPER ONE CO., LTD',
  },

  // Liên kết mạng xã hội
  mastodon: '',
  email: 'info@hyperonevn.com',
  x: 'https://twitter.com/hyperonevn',
  facebook: 'https://facebook.com/hyperonevn',
  youtube: 'https://youtube.com/@hyperonevn',
  linkedin: 'https://www.linkedin.com/company/hyperonevn',
  threads: 'https://www.threads.net/@hyperonevn',
  instagram: 'https://www.instagram.com/hyperonevn',
  medium: 'https://medium.com/@hyperonevn',
  bluesky: '',

  locale: 'vi-VN',
  stickyNav: false,

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },

  newsletter: {
    provider: 'buttondown',
  },

  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'vi',
    },
  },

  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
