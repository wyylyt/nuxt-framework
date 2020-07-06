/*
 * @Author: your name
 * @Date: 2020-04-20 15:13:53
 * @LastEditTime: 2020-04-22 09:44:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \activity\shims-libs.d.ts
 */
declare module 'weixin-js-sdk' {
  interface ConfigParams {
    debug: boolean
    appId: string
    timestamp: number
    nonceStr: string
    signature: string
    jsApiList: any[]
  }

  interface MenuShareTimeline {
    title: string
    link: string
    imgUrl: string
  }

  interface MenuShareAppMessage extends MenuShareTimeline {
    desc: string
  }

  interface WXInstance {
    config: (params: ConfigParams) => void
    ready: (callback: () => void) => void
    onMenuShareTimeline: (params: MenuShareTimeline) => void
    onMenuShareAppMessage: (params: MenuShareAppMessage) => void
    onMenuShareQQ: (params: MenuShareAppMessage) => void
  }

  const WX: WXInstance

  export default WX
}
