/*
 * @Author: wanjikun
 * @LastEditTime: 2020-06-09 09:31:26
 */

require('dotenv').config()

module.exports = {
  server: {
    host: '0.0.0.0',
    port: '20002'
  },
  mode: 'universal',
  env: {
    NUXT_ENV_BASE_API: process.env['NUXT_ENV_BASE_API_' + process.env.MODE]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://filecdn.cqliving.com/static/h5zwy/resource/js/common/zwyCloudApi.js'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#51a0f3'
  },
  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css'
  ],
  scss: {
    implementation: require('sass')
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview',
    {
      src: '@/plugins/map',
      ssr: false
    },
    {
      src: '@/plugins/lodash.js'
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
