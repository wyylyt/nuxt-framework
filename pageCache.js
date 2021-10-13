const cachePage = require("./globalCache");
export default function (req, res, next) {
  const pathname = req._parsedOriginalUrl.path;
  // 选择所需要缓存的路径，以首页为例
  const existHtml = cachePage.get(pathname);
  if (existHtml) {
    return res.end(existHtml, "utf-8");
  } else {
    // 重写res.end
    res.original_end = res.end;

    res.end = function (data) {
      // 在发送页面数据的同时设置缓存
      if (res.statusCode === 200) {
        cachePage.set(pathname, data);
      }

      res.original_end(data, "utf-8");
    };
  }
  next();
}
