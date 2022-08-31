<template>

    <div>
      <el-input id="searchInput" v-model="keyword" type="text" style="width: 20%">
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
 
        <!-- :panel="isShowPanel" -->
        <!-- @searchcomplete="searchcomplete" -->
      <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
        location="北京"
      ></bm-local-search>

      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" @locationSuccess="handleLocation"></bm-geolocation>
      <!-- 缩放控件 -->
      <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" /> -->
      <bm-marker :position="location" :dragging="true">
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
          style="font-size: 14px"
        >
          <p>地点：{{ site ? site : '北京' }}</p>
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
    BmGeolocation,
  },
  data() {
    return {
      site: "",
      keyword:'',
      show: true,
      // isShowPanel: true,
      location: { lng: 116.4, lat: 39.9 },
      center: { lng: 0, lat: 0 },
      zoom: 12,
      markerPoint: { lng: 116.4, lat: 39.9 },
    };
  },
  methods: {
    // searchcomplete(arr) {
    //   this.isShowPanel = true;
    // },
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
      // BMap.enableScrollWheelZoom()
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