<template>
  <div class="good-list-item">
      <img :src="goodsItem.show.img"/>
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'goodListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
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

<style scoped>
.good-list-item{
  padding-bottom: 40px;
  position: relative;
}
.good-list-item img{
    width: 100%;
    border-radius: 5px;
}
 .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    /* 多余文本省略号 */
    text-overflow: ellipsis; 
    /*段落文本不进行换行*/
    white-space: nowrap; 
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 15px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>