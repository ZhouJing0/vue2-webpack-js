<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-form ref="form" inline :model="form" label-width="80px" class="search">
      <div>
        <el-form-item label="企业名称">
          <el-input
            v-input.float="{ int: 5, float: 2 }"
            v-model="form.projectName"
            placeholder="企业名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <!-- <el-date-picker
            v-model="form.date"
            value-format="yyyy"
            type="year"
            placeholder="选择年"
          >
          </el-date-picker> -->
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.stg" placeholder="状态">
            <el-option label="未上报" value="未上报"></el-option>
            <el-option label="已上报" value="已上报"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item class="form-btn">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table :data="tableData" border style="width: 47%; margin-left: 3px">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" width="width" align="center">
      </el-table-column>
      <el-table-column label="操作" width="85" align="center">
        <template>
          <el-button type="text" size="mini" @click="handleDetail">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",
  data() {
    return {
      form: {
        projectName: "",
        date: "",
        stg: "",
      },
      tableData: [
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
    };
  },
  // components: {
  //   HelloWorld
  // }
  methods: {
    handleDetail() {
      this.$router.push({
        path: "/detail",
      });
    },
    checkInput() {
      this.form.projectName = this.dealInputVal(this.form.projectName);
    },
    dealInputVal(value) {
      var d = new Array(Number(n)).fill(`\\d`).join("");
      value = value.replace(/^0*(0\.|[1-9])/, "$1");
      value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
      value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是字符
      value = value.replace(/\.{1,}/g, "."); //只保留第一个.清除多余的
      value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      value = value.replace(/^(\-)*(\d*)\.(${d}).*$/, "$1$2.$3"); //只能输入两个小数
      value =
        value.indexOf(".") > 0
          ? value.split(".")[0].substring(0, 10) + "." + value.split(".")[1]
          : value.substring(0, 10);
      return value;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  .search {
    display: flex;
    justify-content: space-between;
  }
}
</style>
