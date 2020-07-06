/*
 * @Author: your name
 * @Date: 2020-04-26 15:25:47
 * @LastEditTime: 2020-05-06 10:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\store\index.ts
 */

export const state = () => ({
  appId: '31', // 客户端id
  searchContent: '', // 搜索的内容
  currentColumnId: '0', // 当前选中的栏目id
  userInfo: {}
})

export const mutations = {
  setSearchCont(state: any, cont: string) {
    state.searchContent = cont
  },
  setCurrentColumnId(state: any, cont: string) {
    state.currentColumnId = cont
  },
  setUserInfo(state: any, cont: Object) {
    state.userInfo = cont
  }
}
