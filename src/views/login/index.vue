<template>
  <div>
    <input type="text" placeholder="gating" class="mr-10" v-model="form.user" />
    <input type="text" placeholder="123456" class="mr-10" v-model="form.pass" />
    <input type="button" @click="login" value="登录" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: 'gating',
        pass: '123456'
      },
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler({ query }) {
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.$log.capsule('title')
  },
  methods: {
    async login() {
      await this.$store.dispatch('user/login', this.form)
      this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>
