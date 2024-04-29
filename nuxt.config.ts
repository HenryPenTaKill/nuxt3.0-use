// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias:{
    '@': '/<rootDir>'
  },
  postcss: {
    plugins:{
      autoprefixer:{}
    }
  }


})
