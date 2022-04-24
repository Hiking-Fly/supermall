<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.link" class='imgView'>
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    };
  },
  components: {},
  methods: {}
}
</script>

<style  lang="less" scoped>
  .recommend{
    display: flex;
    width:100%;
    justify-content: space-around;
  }
  .imgView{
    height: 100px;
    a{
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 80%;
    }
    div {
      font-size:14px;
      line-height:14px;
      text-align:center;
    }
  }
</style>