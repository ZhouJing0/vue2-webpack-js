import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// bpmn 工作流绘图工具的样式 // 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css"  
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"
// 使用bpmn.js- 右侧属性栏 // 右边工具栏样式
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' 
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
