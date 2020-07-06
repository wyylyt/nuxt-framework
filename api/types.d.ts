/*
 * @Author: your name
 * @Date: 2020-04-20 15:13:53
 * @LastEditTime: 2020-07-06 09:35:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\api\types.d.ts
 */
/**
 * 通用返回结构
 */
export interface IResponse {
  code: number
  message: string
  sessionId: string
}
