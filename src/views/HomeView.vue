<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-form ref="form" inline :model="form" label-width="80px" class="search">
      <div>
        <el-form-item label="企业名称">
          <el-input
            v-model="form.projectName"
            placeholder="企业名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="form.date"
            type="year"
            value-format="YYYY"
            placeholder="日期"
          ></el-date-picker>
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
    <el-table :data="tableData" border style="width: 47%;margin-left:3px">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" width="width" align="center"> </el-table-column>
      <el-table-column label="操作" width="85" align="center"> 
        <template >
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
  methods:{
    handleDetail(){
      this.$router.push({
        path:'/detail'
      })
    },
  }
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