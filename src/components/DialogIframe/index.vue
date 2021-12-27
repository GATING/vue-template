<template>
  <el-dialog :title="title" :visible.sync="setVisible" :width="w" :append-to-body="appendBody">
    <iframe :src="url" style="width: 100%" :style="{ height: iframeH }" frameborder="0" />
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '预览'
    },
    w: {
      type: String,
      default: '80%'
    },
    url: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    iframeH: {
      type: String,
      default: '700px'
    },
    appendBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    setVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>
