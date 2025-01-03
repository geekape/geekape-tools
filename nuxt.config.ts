// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  nitro: {
    preset: 'vercel',
  },
  
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
      // 其他公共环境变量
    },
    // 私有环境变量（仅在服务端可用）
    apiSecret: process.env.NUXT_API_SECRET || ''
  }
})
