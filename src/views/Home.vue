<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="tofood">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  methods:{
    tofood(){
      this.$router.push("food")
    }
  }
}
</script>
