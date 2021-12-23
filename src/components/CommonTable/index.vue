<template>
  <el-table v-bind="$attrs" v-on="$listeners" ref="table">
    <el-table-column
      v-bind="getProps(column)"
      v-on="$listeners"
      v-for="column in columns"
      :key="column.prop"
    />
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: 'common-table',
  props: {
    align: {
      type: String,
      default: 'left'
    },
    // 列名
    columns: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    // 添加实例方法
    const methodsList = [
      'sort',
      'doLayout',
      'clearSort',
      'clearFilter',
      'setCurrentRow',
      'clearSelection',
      'toggleRowSelection',
      'toggleAllSelection',
      'toggleRowExpansion'
    ]
    methodsList.forEach(method => {
      this[method] = this.$refs.table[method]
    })
  },
  methods: {
    getProps(props) {
      if (!props.align) {
        props.align = this.align
      }
      return props
    }
  }
}
</script>
