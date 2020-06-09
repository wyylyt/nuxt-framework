<!--
 * @Author: wanjikun
 * @LastEditTime: 2020-06-09 09:32:39
 * @description: Do not edit
--> 
<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-framework</h1>
      <h2 class="subtitle">Welcome to the iView + Nuxt.js template</h2>
      <div class="links">
        <VueBaiduMap/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Service from "@/api/index";
import VueBaiduMap from "@/components/BMap/map.vue";

import Logo from "~/components/Logo.vue";
import moment from "moment";

@Component({
  components: {
    VueBaiduMap
  },
  head() {
    return {
      title: "新闻头条"
    };
  }
})
export default class Index extends Vue {
  mounted() {
    const param = {
      appId: "31",
      isCarousel: false,
      columnId: "4501"
    };
    Service.getNews(param).then(res => {
      console.log("res", res);
    });

    console.log("...", moment().format("YYYY-MM-DD"));
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
  width: 500px;
  height: 500px;
}
</style>
