<template>
  <div class="goods-list">
    <good-list-item v-for="item in goods" 
                    :key="item.iid" 
                    :goodsItem="item"
                    class="item"></good-list-item>
  </div>
</template>

<script>
import goodListItem from './goodListItem.vue'
export default {
  name:'goodList',
  props:{
    goods:{
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
  components: {
    goodListItem,
  },
  methods: {}
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 3px;
  }

  .goods-list .item {
    width: 48%;
  }
</style>