<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" :value="value">
    <el-checkbox v-for="item in list" :label="item.value" :key="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
import formMixin from './formMixin'
export default {
  mixins: [formMixin]
}
</script>
