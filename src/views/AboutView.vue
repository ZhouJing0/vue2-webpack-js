<template>
  <div class="about">
    <button @click="save">oooo</button>

    <h1>This is an about page</h1>
    <div class="wrap">
      <!-- <input
        type="number"
        data-id="1"
        @input.native="handleInput(event)"
        v-model="drctMainProjectSumIn"
      /> -->
    </div>
    <div style="width: 50px">
      <zj-tooltip :content="'2312312312'"> This is an about page </zj-tooltip>
    </div>
    <number-input
      @sendValue="getData"
      :default="true"
      :changeNum="true"
      :isDecimal="true"
      :money="true"
      :negative="true"
      v-model="num"
      :decimalCount="9"
      lang="zh-CN"
      :moneyOption="{ style: 'currency', currency: 'CNY' }"
    >
    </number-input>
    <number-input  :decimalCount="6">

    </number-input>
    <!-- <ef-inputnumber @getValue="handleInput" v-model="num1"></ef-inputnumber> -->
    <button @click="num = 23">赋值</button>
    <component :is="'router-link'" v-bind="{ to: '/you' }">
      <slot></slot>
    </component>
    <el-cascader
      v-model="value"
      :props="props"
      :options="options"
    ></el-cascader>
    <el-button type="primary" @click="handleDel">DETAIL</el-button>
    <public-form ref="form" :columns="tabs" :model="model"> </public-form>
    <button @click="viewPdf">预览PDDF</button>
    <div style="width: 200px">
      <div v-showToolTip>
        oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
      </div>
    </div>
    <VueJson></VueJson>
  </div>
</template>
<script>
// import MyView from '@/views/MyView'
import { myMinxin } from "@/utils/mixins";
import VueJson from "@/components/system/Editor/VueJson";
let id = 0;
export default {
  name: "AboutView",
  mixins: [myMinxin],
  components: { VueJson },
  data() {
    return {
      aa: {
        model1: "",
      },
      cityList: [],
      info: "",
      value: [],
      num: null,
      num1: null,
      nodes: [],
      model: {
        394: "2",
      },
      tabs: [
        {
          isedit: "1",
          type: "input",
          colWidth: 8,
          labelWidth: "40%",
          rules: [
            {
              max: 100,
              trigger: "change",
              message: "项目名称最多可输入100字",
              required: true,
            },
          ],
          label: "项目名称",
          url: null,
          isShow: "1",
          dicts: [],
          props: {
            maxlength: 100,
            title: "对该投资项目的简称",
          },
          labelValue: "境内股权对外并购",
          event: {},
          name: "128",
        },
        {
          isedit: "0",
          type: "input",
          colWidth: 8,
          labelWidth: "40%",
          rules: [],
          label: "是否已提交",
          url: null,
          isShow: "0",
          dicts: [],
          props: {},
          labelValue: 2,
          association: { controlKey: "394", showValue: "1" },
          event: {},
          name: "72",
        },
        {
          isedit: "1",
          type: "select",
          colWidth: 8,
          labelWidth: "40%",
          rules: [
            {
              trigger: "change",
              message: "请选择投资方向",
              required: true,
            },
          ],
          label: "投资类别",
          url: null,
          isShow: "1",
          options: [
            {
              enCode: "2",
              fullName: "内部投资",
            },
            {
              enCode: "1",
              fullName: "对外投资",
            },
          ],

          props: {
            filterable: true,
            label: "fullName",
            value: "enCode",
          },
          labelValue: 1,
          event: {},
          name: "394",
        },
      ],

      // props: {
      //   lazy: true,
      //   lazyLoad(node, resolve) {
      //     const { level } = node;
      //     setTimeout(() => {
      //       this.nodes = Array.from({ length: level + 1 }).map((item) => ({
      //         value: ++id,
      //         label: `选项${id}`,
      //         leaf: level >= 2,
      //       }));
      //       // 通过调用resolve将子节点数据返回，通知组件数据加载完成
      //       resolve(this.nodes);
      //     }, 1000);
      //   },
      // },
      props: {
        emitPath: false,
        checkStrictly: true,
      },
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                // {
                //   value: "yizhi",
                //   label: "一致",
                // },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
    };
  },
  created() {
    console.log("created vue");
    setTimeout(() => {
      this.value = ["zhinan", "shejiyuanze", "yizhi"];
      this.cityList = [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ];
      // this.num = 22;
    }, 1000);
  },
  mounted() {
    setTimeout(() => {
      this.aa.model1 = "New York";
    }, 1222);
  },
  methods: {
    handleInput(event) {
      // 获取当前输入值
      let inputText = event.target.value;

      // 移除非数字和小数点的字符
      inputText = inputText.replace(/[^0-9.]/g, "");

      // 限制小数部分只能有两位
      const parts = inputText.split(".");
      if (parts[1] && parts[1].length > 2) {
        inputText = parts[0] + "." + parts[1].slice(0, 2);
      }

      // 更新输入框的值
      event.target.value = inputText;
    },
    async save() {
      this.$refs.form.validate();
      let a = await this.vis();
      console.log(a, "000");
      console.log(a === false);
      // this.vis().then((result) => {
      //   console.log(result, "000");
      //   if (result === false) {
      //     return false;
      //   }
      //   return true;
      // });
    },
    async vis() {
      let a = await this.pro();
      console.log(a, "111");
      return this.pro();
      // return this.pro().then((result) => {
      //   console.log(result, 111);
      //   return !result ? false : true;
      // });
    },
    pro() {
      return new Promise((res, rej) => {
        res(false);
      });
    },
    increase(event) {
      let inputText = event.target.value;

      // 保留数字和小数点，去除其他非法字符
      inputText = inputText.replace(/[^0-9.]/g, "");

      // 确保小数点只出现一次
      const decimalCount = inputText.split(".").length - 1;
      if (decimalCount > 1) {
        inputText = inputText.slice(0, -1);
      }

      // 限制小数部分只能有两位
      const parts = inputText.split(".");
      if (parts[1] && parts[1].length > 2) {
        inputText = parts[0] + "." + parts[1].slice(0, 2);
      }

      // 更新输入框的值
      event.target.value = inputText;
    },
    viewPdf() {
      window.open(
        "http://192.168.1.202:30000/api/file/preview/11512894b317439ca8c90f613dbc1cfe/aa.pdf"
      );
    },
    getData(e) {
      // console.log(e, "获取data");
    },
    handleInput(e) {
      console.log(e, "111111");
      // this.num1 = e.target.value;
      // this.num = parseFloat(this.$refs.num.inputValue || 0);
      // console.log(parseFloat(this.$refs.num.inputValue || 0), "123123");
    },
    handleDel() {
      this.options.shift();
      // this.options.forEach(item=>{
      //   if(item.children && item.children.length){
      //     item.children.forEach(el=>{
      //       if(){

      //       }
      //     })
      //   }
      // })
    },
    oninput(e) {
      // 通过正则过滤小数点后两位
      e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null;
      // e.target.value = Math.round(e.target.value * 100) / 100
    },
  },
  // components:{
  //   MyView
  // }
};
</script>
<style lang="less"></style>
