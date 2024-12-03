<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
import BpmnModeler from "bpmn-js/lib/Viewer";
import { xmlStr } from "@/mock/xmlStr";

export default {
  name: "ops-coffee",
  mounted() {
    this.init();
  },
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null,
      detailInfo: {},
    };
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
      });

      this.createNewDiagram();
    },
    createNewDiagram() {
      try {
        const result = this.bpmnModeler.importXML(xmlStr);
        this.buildEvent();
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    },
    buildEvent() {
      const eventBus = this.bpmnModeler.get("eventBus");
      const canvas = this.bpmnModeler.get("canvas");
      const overlays = this.bpmnModeler.get("overlays");
      // 注册节点事件，eventTypes中可以写多个事件
      const eventTypes = ["element.click", "element.hover", "element.out"];
      eventTypes.forEach((eventType) => {
        eventBus.on(eventType, (e) => {
          const { element } = e;
          if (!element.parent) return;
          if (!e || element.type === "bpmn:Process") {
            return false;
          } else {
            if (eventType === "element.click") {
              // 节点点击后想要做的处理
              // 此时想要点击节点后，拿到节点实例，通过外部输入更新节点名称
              // this.currentElement = element;
              console.log(element);
              var elementRegistry = this.bpmnModeler.get("elementRegistry");
              var shape = elementRegistry.get(e.element.id); // 传递id进去
              console.log(shape); // {Shape}
              this.genNodeDetailBox({}, e, overlays);

              // console.log(e.element); // {Shape}
              // console.log(JSON.stringify(shape) === JSON.stringify(e.element)); // true
            } else if (eventType === "element.hover") {
              if (e.element.type === "bpmn:UserTask") {
                this.genNodeDetailBox({}, e, overlays);
              }
              // 鼠标滑过节点后想要做的处理
              // console.log(element);
              canvas.addMarker(element, "yangshi");
            } else if (eventType === "element.out") {
              this.showToolTip = false;
              overlays.clear();
            }
          }
        });
      });

      // this.bpmnModeler.on("commandStack.changed", () => {
      //   this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
      //     console.log(xml);
      //   });
      // });
      // this.bpmnModeler.on("element.click", (e) => {
      //   console.log(e);
      // });
      // this.bpmnModeler.on("element.hover", (e) => {
      //   console.log(e);
      // });
    },
    genNodeDetailBox(detail, e, overlays) {
      this.showToolTip = true;
      const tempDiv = document.createElement("div");
      this.detailInfo = detail;
      setTimeout(() => {
        this.tooltipComponent = {
          template: `
                    <h1 class="popover-title">${
                      this.detailInfo.name || "-"
                    }</h1>
                    <p>
                      审批人员：<span class="approvePersonCss">${
                        this.detailInfo.approver || "666"
                      }</span>
                    </p>
                    <p>节点类型：${this.detailInfo.nodeType || "-"}</p>
                    <p>节点状态：${this.detailInfo.status || "-"}</p>
                    <p>开始时间：${this.detailInfo.startDate || "-"}</p>
                    <p>结束时间：${this.detailInfo.endDate || "-"}</p>
                    <p>审批耗时：${this.detailInfo.duration || "-"}</p>
                `,
        };
        tempDiv.innerHTML = this.tooltipComponent.template;
        // tempDiv.innerHTML= popoverEl.innerHTML;
        tempDiv.className = "tipBox";
        tempDiv.style.width = "270px";
        tempDiv.style.background = "rgba(255, 255, 255, .6)";
        overlays.add(e.element.id, {
          position: { top: e.element.height, left: 0 },
          html: tempDiv,
        });
      });
    },
  },
};
</script>
<style lang="less">
.yangshi {
  .djs-hit-all {
    cursor: pointer !important;
  }
}
</style>
<style scoped>
.containers {
  width: 100%;
  height: calc(100vh - 82px);
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>
