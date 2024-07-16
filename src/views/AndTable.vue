<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="文件" prop="fileList">
        <el-upload
          class="upload-demo"
          action=""
          :auto-upload="false"
          :on-change="handleChange"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-exceed="handleExceed"
          :file-list="form.fileList"
        >
          <el-button size="small" type="primary">上传文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleSave">保存</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        fileList: [],
      },
      rules: {
        user: { required: true, message: "请填写用户", trigger: "blur" },
        fileList: { required: true, message: "请上传文件", trigger: "change" },
      },
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      this.form.fileList = fileList;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    request() {
      console.log(11);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, "11111");
      this.form.fileList = fileList;
    },
    handleSave() {
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          console.log(111);
        }
      });
    },
  },
};
</script>
