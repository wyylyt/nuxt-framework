/*
 * @Author: your name
 * @Date: 2020-04-20 15:13:53
 * @LastEditTime: 2020-06-04 10:24:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\nuxt.config.js
 */
require('dotenv').config()

module.exports = {
  server: {
    host: '0.0.0.0',
    port: '20001'
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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '丰都外宣,丰都门户,丰都新闻,丰都宣传' },
      {
        hid: 'description',
        name: 'description',
        content: '丰都外宣,丰都门户,丰都新闻,丰都宣传'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://filecdn.cqliving.com/static/h5zwy/resource/js/common/zwyCloudApi.js'
      }
    ]
  },
  router: {},
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#51a0f3' },
  /*
   ** Global CSS
   */
  css: ['iview/dist/styles/iview.css'],
  scss: {
    implementation: require('sass')
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iview',
    { src: '@/plugins/map', ssr: false },
    { src: '@/plugins/lodash.js' },
    { src: '@/plugins/viewer.js' },
    { src: '@/plugins/lazyload.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
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
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {}
  }
}
