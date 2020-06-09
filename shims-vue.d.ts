/*
 * @Author: your name
 * @Date: 2020-04-29 09:34:29
 * @LastEditTime: 2020-05-06 15:29:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\shims-vue.d.ts
 */
import Vue from 'vue'

declare module '*.vue' {
  export default Vue // 识别.vue文件
}
declare module 'vue/types/vue' {
  interface Vue {
    $lodash: any // 全局方法
    [key: string]: any
  }
}
