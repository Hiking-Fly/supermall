<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <Recommend :recommends="recommends"></Recommend>
    <feature></feature>
    <tab-control :titles="titles" class="tab-contr"></tab-control>
    <ul>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
      <li>nihoa</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './homeComp/HomeSwiper.vue'
  import Recommend from './homeComp/Recommend.vue'
  import Feature from './homeComp/Feature.vue'

  import TabControl from 'components/content/tabControl/TabControl.vue';

  import {getHomeMultidata} from 'network/home'

  export default {
    name:"Home",
    data () {
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
      };
    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend,
      Feature,
      TabControl,
    },
    created(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    methods: {}
  }
</script>
 
<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color:white;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
}
.tab-contr{
  position: sticky;
  top: 44px;
}
</style>