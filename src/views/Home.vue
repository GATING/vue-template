<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="hello world" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    getUserInfo()
  }
}
</script>
