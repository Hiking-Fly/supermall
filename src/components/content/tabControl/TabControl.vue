<template>
  <div class="tabcontrol">
     <span v-for="(item,index) in titles" :key="index" :class="{active : currentIndex===index}" @click="titleClick(index)">
         {{item}}
     </span>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {
        currentIndex:0,
    };
  },
  components: {},
  methods: {
      titleClick(index){
          this.currentIndex = index
      }
  }
}
</script>

<style scoped lang="less">
    .tabcontrol{
        display: flex;
        justify-content: space-around;
        span{
            flex:1;
            text-align: center;
            height: 40px;
            line-height: 40px;
            background-color: #f2f2f2;
        }
    }
    .active{
        color: var(--color-tint);
        border-bottom: var(--color-tint) 1px solid;
    }

</style>