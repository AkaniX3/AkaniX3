import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'AkaniX3',
  subtitle: 'Blog Page',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'AkaniX3',
    status: '✨',
    github: 'https://github.com/AkaniX3',
    email: 'parthrajkondawar@gmail.com',
    bio: `Welcome to my page ^^<br/>Here i write about things i do!`
  },
  themeColor: '#3D4451'
}
