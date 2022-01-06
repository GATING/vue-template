<template>
  <component
    :is="tag"
    :style="{
      maxHeight: this.realMaxHeight,
      overflow: 'hidden'
    }"
  >
    <span
      ref="content"
      :style="{
        boxShadow: 'transparent 0 0'
      }"
    >
      <slot v-bind="scope" name="before" />
      <span ref="text">{{ realText }}</span>
      <slot v-bind="scope" name="after" />
    </span>
  </component>
</template>

<script>
/**
 * @see <a href="https://github.com/Justineo/vue-clamp">文档同这个</a>
 */
import { addListener, removeListener } from './resize-detector'
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    // 是否要自动适配根元素的尺寸变化。
    autoResize: {
      type: Boolean,
      default: false
    },
    // 可以显示的最大行数
    maxLines: Number,
    // 根元素的最大高度。
    maxHeight: [String, Number],
    // 当文字被截断时需要显示的省略号字符串。
    ellipsis: {
      type: String,
      default: '…'
    },
    // 截断后显式省略符号的位置
    location: {
      type: String,
      default: 'end',
      validator(value) {
        return ['start', 'middle', 'end'].indexOf(value) !== -1
      }
    },
    // 是否展开显式被截断的文本
    expanded: Boolean
  },
  data() {
    return {
      offset: null,
      text: this.getText(),
      localExpanded: !!this.expanded
    }
  },
  computed: {
    clampedText() {
      if (this.location === 'start') {
        return this.ellipsis + (this.text.slice(0, this.offset) || '').trim()
      } else if (this.location === 'middle') {
        const split = Math.floor(this.offset / 2)
        return (
          (this.text.slice(0, split) || '').trim() +
          this.ellipsis +
          (this.text.slice(-split) || '').trim()
        )
      }
      return (this.text.slice(0, this.offset) || '').trim() + this.ellipsis
    },
    isClamped() {
      if (!this.text) {
        return false
      }
      return this.offset !== this.text.length
    },
    realText() {
      return this.isClamped ? this.clampedText : this.text
    },
    realMaxHeight() {
      if (this.localExpanded) {
        return null
      }
      const { maxHeight } = this
      if (!maxHeight) {
        return null
      }
      return typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
    },
    scope({ expand, collapse, toggle, isClamped: clamped, localExpanded: expanded }) {
      return {
        expand,
        collapse,
        toggle,
        clamped,
        expanded
      }
    }
  },
  watch: {
    expanded(val) {
      this.localExpanded = val
    },
    localExpanded(val) {
      if (val) {
        this.clampAt(this.text.length)
      } else {
        this.update()
      }
      if (this.expanded !== val) {
        this.$emit('update:expanded', val)
      }
    },
    isClamped: {
      handler(val) {
        this.$nextTick(() => this.$emit('clamp-change', val))
      },
      immediate: true
    }
  },
  mounted() {
    this.init()

    this.$watch(vm => [vm.maxLines, vm.maxHeight, vm.ellipsis, vm.isClamped].join(), this.update)
    this.$watch(vm => [vm.tag, vm.text, vm.autoResize].join(), this.init)
  },
  updated() {
    this.text = this.getText()
    this.applyChange()
  },
  beforeDestroy() {
    this.cleanUp()
  },
  methods: {
    init() {
      const contents = this.$slots.default
      if (!contents) {
        return
      }

      this.offset = this.text.length

      this.cleanUp()

      if (this.autoResize) {
        addListener(this.$el, this.update)
        this.unregisterResizeCallback = () => {
          removeListener(this.$el, this.update)
        }
      }
      this.update()
    },
    update() {
      if (this.localExpanded) {
        return
      }
      this.applyChange()
      if (this.isOverflow() || this.isClamped) {
        this.search()
      }
    },
    expand() {
      this.localExpanded = true
    },
    collapse() {
      this.localExpanded = false
    },
    toggle() {
      this.localExpanded = !this.localExpanded
    },
    getLines() {
      return Object.keys(
        [...this.$refs.content.getClientRects()].reduce((prev, { top, bottom }) => {
          const key = `${top}/${bottom}`
          if (!prev[key]) {
            prev[key] = true
          }
          return prev
        }, {})
      ).length
    },
    isOverflow() {
      if (!this.maxLines && !this.maxHeight) {
        return false
      }

      if (this.maxLines) {
        if (this.getLines() > this.maxLines) {
          return true
        }
      }

      if (this.maxHeight) {
        if (this.$el.scrollHeight > this.$el.offsetHeight) {
          return true
        }
      }
      return false
    },
    getText() {
      const [content] = (this.$slots.default || []).filter(node => !node.tag && !node.isComment)
      return content ? content.text : ''
    },
    moveEdge(steps) {
      this.clampAt(this.offset + steps)
    },
    clampAt(offset) {
      this.offset = offset
      this.applyChange()
    },
    applyChange() {
      this.$refs.text.textContent = this.realText
    },
    stepToFit() {
      this.fill()
      this.clamp()
    },
    fill() {
      while ((!this.isOverflow() || this.getLines() < 2) && this.offset < this.text.length) {
        this.moveEdge(1)
      }
    },
    clamp() {
      while (this.isOverflow() && this.getLines() > 1 && this.offset > 0) {
        this.moveEdge(-1)
      }
    },
    search(...range) {
      const [from = 0, to = this.offset] = range
      if (to - from <= 3) {
        this.stepToFit()
        return
      }
      const target = Math.floor((to + from) / 2)
      this.clampAt(target)
      if (this.isOverflow()) {
        this.search(from, target)
      } else {
        this.search(target, to)
      }
    },
    cleanUp() {
      if (this.unregisterResizeCallback) {
        this.unregisterResizeCallback()
      }
    }
  }
}
</script>
