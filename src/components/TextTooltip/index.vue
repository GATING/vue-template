<template>
  <el-tooltip effect="dark" placement="top-start" :disabled="show" :content="content">
    <slot>
      <span ref="text" :style="{ maxWidth: maxWidth + 'px' }">{{ content }}</span>
    </slot>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    isRender: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: '100'
    }
  },
  data() {
    return {
      show: this.disable
    }
  },
  watch: {
    content(newVal) {
      if (newVal) {
        if (this.$refs.text) {
          this.$refs.text == this.maxWidth && (this.show = false)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tooltip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}
</style>
