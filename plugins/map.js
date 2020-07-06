/*
 * @Author: your name
 * @Date: 2020-04-23 10:55:58
 * @LastEditTime: 2020-04-23 14:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\plugins\map.js
 */
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
// window.BMap = BMap
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'j1lpNLpvwNoAHpQcwZXgbv5YLk4quPbP'
})
