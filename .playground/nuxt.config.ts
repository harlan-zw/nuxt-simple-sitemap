import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  alias: {
    'nuxt-simple-sitemap': resolve(__dirname, '../src/module'),
  },
  modules: [
    'nuxt-simple-sitemap',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/hidden-path-but-in-sitemap'
      ]
    }
  },
  sitemap: {
    hostname: 'https://example.com',
  },
  routeRules: {
    '/secret': { index: false },
    '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } },
  }
})
