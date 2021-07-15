<template>
  <div id="log-wrapper">
    <span @click="colorful">colorful方法</span>

    <span v-for="type in typeList" :key="type" :class="`text-${type}`" @click="capsule(type, type)">
      {{ type }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: ['default', 'primary', 'success', 'warning', 'danger']
    }
  },
  methods: {
    capsule(text, type) {
      this.$log.capsule(text, type, type)
      this.$log[type](text)
    },
    colorful() {
      this.$log.colorful([
        { text: 'H', type: 'default' },
        { text: 'e', type: 'primary' },
        { text: 'l', type: 'success' },
        { text: 'l', type: 'warning' },
        { text: 'o', type: 'danger' }
      ])
    }
  }
}
</script>

<style scoped>
#log-wrapper span {
  margin: 10px;
}
</style>
