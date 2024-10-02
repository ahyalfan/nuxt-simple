// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
   compatibilityVersion: 4,
 },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  // ini untuk mebuat dari domain mana image boleh dimasukan
  // image: {
  //   domains: ["https://cdn.dummyjson.com","http://localhost:3000"],
  // },

  devtools: { enabled: true },
  modules: [
   "@nuxtjs/tailwindcss",
   "@nuxtjs/google-fonts",
   "@nuxt/icon",
   "@nuxt/image"
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
})