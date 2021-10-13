<!--
 * @Author: your name
 * @Date: 2020-04-20 15:13:53
 * @LastEditTime: 2021-09-08 15:44:39
 * @LastEditors: wanjikun
 * @Description: In User Settings Edit
 * @FilePath: \activity\pages\answer.vue
 -->
<template>
  <div class="cont">
    <!-- no-ssr 解决 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render. -->
    <client-only>
      <baidu-map
        class="map-container"
        :center="{ lng: longitude, lat: latitude }"
        :zoom="16"
        @ready="mapReady"
      >
        <bm-marker
          :position="{ lng: longitude, lat: latitude }"
          :dragging="false"
          @ready="mapReady"
          @click="markerClick"
        ></bm-marker>
      </baidu-map>
    </client-only>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-undef */
import { setTimeout } from 'timers'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class VueBaiduMap extends Vue {
  @Prop({
    type: Number,
    default: 0
  })
  public lng!: number

  @Prop({
    type: Number,
    default: 0
  })
  public lat!: number

  longitude: number = 0
  latitude: number = 0
  mapRendered: boolean = false //

  @Watch('lat')
  onChangeValue(newVal: number, oldVal: number) {
    if (this.mapRendered) {
      this.longitude = this.lng
      this.latitude = this.lat
    }
  }

  mounted() {}

  mapReady() {
    this.mapRendered = true
    this.longitude = this.lng
    this.latitude = this.lat
  }

  markerClick() {
    // window.location.href = `http://api.map.baidu.com/marker?location=${this.latitude},${this.longitude}&title铜梁区税务局`
  }
}
</script>
<style lang="scss" scoped>
.cont {
  width: 100%;
  height: 100%;
}
.map-container {
  width: 100%;
  height: 100%;
}
</style>
