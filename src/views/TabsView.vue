<template>
  <div class="tab-container">
    <!-- <el-tabs v-model="tab41451ActiveTab" type="border-card" @tab-click="handleTabChange"> -->
    <el-button type="primary" :loading="loading" @click="handleSave"
      >保存</el-button
    >
    <el-tabs v-model="activeName" @tab-click="handleTabChange">
      <el-tab-pane :name="tab.name" v-for="tab in tabList" :key="tab.id">
        <span slot="label">
          <i
            :class="tab.icon"
            style="width: 60px; height: 60px; font-size: 60px"
          ></i>
          <p>{{ tab.title }}</p>
        </span>
        <component
          ref="form"
          v-model="loading"
          :is="tab.component"
          :formData="formData"
        ></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabEight from "@/views/components/TabEight";
import TabEleven from "@/views/components/TabEleven";
import TabFive from "@/views/components/TabFive";
import TabFour from "@/views/components/TabFour";
import TabNine from "@/views/components/TabNine";
import TabOne from "@/views/components/TabOne";
import TabSeven from "@/views/components/TabSeven";
import TabSix from "@/views/components/TabSix";
import TabTen from "@/views/components/TabTen";
import TabThree from "@/views/components/TabThree";
import TabTwo from "@/views/components/TabTwo";
export default {
  components: {
    // tabEight:() => import('./components/TabEight.vue'),
    TabEight,
    TabEleven,
    TabFive,
    TabFour,
    TabNine,
    TabOne,
    TabSeven,
    TabSix,
    TabTen,
    TabThree,
    TabTwo,
  },
  props: ["tabList"],
  data() {
    return {
      tabName: "",
      loading: false,
      formData: {
        id: "567ad56asfd56s67f7sdf67",
        oneData: [],
        twoData: [],
      },
      rules: {},
      activeName: "tab-two",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSave() {
      console.log(this.$refs);
      this.loading = true;
      if (this.activeName == "tab-two") {
        this.$refs.form[1].save();
      } else if (this.activeName == "tab-one") {
        this.$refs.form[0].save();
      }
    },
    //tab切换
    handleTabChange(tab, e) {
      console.log(tab.name, e);
      this.tabName = tab.name;
    },
    submitForm() {
      this.$refs["vForm"].validate((valid) => {
        if (!valid) return;
        //TODO: 提交表单
      });
    },
    resetForm() {
      this.$refs["vForm"].resetFields();
    },
  },
};
</script>

<style lang="less">
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
</style>

<style lang="less" scoped>
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {
}

.label-left-align ::v-deep .el-form-item__label {
  text-align: left;
}

.label-center-align ::v-deep .el-form-item__label {
  text-align: center;
}

.label-right-align ::v-deep .el-form-item__label {
  text-align: right;
}

.custom-label {
}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  ::v-deep .el-divider--horizontal {
    margin: 0;
  }
}
::v-deep .el-tabs__item {
  width: 110px !important;
  white-space: pre-wrap;
  height: 160px;
  vertical-align: top;
  line-height: normal;
}
</style>
