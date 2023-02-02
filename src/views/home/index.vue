<template>
  <div>
    <h1>欢迎你，{{ info.name }}</h1>
    <input type="button" value="退出" @click="logout" />
    <router-view />
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
