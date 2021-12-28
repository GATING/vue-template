<template>
  <div class="" v-if="list.length > 0">
    <el-row v-for="(item, index) in list" :key="index">
      <el-col v-bind="col.layout" v-for="(col, colIndex) in item" :key="colIndex">
        <div class="text" :style="col.textStyle">{{ col.text }}</div>
        <div class="con" :style="col.conStyle">{{ col.con }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.text,
.con {
  display: inline-block;
}
</style>
