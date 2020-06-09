/*
 * @Author: wanjikun
 * @LastEditTime: 2020-06-05 10:37:08
 * @description: 调用接口
 */

import request from '../common/request'
import { IResponse } from './types'
class RequestIndex {
    private post(
        url: string,
        parms: object = {},
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

    /**
    * 获取新闻列表
     */
    getNews(params: object): Promise<IResponse> {
        return this.post('/info/news.html', params)
    }
}
export default new RequestIndex()