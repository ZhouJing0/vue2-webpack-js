<template>
  <div>
    <div id="r-result">
      请输入:<input
        type="text"
        id="suggestId"
        size="20"
        value="百度"
        v-model="searchValue"
        style="width: 180px"
      />
      <!-- <el-button type="primary" size="mini" icon="el-icon-search" @click="handleSearch"></el-button> -->
      
    </div>
    <div
      id="searchResultPanel"
      style="
        border: 1px solid #c0c0c0;
        width: 150px;
        height: auto;
        display: none;
      "
    ></div>
    <div id="container"></div>
  </div>
</template>

<script>
var map;
var local
export default {
  name: "MapView",
  data() {
    return {
      area: "",
      map: null,
      info: "",
      searchValue:'',
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    
    initMap() {
      function G(id) {
        return document.getElementById(id);
      }
      // 百度地图API功能
      map = new BMap.Map("container");
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
      map.enableScrollWheelZoom();
      //修改
      function newAc(map) {
        return new BMap.Autocomplete({ //建立一个自动完成的对象
          input: "suggestId",
          location: map,
        });
      }
      var ac = newAc(map);

      ac.addEventListener("onhighlight", handleHover);
      function handleHover(e) {
        //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str =
          "FromItem<br />index = " +
          e.fromitem.index +
          "<br />value = " +
          value;
        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str +=
          "<br />ToItem<br />index = " +
          e.toitem.index +
          "<br />value = " +
          value;
        G("searchResultPanel").innerHTML = str;
      }
      var myValue;
      ac.addEventListener("onconfirm", handleClick);
      function handleClick(e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        G("searchResultPanel").innerHTML =
          "onconfirm<br />index = " +
          e.item.index +
          "<br />myValue = " +
          myValue;
        setPlace();
      }
      function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
          var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
          map.centerAndZoom(pp, 18);
          map.addOverlay(new BMap.Marker(pp)); //添加标注
          //修改
          ac.dispose();
          ac = null;
          ac = newAc(pp);
          ac.addEventListener("onhighlight", handleHover);
          ac.addEventListener("onconfirm", handleClick);
        }

        local = new BMap.LocalSearch(map, {
          //智能搜索
          onSearchComplete: myFun,
        });
        local.search(myValue);
      }
      
      var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
      }); // 左上角，添加比例尺
      // var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
      var cityList = new BMap.CityListControl();
      var mapType = new BMap.MapTypeControl();
      var geolocation = new BMap.GeolocationControl();
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL,
      }); //右上角，仅包含平移和缩放按钮
      /*缩放控件type有四种类型:
      BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

      //添加控件和比例尺
      map.addControl(top_left_control);
      // map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
      map.addControl(cityList);
      map.addControl(mapType);
      map.addControl(geolocation);

      var points = [
        { lng: 116.418261, lat: 39.921984, count: 50 },
        { lng: 116.423332, lat: 39.916532, count: 51 },
        { lng: 116.419787, lat: 39.930658, count: 15 },
        { lng: 116.418455, lat: 39.920921, count: 40 },
        { lng: 116.418843, lat: 39.915516, count: 100 },
        { lng: 116.42546, lat: 39.918503, count: 6 },
        { lng: 116.423289, lat: 39.919989, count: 18 },
        { lng: 116.418162, lat: 39.915051, count: 80 },
        { lng: 116.422039, lat: 39.91782, count: 11 },
        { lng: 116.41387, lat: 39.917253, count: 7 },
        { lng: 116.41773, lat: 39.919426, count: 42 },
        { lng: 116.421107, lat: 39.916445, count: 4 },
        { lng: 116.417521, lat: 39.917943, count: 27 },
        { lng: 116.419812, lat: 39.920836, count: 23 },
        { lng: 116.420682, lat: 39.91463, count: 60 },
        { lng: 116.415424, lat: 39.924675, count: 8 },
        { lng: 116.419242, lat: 39.914509, count: 15 },
        { lng: 116.422766, lat: 39.921408, count: 25 },
        { lng: 116.421674, lat: 39.924396, count: 21 },
        { lng: 116.427268, lat: 39.92267, count: 1 },
        { lng: 116.417721, lat: 39.920034, count: 51 },
        { lng: 116.412456, lat: 39.92667, count: 7 },
        { lng: 116.420432, lat: 39.919114, count: 11 },
        { lng: 116.425013, lat: 39.921611, count: 35 },
        { lng: 116.418733, lat: 39.931037, count: 22 },
        { lng: 116.419336, lat: 39.931134, count: 4 },
        { lng: 116.413557, lat: 39.923254, count: 5 },
        { lng: 116.418367, lat: 39.92943, count: 3 },
        { lng: 116.424312, lat: 39.919621, count: 100 },
        { lng: 116.423874, lat: 39.919447, count: 87 },
        { lng: 116.424225, lat: 39.923091, count: 32 },
        { lng: 116.417801, lat: 39.921854, count: 44 },
        { lng: 116.417129, lat: 39.928227, count: 21 },
        { lng: 116.426426, lat: 39.922286, count: 80 },
        { lng: 116.421597, lat: 39.91948, count: 32 },
        { lng: 116.423895, lat: 39.920787, count: 26 },
        { lng: 116.423563, lat: 39.921197, count: 17 },
        { lng: 116.417982, lat: 39.922547, count: 17 },
        { lng: 116.426126, lat: 39.921938, count: 25 },
        { lng: 116.42326, lat: 39.915782, count: 100 },
        { lng: 116.419239, lat: 39.916759, count: 39 },
        { lng: 116.417185, lat: 39.929123, count: 11 },
        { lng: 116.417237, lat: 39.927518, count: 9 },
        { lng: 116.417784, lat: 39.915754, count: 47 },
        { lng: 116.420193, lat: 39.917061, count: 52 },
        { lng: 116.422735, lat: 39.915619, count: 100 },
        { lng: 116.418495, lat: 39.915958, count: 46 },
        { lng: 116.416292, lat: 39.931166, count: 9 },
        { lng: 116.419916, lat: 39.924055, count: 8 },
        { lng: 116.42189, lat: 39.921308, count: 11 },
        { lng: 116.413765, lat: 39.929376, count: 3 },
        { lng: 116.418232, lat: 39.920348, count: 50 },
        { lng: 116.417554, lat: 39.930511, count: 15 },
        { lng: 116.418568, lat: 39.918161, count: 23 },
        { lng: 116.413461, lat: 39.926306, count: 3 },
        { lng: 116.42232, lat: 39.92161, count: 13 },
        { lng: 116.4174, lat: 39.928616, count: 6 },
        { lng: 116.424679, lat: 39.915499, count: 21 },
        { lng: 116.42171, lat: 39.915738, count: 29 },
        { lng: 116.417836, lat: 39.916998, count: 99 },
        { lng: 116.420755, lat: 39.928001, count: 10 },
        { lng: 116.414077, lat: 39.930655, count: 14 },
        { lng: 116.426092, lat: 39.922995, count: 16 },
        { lng: 116.41535, lat: 39.931054, count: 15 },
        { lng: 116.413022, lat: 39.921895, count: 13 },
        { lng: 116.415551, lat: 39.913373, count: 17 },
        { lng: 116.421191, lat: 39.926572, count: 1 },
        { lng: 116.419612, lat: 39.917119, count: 9 },
        { lng: 116.418237, lat: 39.921337, count: 54 },
        { lng: 116.423776, lat: 39.921919, count: 26 },
        { lng: 116.417694, lat: 39.92536, count: 17 },
        { lng: 116.415377, lat: 39.914137, count: 19 },
        { lng: 116.417434, lat: 39.914394, count: 43 },
        { lng: 116.42588, lat: 39.922622, count: 27 },
        { lng: 116.418345, lat: 39.919467, count: 8 },
        { lng: 116.426883, lat: 39.917171, count: 3 },
        { lng: 116.423877, lat: 39.916659, count: 34 },
        { lng: 116.415712, lat: 39.915613, count: 14 },
        { lng: 116.419869, lat: 39.931416, count: 12 },
        { lng: 116.416956, lat: 39.925377, count: 11 },
        { lng: 116.42066, lat: 39.925017, count: 38 },
        { lng: 116.416244, lat: 39.920215, count: 91 },
        { lng: 116.41929, lat: 39.915908, count: 54 },
        { lng: 116.422116, lat: 39.919658, count: 21 },
        { lng: 116.4183, lat: 39.925015, count: 15 },
        { lng: 116.421969, lat: 39.913527, count: 3 },
        { lng: 116.422936, lat: 39.921854, count: 24 },
        { lng: 116.41905, lat: 39.929217, count: 12 },
        { lng: 116.424579, lat: 39.914987, count: 57 },
        { lng: 116.42076, lat: 39.915251, count: 70 },
        { lng: 116.425867, lat: 39.918989, count: 8 },
      ];

      // if(!isSupportCanvas()){
      // 	alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
      // }

      var opts = {
        width: 150, // 信息窗口宽度
        height: 35, // 信息窗口高度
        // title : "地点",  // 信息窗口标题
        // offset:5
      };
      var info;
      map.addEventListener("click", (el) => {
        map.clearOverlays(); //清除地图上所有覆盖物
        var marker = new BMap.Marker(el.point); // 创建点
        let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
        geocoder.getLocation(el.point, (rs) => {
          info = rs.address;
        });
        setTimeout(() => {
          var infoWindow = new BMap.InfoWindow("地点：" + info, opts); // 创建信息窗口对象
          map.addOverlay(marker);
          map.openInfoWindow(infoWindow, el.point);
        }, 200);
      });
    },

    //百度地图 1.0版本
    // initMap() {
    //   // GL版命名空间为BMapGL
    //   // 按住鼠标右键，修改倾斜角和角度
    //   map = new BMapGL.Map("container"); // 创建Map实例
    //   var point = new BMapGL.Point(116.404, 39.915)
    //   map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
    //   map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    //   var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    //   map.addControl(scaleCtrl);
    //   var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    //   map.addControl(zoomCtrl);
    //   var cityList = new BMapGL.CityListControl()
    //   map.addControl(cityList)
    //   var location = new BMapGL.LocationControl()
    //   map.addControl(location)

    //   //浏览器定位
    //   // var geolocation = new BMapGL.Geolocation();
    //   // geolocation.getCurrentPosition(function(r){
    //   //     if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //   //         var mk = new BMapGL.Marker(r.point);
    //   //         map.addOverlay(mk);
    //   //         map.panTo(r.point);
    //   //         alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    //   //     }
    //   //     else {
    //   //         alert('failed' + this.getStatus());
    //   //     }
    //   // });

    //   //城市定位
    //   // function myFun(result){
    //   //   var cityName = result.name;
    //   //   map.setCenter(cityName);
    //   //   alert("当前定位城市:" + cityName);
    //   // }
    //   // var myCity = new BMapGL.LocalCity();
    //   // myCity.get(myFun);

    //   map.addEventListener('click',(el)=>{
    //     var marker = new BMapGL.Marker(el.latlng); // 创建点
    //     map.addOverlay(marker)
    //   // let a =  new BMapGL.Point(116.404, 39.915)
    //   })

    // },
  },
};
</script>

<style  scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
#suggestId {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 28px;
  line-height: 28px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>