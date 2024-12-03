
export default {
  props: {
    conf: {
      type: Object,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    formData: {
      type: Object,
      default: () => {},
    },
  },
  render(h) {
    return h(
      "el-cascader",
      {
        props: {
          options: this.options,
          props: { multiple: true },
          filterable: true,
        },
        on:{
          change(value) {
          }
        }
      },
      []
    );
  },
};
