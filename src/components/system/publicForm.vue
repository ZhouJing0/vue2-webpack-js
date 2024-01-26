<template>
  <div class="formWrap">
    <el-form
      ref="form"
      class="dialogForm"
      :model="model"
      :rules="rules"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :label-suffix="labelSuffix"
      :inline="inline"
      :inline-message="inlineMessage"
      :status-icon="statusIcon"
      :show-message="showMessage"
      :size="size"
      :disabled="disabled"
      :validate-on-rule-change="validateOnRuleChange"
      :hide-required-asterisk="hideRequiredAsterisk"
    >
      <div style="display: flex; flex-wrap: wrap">
        <template v-for="item in columns">
          <div
            v-show="
              item.association
                ? model[item.association.controlKey] ==
                  item.association.showValue
                : true
            "
            :key="item.name"
            :class="[
              'col-24',
              `col-md-${item.rowSpan ? item.rowSpan : 12}`,
              `col-lg-${item.rowSpan ? item.rowSpan : colNum}`,
            ]"
          >
            <el-form-item
              v-if="!(item.type && item.type.includes('textTitle'))"
              class="dialogItem"
              :style="{ width: `100%` }"
              :label="item.label ? item.label + ':' : ''"
              :prop="item.name"
              :rules="item.rules ? item.rules : []"
            >
              <template v-if="$slots[item.name]">
                <slot :name="item.name" />
              </template>

              <template v-else>
                <el-input
                  v-if="
                    !item.type || item.type === 'text' || item.type === 'input'
                  "
                  v-model="model[item.name]"
                  :size="size"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请输入' + item.label
                  "
                  :disabled="item.disabled"
                  clearable
                  @change="input"
                  v-on="item.event"
                />
                <el-input
                  v-if="item.type === 'textarea'"
                  v-model="model[item.name]"
                  :size="size"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 6 }"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请输入' + item.label
                  "
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-switch
                  v-if="item.type === 'switch'"
                  v-model="model[item.name]"
                  :size="size"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="
                    item.props && item.props.activeValue
                      ? item.props.activeValue
                      : true
                  "
                  :inactive-value="
                    item.props && item.props.inactiveValue
                      ? item.props.inactiveValue
                      : false
                  "
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-time-picker
                  v-if="item.type === 'time'"
                  v-model="model[item.name]"
                  :size="size"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择' + item.label
                  "
                  value-format="HH:mm:ss"
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-date-picker
                  v-if="item.type === 'date'"
                  v-model="model[item.name]"
                  style="width: 100%"
                  type="date"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择' + item.label
                  "
                  value-format="yyyy-MM-dd"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-date-picker
                  v-if="item.type === 'datetime'"
                  v-model="model[item.name]"
                  type="datetime"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择' + item.label
                  "
                  value-format="yyyy-MM-dd HH:mm:ss"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-date-picker
                  v-if="item.type === 'dateToDate'"
                  v-model="model[item.name]"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-date-picker
                  v-if="item.type === 'datetimeToDatetime'"
                  v-model="model[item.name]"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                />
                <el-input
                  v-if="item.type === 'number'"
                  v-model="model[item.name]"
                  type="number"
                  :size="size"
                  :disabled="item.disabled"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请输入' + item.label
                  "
                  v-on="item.event"
                />
                <el-select
                  v-if="
                    item.type === 'select' || item.type === 'selectmultiple'
                  "
                  v-model="model[item.name]"
                  style="width: 100%"
                  :size="size"
                  clearable
                  filterable
                  :multiple="item.type === 'selectmultiple'"
                  :placeholder="
                    item.placeholder ? item.placeholder : '请选择' + item.label
                  "
                  :disabled="item.disabled"
                  @change="selectChange"
                  v-on="item.event"
                >
                  <el-option
                    v-for="data in item.options"
                    :key="
                      data[
                        item.props && item.props.key ? item.props.key : 'value'
                      ]
                    "
                    :label="
                      data[
                        item.props && item.props.label
                          ? item.props.label
                          : 'label'
                      ]
                    "
                    :value="
                      data[
                        item.props && item.props.value
                          ? item.props.value
                          : 'value'
                      ]
                    "
                  />
                </el-select>
                <el-cascader
                  v-if="item.type === 'cascader'"
                  v-model="model[item.name]"
                  style="width: 100%"
                  :size="size"
                  :disabled="item.disabled"
                  :options="item.options"
                  :props="item.props"
                  clearable
                  v-on="item.event"
                />
                <el-radio-group
                  v-if="item.type === 'radio'"
                  v-model="model[item.name]"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                >
                  <el-radio
                    v-for="data in item.options"
                    :key="
                      data[
                        item.props && item.props.key ? item.props.key : 'value'
                      ]
                    "
                    :label="
                      data[
                        item.props && item.props.label
                          ? item.props.label
                          : 'value'
                      ]
                    "
                    >{{
                      data[
                        item.props && item.props.label
                          ? item.props.label
                          : "label"
                      ]
                    }}</el-radio
                  >
                </el-radio-group>
                <el-checkbox-group
                  v-if="item.type === 'checkbox'"
                  v-model="model[item.name]"
                  :size="size"
                  :disabled="item.disabled"
                  v-on="item.event"
                >
                  <el-checkbox
                    v-for="data in item.options"
                    :key="
                      data[
                        item.props && item.props.key ? item.props.key : 'value'
                      ]
                    "
                    :label="
                      data[
                        item.props && item.props.label
                          ? item.props.label
                          : 'label'
                      ]
                    "
                    >{{
                      data[
                        item.props && item.props.label
                          ? item.props.label
                          : "label"
                      ]
                    }}</el-checkbox
                  >
                </el-checkbox-group>
                <template v-if="item.type === 'units'">
                  <units-form-input
                    v-if="item.realKey"
                    :id.sync="model[item.realKey]"
                    :key-name="item.name"
                    :key-label="item.label"
                    :disabled="item.disabled"
                    @change="unitsChange"
                  />
                  <units-form-input
                    v-else
                    :id.sync="model[item.name]"
                    :key-label="item.label"
                    :disabled="item.disabled"
                  />
                </template>
                <el-upload
                  v-if="item.type === 'image'"
                  action="#"
                  :show-file-list="false"
                  :on-change="handleChange"
                  :disabled="item.disabled"
                  accept="image/*"
                  :multiple="false"
                  :auto-upload="false"
                  v-on="item.event"
                >
                  <img
                    v-if="model[item.name]"
                    :src="model[item.name]"
                    alt=""
                    style="
                      width: 178px;
                      height: 178px;
                      border-radius: 6px;
                      position: relative;
                      border: 1px solid #ddd;
                    "
                    @click="setFileKey(item.name)"
                  />
                  <div
                    v-else
                    style="
                      width: 178px;
                      height: 178px;
                      border-radius: 6px;
                      position: relative;
                      border: 1px solid #ddd;
                    "
                    @click="setFileKey(item.name)"
                  >
                    <i
                      style="
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 36px;
                      "
                      class="el-icon-plus avatar-uploader-icon"
                    />
                  </div>
                </el-upload>
                <div v-if="item.type === 'block'" />
              </template>
            </el-form-item>
            <template v-else>
              <div class="clearfix">
                <span>{{ item.label }}</span>
              </div>
              <slot :name="item.name" />
            </template>
          </div>
        </template>
      </div>
      <slot />
      <!-- <slot name="table" /> -->
    </el-form>
  </div>
</template>

<script>
// import UnitsFormInput from '@/components/UnitsFormInput'
export default {
  name: "YlForm",
  // components: { UnitsFormInput },
  props: {
    // 表单
    model: {
      type: Object,
      default() {
        return {};
      },
    },
    // 表单配置
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    server: {
      type: Object,
      default() {
        return {};
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
    colNum: {
      type: Number,
      default: 8,
    },
    labelPosition: {
      type: String,
      default: "right",
    },
    labelWidth: {
      type: String,
      default: "120px",
    },
    labelSuffix: {
      type: String,
      default: "",
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "mini",
    },
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileKey: "",
    };
  },
  watch: {
    model: {
      handler(newVal, oldVal) {
        this.$emit("handler", newVal, oldVal);
        this.model = newVal;
      },
      deep: true,
    },
  },
  mounted() {
    // 动态添加验证
    // this.addRules(this.columns)
    // 初始化完成清除一下表单验证规则
    this.$nextTick(() => {
      this.clearValidate();
    });
  },
  methods: {
    /**
     * @description: 动态添加表单验证
     * @author: chenbz
     * @date: 2021/4/27
     */
    // addRules(columns) {
    //   this.rules = []
    //   for (let i = 0; i < columns.length; i += 1) {
    //     // 判断是否需要添加验证
    //     if (columns[i].required) {
    //       // 判断用户是否已经自定义验证了
    //       if (!this.rules[columns[i].name]) {
    //         // 动态生成验证方法
    //         const data = [
    //           {
    //             required: true,
    //             message: '',
    //             trigger: ''
    //           }
    //         ]
    //         // 动态添加验证方式：失去焦点触发/确认时触发
    //         if (
    //           columns[i].type === ('input' || 'text') ||
    //           !columns[i].type ||
    //           columns[i].type === 'textarea'
    //         ) {
    //           data[0].message = `请输入${columns[i].label}`
    //           data[0].trigger = 'blur'
    //         } else {
    //           data[0].message = `请选择${columns[i].label}`
    //           data[0].trigger = 'change'
    //         }
    //         // 触发vue更新
    //         this.$set(this.rules, columns[i].name, data)
    //       }
    //     } else if (columns[i].rules) {
    //       if (!this.rules[columns[i].name]) {
    //         this.$set(this.rules, columns[i].name, columns[i].rules)
    //       }
    //     }
    //   }
    // },
    /**
     * @description: 表单验证
     * @author: chenbz
     * @date: 2021/5/10
     */
    validate(callback) {
      this.$refs.form.validate((valid) => {
        callback(valid);
      });
    },
    input(v) {
      console.log(this.model);
    },
    /**
     * @description: 清除表单验证
     * @author: chenbz
     * @date: 2021/5/18
     */
    clearValidate(name) {
      this.$refs.form.clearValidate(name);
    },
    setFileKey(name) {
      console.log(name);
      this.fileKey = name;
    },
    handleChange(file) {
      const windowURL = window.url || window.webkitURL;
      const dataimgurl = windowURL.createObjectURL(file.raw);
      console.log(dataimgurl);
      this.model[this.fileKey] = dataimgurl;
      this.$set(this.model, `${this.fileKey}File`, file.raw);
    },
    selectChange(a, b, c) {
      console.log(a, b, c);
    },
    unitsChange({ keyValue, key }) {
      this.model[key] = keyValue;
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
}
.dialogForm {
  width: 100%;
  .dialogItem {
    padding: 0 20px;
    // margin-bottom: 10px;
  }
}
.formWrap {
  overflow-x: hidden;
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
}
// @for $index from 1 through 24 {
//   .col-#{$index} {
//     width: #{$index * 100/24}+ '%';
//   }
// }
// @media only screen and (max-width: 767px) {
//   @for $index from 1 through 24 {
//     .col-xs-#{$index} {
//       width: #{$index * 100/24}+ '%';
//     }
//   }
// }
// @media only screen and (min-width: 1200px) {
//   @for $index from 1 through 24 {
//     .col-lg-#{$index} {
//       width: #{$index * 100/24}+ '%';
//     }
//   }
// }
// @media (max-width: 1199px) and (min-width: 992px) {
//   @for $index from 1 through 24 {
//     .col-md-#{$index} {
//       width: #{$index * 100/24}+ '%';
//     }
//   }
// }
.clearfix {
  margin: 0 0px 10px;
  line-height: 40px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 900;
  border-bottom: 1px solid #ebeef5;
  border-top: 10px solid #f3f4f8;
}
.clearfix span {
  color: #606266;
  font-weight: bold;
  font-size: 16px;
}
</style>
