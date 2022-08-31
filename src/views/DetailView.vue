<template>
  <div>
        <tabs-view :tabList="tabList">
        </tabs-view>
  </div>
</template>

<script>
import TabsView from '@/views/TabsView'
  export default {
    name:'DetailView',
    data() {
        return {
            tabList:[
                {
                    id:'01',
                    name:'tab-one',
                    icon:'el-icon-s-flag',
                    title:'意见审批',
                    component:'TabOne'
                },
                {
                    id:'02',
                    name:'tab-two',
                    icon:'el-icon-message-solid',
                    title:'投资计划情况总表',
                    component:'tab-two'
                },

            ]
        }
    },
    components:{
        TabsView
    }
  }
</script>

<style lang="less" scoped>
  
</style>