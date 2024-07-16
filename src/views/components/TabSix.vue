<template>
  <div>
    <el-switch
      v-model="model"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <vxe-table
      :tooltip-config="{ zIndex: 9999 }"
      border
      show-footer
      :footer-method="footerData"
      height="500"
      ref="xTable"
      :tree-config="{
        transform: true,
        rowField: 'id',
        parentField: 'parentId',
        iconOpen: 'el-icon-arrow-down',
        iconClose: 'el-icon-arrow-right',
      }"
      :scroll-y="{ enabled: true, gt: 60 }"
      :data="tableData"
    >
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="index" title="编号" width="100" tree-node></vxe-column>
      <vxe-column field="projectName" title="项目名称" width="200">
        <template #default="{ row }">
          <div class="project-name-link">
            <div class="name" @click="showItemInfoDirlog(row)">
              <el-tooltip
                effect="dark"
                :content="row.projectName"
                placement="top"
              >
                <span>{{ row.projectName }}</span>
              </el-tooltip>
            </div>
            <el-tooltip
              class="item"
              effect="light"
              :content="
                `${
                  row.specialSuperviseDesc
                    ? row.specialSuperviseDesc + '；'
                    : ''
                }${
                  row.newIndustryDesc ? row.newIndustryDesc + '；' : ''
                }`.slice(0, -1)
              "
              placement="top-start"
            >
              <span>
                <el-tag
                  class="item-tag"
                  v-if="row.specialSuperviseDesc"
                  type="warning"
                >
                  特
                </el-tag>
                <el-tag
                  class="item-tag"
                  v-if="row.newIndustryDesc"
                  type="warning"
                  >战</el-tag
                >
              </span>
            </el-tooltip>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="district" title="项目地点" align="center" width="200">
        <template #default="{ row }">
          <el-tooltip effect="dark" :content="row.district" placement="top">
            <span>{{ row.district }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <vxe-column field="detail" title="项目内容及前期进展" width="200">
        <template #default="{ row }">
          <Popinput
            v-if="row.index != '小计' && model"
            v-model="row.detail"
            maxlength="500"
          ></Popinput>
          <el-tooltip
            v-else
            effect="dark"
            :content="row.detail"
            placement="top"
          >
            <span>{{ row.detail }}</span>
          </el-tooltip>
          <!-- <span>{{ row.detail }}</span> -->
        </template>
      </vxe-column>
      <vxe-column
        field="countermeasures"
        title="预期实现效果、主要风险及应对举措"
        width="200"
      >
        <template #default="{ row }">
          <Popinput
            v-if="row.index != '小计' && model"
            v-model="row.countermeasures"
            maxlength="500"
          ></Popinput>
          <el-tooltip
            v-else
            effect="dark"
            :content="row.countermeasures"
            placement="top"
          >
            <span>{{ row.countermeasures }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <vxe-column field="proClassification" title="项目分类" width="200"
        ><template #default="{ row }">
          <el-tooltip
            effect="dark"
            :content="row.proClassification"
            placement="top"
          >
            <span>{{ row.proClassification }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <vxe-column field="indus" title="所属行业" width="300">
        <template #default="{ row }">
          <el-tooltip effect="dark" :content="row.indus" placement="top">
            <span>{{ row.indus }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <vxe-column field="newIndustryName" title="所属战新产业" width="200"
        ><template #default="{ row }">
          <el-tooltip
            effect="dark"
            :content="row.newIndustryName"
            placement="top"
          >
            <span>{{ row.newIndustryName }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <vxe-column
        field="planInvestSum"
        title="计划总投资"
        width="200"
      ></vxe-column>
      <vxe-column
        field="thisPlanInvest"
        title="本年计划投资"
        width="200"
      ></vxe-column>
      <vxe-column field="startTime" title="起始时间" width="200"></vxe-column>
      <vxe-column
        field="planFinishTime"
        title="预计完成时间"
        width="200"
      ></vxe-column>
      <vxe-column
        field="percentType"
        title="预计投资收益率（%）"
        width="200"
      ></vxe-column>
      <vxe-column field="imRmk" title="备注" width="200">
        <template #default="{ row }">
          <Popinput
            v-if="row.index != '小计' && model"
            v-model="row.imRmk"
            maxlength="500"
          ></Popinput>
          <el-tooltip v-else effect="dark" :content="row.imRmk" placement="top">
            <span>{{ row.imRmk }}</span>
          </el-tooltip>
        </template>
      </vxe-column>
      <!-- <vxe-column field="attr6" title="Attr6" width="200"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="200"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="200"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="200"></vxe-column>
      <vxe-column field="attr10" title="Attr10" width="200"></vxe-column>
      <vxe-column field="age" title="Age" width="200"></vxe-column> -->
    </vxe-table>
  </div>
</template>

<script>
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import dataJson from "./data";
export default {
  components: {},
  props: {},
  data() {
    return {
      model: false,
      tableData: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.tableData = dataJson;
  },
  mounted() {
    this.$refs.xTable.setAllTreeExpand(true);
  },
  methods: {
    sumNum(list, field) {
      let count = 0;
      list.forEach((item) => {
        count += Number(item[field]);
      });
      return count;
    },
    footerData({ columns, data }) {
      console.log(
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "合计";
          }
          if (["planInvestSum"].includes(column.field)) {
            return this.sumNum(data, column.field);
          }
          return null;
        })
      );
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "合计";
          }
          if (["planInvestSum"].includes(column.field)) {
            return this.sumNum(data, column.field);
          }
          return null;
        }),
      ];
    },
  },
};
</script>
<style scoped lang="less">
/deep/
  .vxe-table--render-default
  .vxe-body--column.col--ellipsis:not(.col--actived)
  > .vxe-cell {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  max-height: none;
}
/deep/ .vxe-table--main-wrapper {
  display: flex;
  flex-direction: column;
  .vxe-table--header-wrapper {
    order: 0;
  }
  .vxe-table--body-wrapper {
    order: 2;
  }
  .vxe-table--footer-wrapper {
    overflow-x: clip;
    order: 1;
  }
}
</style>
