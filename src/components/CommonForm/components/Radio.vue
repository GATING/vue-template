<template>
  <el-select v-bind="$attrs" v-on="$listeners" :value="value">
    <el-option v-for="item in list" v-bind="item" :key="item.value" />
  </el-select>
</template>
<script>
import formMixin from './formMixin'
export default {
  mixins: [formMixin]
}
</script>
