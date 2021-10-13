/** 基础的返回结构 */
export interface IResponse {
  code: number;
  message: string;
  sessionId: string;
}

export interface ISearchParams {
  // 新闻标题或者名称
  title: string;
  lastId?: number | string;
  lastOnlineTime?: string;
  // 栏目ID
  columnId?: number;
}

/** 搜索返回的item */
export interface ISearchDataItem extends INewsItem {
  id: string;
  sortNo: number;
  title: string;
  detailTitle: string;
  contentUrl: string;
  viewCount: string;
  onlineDate: string;
  synopsis: string;
  images: string;
  onlineTime: string;
  // 列表显示类型{0:无图,1:单图,2:大图,3:多图,4:轮播,5:窄图,6:窄图带标题,7:两图,8:可播放视频}
  listViewType: number;
}

export interface ISearchResult extends IResponse {
  data: {
    dataList: ISearchDataItem[];
  };
}

export interface INewsDetailData {
  id: string;
  title: string;
  infoSource: string;
  viewCount: string;
  detailOnlineTime: string;
  synopsis: string;
  contentImgUrl: string;
  content: string;
  infoClassifyId: string;
  contextType: number;
  appResource: any;
}

export interface INewsDetail extends IResponse {
  data: INewsDetailData;
}

/** 首页的细长推荐banner的item */
// export interface IRecommendRecordItem {
//   id: string;
//   name: string;
//   imgUrl: string;
//   linkUrl: string;
// }

export interface IRecommandObj extends IResponse {
  data: any;
}

/** 首页细长的Banners推荐图的数组item */
export interface IBannersImageItem {
  id: string;
  name: string;
  showType: string;
  content: string;
  imgUrl: string;
  linkUrl: string;
  /** 自定义的 方便数据处理 */
  rowNum?: number;
  columnNum?: number;
}

/** 单个新闻item */
// export interface INewsItem {
//   id: string;
//   informationId: string;
//   images: string;
//   url: string;
//   columnsId: number;
//   contextType: number;
//   sortNo: number;
//   onlineTime: string;
// }

export interface INewsListRes extends IResponse {
  data: {
    news: INewsItem[];
    carousels?: INewsItem[];
  };
}

export interface IRelationList extends IResponse {
  data: {
    dataList: INewsItem[];
  };
}

/** 全媒体列表 */
export interface IMediaItem {
  id: number;
  name: string;
  linkUrl: string;
  sortNo: number;
  minImageUrl: string;
}

export interface IFusionMediaRes extends IResponse {
  data: {
    dataList: IMediaItem[];
  };
}

export interface ITopicData {
  infoClassifyId: number;
  contentUrl: string;
  synopsis: string;
  themes: Array<{
    id: number;
    name: string;
    color: string;
  }>;
}

/**
 * 获取多图新闻详情
 */
export interface IGetMultiPicture extends IResponse {
  data: IMultiPicture;
}

/**
 * 多图新闻详情
 */
export interface IMultiPicture {
  /** ID（info_classify表主键） */
  id: number;
  /** 客户端_ID */
  appId: number;
  /** 允许评论 */
  commentType: number;
  /**  评论需审核  */
  commentValidateType: null;
  /**  内容需审核 */
  validateType: number;
  /** 内容,包含HTML标签的富文本内容  */
  content: string;
  /** 原始栏目ID，为方便后续统计，新闻先归属其中一个栏目。 */
  classifyId: number;
  /** 新闻内容类型 */
  contextType: number;
  /**  创建时间  */
  createTime: string;
  /** 文本mp3地址 */
  audioUrl: string;
  /**  详情上线时间  */
  detailOnlineTime: string;
  /** 音频新闻是否自动播放  */
  isAutoPlay: null;
  /**  资讯Id */
  infoClassifyId: number;
  /**  栏目id */
  columnsId: number;
  /** 资讯标题  */
  title: string;
  /** 状态{-1:审核不通过,0:草稿,1:保存,3:正常上线,88:下线,99:删除} */
  status: number;
  /** 列表上线时间 */
  onlineTime: string;
  /** 外链类型 */
  outterLinkType: number;
  /** 顶部视频url */
  topVideoUrl: string;
  /** 顶部视频封面图  */
  topImageUrl: string;
  /** 广告图片链接url */
  link: string;
  /** 广告图片url */
  img: string;
  /** 创建人姓名  */
  creator: string;
  /** 多图资源 */
  appResource: IAppResource[];
  /** 内容,新闻的实际内容URL,对应生成后内容 */
  contentUrl: string;
  /** 前台编辑用户id */
  appUserId: string;
  /** 用户昵称 */
  name: string;
  /** 用户头像 */
  imgUrl: string;
  /** 认证标签 */
  authTag: string;
  /** 新闻上线时 */
  onlineDate: string;
}

/** 多图资源 */
export interface IAppResource {
  /** 资源表（APP_RESOUSE的主键） */
  id: number;
  /** 客户端_ID */
  appId: number;
  /** 资讯ID */
  informationId: number;
  /** 内容ID */
  informationContentId: number;
  /** 来源类型{0:普通图文,1:视频,2:音频,6:多图} */
  type: number;
  /** 名称 */
  name: string;
  /** 文件路径 */
  fileUrl: string;
  /**  说明 */
  description: string;
  /** 排序号 */
  sortNo: number;
  /** 文件资源ID */
  infoFileId: null;
  /** 状态{3:正常,99:删除} */
  status: number;
  /** 视频新闻分享出去后video的默认显示 */
  shareVideoCover: null;
}

export interface ITopicDetail extends IResponse {
  data: ITopicData;
}

export interface ITopicSub extends IResponse {
  data: {
    dataList: INewsItem[];
  };
}

export interface ICyberVisual extends IResponse {
  data: {
    dataList: Array<{
      categoryData: any;
      radioOrTelevisions: any;
    }>;
  };
}

/** 直播的单个数据 */
export interface ITvDataItem {
  id: number;
  name: string;
  icon: string;
  url: string;
  categoryId?: number;
}

/** 获取栏目 */
export interface IColumnItem {
  code: string;
  id: number;
  name: string;
  parentCode: string;
  imageUrl: string;
  synopsis: string;
  programDetail?: Array<{
    label: string;
    content: string;
  }>;
}

export interface IColumnRes extends IResponse {
  data: {
    dataList: IColumnItem[];
  };
}

export interface IColumnData extends IResponse {
  data: IColumnItem;
}
