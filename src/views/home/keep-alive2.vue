<template>
    <div>
        <router-link to="/home/keep-alive1">keep-alive1</router-link>
        <input v-model="msg" type="text" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            msg: Math.random()
        }
    }
}
</script>
  