export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client-apps',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    postId: process.env.POST_ID || 'none'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api/posts/v1': { target: process.env.POST_BASE_URL, pathRewrite: {'^/api/posts/v1': ''} },
    '/api/comments/v1': { target: process.env.COMMENT_BASE_URL, pathRewrite: {'^/api/comments/v1': ''} },
  },

  axios: {
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
