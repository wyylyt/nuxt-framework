import api from "@/api/index";

/**
 * 跳转新闻详情时，根据新闻的类型判断怎样跳转
 * @param newsItem
 */
export function handleToDetail(newsItem: INewsItem) {
  api.increaseViewCount(Number(newsItem.id), newsItem.sourceType);

  switch (newsItem.contextType) {
    case 3:
      // 跳外链
      window.open(newsItem.url, "_blank");
      break;

    case 5:
      // 内链----视频新闻
      // window.open(`/video-center/video-detail/${newsItem.id}`, "_blank");
      break;

    case 7:
      // 内链----视频新闻--- 直播新闻
      // window.open(`/video-center/video-detail/${newsItem.id}`, "_blank");
      break;

    case 6:
      // 专题
      // window.open(`/special-topic/detail/${newsItem.id}`);
      break;

    case 1:
      // 多图新闻
      // window.open(`/news-center/images-detail?id=${newsItem.id}`);
      break;

    default:
      break;
  }
}
