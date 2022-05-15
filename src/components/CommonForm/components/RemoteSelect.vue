<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    remote
    clearable
    filterable
    :multiple="multiple"
    :value-key="valueKey"
    :remote-method="getList"
  >
    <template v-if="multiple">
      <el-option v-for="item in options" :value="item" :label="item.label" :key="item.value" />
    </template>
    <template v-else>
      <el-option v-for="item in options" v-bind="item" :key="item.value" />
    </template>
  </el-select>
</template>
<script>
import { post } from '@/utils/request'
export default {
  props: {
    value: null,
    url: String,
    multiple: Boolean,
    searchKey: {
      type: String,
      default: ''
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    params: {
      type: Object,
      default: () => ({})
    },
    getLabel: Function
  },
  data() {
    return {
      options: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList(value = '') {
      const { url, labelKey, valueKey, searchKey, params } = this
      // 主要需要和后端统一请求的参数
      const data = await post(url, {
        current: 1,
        size: 100,
        ...params,
        [searchKey || labelKey]: value
      })
      this.options = (data?.list ?? []).map(item => ({
        ...item,
        value: item[valueKey],
        label: this._getLabel(item)
      }))
    },
    _getLabel(item) {
      if (typeof this.getLabel === 'function') {
        return this.getLabel(item)
      }
      return item[this.labelKey]
    }
  }
}
</script>
