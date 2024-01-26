<template>
  <div>
    <button @click="prePage" :disabled="pageNum == 1">上一页</button>
    <button @click="nextPage" :disabled="pageTotalNum == pageNum">
      下一页
    </button>
    <div style="margintop: 10px; color: #409eff">
      {{ pageNum }} / {{ pageTotalNum }}
    </div>
    <div>
      <div v-for="(page, index) in thumbnailPages" :key="index">
        <img :src="page" alt="Thumbnail" @click="goToPage(index + 1)" />
      </div>
    </div>
    <pdf
      ref="pdf"
      :page="pageNum"
      :src="url"
      @loaded="pdfLoaded"
      @progress="loadedRatio = $event"
      @num-pages="pageTotalNum = $event"
    ></pdf>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      // url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      url: "/static/pdf/qwerty.pdf",
      pageNum: 1,
      pageTotalNum: 1, //总页数
      loadedRatio: 0, //当前页面的加载进度，范围是0-1 ，等于1的时候代表当前页已经完全加载完成了
      thumbnailPages: [],
    };
  },
  created() {
    console.log(this.$route);
  },
  mounted() {},
  methods: {
    // 上一页
    prePage() {
      let page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },

    // 下一页
    nextPage() {
      let page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    pdfLoaded() {
      // 获取 PDF.js 实例
      const pdfInstance = this.$refs.pdf.pdf;
      console.log(pdfInstance, "0000");
      // 获取页面总数
      const numPages = this.pageTotalNum;
      console.log(numPages);
      // 生成缩略图
      const thumbnailPromises = Array.from({ length: numPages }, (_, index) => {
        return pdfInstance.getPage(index + 1).then((page) => {
          const canvas = document.createElement("canvas");
          const viewport = page.getViewport({ scale: 0.5 });
          const canvasContext = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext,
            viewport,
          };

          return page.render(renderContext).then(() => {
            return canvas.toDataURL("image/png");
          });
        });
      });
      console.log(thumbnailPromises, "2222");
      Promise.all(thumbnailPromises).then((thumbnails) => {
        this.thumbnailPages = thumbnails;
        this.pdfLoaded = true;
      });
    },

    goToPage(pageNumber) {
      const pdfInstance = this.$refs.pdf.pdf;
      pdfInstance.getPage(pageNumber).then((page) => {
        // 处理点击缩略图后的逻辑，例如滚动到相应页面
      });
    },
  },
};
</script>
