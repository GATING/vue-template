<template>
  <el-select v-bind="$attrs" v-on="$listeners" :value="value">
    <el-option v-for="item in options" v-bind="item" :key="item.value" />
  </el-select>
</template>
<script>
import formMixin from './formMixin'
export default {
  mixins: [formMixin],
  props: {
    valueKey: {
      type: String,
      default: 'value'
    },
    labelKey: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    options({ list, valueKey, labelKey }) {
      return list.map(item => ({
        ...item,
        value: item[valueKey],
        label: item[labelKey]
      }))
    }
  }
}
</script>
