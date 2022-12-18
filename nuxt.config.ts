// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'normalize.css',
    '@/assets/css/global.scss',
    '~/assets/cus-font/iconfont.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;"
        }
      }
    }
  }
})
