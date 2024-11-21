import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aura",
  description: "Aura",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about-us.html' },
    ],

    sidebar: [
      {
        text: 'Service Agreement',
        items: [
          { text: 'Terms and Conditions', link: '/service/terms-and-conditions.html' },
          { text: 'Privacy Policy', link: '/service/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
