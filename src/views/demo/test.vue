<template>
  <div class="">
    <div>
      <h1>DictTag 判断用组件还是标签</h1>
      <h3>第一种</h3>
      <dict-tag :options="tagList" :value="value"></dict-tag>
      <h3>第二种</h3>
      <dict-tag :options="tagTwoList" :value="value"></dict-tag>
    </div>
    <div>
      <h1>dialogIframe</h1>
      <h3>弹出框iframe</h3>
      <el-button @click="visible = true">弹窗iframe内容</el-button>
      <dialog-iframe :title="title" :w="w" :url="url" :visible.sync="visible" :iframeH="iframeH" />
      <h3>嵌套弹出框</h3>
      <el-button @click="outerVisible = true">双弹窗iframe内容</el-button>
      <el-dialog :visible.sync="outerVisible" title="内容">
        <dialog-iframe
          :title="title"
          :w="w"
          :url="url"
          :appendBody="true"
          :visible.sync="visible"
          :iframeH="iframeH"
        />
        <el-button @click="visible = true">弹窗iframe内容</el-button>
      </el-dialog>
    </div>
    <div>
      <h1>commonDetail</h1>
      <common-detail :list="detailList" />
    </div>
  </div>
</template>

<script>
import DialogIframe from '@comp/DialogIframe/index.vue'
import DictTag from '@comp/DictTag/index.vue'
import CommonDetail from '@comp/CommonDetail/index.vue'
export default {
  components: { DialogIframe, DictTag, CommonDetail },
  data() {
    return {
      // DictTag
      tagList: [
        { listClass: '', dictLabel: '测试', dictValue: '0' },
        { listClass: 'default', dictLabel: '测试12', dictValue: '1' },
        { listClass: 'primary', dictLabel: 'lwf', dictValue: '2' }
      ],
      tagTwoList: [
        { listClass: 'primary', dictLabel: '测试', dictValue: '0' },
        { listClass: 'success', dictLabel: '测试12', dictValue: '1' },
        { listClass: 'warning', dictLabel: 'lwf', dictValue: '2' }
      ],
      value: ['0', '1', '2'],
      value1: ['0', '1'],
      //  dialogIframe
      title: '预览',
      w: '80%',
      url: 'http://www.baidu.com',
      outerVisible: false,
      visible: false,
      iframeH: '700px',
      // commonDetail
      detailList: [
        [
          {
            text: 'cpu',
            con: '2.5g',
            layout: {
              md: 5
            },
            textStyle: {
              width: '100px',
              textAlign: 'left'
            },
            conStyle: {}
          },
          {
            text: '系统',
            con: 'windows',
            layout: {
              md: 5
            }
          }
        ]
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
