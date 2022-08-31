<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";
import "./map/china";
export default {
  name: "ChartView",
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}",
      },
      series: [
        {
          name: "中国",
          type: "map",
          mapType: "china",
          selectedMode: "single",
          itemStyle: {
            areaColor: "#7f93a6",
          },
          emphasis: {
            itemStyle: {
              areaColor: "#333399",
            },
          },
          select:{
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
  methods: {
    getClickName(params) {
      console.log(params);
      this.$notify({
        title: '提示',
        message: '点击了' + params.name,
        type: 'success'
      })
    }
  },
};
</script>

<style lang="less" scoped>
#main {
  height: 600px;
}
</style>