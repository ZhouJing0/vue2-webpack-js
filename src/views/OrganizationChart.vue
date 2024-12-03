<template>
  <div ref="myPage" style="width: calc(100% - 2px); height: calc(100vh - 50px)">
    <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions">
      <template #graph-plug>
        <div
          v-if="isShowNodeTipsPanel"
          :style="{
            left: nodeMenuPanelPosition.x + 'px',
            top: nodeMenuPanelPosition.y + 'px',
          }"
          style="
            z-index: 999;
            padding: 10px;
            background-color: #ffffff;
            border: #eeeeee solid 1px;
            box-shadow: 0px 0px 8px #cccccc;
            position: absolute;
          "
        >
          <div class="my-node-tips">
            <p>
              企业名称: <span>{{ currentNode.text }}</span>
            </p>
            <p>
              下级企业数量: <span>{{ currentNode.data.subOrgCount }} 家</span>
            </p>
          </div>
        </div>
      </template>
      <template #node="{ node }">
        <div>
          <div
            style="
              width: 200px;
              cursor: pointer;
              text-align: left;
              padding: 0px;
            "
          >
            <div style="padding-left: 10px">净资产收益率</div>
            <div
              style="
                background-color: #ffffff;
                height: 80px;
                color: #555555;
                padding-left: 10px;
                padding-top: 10px;
                border-radius: 8px;
              "
            >
              <div style="border-bottom: #efefef solid 1px">
                当期【2022年12月】：12%
              </div>
              <div style="border-bottom: #efefef solid 1px">
                同比：30% <i style="color: #ff0000" class="el-icon-top" />
              </div>
              <div style="border-bottom: #efefef solid 1px">
                环比：10% <i style="color: green" class="el-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </SeeksRelationGraph>
  </div>
</template>

<script>
import SeeksRelationGraph from "relation-graph";
export default {
  name: "OrganizationChart",
  components: { SeeksRelationGraph },

  data() {
    return {
      graphOptions: {
        backgroundImage:
          "https://ssl.relation-graph.com/images/relatioon-graph-canvas-bg.png",
        backgroundImageNoRepeat: true,
        disableDragNode: true,
        defaultFocusRootNode: false,
        disableNodeClickEffect: true,
        disableLineClickEffect: true,
        allowShowMiniToolBar: false,
        defaultNodeBorderWidth: 2,
        defaultNodeColor: "#fff",
        defaultNodeBorderColor: "#000",
        defaultNodeFontColor: "#000",
        defaultLineWidth: 2,
        defaultNodeShape: 1,
        defaultLineMarker: {
          markerWidth: 20,
          markerHeight: 20,
          refX: 3,
          refY: 3,
          data: "M 0 0, V 6, L 4 3, Z",
        },
        layout: {
          label: "中心",
          layoutName: "tree",
          centerOffset_x: 0,
          centerOffset_y: 0,
          distance_coefficient: 1,
          layoutDirection: "h",
          from: "left",
          levelDistance: "",
          min_per_width: 100,
          max_per_width: 500,
          min_per_height: 300,
          max_per_height: 500,
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const graphData = {
        rootId: "a",
        nodes: [
          {
            id: "a",
            text: "a",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2308340537,462224207&fm=58&app=83&f=JPEG?w=250&h=250&s=EC708F46DA96B89CB69D5DDA0300D014",
              name: "侯亮平",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "b",
            text: "b",
            data: {
              pic: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2677153550,2207805387&fm=58&app=83&f=JPEG?w=250&h=250&s=249039DDC2D153D411A851360300C062",
              name: "李达康",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "b1",
            text: "b1",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1725297532,1915921796&fm=58&app=83&f=JPEG?w=250&h=250&s=FE8EA444A60759554DAC1DBB03000092",
              name: "祁同伟",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "b2",
            text: "b2",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2025797948,1615296290&fm=58&app=83&f=JPEG?w=250&h=250&s=B5B04C331F32739C4604F9F503007021",
              name: "陈岩石",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "b3",
            text: "b3",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=344720653,260255884&fm=58&app=83&f=JPEG?w=250&h=250&s=57B8AB676AE862941D94ED170300E060",
              name: "陆亦可",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "b4",
            text: "b4",
            data: {
              pic: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3098576865,849900134&fm=58&app=83&f=JPEG?w=250&h=250&s=EDE01A63A65917DC104509920300C0C1",
              name: "高育良",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "b5",
            text: "b5",
            data: {
              pic: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3722686698,2547355567&fm=58&app=83&f=JPEG?w=250&h=250&s=BF8A356E04E1B2BCEFA45D860100E0E1",
              name: "沙瑞金",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "b6",
            text: "b6",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4266886844,1791850012&fm=58&s=66B01AC758BB67960834B8FA0300C011",
              name: "高小琴",
              myicon: "el-icon-headset",
            },
          },
          {
            id: "c",
            text: "c",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2747443453,2680399969&fm=58&app=83&f=JPEG?w=150&h=150&s=DB8828C1562265150814ADFE03007012",
              name: "高小凤",
              myicon: "el-icon-headset",
            },
          },
          {
            id: "c1",
            text: "c1",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3301823375,1282024443&fm=58&app=83&f=JPG?w=250&h=250&s=2BC2834F2C22A25D12C06CA80300E013",
              name: "赵东来",
              myicon: "el-icon-s-tools",
            },
          },
          {
            id: "c2",
            text: "c2",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=134233720,666111889&fm=58&app=83&f=JPG?w=250&h=250&s=4DE5A844801F1BD461E039A20300C0C3",
              name: "程度",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "c3",
            text: "c3",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1215039713,3597142764&fm=58&app=83&f=JPEG?w=250&h=250&s=1A20E0018E3B6E9CD10C7DA30300E081",
              name: "吴惠芬",
              myicon: "el-icon-s-promotion",
            },
          },
          {
            id: "d",
            text: "d",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1140839330,2922201597&fm=58&app=83&f=JPEG?w=250&h=250&s=CDF9A844D45AB87512C8508B0100F080",
              name: "赵瑞龙",
              myicon: "el-icon-s-promotion",
            },
          },
          {
            id: "d1",
            text: "d1",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C",
              name: "赵立春",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "d2",
            text: "d2",
            data: {
              pic: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1416498138,2265298708&fm=58&app=83&f=JPEG?w=250&h=250&s=F906CF1C0E1356D046AC3CEB0300B0A0",
              name: "陈海",
              myicon: "el-icon-s-promotion",
            },
          },
          {
            id: "d3",
            text: "d3",
            data: {
              pic: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3749144697,3456463661&fm=58&app=83&f=JPEG?w=250&h=250&s=783823D3FE621E94138CC08B030070C2",
              name: "梁璐",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "d4",
            text: "d4",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2263876103,310235844&fm=58&app=83&f=JPEG?w=250&h=250&s=6CE2A944CC1223DC632CC09203009082",
              name: "刘新建",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "e",
            text: "e",
            data: {
              pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3590139977,3135325708&fm=58&app=83&f=JPEG?w=250&h=250&s=2F1C8B46C4A214BCE100A81A03004091",
              name: "欧阳菁",
              myicon: "el-icon-setting",
            },
          },
          {
            id: "e1",
            text: "e1",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2110325119,1633583088&fm=58&app=83&f=JPEG?w=120&h=120&s=971E35C05A43305DCA7C1C0B030080C",
              name: "吴心怡",
              myicon: "el-icon-star-on",
            },
          },
          {
            id: "e2",
            text: "e2",
            data: {
              pic: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4153440298,254451173&fm=58&app=83&f=JPEG?w=250&h=250&s=07C2B4488C42D355548CC41F010080D1",
              name: "蔡成功",
              myicon: "el-icon-setting",
            },
          },
        ],
        lines: [
          {
            from: "a",
            to: "b",
          },
          {
            from: "b",
            to: "b1",
          },
          {
            from: "b",
            to: "b2",
          },
          {
            from: "b",
            to: "b3",
          },
          {
            from: "b",
            to: "b4",
          },
          {
            from: "b",
            to: "b5",
          },
          {
            from: "b",
            to: "b6",
          },
          {
            from: "a",
            to: "c",
          },
          {
            from: "c",
            to: "c1",
          },
          {
            from: "c",
            to: "c2",
          },
          {
            from: "c",
            to: "c3",
          },
          {
            from: "a",
            to: "d",
          },
          {
            from: "d",
            to: "d1",
          },
          {
            from: "d",
            to: "d2",
          },
          {
            from: "d",
            to: "d3",
          },
          {
            from: "d",
            to: "d4",
          },
          {
            from: "a",
            to: "e",
          },
          {
            from: "e",
            to: "e1",
          },
          {
            from: "e",
            to: "e2",
          },
          {
            from: "d",
            to: "d3",
            text: "Link2",
            color: "rgba(255, 120, 0, 1)",
            lineWidth: 1,
            data: {},
          },
          {
            from: "d3",
            to: "d",
            text: "Link3",
            color: "rgba(0, 206, 209, 1)",
            isReverse: true,
            lineWidth: 1,
            lineShape: 1,
            data: {},
          },
          {
            from: "d3",
            to: "d",
            text: "Link3",
            color: "rgba(144, 240, 144, 0.5)",
            isHideArrow: true,
            lineWidth: 5,
            lineShape: 3,
            data: {},
          },
        ],
      };
      this.$refs.seeksRelationGraph.setJsonData(
        graphData,
        (graphInstance) => {}
      );
    },
  },
};
</script>

<style scoped></style>
