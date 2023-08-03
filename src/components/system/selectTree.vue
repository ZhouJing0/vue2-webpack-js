<template>
  <div>
    <el-select
      v-model="mineStatus"
      ref="searchSelect"
      :placeholder="placeholder"
      :multiple="!Single"
      :size="size"
      :disabled="disabled"
      collapse-tags
      @change="selectChange"
      :loading="loading"
    >
      <div style="padding: 10px">
        <el-input
          v-if="filterable"
          placeholder="请输入搜索内容"
          v-model="singleSearch"
          :size="size"
          clearable
        ></el-input>
      </div>
      <el-option
        :value="mineStatusValue"
        v-on:click="doThis($event)"
        style="position: relative; width: 100%"
        :style="{ height: height + 'px', 'overflow-y': overflow }"
      >
        <div style="height: 100%" v-on:click="doThis($event)">
          <div style="padding-right: 10px" v-on:click="doThis($event)">
            <el-tree
              v-if="treeData.length"
              :data="treeData"
              :show-checkbox="!Single"
              ref="tree"
              style="font-weight: 500"
              highlight-current
              :props="defaultProps"
              :default-expand-all="defaultExpandAll"
              :default-checked-keys="defaultCheckedKeys"
              :check-strictly="Single"
              :filter-node-method="filterNode"
              node-key="id"
              @check-change="handleCheckChange"
              @node-click="clickNode"
            >
            </el-tree>
          </div>
          <div
            v-if="!treeData.length"
            style="
              width: 100%;
              height: 100%;
              background-color: #ffffff;
              text-align: center;
            "
          >
            暂无数据
          </div>
        </div>
        <div
          id="load"
          v-show="load"
          style="
            position: absolute;
            left: 0;
            top: 0;
            height: 200px;
            width: 100%;
          "
        ></div>
      </el-option>
    </el-select>
  </div>
</template>

<!-- /**
 * 组件说明
 * 属性:
 * 参数                     说明                       类型                    默认值
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * placeholder              输入框占位文本                String                '请选择'
 * defaultProps             需要使用的展示字段值          Object                {children: 'children',label: 'label'}
 * data                     tree 的数据源                 Array                 []
 * filterable               是否开启搜索功能              Boolean                false
 * Single                   tree下拉是否单选              Boolean                false
 * defaultExpandAll         tree是否展开全部节点          Boolean                 false
 * defaultCheckedKeys          默认勾选节点               Array                   []
 * disabled                   是否禁止操作                Boolean                Array
 * size                    el-option大小尺寸选择          String                 medium
 *
 * 事件:
 * selectTerrEvent  获取选中对象 返回数组
 */ -->
<script>
const deepFind = (arr, condition, children) => {
  let main = [];
  try {
    (function poll(arr, level) {
      if (!Array.isArray(arr)) return;
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        main[level] = item;
        const isFind = (condition && condition(item, i, level)) || false;
        if (isFind) {
          throw Error;
        } else if (children && item[children] && item[children].length) {
          poll(item[children], level + 1);
        } else if (i === arr.length - 1) {
          main.length = main.length - 1;
        }
      }
    })(arr, 0);
  } catch (err) {}
  return main;
};
export default {
  model: {
    value: "",
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "请选择",
    },
    defaultProps: {
      // 需要使用的展示字段值
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
      }),
    },
    filterable: {
      type: Boolean, // 是否开启搜索
      default: false,
    },
    Single: {
      type: Boolean, // 是否单选
      default: false,
    },
    data: {
      type: Array, // 数据
      default: () => [],
    },
    defaultExpandAll: {
      type: Boolean, // 是否展开节点
      default: false,
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      overflow: "hidden",
      height: 40,
      load: false,
      mineStatus: "",
      mineStatusValue: [],
      loading: false,
      deferTimer: null, // 多选复选框高频查找的数据使用到的延时器变量
      loadingTips: null,
      SearchData: [], // 搜索的数据
      treeData: [], // 渲染树的变量
      callbackDefault: null, //  更新数据 高频回调事件使用到的 延时器变量
      // timeID: null, // 搜索防抖
      singleSearch: "", // 单选搜索
      firstTime: false, // 初次加载 状态
    };
  },
  watch: {
    singleSearch(newValue, oldValue) {
      this.$refs.tree.filter(newValue);
    },
    // 更新数据/清空输入框
    data(n) {
      if (this.firstTime) {
        if (Array.isArray(n)) {
          if (n.length) {
            this.height = 200;
            this.overflow = "auto";
          } else {
            this.height = 40;
            this.overflow = "hidden";
          }
          this.mineStatus = "";
          this.mineStatusValue = [];
          this.treeData = n;
          this.defaultCheckEvent(true);
        } else {
          console.error("data 属性必须是一个Array");
        }
      }
    },
    // 更新勾选数据
    defaultCheckedKeys(newValue, oldValue) {
      if (this.firstTime) {
        clearTimeout(this.callbackDefault);
        this.callbackDefault = setTimeout(() => {
          this.defaultCheckEvent(true);
        }, 300);
      }
    },
  },
  created() {
    let that = this;
    let dataType = true;
    // 等待 接口树 数据获取完成
    function dataTerr() {
      if (!that.treeData.length && dataType) {
        that.mineStatus = "获取数据中...";
        setTimeout(() => {
          that.treeData = that.data;
          dataTerr();
        }, 400);
      } else if (that.treeData.length) {
        dataType = false;
        that.height = 200;
        that.overflow = "auto";
        that.mineStatus = "";
        // 是否开启默认勾选
        if (that.defaultCheckedKeys.length) {
          that.defaultCheckEvent();
        }
        // 初次加载 完成
        that.firstTime = true;
      }
    }
    dataTerr();
    // 2.5s后不管有没要获取到数据 都停止
    setTimeout(() => {
      dataType = false;
      that.firstTime = true;
    }, 2500);
  },
  methods: {
    // 过滤数据 返回搜索结果
    filterNode(value, data) {
      if (!value) return true;
      return data[this.defaultProps.label].indexOf(value) !== -1;
    },
    // 阻止事件冒泡 解决点击空白区域事件获取错误的数据bug
    doThis(event) {
      this.$refs.searchSelect.blur();
      event.stopPropagation();
    },
    // select框值改变时候触发的事件
    selectChange(e) {
      if (this.Single || !this.treeData.length) {
        return false;
      }
      let arrNew = [];
      let dataLength = this.mineStatusValue.length;
      let eleng = e.length;
      for (let i = 0; i < dataLength; i++) {
        for (let j = 0; j < eleng; j++) {
          if (e[j] === this.mineStatusValue[i][this.defaultProps.label]) {
            arrNew.push(this.mineStatusValue[i]);
            break;
          }
        }
      }
      this.$refs.tree.setCheckedNodes(arrNew); // 设置勾选的值
    },
    // 默认勾选
    defaultCheckEvent(lock) {
      // 避免 多个监听数据更新时同时并发多次
      if (lock) {
        this.firstTime = false;
      }
      // 筛选出数据存放
      let defaultData = [];
      // 根据树id 递归树 筛选出对应的数据
      if (this.Single) {
        // 单选
        let myarr = deepFind(
          this.treeData,
          (item, index, level) => item.id === this.defaultCheckedKeys[0],
          this.defaultProps.children
        );
        myarr.forEach((v, l) => {
          if (v.id === this.defaultCheckedKeys[0]) {
            defaultData.push(v);
          }
        });
      } else {
        // 多选
        this.defaultCheckedKeys.forEach((id, k) => {
          let myarr = deepFind(
            this.treeData,
            (item, index, level) => item.id === id,
            this.defaultProps.children
          );
          myarr.forEach((v, l) => {
            if (v.id === id) {
              defaultData.push(v);
            }
          });
        });
      }

      // 更新输入框内的默认勾选值
      let arrLabel = [];
      let arr = [];
      defaultData.forEach((item) => {
        arrLabel.push(item[this.defaultProps.label]);
        arr.push(item);
      });
      this.mineStatusValue = arr;
      if (this.Single) {
        this.mineStatus = arrLabel[0];
      } else {
        this.mineStatus = arrLabel;
      }
      // 解除 状态
      if (lock) {
        this.firstTime = true;
      }
      this.$emit("selectTerrEvent", defaultData);
      if (!this.mineStatus.length) {
        this.$refs.tree && this.$refs.tree.setCheckedNodes([]);
      }
    },

    // 搜索 监听
    search() {
      this.loading = true;
      let val = this.$refs.searchSelect.$data.query;
      this.SearchData = [];
      this.treeData = this.data;
      setTimeout(() => {
        this.loading = false;
        this.$refs.tree.filter(val);
      }, 500);
    },
    // 单选点击 复选框事件 @check="handleCheck"
    handleCheck(data) {
      if (!this.Single) {
        return;
      }
      this.$refs.tree.setCheckedKeys([]); // 删除所有选中节点
      this.$refs.tree.setCheckedNodes([data]); // 选中已选中节点
    },
    // 单选模式事件
    clickNode(data, node, obj) {
      if (!this.Single) {
        // 多选不执行
        const index = this.mineStatusValue.findIndex((d) => d.id === data.id);
        if (index > -1) {
          this.$refs.tree.setChecked(data, false);
        } else {
          this.$refs.tree.setChecked(data, true);
        }
        return;
      }

      let arrLabel = [];
      let arr = [];
      [data].forEach((item) => {
        arrLabel.push(item[this.defaultProps.label]);
        arr.push(item);
      });

      this.mineStatusValue = arr;
      this.mineStatus = arrLabel[0];
      this.$refs.searchSelect.blur(); // 失去焦点 关闭下拉框
      // 传递数据给父
      this.$emit("selectTerrEvent", [data]);
    },
    // 获取当前复选框 选中的值 赋值到输入框里
    handleCheckChange() {
      if (this.deferTimer == null) {
        this.load = true;
        this.loadingTips = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(255, 255, 255, 0.5)",
          target: document.getElementById("load"),
        });
      }
      let res = this.$refs.tree.getCheckedNodes(true, true); // 这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）

      let arrLabel = [];
      let arr = [];
      res.forEach((item) => {
        arrLabel.push(item[this.defaultProps.label]);
        arr.push(item);
      });

      clearTimeout(this.deferTimer);
      this.deferTimer = setTimeout(() => {
        this.mineStatusValue = arr;
        this.mineStatus = arrLabel;
        this.load = false;
        this.loadingTips.close();
        this.deferTimer = null;
        this.$emit("selectTerrEvent", res);
      }, 200);
    },
  },
};
</script>
<style scoped>
.el-tooltip.item {
  width: max-content;
  display: inline-block;
  border: none;
  outline: none;
}

.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #ffffff;
}

.el-select-dropdown__item {
  padding: 0;
}

.treedownwidth {
  width: 13px !important;
}

.show {
  display: block;
}

.comtreedown {
  height: 100%;
}

.comtreedown .treedown {
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  position: relative;
}

.comtreedown .treedown .title {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  text-indent: 14px;
  border-bottom: 1px solid #fff;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  cursor: pointer;
}

.comtreedown .treedown .left {
  position: absolute;
  z-index: 8;
  top: 50%;
  right: 0px;
  width: 13px;
  height: 72px;
  margin-top: -36px;
  cursor: pointer;
}

.comtreedown .treedown .left img {
  display: none;
}

/* 修改默认样式 */
.el-tree-node__expand-icon {
  color: #ffffff;
}

.comtreedown .el-tree {
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #ffffff;
  overflow: auto;
  border-bottom-left-radius: 10px;
}

.el-tree-node__content {
  width: max-content;
  min-width: 100%;
  color: #fff;
}

.el-tree-node,
.el-tree-node__children {
  min-width: 100%;
  width: max-content;
}

.el-tree-node__label {
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}

.el-tree-node__children .el-tree-node__label {
  width: auto;
  overflow: hidden;
  -webkit-overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}

span.el-icon-caret-right:before {
  content: "";
}

span.el-icon-caret-right:after {
  content: "\E60E";
}
</style>
