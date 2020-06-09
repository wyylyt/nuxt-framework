/*
 * @Author: your name
 * @Date: 2020-04-20 15:13:53
 * @LastEditTime: 2020-05-29 10:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\common\request.ts
 */
import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  // baseURL: 'http://192.168.6.136:8088/',
  baseURL: process.env.NUXT_ENV_BASE_API,
  withCredentials: false,
  timeout: 9000
})

service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = qs.stringify(config.data)
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (resp) => {
    // TODO http异常代码处理
    // TODO 接口自定义请求异常处理
    return resp.data
  },
  (error) => {
    console.log('response error: ', error) // for debug
    return Promise.reject(error)
  }
)

export default service
