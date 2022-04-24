<template>
  <div id='home'>
    <nav-bar>
      <div slot="center" bgcolor='blue'>购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name:"Home",
    data () {
      return {
      };
    },
    components: {
      NavBar
    },
    methods: {}
  }
</script>
 
<style scoped>
</style>