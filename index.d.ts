declare interface INewsItem {
  id: string;
  informationId: string;
  images: string;
  url: string;
  columnsId: number;
  contextType: number;
  sortNo: number;
  onlineTime: string;
  onlineDate: string;
  /** 业务类型{1:新闻,2:问政,3:商情,4:随手拍,5:段子,6:活动,7:话题} */
  sourceType: number;
  onlineTimeDate: string;
}
