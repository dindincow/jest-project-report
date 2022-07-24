<template>
  <div class="wrapper">
    <div class="cover-card" v-for="(item,index) in lessionList" :key="index">
      <div class="icon-wrpaer">
        <div class="iconfont icon-a-Additionalquantity icon"></div>
      </div>
      <div class="chapter">LESSION-{{index+1}}</div>
      <div class="desc">{{item.name}}</div>
      <router-link :to="item.path"><div class="btn">GO PAGE</div></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lessionList:[
        {name:'關於單元測試', path:"/chapter1/lession1"},
        {name:'单元测试、TDD、BDD', path:"/chapter1/lession2"},
        {name:'最最簡單的例子', path:"/chapter1/lession3"},
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper{
  display: flex;
}
</style>
