<template>
  <div class="nav-bar" :style='bgcolorCom'>
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  props:{
      bgcolor:String,
  },
  data () {
    return {
    };
  },
  components: {},
  computed:{
      bgcolorCom(){
          return {
              'background-color':this.bgcolor
          }
      }
  },
  methods: {}
}
</script>

<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    
}
.center{
    flex:1;
    text-align: center;
    line-height: 44px;
}
.right,.left{
    width: 60px;
}
</style>