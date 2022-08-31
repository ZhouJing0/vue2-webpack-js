
<template>
  <el-form
    :model="formData"
    ref="vForm"
    :rules="rules"
    label-position="left"
    label-width="0px"
    size="medium"
    @submit.native.prevent
  >
    <div class="table-container">
      <table class="table-layout">
        <tbody>
          <tr style="background:#0049d4">
            <td class="table-cell flex" colspan="10">
              <span class="left">编制单位：测试企业一</span>
              <span>年度：2022</span>
              <span class="right">金额单位：万元</span>
            </td>
          </tr>
          <tr style="background:#d9ecff">
            <td class="table-cell" rowspan="2"></td>
            <td class="table-cell" rowspan="2">计划投资总额</td>
            <td class="table-cell" colspan="2">按投资方向划分</td>
            <td class="table-cell" colspan="2">按项目阶段划分</td>
            <td class="table-cell" colspan="3">按资金来源划分</td>
            <td class="table-cell" rowspan="2">备注</td>
          </tr>
          <tr style="background:#d9ecff">
            <td class="table-cell">主业</td>
            <td class="table-cell">非主业</td>
            <td class="table-cell">新开工</td>
            <td class="table-cell">续建</td>
            <td class="table-cell">自有资金</td>
            <td class="table-cell">贷款</td>
            <td class="table-cell">其他</td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">一、固定资产投资</td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea86505"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea86505"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">（一）境内</td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input74270"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input74270"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input109019"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input109019"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input91952"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input91952"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input38365"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input38365"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input59565"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input59565"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input35791"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input35791"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input54598"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input54598"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea15042"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea15042"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">（二）境外</td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item label="" label-width="0" prop="input46755">
                <el-input
                  v-model="formData.input46755"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input86435"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input86435"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input75130"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input75130"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input107189"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input107189"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input96426"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input96426"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input90038"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input90038"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input43958"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input43958"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea40095"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea40095"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">二、股权投资</td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea56460"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea56460"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">（一）境内</td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input41874"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input41874"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input61874"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input61874"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input40630"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input40630"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input102812"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input102812"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input26292"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input26292"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input82993"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input82993"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input18112"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input18112"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea105673"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea105673"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">（二）境外</td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input23589"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input23589"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input49202"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input49202"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input42364"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input42364"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input54311"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input54311"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input54872"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input54872"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input49832"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input49832"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="input86933"
                class="label-center-align"
              >
                <el-input
                  v-model="formData.input86933"
                  type="text"
                  clearable
                ></el-input>
              </el-form-item>
            </td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea88236"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea88236"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr class="stripe">
            <td class="table-cell">三、合计</td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell"></td>
            <td class="table-cell">
              <el-form-item
                label=""
                label-width="0"
                prop="textarea90321"
                class="label-center-align"
              >
                <el-input
                  type="textarea"
                  v-model="formData.textarea90321"
                  size="medium"
                  rows="2"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      formData: {
        textarea86505: "",
        input74270: "",
        input109019: "",
        input91952: "",
        input38365: "",
        input59565: "",
        input35791: "",
        input54598: "",
        textarea15042: "",
        input46755: "",
        input86435: "",
        input75130: "",
        input107189: "",
        input96426: "",
        input90038: "",
        input43958: "",
        textarea40095: "",
        textarea56460: "",
        input41874: "",
        input61874: "",
        input40630: "",
        input102812: "",
        input26292: "",
        input82993: "",
        input18112: "",
        textarea105673: "",
        input23589: "",
        input49202: "",
        input42364: "",
        input54311: "",
        input54872: "",
        input49832: "",
        input86933: "",
        textarea88236: "",
        textarea90321: "",
      },
      rules: {
        input74270: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input109019: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input91952: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input38365: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input59565: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input35791: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input54598: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input46755: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input86435: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input75130: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input107189: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input96426: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input90038: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input43958: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input41874: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input61874: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input40630: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input102812: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input26292: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input82993: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input18112: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input23589: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input49202: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input42364: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input54311: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input54872: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input49832: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
        input86933: [
          {
            pattern: /^\d+(\.\d+)?$/,
            trigger: ["blur", "change"],
            message: "",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
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
table .el-form-item{
  margin-bottom: 0;
}
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
    width: 98%;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #a1bedb;
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
.el-tabs__content{
  border-radius: 5px;
}
table tr.stripe:nth-child(odd){
  background: #d9ecff;
}
table td{
  padding: 8px;
  &.flex{
    color: #fff;
    height: 30px !important;
    padding: 10px;
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
}
</style>