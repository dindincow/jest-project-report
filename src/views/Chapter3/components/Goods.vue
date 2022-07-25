<template>
  <div class="goods" v-show="isShowGoods">
    <div class="close-btn" @click="close"> X </div>
    <div class="name">這是Goods組件-物品欄</div>
    <div class="img-good"><img src="@/images/CH3-LESSION1-img4.png"></div>
  </div>
</template>
<script>
export default {
  props: {
    isShowGoods:{
      type:Boolean
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }
} 
</script>
<style scoped lang="scss">
.goods{
  text-align: center;
  margin: 30px auto 0 auto;
  position: relative;
  .close-btn{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #393f5b;
    position: absolute;
    right: 0;
    top: 20px;
    border: 2px solid #1e1e1e;
    color: #fff;
    line-height: 30px;
  }
  .name{
    margin-bottom: 10px;
    font-weight: 900;
    color: rgb(113, 113, 113);
  }
  .img-good{
    margin: 0 auto;
    width: 300px;
    border: 1px solid #ccc;
    background: #393f5b;
    padding: 10px 20px;
    border-radius: 15px;
  }
}


</style>
