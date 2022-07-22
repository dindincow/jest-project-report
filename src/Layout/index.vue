<template>
  <div class="layout">
    <div class="left">
      <div class="title"><img src="../assets/logo.png"></div>
      <div class="menu">
        <ul>
          <li>
            <span class="iconfont icon-whatshot icon"></span>
            <p>Ch1 -What單元測試?</p>
          </li>
          <li>
            <span class="iconfont icon-jest icon"></span>
            <p>Ch2 -關於Jest</p>
          </li>
          <li>
            <span class="iconfont icon-vuejs icon"></span>
            <p>Ch3 -Vue-test-until</p>
          </li>
          <li>
            <span class="iconfont icon-magic icon"></span>
            <p>Ch4 -實際運用例子</p>
          </li>
          <li>
            <span class="iconfont icon-a-Additionalquantity icon"></span>
            <p>Ch5 -補充</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="header">JEST + VUE-TEST-UNIT</div>
      <div class="content"><router-view/></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {
    
  }
}
</script>
<style scoped lang="scss">
.layout{
  width: 100%;
  height: 100vh;
  background: #eef1f7;
  display: flex;
}
.left{
  position: relative;
  min-width: 230px;
  background: #fff;
  box-shadow: 1px 1px 10px rgb(222 222 222 / 50%);
  .title{
    height: 100px;
    border-bottom: 1px solid #e5e5e5cc;
  }
  .menu li{
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px dashed #cecdcd;
    .icon{
      display: block;
      font-size: 26px;
      color: #9a9a9a;
      margin-bottom: 10px;
    }
    p{
      color: #5c5c5c;
      font-size: 15px;
      font-weight: 600;
      background: #e4e8ea;
      padding: 5px 12px;
      border-radius: 20px;
    }
  }

}
.right{
  flex-grow: 1;
  .header{
    color: #315378;
    font-size: 24px;
    font-weight: 700;
    line-height: 100px;
    padding: 0 40px;
    background: #fff;
  }
  .content{
    padding: 40px;
  }
}
</style>
