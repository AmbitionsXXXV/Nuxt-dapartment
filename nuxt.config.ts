// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css', '@/assets/css/global.scss'],
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
