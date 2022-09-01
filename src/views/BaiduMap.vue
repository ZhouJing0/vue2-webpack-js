<template>

    <div>
      <el-input id="searchInput" v-model="keyword" type="text" style="width: 20%;margin-bottom: 20px;">
      </el-input>

      <baidu-map
      :zoomEnable="true"
      class="bm-view"
      ak="48ReoIIe6YcGweC02Tn50WPXVrqgqjg5"
      @click="getClickInfo"
      center="北京"
      :scroll-wheel-zoom="true"
      :zoom="zoom"
      @ready="handler"
    >
    <!--搜索-->
 
    <!-- @searchcomplete="searchcomplete" -->
    <bm-local-search
        :panel="isShowPanel"
        :keyword="keyword"
        :auto-viewport="true"
        CustomData="CustomData"
        :pageCapacity="10"
      ></bm-local-search>
      <bml-heatmap
        :data="hotData"
        :max="100"
        :radius="20"
      >

      </bml-heatmap>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
      <!-- <bm-panorama></bm-panorama> -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" @locationSuccess="handleLocation"></bm-geolocation>
      <!-- 缩放控件 -->
      <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" /> -->
      <bm-marker :position="location" :dragging="true">
        <bm-info-window
          :show="show"
          :width="0"
          :height="0"
          @close="infoWindowClose"
          @open="infoWindowOpen"
          style="font-size: 14px"
        >
          <p>地点：{{ site }}</p>
        </bm-info-window>
      </bm-marker>

    </baidu-map>
    </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import {
  BmCityList,
  BmNavigation,
  BmMarker,
  BmInfoWindow,
  BmLocalSearch,
  BmMapType,
  // BmPanorama,
  BmlHeatmap,
  BmGeolocation,
} from "vue-baidu-map";
export default {
  // name:'BaiduMap',
  components: {
    BaiduMap,
    BmCityList,
    BmNavigation,
    BmMarker,
    BmInfoWindow,
    BmLocalSearch,
    BmMapType,
    BmlHeatmap,
    // BmPanorama,
    BmGeolocation,
  },
  data() {
    return {
      site: "",
      keyword:'',
      show: false,
      isShowPanel: false,
      location: { lng: 0, lat: 0 },
      // location: { lng: 116.4, lat: 39.9 },
      center: { lng: 0, lat: 0 },
      zoom: 12,
      markerPoint: { lng: 116.4, lat: 39.9 },
      hotData:[
        {lng:116.418261,lat:39.921984,count:50},
        {lng:116.423332,lat:39.916532,count:51},
        {lng:116.419787,lat:39.930658,count:15},
        {lng:116.431264,lat:39.921984,count:50},
        {lng:116.485653,lat:39.916532,count:51},
        {lng:116.421465,lat:39.930658,count:87},
        {lng:116.476457,lat:39.921984,count:64},
        {lng:116.489024,lat:39.916532,count:51},
        {lng:116.408623,lat:39.930658,count:99},
      ]
    };
  },
  methods: {
    handleLocation(e){
      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
      geocoder.getLocation(e.point, (rs) => {
        this.site = rs.address;
        // this.add.site = rs.address;
        //地址描述(string)=
        // console.log(rs.address);    //这里打印可以看到里面的详细地址信息，可以根据需求选择想要的
        // console.log(rs.addressComponents);//结构化的地址描述(object)
        // console.log(rs.addressComponents.province); //省
        // console.log(rs.addressComponents.city); //城市
        // console.log(rs.addressComponents.district); //区县
        // console.log(rs.addressComponents.street); //街道
        // console.log(rs.addressComponents.streetNumber); //门牌号
        // console.log(rs.surroundingPois); //附近的POI点(array)
        // console.log(rs.business); //商圈字段，代表此点所属的商圈(string)
      });
    }, 
    infoWindowOpen() {
      this.times = setInterval(()=>{
        this.show = true;
      },100)
    },
    handleClick(type, target) {
      console.log(type, target);
    },
      infoWindowClose() {
        this.show = false;
      },
    getClickInfo(e) {
      console.log(e);
      this.show = true;
      this.location.lng = e.point.lng;
      this.location.lat = e.point.lat;
      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
      geocoder.getLocation(e.point, (rs) => {
        console.log(rs)
        this.site = rs.address;
        // this.add.site = rs.address;
        //地址描述(string)=
        // console.log(rs.address);    //这里打印可以看到里面的详细地址信息，可以根据需求选择想要的
        // console.log(rs.addressComponents);//结构化的地址描述(object)
        // console.log(rs.addressComponents.province); //省
        // console.log(rs.addressComponents.city); //城市
        // console.log(rs.addressComponents.district); //区县
        // console.log(rs.addressComponents.street); //街道
        // console.log(rs.addressComponents.streetNumber); //门牌号
        // console.log(rs.surroundingPois); //附近的POI点(array)
        // console.log(rs.business); //商圈字段，代表此点所属的商圈(string)
      });
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      map.enableScrollWheelZoom(true);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
  },
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 700px;
}
</style>