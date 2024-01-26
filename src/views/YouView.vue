<template>
  <div>
    <slot :num="456"></slot>
    You
    <el-form ref="form" :rules="rules" :model="info" label-width="80px">
      <el-form-item label="label">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item label="label1">
        <el-switch v-model="info.switch"></el-switch> 
      </el-form-item>
    </el-form>
    {{ msg }}
    <el-button
      type="primary"
      v-bind="$attrs"
      v-on="$listeners"
      @click="handleChange"
      >CHANGR</el-button
    >
    <recycle-scroller
      class="virtual-list"
      style="height: 400px"
      :item-size="40"
      key-field="date"
      :items="tableData"
    >
      <template v-slot="{ item }">
        <el-table :data="[item]" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </recycle-scroller>
  </div>
</template>

<script>
// import AboutView from '@/views/AboutView'
export default {
  options: "options",
  name: "YouView",
  props: {
    // info: {
    //   type: Object,
    //   default :{}
    // },
    msg: {
      type: String,
    },
  },
  data() {
    return {
      info:{
        name:''
      },
      aaa:false,
      rules:{
        name:[ { required: true, message: '请输入活动名称', trigger: 'blur' },]
      },
      youInfo: this.info,
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
  created() {
    console.log(this.$options.options);
  },
  watch: {
    info: {
      handler(newVal) {
        this.$emit("handle", newVal);
        this.info = newVal;
        this.aaa = true
      },
      deep: true,
    },
    bbb(){
      this.aaa = true
    },
    aaa(){
      console.log('wojinlaile')
    }
  },
  methods: {
    handleChange() {
      // this.msg = "changeData";
      // this.info.add = "add";
      // this.info = {};
    },
  },
  // components:{
  //   AboutView
  // }
};
</script>

<style lang="less" scoped></style>
