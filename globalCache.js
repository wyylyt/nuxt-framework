const LRU = require("lru-cache");
const cachePage = new LRU({
  max: 10,
  // 缓存过期时间(ms)
  maxAge: 30000
});

module.exports = cachePage;
