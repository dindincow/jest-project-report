<template>
  <div class="wraaper">
    <div class="card" v-for="(item,index) in lessionList" :key="index">
      <div class="icon-wrpaer">
        <div class="iconfont icon-a-Additionalquantity icon"></div>
      </div>
      <div class="chapter">LESSION-{{item.lession}}</div>
      <div class="desc">{{item.name}}</div>
      <router-link :to="item.path"><div class="btn">PAGE</div></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lessionList:[
        {name:'匹配器', lession:1, path:"/chapter2/lession1"},
        {name:'異步測試方法', lession:2, path:"/chapter2/lession2"},
        {name:'鉤子函數', lession:3, path:"/chapter2/lession3"},
        {name:'mock', lession:4, path:"/chapter2/lession4"},
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.wraaper{
  display: flex;
}
.card{
  padding: 30px 20px 20px;
  width: 230px;
  height: 250px;
  background: #fff;
  box-shadow:2px 2px 15px rgb(150,166,169,0.2);
  border-radius: 10px;
  text-align: center;
  margin-right: 20px;
  .icon-wrpaer{
    background: #cfddc7;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px auto;
    .icon{
      font-size: 40px;
    }
  }
  .chapter{
    font-size: 17px;
    margin-bottom: 15px;
    color: #e86d0b;
  }
  .desc{
    font-size: 18px;
  }
  .btn{
    margin-top: 40px;
    background: #ed9200;
    color: #fff;
    border-radius: 30px;
    padding: 10px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
}
</style>
