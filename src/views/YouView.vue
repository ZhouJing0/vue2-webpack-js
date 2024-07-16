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
    <el-button type="primary" v-bind="$attrs" v-on="$listeners"
      >CHANGR</el-button
    >
    <el-table :data="tableData">
      <el-table-column
        header-align="center"
        show-overflow-tooltip
        align="center"
        prop="a"
        label="labela"
      >
        <template v-slot="scope">
          <el-input v-model="scope.row.a"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <vxe-table
      border
      resizable
      show-overflow
      show-header-overflow
      row-key
      ref="xTable"
      height="600"
      :row-config="{ isCurrent: true, isHover: true }"
      :export-config="{}"
      :tree-config="{ transform: true }"
      :loading="loading"
      :checkbox-config="{ checkField: 'checked' }"
      :scroll-y="{ enabled: true }"
    >
      <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>
      <vxe-column type="seq" width="100" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" sortable width="200"></vxe-column>
      <vxe-column field="sex" title="Sex" width="200"></vxe-column>
      <vxe-column field="rate" title="Rate" width="200"></vxe-column>
      <vxe-column field="region" title="Region" width="200"></vxe-column>
      <vxe-column field="time" title="Time" width="200"></vxe-column>
      <vxe-column field="address" title="Address" width="300"></vxe-column>
      <vxe-column
        field="updateTime"
        title="UpdateTime"
        width="200"
      ></vxe-column>
      <vxe-column
        field="createTime"
        title="CreateTime"
        width="200"
      ></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="200"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="200"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="200"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="200"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="200"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="200"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="attr10" title="Attr10" width="200"></vxe-column>
      <vxe-column
        field="age"
        title="Age"
        width="200"
        fixed="right"
      ></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
// import AboutView from '@/views/AboutView'

import VirtualScroll from "./el-table-virtual-scroll";
export default {
  options: "options",
  name: "YouView",
  components: {
    VirtualScroll,
  },
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
      info: {
        name: "",
      },
      loading: false,
      tableData: [],
      isDetail: false,
      isAudit: false,
      checkType: false,
      aaa: false,
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      },
      youInfo: this.info,
      virtualList: [],
    };
  },
  mounted() {
    this.$refs.xTable.setAllTreeExpand(true);
    this.loadList(1000);
  },
  methods: {
    loadList(size) {
      this.loading = true;
      this.mockList(size).then((data) => {
        // 使用函数式加载，阻断 vue 对大数据的监听
        const xTable = this.$refs.xTable;
        // console.log(data, "0000");
        this.tableData = data;
        const startTime = Date.now();
        if (xTable) {
          this.$refs.xTable.reloadData(data).then(() => {
            this.loading = false;
          });
        }
      });
    },
    mockList(size) {
      return new Promise((resolve) => {
        const list = [
          // {
          //   name: `父名称`,
          //   id: 999999999,
          //   parentId: null,
          //   checked: false,
          //   sex: "0",
          //   num: 123,
          //   age: 18,
          //   num2: 234,
          //   rate: 3,
          //   address: "shenzhen",
          // },
        ];
        for (let index = 0; index < size; index++) {
          list.push({
            name: `名称${index}`,
            id: index,
            // parentId: 999999999,
            checked: false,
            sex: "0",
            num: 123,
            age: 18,
            num2: 234,
            rate: 3,
            address: "shenzhen",
          });
        }
        resolve(list);
      });
    },
    getSelectEvent() {
      let selectRecords = this.$refs.xTable.getCheckboxRecords();
      VXETable.modal.alert(selectRecords.length);
    },
  },
};
</script>

<style lang="less" scoped></style>
