<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "TabOne",
  props: {
    dataForm: {
      type: Object,
    },
    loading: Boolean,
  },
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    save() {
      console.log(this.loading, 1);
      setTimeout(() => {
        this.$emit("input", false);
        // this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped></style>
