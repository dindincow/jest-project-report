<template>
  <div class="wraaper">
    <div class="card">
      <div class="icon-wrpaer">
        <div class="iconfont icon-a-Additionalquantity icon"></div>
      </div>
      <div class="chapter">LESSION-1</div>
      <div class="desc">什麼是單元測試?</div>
      <div class="btn">GO PAGE</div>
    </div>
     <div class="card">
      <div class="icon-wrpaer">
        <div class="iconfont icon-magic icon"></div>
      </div>
      <div class="chapter">LESSION-2</div>
      <div class="desc">單元測試要幹嘛</div>
      <div class="btn">GO PAGE</div>
    </div>
     <div class="card">
      <div class="icon-wrpaer">
        <div class="iconfont icon-jest icon"></div>
      </div>
      <div class="chapter">LESSSION-3</div>
      <div class="desc">什麼是單元悠點</div>
      <div class="btn">GO PAGE</div>
    </div>
  </div>
</template>

<script>

</script>
<style scoped lang="scss">
.wraaper{
  display: flex;
}
.card{
  padding: 20px;
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
    margin: 20px auto 20px auto;
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
    margin-top: 20px;
    background: #ed9200;
    color: #fff;
    border-radius: 30px;
    padding: 10px;
    font-weight: 700;
    text-align: center;
  }
}
</style>
