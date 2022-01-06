<template>
  <div class="" v-if="list.length > 0">
    <el-row v-for="(item, index) in list" :key="index">
      <el-col
        v-bind="col.layout"
        v-for="(col, colIndex) in item"
        :style="col.colStyle"
        :key="colIndex"
      >
        <div class="text" :style="col.textStyle">{{ col.text }}</div>
        <div class="con" :style="col.conStyle">
          {{ col.con }}
          <template v-if="col.prop">
            <slot :name="col.prop" v-bind="col"></slot>
          </template>
        </div>
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
