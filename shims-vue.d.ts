import Vue from "vue";

declare module "*.vue" {
  import Vue from "vue";

  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $handleToDetail: (newsItem: INewsItem, path?: string) => void;
    /** 获取新闻的列表图 */
    $getNewsListSingleImage: (newsItem: INewsItem) => string;
  }
}
