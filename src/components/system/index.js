// eslint-disable-next-line prettier/prettier
import Editor from "@/components/system/Editor/quill";
import Transfer from "./transfer.vue";
import EfInputNumber from "./input-number";
import NumberInput from "./NumberInput.vue";
import publicTable from "./publicTable.vue";

export default {
  install(Vue, options) {
    Vue.component("Editor", Editor);
    Vue.component("Transfer", Transfer);
    Vue.component("EfInputNumber", EfInputNumber);
    Vue.component("NumberInput", NumberInput);
    Vue.component("publicTable", publicTable);
  },
};
