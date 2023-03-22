<template>
  <div>
    <router-link :to="toPath">{{ fullPath }}</router-link>
    <p>随机数：{{ random }}</p>
    <button @click="tj">调整</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      random: Math.random()
    }
  },
  computed: {
    toPath() {
      return `${this.$route.path}?r=${Math.random()}`
    },
    fullPath() {
      return this.$route.fullPath
    }
  },
  methods: {
    tj() {
      this.$router.push('/test/testone/one')
    }
  }
}
</script>
