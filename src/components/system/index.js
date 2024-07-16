// eslint-disable-next-line prettier/prettier
import Editor from "@/components/system/Editor/quill";
import Transfer from "./transfer.vue";
import NumberInput from "./NumberInput.vue";
import publicTable from "./publicTable.vue";
import publicForm from "./publicForm.vue";
import ElTreeSelect from "./treeSelect";
import publicUpload from "./publicUpload.vue";
import Popinput from "./Popinput.vue";
import ZjTooltip from "./ZjTooltip.vue";

export default {
  install(Vue, options) {
    Vue.component("Editor", Editor);
    Vue.component("Transfer", Transfer);
    Vue.component("NumberInput", NumberInput);
    Vue.component("publicTable", publicTable);
    Vue.component("publicForm", publicForm);
    Vue.component("ElTreeSelect", ElTreeSelect);
    Vue.component("publicUpload", publicUpload);
    Vue.component("Popinput", Popinput);
    Vue.component("ZjTooltip", ZjTooltip);
  },
};
