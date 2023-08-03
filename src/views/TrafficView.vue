<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
var map;
export default {
  name: "TrafficView",
  data() {
    return {};
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "8a0e73c2a1b2f04d594f30d1b3e19214", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            center: [105.602725, 37.076636], //初始化地图中心点位置
          });

          // 定义定时器，每2s查询当前位置附近的红绿灯状态及秒数
          setInterval(function () {
            // 获取当前位置
            var center = map.getCenter();
            // 发送请求获取当前位置附近的红绿灯信息
            AMap.service(
              "AMap.Traffic.status",
              {
                location: center.lng + "," + center.lat,
                radius: 100, // 查询半径，单位为米
              },
              function (status, result) {
                // 处理返回的结果
                if (status === "complete" && result.info === "OK") {
                  var lights = result.lights;
                  // 遍历红绿灯信息，展示对应的状态及剩余秒数
                  for (var i = 0; i < lights.length; i++) {
                    var light = lights[i];
                    var status = light.status;
                    var seconds = light.seconds;
                    // TODO: 在页面展示或弹窗中展示状态及秒数
                  }
                }
              }
            );
          }, 2000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>
