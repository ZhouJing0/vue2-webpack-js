<template>
  <div>
    <button @click="handleClick">点击</button>
    <el-form ref="form" :model="formData" :rules="formRules">
      <!-- 表单项 -->
      <el-form-item label="表单项" prop="inputField">
        <el-input v-model="formData.inputField"></el-input>
      </el-form-item>

      <!-- el-upload 组件 -->
      <el-form-item>
        <el-upload
          ref="upload"
          action="/your-upload-api"
          @click.native.prevent="handleUploadClick"
          :before-upload="handleBeforeUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <!-- 其他表单项 -->
      <!-- ... -->
    </el-form>
  </div>
</template>

<script>
import getRoute from "./index.js";
export default {
  data() {
    return {
      formData: {
        inputField: "",
        // 其他表单数据
      },
      formRules: {
        inputField: [
          { required: true, message: "请输入内容", trigger: "blur" },
          // 其他表单规则
        ],
      },
    };
  },
  methods: {
    handleClick() {
      getRoute();
    },
    handleUploadClick(file) {
      // 检查表单项是否填写
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 如果表单验证通过，则允许上传
          this.$nextTick(() => {
            this.$refs.upload.$refs.input.click();
          });
          return true;
        } else {
          // 如果表单验证失败，则阻止上传
          return false;
        }
      });
    },
  },
};
</script>
