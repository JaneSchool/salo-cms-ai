import type { SiteConfig } from '@/types/site'
import type { SocialObjects } from '@/types/social'

export const SITE = 'https://salo-cms-ai.pages.dev'
export const SITEMAP = 'https://www.salo-cms-ai.pages.dev/sitemap-0.xml'
export const HOST = 'salo-cms-ai.pages.dev'

export type SupportedLocale = 'en' | 'ru' | 'uk'

export const siteConfig: SiteConfig = {
  website: '',
  author: 'Hrihorii Ilin <devopsick@pm.me>',
  metaTitle: {
    en: 'SALO AI',
    ru: 'SALO AI',
    uk: 'SALO AI'
  },
  metaDescription: {
    en: 'Content Management System with Piggy Artificial Intelligence',
    ru: 'Контент Менеджмент Система с Поросячим Икуственным Интелектом',
    uk: 'Контент Менеджмент Система з Свинячим Штучним Інтелектом'
  },
  title: {
    en: 'Astro Theme OpenBlog',
    ru: 'Astro Theme OpenBlog',
    uk: 'Astro Theme OpenBlog'
  },
  description: {
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    uk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  shareMessage: {
    en: 'Share this post',
    ru: 'Share this post',
    uk: 'Share this post'
  },
  lang: '',
  ogLocale: '',
  paginationSize: 6,
  postPerPage: 0,
  scheduledPostMargin: 0
}

export const SOCIALS: SocialObjects = [
  {
    linkTitle: 'devopsick@pm.me',
    name: 'Mail',
    active: true,
    href: 'mailto:devopsick@pm.me'
  },
  {
    linkTitle: 'Github',
    name: 'Github',
    active: true,
    href: 'https://github.com/Frikadellios'
  },
  {
    linkTitle: 'Linkedin',
    name: 'LinkedIn',
    active: true,
    href: 'https://linkedin.com/Frikadellios'
  },
  {
    linkTitle: 'Twitter',
    name: 'Twitter',
    active: true,
    href: 'https://twitter.com/devopsick'
  }
]
