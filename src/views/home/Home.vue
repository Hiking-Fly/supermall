<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <Recommend :recommends="recommends"></Recommend>
    <!-- 监听组件 .native -->
    <feature @click.native="featureClick"></feature>
    <tab-control :titles="titles" class="tab-contr" @tabClick="tabClick"></tab-control>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './homeComp/HomeSwiper.vue'
  import Recommend from './homeComp/Recommend.vue'
  import Feature from './homeComp/Feature.vue'

  import TabControl from 'components/content/tabControl/TabControl.vue';

  import {getHomeMultidata,getHomeGoods} from 'network/home'

  export default {
    name:"Home",
    data () {
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType: 'pop'
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
      this.getHomeMultidata();
      // this.getHomeGoods('pop');
    },
    methods: {
      featureClick(){
        console.log('featureClick');
      },
      getHomeMultidata(){
         getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)// 因为 接口过时，返回数据并没有list
          console.log(this.goods[type].list)
          this.goods[type].page+=1
        })
      },
      tabClick(index){
        switch (index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        console.log(this.currentType);
      }
    }
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
  z-index: 9;
}
.tab-contr{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>