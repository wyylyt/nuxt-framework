<!--
 * @Description: 
 * @Author: wanjikun
 * @Date: 2021-10-13 09:30:33
 * @LastEditTime: 2021-10-13 15:14:54
 * @LastEditors: wanjikun
-->
<template>
  <div class="index">首页哈
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  <div style="width:500px;height:500px">
    <BaiduMap/>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import BaiduMap from '@/components/BMap/map.vue'
@Component({
  components:{BaiduMap}
})
export default class Index extends Vue {
  value:boolean = true;
  mounted() {
    console.log('NUXT_ENV_BASE_API',process.env.NUXT_ENV_BASE_API);
    
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss"></style>
