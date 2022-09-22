// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
      shim: false
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", '@kevinmarrec/nuxt-pwa'],
    tailwindcss: {
        cssPath: "./assets/css/tailwind.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    colorMode: {
        classSuffix: ""
    },
    pwa: {
      manifest: {
        name: 'Simo.',
        lang: 'en',
        useWebmanifestExtension: false,
        start_url: "/app",
        display: "standalone",
        background_color: "#0E0B0F"
      },
      meta: {
        mobileAppIOS: true,
        name: "Simo.",
        author: "Simo"

      },
      

    },
    // oneSignal: {
    //   init: {
    //     appId: 'YOUR_APP_ID',
    //     allowLocalhostAsSecureOrigin: true,
    //     welcomeNotification: {
    //         disable: true
    //     }
    //   }
    // }
    }
  )

