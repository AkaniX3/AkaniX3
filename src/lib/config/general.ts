import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🌕 Shiro'
  },
  {
    name: 'night',
    text: '🌑 Kuro'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'valentine',
    text: '🎀 Valentine'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'aqua',
    text: '🫧 Aqua'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Black'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started',
      link: '/hello-world'
    },
    {
      text: 'Elements',
      link: '/hello-world/elements'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
