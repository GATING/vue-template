<template>
  <div>
    <h1>欢迎你，{{ info.name }}</h1>
    <van-button @click="logout" type="danger" size="small">退出</van-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
