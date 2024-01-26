<template>
  <div>
    <el-row :gutter="10">
      <el-form ref="form" size="small" :model="formData" label-width="100px">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="item in formConfig" :key="item.key">
          <el-form-item :label="item.label+'：'">
            <el-input v-model="formData[item.key]"></el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'Mobile',
    data() {
      return {
        formData:{},
        formConfig: [
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
          {
            label: '投资类别',
            key: 'investmentTypeId',
            md: 12,
            lg: 12,
            width: 160,
            align: 'center',
            lablePosition: 'right',
            disabled: true
          },
        ]
      }
    },
  }
</script>

<style scoped>
  
</style>