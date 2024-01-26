// 事例

/* <el-button
    class="draggble-button"
    v-draggble="option"
    >拖拽</el-button
  >
  option: {
    trigger: ".draggble-button",
    body: ".draggble-button",
  }, */
import { on } from "@/utils/index";
const draggble = {};
draggble.install = (Vue) => {
  Vue.directive("draggble", {
    inserted: (el, binding, vnode) => {
      let triggerDom = document.querySelector(binding.value.trigger);
      triggerDom.style.cursor = "move";
      let bodyDom = document.querySelector(binding.value.body);
      let pageX = 0;
      let pageY = 0;
      let transformX = 0;
      let transformY = 0;
      let canMove = false;
      const handleMousedown = (e) => {
        let transform = /\(.*\)/.exec(bodyDom.style.transform);
        if (transform) {
          transform = transform[0].slice(1, transform[0].length - 1);
          let splitxy = transform.split("px, ");
          transformX = parseFloat(splitxy[0]);
          transformY = parseFloat(splitxy[1].split("px")[0]);
        }
        pageX = e.pageX;
        pageY = e.pageY;
        canMove = true;
      };
      const handleMousemove = (e) => {
        let xOffset = e.pageX - pageX + transformX;
        let yOffset = e.pageY - pageY + transformY;
        if (canMove)
          bodyDom.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      };
      const handleMouseup = (e) => {
        canMove = false;
      };
      on(triggerDom, "mousedown", handleMousedown);
      on(document, "mousemove", handleMousemove);
      on(document, "mouseup", handleMouseup);
    },
    update: (el, binding, vnode) => {
      if (!binding.value.recover) return;
      let bodyDom = document.querySelector(binding.value.body);
      bodyDom.style.transform = "";
    },
  });
};
export default draggble;
