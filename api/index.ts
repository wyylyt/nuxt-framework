import request from "@/common/request";
import { state } from "@/store";
import {
  ISearchParams,
  ISearchResult,
  INewsDetail,
  INewsListRes,
  IRecommandObj,
  IRelationList,
  IFusionMediaRes,
  ITopicDetail,
  ITopicSub,
  ICyberVisual,
  IGetMultiPicture,
  IColumnRes,
  IColumnData,
} from "@/api/types";

class Api {
  get appId() {
    return state().appId;
  }

  private postWithAppId(
    url: string,
    params: any = Object.create(null)
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      request
        .post(url, Object.assign(params, { appId: this.appId }))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  private postWithoutAppId(
    url: string,
    params: any = Object.create(null)
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      request
        .post(url, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * 新闻搜索
   */
  getResearchResults(params: ISearchParams): Promise<ISearchResult> {
    return this.postWithAppId(
      "/info/search.html",
      Object.assign(params, { isPC: 1 })
    );
  }

  /**
   * 新闻详情
   */
  getNewsDetail(infoClassifyId: number | string): Promise<INewsDetail> {
    return this.postWithoutAppId("/infoDetailNew.html", { infoClassifyId });
  }

  /** 相关新闻
   * @param id 新闻的infoClassifyId
   */
  getRelationNews(id: number | string): Promise<IRelationList> {
    return this.postWithAppId("getCorrelation.html", { id, isPC: 1 });
  }

  /**
   * 获取专题新闻列表
   */
  getSpecialTopicList(params: {
    infoClassifyId: number | string;
  }): Promise<ITopicDetail> {
    return this.postWithAppId("/info/getSpecialDetail.html", params);
  }

  /** 获取专题子新闻 */
  getSpecialTopicSubList(params: {
    infoClassifyId: number | string;
    themeId: number;
    lastId?: number | string;
    lastSortNo?: number;
    lastOnlineTime?: string;
  }): Promise<ITopicSub> {
    return this.postWithAppId(
      "/info/getSpecialSubList.html",
      Object.assign(params, { isPC: 1 })
    );
  }

  /**
   * 获取细长的banner推荐图 广告位的图
   */
  getIndexRecommandBanner(systemCode: "wx" | "cloud"): Promise<IRecommandObj> {
    return this.postWithAppId("/recommend/getRecommendRecordList.html", {
      systemCode,
    });
  }

  /**
   * 获取新闻列表 如果是获取更多数据，需要传这三个参数
   * @param lastId
   * @param lastSortNo
   * @param lastOnlineTime
   */
  getNews(params: {
    columnId: string | number;
    /** 是否轮播 */
    isCarousel: boolean;

    sessionId?: string;
    token?: string;
    lastId?: string;
    lastSortNo?: number;
    lastOnlineTime?: string;
  }): Promise<INewsListRes> {
    return this.postWithAppId(
      "/info/news.html",
      Object.assign(params, {
        isPC: 1,
      })
    );
  }

  /** 获取全媒体列表 */
  getFusionMediaList(): Promise<IFusionMediaRes> {
    return this.postWithAppId("/app/getAllMedia.html");
  }

  /**
   * 广播或电视类型区别默认1{1:广播,2:电视}
   * @param type 广播或电视类型区别默认1{1:广播,2:电视}
   */
  getRadioOrTelevisionCategoryList(type: 1 | 2): Promise<ICyberVisual> {
    return this.postWithAppId("/info/getRadioOrTelevisionCategoryList.html", {
      type,
    });
  }

  /**
   * 获取多图新闻详情
   * @param id 多图新闻ID
   */
  getMultiplePicture(id: string): Promise<IGetMultiPicture> {
    return this.postWithoutAppId("/info/v2/detail.html", {
      id,
    });
  }

  /**
   * 获取栏目
   */
  getColumns(parentCode: string): Promise<IColumnRes> {
    return this.postWithAppId("/getColumns.html", {
      parentCode,
    });
  }

  /**
   * 添加浏览量
   * @param sourceId
   * @param sourceType
   */
  increaseViewCount(sourceId: number, sourceType: number) {
    return this.postWithAppId("/increaseViewCount.html", {
      appId: this.appId,
      sessionId: null,
      sourceId,
      sourceType,
    });
  }

  /**
   * 获取多图新闻详情
   * @param id 多图新闻ID
   */
  getMultiImagesNews(id: string | number): Promise<IGetMultiPicture> {
    return this.postWithAppId("/info/v2/detail.html", {
      id,
    });
  }

  /**
   *根据栏目id获取栏目
   * @param columnId 栏目id
   */
  getColumnsById(columnId: number | string): Promise<IColumnData> {
    return this.postWithAppId("/getColumnsById.html", {
      columnId,
    });
  }
}

export default new Api();
