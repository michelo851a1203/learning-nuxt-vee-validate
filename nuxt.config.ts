// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'storeToRefs',
          'defineStore',
          'acceptHMRUpdate',
        ]
      },
    ],
  ],
  imports: {
    dirs: [
      'stores',
      'types',
    ],
  }

})
