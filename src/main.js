import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import hskui from "hsk-ui";
import "hsk-ui/hskui.css";
Vue.use(hskui);
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
Vue.use(VueVirtualScroller);
import router from "./router";
import store from "./store";
// bpmn 工作流绘图工具的样式 // 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
// 使用bpmn.js- 右侧属性栏 // 右边工具栏样式
import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
Vue.config.productionTip = false;
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.use(VXETable);
Vue.use(ElementUI);
// 导入组件库
import NgFormElement from "ng-form-element";
import "ng-form-element/lib/ng-form-element.css";
// 注册组件库
Vue.use(NgFormElement);
// Vue.components(NumberInput);
import vueZearyCtrl from "vue-zeary-ctrl";
//参数默认值{lang:'zh',messageDuration:3000}
Vue.use(vueZearyCtrl);
// 批量引入组件
import components from "./components/system";
Vue.use(components);
import input from "@/directive/limitInput";
Vue.use(input);
import draggble from "@/directive/draggable";
Vue.use(draggble);
import ToolTip from "./components/system/ToolTip.vue";

Vue.directive("showToolTip", {
  bind() {},
  inserted(el, binding) {
    const { offsetWidth, scrollWidth } = el;
    let dom;
    let innerText = el.innerText;
    if (offsetWidth < scrollWidth) {
      const Cxt = Vue.extend(ToolTip);
      let instace = new Cxt({
        propsData: {
          innerText,
          content: innerText,
        },
      });
      dom = instace.$mount(document.createElement("div")).$el;
    } else {
      dom = document.createElement("div");
      dom.innerText = innerText;
    }
    el.innerHTML = "";
    el.appendChild(dom);
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");