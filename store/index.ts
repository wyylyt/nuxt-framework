/*
 * @Author: your name
 * @Date: 2020-04-26 15:25:47
 * @LastEditTime: 2020-06-11 09:09:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \activity\store\index.ts
 */

export const state = () => ({
  searchContent: '', // 搜索的内容
})

export const mutations = {
  setSearchCont(state: any, cont: string) {
    state.searchContent = cont
  },
}
