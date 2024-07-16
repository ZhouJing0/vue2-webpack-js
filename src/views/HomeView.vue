<template>
  <div id="HelloWorld">
    <hsk-com :tel="22312312">
    </hsk-com>
    <hsk-input :negative="true"></hsk-input>
    <CELCooperateProject></CELCooperateProject>
    <el-row>
      <el-col :span="3">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          size="mini"
          label-position="right"
        >
          <el-form-item
            label="活动名称"
            prop="region"
            v-show="ruleForm.model == 'value1'"
          >
            <treeselect
              v-model="ruleForm.region"
              :options="options"
              @input="inputChange"
            />
          </el-form-item>
          <hr />
          <el-form-item label="下拉选择">
            <el-select v-model="ruleForm.model" placeholder="placeholder">
              <el-option label="label1" value="value1"></el-option>
              <el-option label="label2" value="value2"></el-option>
            </el-select>
          </el-form-item>
          <hr />
          <el-form-item style="margin-top: 50px">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button
              class="draggble-button"
              @click="resetForm('ruleForm')"
              v-draggble="option"
              >重置+拖拽</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-tree-select :treeParams="treeParams"> </el-tree-select>
    <el-upload
      :before-upload="beforeUpload"
      :on-change="handleChange"
      action=""
      multiple
      :file-list="fileList"
      :limit="3"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <!-- <p @click="handleGo">GO</p>
    <div>
      <button type="button" @click="handleClick">上传</button>
      <input
        type="file"
        ref="input"
        multiple
        style="display: none"
        name="file"
        @change="handleChange"
      />
      <ul v-for="file in fileList" :key="file.name">
        <li>{{ file.name }}</li>
      </ul>
    </div> -->
    <div style="padding: 20px">
      <div class="menuBox">
        <button @click="scrollTo(25)">目录滚动到标题25</button>
        <br />
        <button @click="getScrollTop">获取目录内滚动条向下滚动的距离</button>
        <hr />
        <p>目录</p>
        <el-scrollbar ref="scrollMenuRef" class="scrollMenuBox">
          <p v-for="i in titleTotal" :key="i">标题{{ i }}</p>
        </el-scrollbar>
      </div>
      <div class="contentBox">
        <p v-for="i in rowTotal" :key="i">第{{ i }}行</p>
      </div>
    </div>
  </div>
</template>
<!-- 加载 Jquery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<!-- 加载 Select2 -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js"></script>

<script>
import websocket from "../assets/js/websocket";

const units = {
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
};
import axios from "axios";
import dataJson from "./components/data";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      num:'',
      tableData: [],
      // 总行数
      titleTotal: 50,
      // 总行数
      rowTotal: 200,
      // define the default value
      // define options
      sizeUnit: "MB",
      fileSize: 1,
      limit: 3,
      fileList: [],
      option: {
        trigger: ".draggble-button",
        body: ".draggble-button",
      },
      treeParams: {
        clickParent: true,
        filterable: true,
        // 只想要子节点，不需要父节点
        leafOnly: true,
        includeHalfChecked: false,
        "check-strictly": false,
        "default-expand-all": true,
        "expand-on-click-node": false,
        "render-content": this._renderFun,
        data: [
          {
            id: "a",
            label: "a",
            children: [
              {
                id: "aa",
                label: "aa",
              },
              {
                id: "ab",
                label: "ab",
              },
            ],
          },
          {
            id: "b",
            label: "b",
          },
          {
            id: "c",
            label: "c",
          },
        ],

        props: {
          children: "children",
          label: "label",
          rootId: "0",
          disabled: "disabled",
          parentId: "parentId",
          value: "id",
        },
      },
      options: [
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa",
            },
            {
              id: "ab",
              label: "ab",
            },
          ],
        },
        {
          id: "b",
          label: "b",
        },
        {
          id: "c",
          label: "c",
        },
      ],
      ruleForm: {
        value: null,
        model: null,
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "input" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  created() {
    this.tableData = dataJson;
    // 初始化 这里的回调：在不发送数据时，其他链接发送了数据，通过这个回调接收数据
    this.socketServe = new websocket("ws://localhost:3001", (data) => {});
    //页面销毁时关闭长连接
    window.addEventListener("beforeunload ", () => {
      this.socketServe.websocketclose();
    });
  },
  mounted() {
    // 监听浏览器/页面滚动条的滚动
    window.addEventListener("scroll", this.scrollContent);
    // 监听el-scrollbar内滚动条的滚动
    this.$refs.scrollMenuRef.wrap.addEventListener("scroll", this.scrollMenu);
  },

  beforeDestroy() {
    //页面销毁时关闭长连接
    this.socketServe.websocketclose();
  },

  methods: {
    // el-scrollbar内滚动条滚动时，打印滚动条向下滚动的距离
    scrollMenu() {
      console.log(this.$refs.scrollMenuRef.wrap.scrollTop);
    },
    // 页面滚动时触发
    scrollContent() {
      // scrollTop为显示屏顶部与整个文档顶部间的距离
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 页面滚动条滚动时，el-scrollbar内滚动条按比例跟随一起滚动
      this.$refs.scrollMenuRef.wrap.scrollTop =
        (scrollTop / document.body.scrollHeight) *
        this.$refs.scrollMenuRef.wrap.scrollHeight;
    },
    // el-scrollbar内滚动条滚动到指定的标题号
    scrollTo(titleNo) {
      this.$refs.scrollMenuRef.wrap.scrollTop =
        ((titleNo - 1) / this.titleTotal) *
        this.$refs.scrollMenuRef.wrap.scrollHeight;
    },
    // 获取el-scrollbar内滚动条向下滚动的距离
    getScrollTop() {
      alert(this.$refs.scrollMenuRef.wrap.scrollTop);
    },
    handleGo() {
      let formData = new FormData();
      for (const file of this.fileList) {
        console.log(file);
        formData.append("file", file, file.name);
      }
      formData.append("form", JSON.stringify(this.option));
      axios.post("url", formData).then((res) => {
        console.log(res, "res");
      });
    },
    handleClick() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
    beforeUpload(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      var isXLS = new RegExp("(.xls|.xlsx)$").test(file.name.toLowerCase()); // 格式判断
      if (!isXLS) {
        const index = fileList.indexOf(file);
        fileList.splice(index, 1);
        this.$message.warning("文件类型不合规！");
        return false;
      }
      return true;
    },
    // handleChange(event) {
    //   const files = event.target.files;
    //   if (files.length > this.limit) {
    //     return this.$message.warning(
    //       `当前限制选择 ${this.limit} 个文件，本次选择了 ${
    //         files.length
    //       } 个文件，共选择了 ${this.fileList.length + files.length} 个文件`
    //     );
    //   }
    //   // this.fileList = Array.from(files);
    //   for (const file of files) {
    //     const unitNum = units[this.sizeUnit];
    //     if (!this.fileSize) return true;
    //     let isRightSize = file.size / unitNum < this.fileSize;
    //     if (!isRightSize) {
    //       console.log(file);
    //       this.$message.error(
    //         `${file.name} 文件大小超过 ${this.fileSize}${this.sizeUnit}`
    //       );
    //       return false;
    //     } else {
    //       this.fileList.push(file);
    //     }
    //   }

    //   // let isAccept = new RegExp(this.accept).test(file.type);
    //   // if (!isAccept) {
    //   //   this.$message.error(`应该选择${this.accept}类型的文件`);
    //   // }
    //   // var isXLS = new RegExp("(.xls|.xlsx)$").test(file.name.toLowerCase()); // 格式判断
    // },

    //inputChange
    inputChange() {
      this.$refs["ruleForm"].validateField("region");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log("782e6324");
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="less">
input[type="number" i] {
  // display: none;
}
/*目录悬浮*/
.menuBox {
  position: fixed;
}

/*内容居中*/
.contentBox {
  width: 60%;
  margin: auto;
}

/*el-scrollbar 必须指定高度*/
.scrollMenuBox {
  height: 200px;
  width: 100px;
  border: 1px solid red;
}

/*隐藏水平滚动条*/
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
.vue-treeselect {
  height: 28px;
}
.vue-treeselect .vue-treeselect__control {
  height: 28px !important;
}
.vue-treeselect__placeholder {
  line-height: 28px;
  font-size: 14px;
}
.vue-treeselect input {
  font-size: 16px;
}
</style>
