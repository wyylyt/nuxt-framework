/*
 * @Author: your name
 * @Date: 2020-04-08 16:00:19
 * @LastEditTime: 2020-07-06 09:35:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cqliving-active-ggl\src\api\index.ts
 */
import request from '../common/request'
import { IResponse } from './types'
/**
 * 网络请求类 接口调用
 */
class RequestIndex {
  /**
   * 发起网络请求
   * @param url 请求地址
   * @param parm 请求参数
   * @param isShow 是否显示Loading
   */
  private send(
    url: string,
    parms: object = {},
    isShow: boolean = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      request
        .post(url, parms)
        .then((res) => {
          resolve(res)
        })
        .catch((erro) => {
          reject(erro)
        })
    })
  }
}
export default new RequestIndex()
