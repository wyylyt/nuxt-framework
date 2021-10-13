// 是 Nuxt.js 的配置文件，可以通过针对一系列参数的设置来完成 Nuxt.js 项目的配置
require('dotenv').config() // 默认读取项目根目录下的.env文件 加载环境变量
module.exports = {
  //server Nuxt.js 允许您为应用程序内部nuxt.config.js中定义服务器访问主机和端口. https://www.nuxtjs.cn/api/configuration-server
  server: {
    host: '0.0.0.0', // default: localhost,
    port: '20000' // default: 3000
  },
  //env: 可以在此配置用来在服务端和客户端共享的全局变量。 https://www.nuxtjs.cn/api/configuration-env
  env: {
    NUXT_ENV_BASE_API: process.env["NUXT_ENV_BASE_API_" + process.env.MODE],
  },
  //head 可以在这个配置项中配置全局的 head ，如定义网站的标题、 meta ，引入第三方的 CSS、JavaScript 文件等。 https://www.nuxtjs.cn/api/configuration-head
  head: {
    title: "pc-nuxt-template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      { name: "keywords", content: "pc-nuxt-template" },
      {
        hid: "description",
        name: "description",
        content: "pc-nuxt-template",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  //loading Nuxt.js 提供了一套页面内加载进度指示组件，可以在此配置颜色，禁用，或是配置自定义的加载组件。 https://www.nuxtjs.cn/api/configuration-loading
  loading: { color: 'red' },
  serverMiddleware: ["./pageCache"],
  //css: 在这个配置项中，引入全局的 CSS 文件，之后每个页面都会被引入。plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
  css: ["element-ui/lib/theme-chalk/index.css", "@/assets/styles/index.scss"],
  //plugins 属性使得你可以轻易地为 Nuxt.js 配置使用 Vue.js 插件。 https://www.nuxtjs.cn/api/configuration-plugins
  //不支持 ssr 的系统，插件只在浏览器里使用，这种情况下下，你可以用 ssr: false ，使得插件只会在客户端运行。
  plugins: ["@/plugins/element-ui", "@/plugins/main",{ src: '@/plugins/map', ssr: false },],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: [],
  //build 这个配置项用来配置 Nuxt.js 项目的构建规则，即 Webpack 的构建配置，如通过 vendor 字段引入第三方模块，通过 plugin 字段配置 Webpack 插件，通过 loaders 字段自定义 Webpack 加载器等
  build: {
    transpile: [/^element-ui/],
  },
  telemetry: false,
};
