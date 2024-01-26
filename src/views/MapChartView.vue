<template>
  <div>
    <div id="map-chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// import "./map/china";
import axios from "axios";
// import genJson from "./map/chinaChange.json";
export default {
  name: "ChartView",
  mounted() {
    this.initMap();
  },
  methods: {
    mergeProvinces(chinaJson, names, properties) {
      //合并大区里省份的coordinates
      var features = chinaJson.features;
      var polygons = [];
      var polygons2 = [];

      for (var i = 0; i < names.length; i++) {
        var polygonsCoordinates = [];
        var polygonsEncodeOffsets = [];
        for (var z = 0; z < names[i].length; z++) {
          for (var j = 0; j < features.length; j++) {
            if (features[j].properties.name == names[i][z]) {
              if (features[j].geometry.coordinates[0].constructor == String) {
                //合并coordinates
                for (
                  var l = 0;
                  l < features[j].geometry.coordinates.length;
                  l++
                ) {
                  polygonsCoordinates.push(features[j].geometry.coordinates[l]);
                }
              } else if (
                features[j].geometry.coordinates[0].constructor == Array
              ) {
                for (
                  var k = 0;
                  k < features[j].geometry.coordinates.length;
                  k++
                ) {
                  for (
                    var d = 0;
                    d < features[j].geometry.coordinates[k].length;
                    d++
                  ) {
                    polygonsCoordinates.push(
                      features[j].geometry.coordinates[k][d]
                    );
                  }
                }
              }

              if (features[j].geometry.encodeOffsets[0].constructor == String) {
                //合并encodeOffsets
                polygonsEncodeOffsets.push(features[j].geometry.encodeOffsets);
              } else if (
                features[j].geometry.encodeOffsets[0].constructor == Array
              ) {
                for (
                  var k = 0;
                  k < features[j].geometry.encodeOffsets.length;
                  k++
                ) {
                  if (
                    features[j].geometry.encodeOffsets[k][0].constructor ==
                    Array
                  ) {
                    for (
                      var e = 0;
                      e < features[j].geometry.encodeOffsets[k].length;
                      e++
                    ) {
                      polygonsEncodeOffsets.push(
                        features[j].geometry.encodeOffsets[k][e]
                      );
                    }
                  } else {
                    polygonsEncodeOffsets.push(
                      features[j].geometry.encodeOffsets[k]
                    );
                  }
                }
              }

              break;
            }
          }
        }
        polygons.push(polygonsCoordinates);
        polygons2.push(polygonsEncodeOffsets);
      }

      // 构建新的合并区域
      var features = [];

      for (var a = 0; a < names.length; a++) {
        var feature = {
          id: features.length.toString(),
          type: "FeatureCollection",
          geometry: {
            type: "Polygon",
            coordinates: polygons[a],
            encodeOffsets: polygons2[a],
          },
          properties: {
            name: properties.name[a] || "",
            childNum: polygons[a].length,
          },
        };
        if (properties.cp[a]) {
          feature.properties.cp = properties.cp[a];
        }

        // 将新的合并区域添加到地图中
        features.push(feature);
      }
      chinaJson.features = features;
    },
    initMap() {
      // echarts.registerMap("china", genJson);
      let chartDom = document.getElementById("map-chart");
      let myChart = echarts.init(chartDom);
      let option = {
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{b}",
        // },
        series: [
          {
            name: "中国",
            type: "map",
            map: "china",
            selectedMode: "single",
            itemStyle: {
              areaColor: "#7f93a6",
            },
            emphasis: {
              itemStyle: {
                areaColor: "#333399",
              },
            },
            select: {
              itemStyle: {
                areaColor: "#333399",
              },
            },
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", this.getClickName);
    },
    getClickName(params) {
      console.log(params);
      this.$notify({
        title: "提示",
        message: "点击了" + params.name,
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
#map-chart {
  height: 1200px;
}
</style>
