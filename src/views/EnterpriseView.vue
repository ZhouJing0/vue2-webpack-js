<template>
  <div>
    <div ref="myPage" style="width: calc(100% - 2px);height:calc(100vh - 50px);" @click="isShowNodeMenuPanel = false">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="userGraphOptions" >
        <div slot="node" slot-scope="{node}">
          <div  @contextmenu.prevent.stop="showNodeMenus(node, $event)">
            {{node.text}}
          </div>
        </div>
      </SeeksRelationGraph>

    </div>

    <div v-show="isShowNodeMenuPanel" :style="{left: nodeMenuPanelPosition.x + 'px', top: nodeMenuPanelPosition.y + 'px' }" style="z-index: 999;padding:10px;background-color: #ffffff;border:#eeeeee solid 1px;box-shadow: 0px 0px 8px #cccccc;position: absolute;">
      <div style="line-height: 25px;padding-left: 10px;color: #888888;font-size: 12px;cursor: pointer;">对这个节点进行操作：</div>
      <div class="c-node-menu-item" style="cursor: pointer;" @click.stop="doAction('操作1')">操作1</div>
      <div class="c-node-menu-item" style="cursor: pointer;" @click.stop="doAction('操作2')">操作2</div>
      <div class="c-node-menu-item" style="cursor: pointer;" @click.stop="doAction('操作3')">操作3</div>
      <div class="c-node-menu-item" style="cursor: pointer;" @click.stop="doAction('操作4')">操作4</div>
    </div>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'SeeksRelationGraphDemo',
  components: { SeeksRelationGraph },
  data() {
    return {
      isShowNodeMenuPanel: false,
      nodeMenuPanelPosition: { x: 0, y: 0 },
      g_loading: true,
      userGraphOptions: {
        'backgrounImage': '',
        'backgrounImageNoRepeat': true,
        'layouts': [
          {
           'label': '布局3',
            'layoutName': 'tree',
            'layoutClassName': 'seeks-layout-center',
            useLayoutStyleOptions: true,
            'from': 'left',
            'defaultJunctionPoint': 'lr',
            'defaultNodeShape': 1,
            'defaultLineShape': 3,
            'defaultNodeBorderWidth': 0,
            'defaultLineColor': '#cccccc',
            'defaultNodeColor': '#43a2f1',
            'min_per_width': 200,
            'max_per_width': 400,
            'min_per_height': 40,
            'max_per_height': 70
          }
        ],
        'defaultNodeBorderWidth': 0,
        'defaultNodeShape': 1,
        'allowShowMiniNameFilter': false,
        'allowShowMiniToolBar': false,
        'defaultJunctionPoint': 'lr',
        'defaultLineShape': 2
      }
    }
  },
  created() {
  },
  mounted() {
    this.setGraphData()
  },
  methods: {
    setGraphData() {
      var _orign_data = {
        entname: '中数智汇数据科技股份有限公司',
        invs: [
          { id: 'inv1', text: '北京某个公司科技有限公司', desc: '40%' },
          { id: 'inv2', text: '张蜈支', desc: '30%' },
          { id: 'inv3', text: '如花', desc: '10%' },
          { id: 'inv4', text: '路人甲', desc: '10%' },
          { id: 'inv5', text: '路人乙', desc: '10%' }
        ],
        persons: [
          { id: 'person1', text: '张蜈支', desc: '董事长' },
          { id: 'person2', text: '包奥曼', desc: '总经理' },
          { id: 'person3', text: '路人甲', desc: '监事' },
          { id: 'person4', text: '路人乙', desc: '董事' }
        ],
        asInvs: [
          { id: 'asinv1', text: '北京超级大橘科技有限公司', desc: '80%' },
          { id: 'asinv2', text: '北京超级大蚂蚁科技有限公司', desc: '70%' },
          { id: 'asinv3', text: '北京超级大米粒儿科技有限公司', desc: '20%' }
        ],
        branchs: [
          { id: 'branch1', text: '某个公司（北京）科技股份有限公司', desc: '80%' },
          { id: 'branch2', text: '某个公司（天津）科技股份有限公司', desc: '70%' },
          { id: 'branch4', text: '某个公司（成都）科技股份有限公司', desc: '70%' },
          { id: 'branch5', text: '某个公司（武汉）科技股份有限公司', desc: '20%' }
        ]
      }
      var _graphSetting = this.$refs.seeksRelationGraph.graphSetting
      this.$refs.seeksRelationGraph.graphSetting.defaultLineShape = 1
      // 手工设置节点的坐标
      const _center = {
        x: (_graphSetting.viewSize.width) / 2 - _graphSetting.canvasOffset.x,
        y: (_graphSetting.viewSize.height) / 2 - _graphSetting.canvasOffset.y
      }
      var graphData = {
        rootId: 'root',
        nodes: [],
        links: []
      }
      // 添加根节点和虚拟节点
      var rootNode = { id: graphData.rootId, name: _orign_data.entname, styleClass: 'c-g-center', color: '#A4C1FF', width: 250,  x: _center.x - 125, y: _center.y - 25 }
      var invRootNode = { id: 'invRoot', name: '股东', styleClass: 'c-g-group-node', color: '#FFC5A6', width: 100,  }
      var personRootNode = { id: 'personRoot', name: '高管', styleClass: 'c-g-group-node', color: '#B9FFA7', width: 100,  }
      var asinvRootNode = { id: 'asinvRoot', name: '对外投资', styleClass: 'c-g-group-node', color: '#FFBEC1', width: 100,  }
      var branchRootNode = { id: 'branchRoot', name: '分支机构', styleClass: 'c-g-group-node', color: '#FFA1F8', width: 100,  }
      invRootNode.x = _center.x - 200 - invRootNode.width
      invRootNode.y = _center.y - 130
      personRootNode.x = _center.x - 200 - personRootNode.width
      personRootNode.y = _center.y + 90
      asinvRootNode.x = _center.x + 200
      asinvRootNode.y = _center.y - 130
      branchRootNode.x = _center.x + 200
      branchRootNode.y = _center.y + 90
      // 添加节点数据到graphData
      console.log(rootNode)
      console.log(invRootNode)
      console.log(personRootNode)
      console.log(asinvRootNode)
      console.log(branchRootNode)
      graphData.nodes.push(rootNode)
      graphData.nodes.push(invRootNode)
      graphData.nodes.push(personRootNode)
      graphData.nodes.push(asinvRootNode)
      graphData.nodes.push(branchRootNode)
      // 添加根节点和虚拟节点之间的关系，并将关系数据放入graphData
      graphData.links.push({ from: rootNode.id, to: invRootNode.id, styleClass: 'c-g-l-group', color: '#C7E9FF', lineShape: 2 })
      graphData.links.push({ from: rootNode.id, to: personRootNode.id, styleClass: 'c-g-l-group', color: '#C7E9FF', lineShape: 2 })
      graphData.links.push({ from: rootNode.id, to: asinvRootNode.id, styleClass: 'c-g-l-group', color: '#C7E9FF', lineShape: 2 })
      graphData.links.push({ from: rootNode.id, to: branchRootNode.id, styleClass: 'c-g-l-group', color: '#C7E9FF', lineShape: 2 })
      // 将股东加入虚拟节点"股东"
      _orign_data.invs.forEach((thisNode, _index) => {
        thisNode.width = 200
        thisNode.color = '#67c23a'
        thisNode.x = invRootNode.x - 300 - thisNode.width
        thisNode.y = invRootNode.y + _index * 30 * -1 + 30
        graphData.nodes.push(thisNode)
        graphData.links.push({ from: invRootNode.id, to: thisNode.id, text: thisNode.desc, color: '#FFC5A6', arrow: 'none', lineShape: 4 })
      })
      // 将高管加入虚拟节点"高管"
      _orign_data.persons.forEach((thisNode, _index) => {
        thisNode.width = 200
        thisNode.x = personRootNode.x - 200 - thisNode.width
        thisNode.y = personRootNode.y + _index * 30
        graphData.nodes.push(thisNode)
        graphData.links.push({ from: personRootNode.id, to: thisNode.id, text: thisNode.desc, color: '#B9FFA7', arrow: 'none', lineShape: 4 })
      })
      // 将对外投资企业加入虚拟节点"对外投资"
      _orign_data.asInvs.forEach((thisNode, _index) => {
        thisNode.x = asinvRootNode.x + 300
        thisNode.y = asinvRootNode.y + _index * 30 * -1 + 30
        graphData.nodes.push(thisNode)
        graphData.links.push({ from: asinvRootNode.id, to: thisNode.id, text: thisNode.desc, color: '#FFBEC1', lineShape: 4 })
      })
      // 将分支机构加入虚拟节点"分支机构东"
      _orign_data.branchs.forEach((thisNode, _index) => {
        thisNode.x = branchRootNode.x + 300
        thisNode.y = branchRootNode.y + _index * 30
        graphData.nodes.push(thisNode)
        graphData.links.push({ from: branchRootNode.id, to: thisNode.id, text: thisNode.desc, color: '#FFA1F8', lineShape: 4 })
      })
      this.$refs.seeksRelationGraph.setJsonData(graphData, (seeksRGGraph) => {
      })
    },
    showNodeMenus(nodeObject, $event) {
      this.currentNode = nodeObject
      var _base_position = this.$refs.myPage.getBoundingClientRect()
      console.log('showNodeMenus:', $event, _base_position)
      this.isShowNodeMenuPanel = true
      this.nodeMenuPanelPosition.x = $event.clientX - _base_position.x
      this.nodeMenuPanelPosition.y = $event.clientY - _base_position.y
    },
    doAction(actionName) {
      console.log(actionName)
      this.$notify({
        title: '提示',
        message: '对节点【' + this.currentNode.text + '】进行了：' + actionName,
        type: 'success'
      })
      this.isShowNodeMenuPanel = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.c-node-menu-item{
  line-height: 30px;cursor: pointer;color: #444444;font-size: 14px;border-top:#efefef solid 1px;
}
.c-node-menu-item:hover{
  background-color: rgba(66,187,66,0.2);
}
</style>