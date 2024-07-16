<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :span-method="objectSpanMethod"
  >
    <el-table-column
      label="序号"
      width="100"
      type="index"
      :render-header="renderHeader"
    ></el-table-column>
    <el-table-column
      prop="enterpriseName"
      label="企业名称"
      width="200"
    ></el-table-column>
    <el-table-column prop="code" label="编码" width="200"></el-table-column>
    <el-table-column
      prop="project"
      label="项目名称"
      width="200"
    ></el-table-column>
    <el-table-column label="操作" width="150" :render-header="renderHeader">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // 这里应该是你的处理过的树形数据
        // 每个对象应该有一个属性来表示它是企业还是项目
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目一",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目二",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目三",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目四",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目五",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目六",
        },
        {
          enterpriseName: "总局",
          code: "1",
          project: "项目七",
        },
      ],
      rowSpanArr: [],
    };
  },
  created() {
    this.handleTableData(this.tableData);
  },
  methods: {
    handleTableData(tableData) {
      let rowSpanArr = [],
        position = 0;
      for (let [index, item] of tableData.entries()) {
        console.log(item, index);
        if (index == 0) {
          rowSpanArr.push(1);
          position = 0;
        } else {
          if (item.enterpriseName == tableData[index - 1].enterpriseName) {
            rowSpanArr[position] += 1; //项目名称相同，合并到同一个数组中
            rowSpanArr.push(0);
          } else {
            rowSpanArr.push(1);
            position = index;
          }
        }
      }
      this.rowSpanArr = rowSpanArr;
    },

    // // 单元格的处理方法 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
    // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (columnIndex === 1 || columnIndex === 2) {
    //     const rowSpan = this.rowSpanArr[rowIndex];
    //     return {
    //       rowspan: rowSpan, //行
    //       colspan: 1, //列
    //     };
    //   }
    // },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        // 假设你的数据有一个 isEnterprise 字段来标识是否是企业数据
        console.log(this.getSpanCount(rowIndex), "**");
        return {
          rowspan: this.getSpanCount(rowIndex),
          colspan: 1,
        };
      }
    },
    getSpanCount(index) {
      let count = 1;
      let isEnterprise = this.tableData[index].isEnterprise;
      while (
        index + count < this.tableData.length &&
        this.tableData[index + count].enterpriseName ===
          this.tableData[index].enterpriseName
      ) {
        count++;
      }
      return count;
    },
    renderHeader(h, { column, columnIndex }) {
      if (columnIndex === 0) {
        return h("div", column.label);
      }
    },
    handleEdit(index, row) {
      // 编辑逻辑
    },
    handleDelete(index, row) {
      // 删除逻辑
    },
  },
};
</script>
