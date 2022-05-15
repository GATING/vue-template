<template>
  <div class="p-30">
    <div>
      <h1>scss变量</h1>
      <b
        v-for="(color, name) in color"
        class="mlr-10"
        :key="name"
        :style="{
          color
        }"
      >
        {{ name }}
      </b>
    </div>
    <div>
      <h1>通用Form</h1>
      <common-form
        inline
        :model="form"
        :rules="rules"
        :info-list="infoList"
        :field-list="fieldList"
        reset-text="重置"
        confirm-text="搜索"
        @search="getData = true"
        @reset="getData = true"
      />
    </div>

    <div>
      <h1>通用Table</h1>
      <common-table
        ref="table"
        align="center"
        max-height="600"
        :data="tableData"
        :columns="columns"
        @selection-change="selectionChange"
      />
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">
          切换第二、第三行的选中状态
        </el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>

    <div>
      <h1>通用分页，通常和Form、Table一起使用</h1>
      <common-pagination
        v-model="tableData"
        type="get"
        :do-request.sync="getData"
        :params="form"
        url="/article/list"
      />
    </div>

    <div>
      <h1>自定义Log</h1>
      <el-button @click="colorful">colorful方法</el-button>
      <el-button
        v-for="type in typeList"
        :key="type"
        :class="`text-${type}`"
        style="background: #7662622b"
        @click="capsule(type, type)"
      >
        {{ type }}
      </el-button>
    </div>

    <div>
      <h1>高亮文本</h1>
      <div class="align-center mb-10">
        <el-input v-model="search" placeholder="请输入要搜索的内容" class="w-300 mr-20" />
        <el-tooltip content="空格分割" placement="top">
          <el-switch v-model="splitChecked" />
        </el-tooltip>
      </div>
      <div>
        <div v-for="item in tableData" :key="item.id">
          <text-highlight :queries="queries">{{ item.name }}</text-highlight>
        </div>
      </div>
    </div>

    <div class="w-300">
      <h1>省略文本</h1>
      <clamp auto-resize :max-lines="1">
        萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到萨达克拉收到货123卡了解到
        <el-button slot="after" icon="el-icon-delete"></el-button>
      </clamp>
    </div>
  </div>
</template>

<script>
import { keys, map } from 'lodash'
import CommonForm from '@comp/CommonForm/index.vue'
import CommonTable from '@comp/CommonTable/index.vue'
import CommonPagination from '@comp/CommonPagination/index.vue'
import TextHighlight from '@comp/TextHighlight/index.vue'
import Clamp from '@comp/Clamp/index.vue'
// 导入scss变量案例
import color from '@style/colors-export.scss'
import { validateRequired } from '@util/validate'

export default {
  components: {
    Clamp,
    CommonForm,
    CommonTable,
    TextHighlight,
    CommonPagination
  },
  data() {
    return {
      color,
      form: {
        name: '',
        sex: '',
        time: '',
        hobby: '',
        // 头像
        avatar: []
      },
      fieldList: [
        {
          label: '姓名',
          value: 'name'
        },
        {
          label: '性别',
          value: 'sex',
          list: 'sexList',
          component: 'el-select'
        },
        {
          label: '爱好',
          value: 'hobby',
          list: [
            {
              name: '不限',
              id: ''
            },
            {
              name: '游泳',
              id: 1
            },
            {
              name: '射击',
              id: 2
            }
          ],
          component: 'el-select',
          extraProps: {
            valueKey: 'id',
            labelKey: 'name'
          }
        },
        {
          label: '日期',
          value: 'time',
          component: 'el-date-picker',
          extraProps: {
            type: 'daterange',
            rangeSeparator: '-',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            valueFormat: 'timestamp'
          }
        },
        {
          label: '头像',
          value: 'avatar',
          component: 'el-upload'
        }
      ],
      infoList: {
        sexList: [
          {
            label: '不限',
            value: ''
          },
          {
            label: '男',
            value: 0
          },
          {
            label: '女',
            value: 1
          }
        ]
      },
      rules: {
        name: [validateRequired('请输入姓名')]
      },
      tableData: [],
      columns: [
        {
          type: 'selection'
        },
        {
          label: '序号',
          type: 'index'
        },
        {
          label: 'ID',
          prop: 'id'
        },
        {
          label: '姓名',
          prop: 'name',
          width: 200
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          // renderHeader自带render，所以不需要箭头函数
          renderHeader() {
            return <span class="text-primary">性别</span>
          },
          // 一定要箭头函数才有render
          formatter: row => <span class="text-success">{row.sex}</span>
        }
      ],
      getData: false,

      typeList: map(keys(color), c => c.replace('Color', '')),

      search: '',
      splitChecked: false
    }
  },
  computed: {
    queries({ splitChecked, search }) {
      return splitChecked ? search.split(/\s+/) : this.search
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    },
    selectionChange(val) {
      console.log(val)
    },
    capsule(text, type) {
      this.$log.capsule(text, type, type)
      this.$log[type](text)
    },
    colorful() {
      this.$log.colorful([
        { text: 'H', type: 'default' },
        { text: 'e', type: 'primary' },
        { text: 'l', type: 'success' },
        { text: 'l', type: 'warning' },
        { text: 'o', type: 'danger' },
        { text: 'W', type: 'info' },
        { text: 'o', type: 'white' },
        { text: 'r', type: 'black' },
        { text: 'l', type: 'regular' },
        { text: 'd', type: 'secondary' }
      ])
    }
  }
}
</script>
