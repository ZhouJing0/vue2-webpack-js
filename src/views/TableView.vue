<template>
  <div style="text-align: center">
    <el-table
      :summary-method="getSummaries"
      show-summary
      row-key="cCode"
      :data="list"
      v-horizontal-scroll
      style="width: 100%"
    >
      <el-table-column prop="cName" label="类别名称" width="width">
      </el-table-column>
      <el-table-column
        prop="prop"
        align="center"
        label="固定资产投资完成额"
        width="width"
      >
        <el-table-column
          header-align="center"
          align="center"
          prop="im"
          label="境内"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.children"> {{ scope.row.im }}</span>
            <span v-else
              ><el-input v-model="scope.row.im" placeholder=""></el-input
            ></span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="out"
          label="境外"
        >
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="prop"
        align="center"
        label="股权资产投资完成额"
        width="width"
      >
        <el-table-column
          header-align="center"
          align="center"
          prop="im"
          label="境内"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.children"> {{ scope.row.im }}</span>
            <span v-else
              ><el-input v-model="scope.row.im" placeholder=""></el-input
            ></span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="out"
          label="境外"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="备注" width="width">
        <template slot-scope="scope">
          <el-input
            type="textarea"
            v-model="scope.row.remack"
            placeholder=""
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <public-table
      :tools="tools"
      :data="data"
      :isPagination="false"
      :columns="columns"
      :options="options"
    ></public-table>
  </div>
</template>

<script>
export default {
  name: "TableView",
  data() {
    return {
      list: [
        {
          clevel: "1",
          cCode: "1",
          pName: "新一代信息技术产业",
          children: [
            {
              clevel: "2",
              cCode: "1.1",
              pName: "新一代信息技术产业",
              cName: "新一代移动通信",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.2",
              pName: "新一代信息技术产业",
              cName: "集成电路（含设计、制造、封测、装备、材料）",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.3",
              pName: "新一代信息技术产业",
              cName: "工业软件和技术服务",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.4",
              pName: "新一代信息技术产业",
              cName: "人工智能",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.5",
              pName: "新一代信息技术产业",
              cName: "工业互联网",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.6",
              pName: "新一代信息技术产业",
              cName: "云计算与大数据",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.7",
              pName: "新一代信息技术产业",
              cName: "新型电子器件、材料和设备制造（不含集成电路）",
              pid: "1",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "1.8",
              pName: "新一代信息技术产业",
              cName: "其他",
              pid: "1",
              im: 0,
              out: 0,
            },
          ],
          cName: "新一代信息技术产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "2",
          pName: "高端装备制造产业",
          children: [
            {
              clevel: "2",
              cCode: "2.1",
              pName: "高端装备制造产业",
              cName: "工业母机",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.2",
              pName: "高端装备制造产业",
              cName: "智能制造装备",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.3",
              pName: "高端装备制造产业",
              cName: "航空装备",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.4",
              pName: "高端装备制造产业",
              cName: "卫星及应用",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.5",
              pName: "高端装备制造产业",
              cName: "轨道交通装备",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.6",
              pName: "高端装备制造产业",
              cName: "海洋工程装备",
              pid: "2",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "2.7",
              pName: "高端装备制造产业",
              cName: "其他",
              pid: "2",
              im: 0,
              out: 0,
            },
          ],
          cName: "高端装备制造产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "3",
          pName: "新材料产业",
          children: [
            {
              clevel: "2",
              cCode: "3.1",
              pName: "新材料产业",
              cName: "先进钢铁材料",
              pid: "3",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "3.2",
              pName: "新材料产业",
              cName: "先进有色金属材料",
              pid: "3",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "3.3",
              pName: "新材料产业",
              cName: "先进化工新材料",
              pid: "3",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "3.4",
              pName: "新材料产业",
              cName: "先进无机非金属材料",
              pid: "3",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "3.5",
              pName: "新材料产业",
              cName: "高性能纤维及其复合材料",
              pid: "3",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "3.6",
              pName: "新材料产业",
              cName: "其他",
              pid: "3",
              im: 0,
              out: 0,
            },
          ],
          cName: "新材料产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "4",
          pName: "生物产业",
          children: [
            {
              clevel: "2",
              cCode: "4.1",
              pName: "生物产业",
              cName: "生物种业",
              pid: "4",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "4.2",
              pName: "生物产业",
              cName: "生物医药",
              pid: "4",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "4.3",
              pName: "生物产业",
              cName: "生物制造",
              pid: "4",
              im: 0,
              out: 0,
            },
            {
              clevel: "2",
              cCode: "4.4",
              pName: "生物产业",
              cName: "其他",
              pid: "4",
              im: 0,
              out: 0,
            },
          ],
          cName: "生物产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "7",
          pName: "节能环保产业",
          cName: "节能环保产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "8",
          pName: "数字创意产业",
          cName: "数字创意产业",
          pid: null,
        },
        {
          clevel: "1",
          cCode: "9",
          pName: "相关服务业",
          cName: "相关服务业",
          pid: null,
        },
      ],
      options: {
        border: true,
      },
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      columns: [
        { label: "姓名", prop: "name", align: "center" },
        { label: "日期", prop: "date", align: "center" },
        { label: "地址", prop: "address", align: "center" },
      ],
      tools: [
        {
          label: "新增",
          icon: "el-icon-plus",
          method: () => {
            console.log(1);
          },
        },
      ],
    };
  },
  filters: {
    getTotal() {},
  },
  methods: {
    getSum(tree, idx, sums, index) {
      if (tree && tree.length > 0) {
        tree.map((item) => {
          this.getSum(item.children, idx, sums, index);
          if (item.children) {
            this.$set(
              item,
              idx,
              item.children.reduce((pre, cur) => Number(cur[idx]) + pre, 0)
            );
          }
          if (item[idx] && !item.children) {
            sums[index] = (Number(sums[index]) + Number(item[idx])).toFixed(2);
          }
        });
      }
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        // 初始化合计行
        if (column.property) {
          sums[index] = 0;
        }
        // 递归求和
        this.getSum(data, column.property, sums, index);
        // 如果求和得到的结果是非数字,则显示--
        if (isNaN(sums[index])) {
          sums[index] = "--";
        }
      });
      return sums;
    },
  },
};
</script>

<style lang="less" scoped>
table {
  table-layout: fixed;
  border-collapse: collapse;
  td {
    display: table-cell;
    height: 36px;
    border: 1px solid #e1e2e3;
  }
}
</style>
