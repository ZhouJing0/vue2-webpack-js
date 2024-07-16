<template>
  <div>
    <el-button type="primary" @click="handleOpen">CHART</el-button>
    <el-dialog title="" :visible.sync="dialogVisible" width="width">
      <div
        style="
          margin-top: 10px;
          border-bottom: #efefef solid 1px;
          padding-left: 20px;
        "
      >
        调整图谱大小到：
        <el-radio-group
          v-model="currentSize"
          size="mini"
          @change="onSizeOptionChanged"
        >
          <el-radio-button :label="400">400</el-radio-button>
          <el-radio-button :label="600">600</el-radio-button>
          <el-radio-button :label="800">800</el-radio-button>
          <el-radio-button :label="1000">1000</el-radio-button>
        </el-radio-group>
      </div>
      <div
        v-loading="g_loading"
        :style="{
          width: myGraphPanelSize.width + 'px',
          height: myGraphPanelSize.height + 'px',
        }"
        style="border: #ff0000 solid 1px"
      >
        <RelationGraph ref="graphRef" :options="graphOptions"> </RelationGraph>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 如果您没有在main.js文件中使用Vue.use(RelationGraph); 就需要使用下面这一行代码来引入relation-graph
import RelationGraph from "relation-graph";

export default {
  name: "RelationGraphDemo",
  components: { RelationGraph },
  data() {
    return {
      dialogVisible: false,
      g_loading: true,
      demoname: "---",
      currentSize: 400,
      myGraphPanelSize: { width: 400, height: 400 },
      graphOptions: {
        debug: false,
        layouts: [
          {
            label: "中心",
            layoutName: "tree",
            layoutClassName: "seeks-layout-center",
            defaultJunctionPoint: "border",
            defaultNodeShape: 0,
            defaultLineShape: 1,
            from: "left",
            // 通过这4个属性来调整 tree-层级距离&节点距离
            min_per_width: "200",
            max_per_width: "500",
            min_per_height: "40",
            max_per_height: "60",
            levelDistance: "", // 如果此选项有值，则优先级高于上面那4个选项
          },
        ],
        defaultLineMarker: {
          markerWidth: 12,
          markerHeight: 12,
          refX: 6,
          refY: 6,
          data: "M2,2 L10,6 L2,10 L6,6 L2,2",
        },
        // moveToCenterWhenRefresh: true,
        // useAnimationWhenRefresh: true,
        // zoomToFitWhenRefresh: true,
        defaultExpandHolderPosition: "right",
        defaultNodeShape: 1,
        defaultNodeWidth: 100,
        defaultLineShape: 4,
        defaultJunctionPoint: "lr",
        defaultNodeBorderWidth: 0,
        defaultLineColor: "rgba(0, 186, 189, 1)",
        defaultNodeColor: "rgba(0, 206, 209, 1)",
      },
    };
  },
  created() {},
  mounted() {
    this.demoname = this.$route.params.demoname;
  },
  methods: {
    handleOpen() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.setGraphData();
      });
    },
    setGraphData() {
      // 使用要点：通过节点属性expandHolderPosition: 'right' 和 expanded: false 可以让节点在没有子节点的情况下展示一个"展开"按钮
      //         通过onNodeExpand事件监听节点，在被展开的时候有选择的去从后台获取数据，如果已经从后台加载过数据，则让当前图谱根据当前的节点重新布局
      const __graph_json_data = {
        nodes: [
          {
            id: "-1",
            text: "中国信息通信科技集团有限公司",
          },
          {
            id: "adf897e3754a4ccba83f5d5d135199a3",
            text: "一级子公司（一部）",
          },
          {
            id: "377067ab87cc4660bfb6e124e307c94c",
            text: "二级子公司（分公司）",
          },
          {
            id: "93c63bf584314da7adcc644d251466fb",
            text: "二级子公司",
          },
        ],
        rootId: "-1",
        links: [
          {
            from: "adf897e3754a4ccba83f5d5d135199a3",
            to: "-1",
            text: "1.88",
          },
          {
            from: "377067ab87cc4660bfb6e124e307c94c",
            to: "adf897e3754a4ccba83f5d5d135199a3",
            text: "9.66",
          },
          {
            from: "93c63bf584314da7adcc644d251466fb",
            to: "adf897e3754a4ccba83f5d5d135199a3",
            text: "6.77",
          },
        ],
      };
      console.log(JSON.stringify(__graph_json_data));
      this.g_loading = false;
      this.$refs.graphRef.setJsonData(__graph_json_data, (graphInstance) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      });
    },
    onSizeOptionChanged() {
      // 图谱的大小会随着父元素的宽高自动适应，所以修改父元素的宽高就可以设置图谱的宽高
      this.myGraphPanelSize.width = this.currentSize;
      this.myGraphPanelSize.height = this.currentSize;
      // 你也可以在调整完大小后刷新一下图谱，确保位置是合理的
      this.$nextTick(() => {
        // $nextTick的功能你懂的
        this.$refs.graphRef.onGraphResize();
        this.$refs.graphRef.refresh();
      });
    },
  },
};
</script>

<style scoped></style>
