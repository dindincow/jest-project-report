<template>
  <div class="wrapper">
    <!-- 標題 -->
    <div class="top-header">
      <h2 class="title">CH1-LESSION-1 關於單元測試</h2>
    </div>
    <!-- 內容 -->
    <div class="container">
      <div class="left" style="width:40%">
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>1.What 單元測試 ?</h2>
          <p>對程式碼的最小單位進行測試，確保程式邏輯正確。</p>
        </div>
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>2.Why 單元測試 ?</h2>
          <p>1.確保團隊跌代的時候不會影響原本的功能</p>
          <p>2.確保品質，準確對程式碼切割最小單位，降低耦合度</p>
          <p>3.程式的 return 變成可預期</p>
          <p>4.重構程式碼可以按照測試的規格走</p>
        </div>
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>3.How 測試 ?</h2>
          <p>安裝測試工具</p>
          <div style="width:90%"><img src="@/assets/ch1-lession1-2.png"></div>
        </div>
      </div>
      <div class="right">
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>測試安裝</h2>
          <p>1. 以現有的 CLI 專案，加入 Vue Test Utils </p>
          <div class="tip">
            vue add unit-jest
          </div>
          <p>2. 以創建手腳架時直接加入 </p>
          <div class="img-pig"><img src="@/assets/ch1-lession1-1.jpg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped lang="scss">
.top-header{
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  .title{
    font-size: 38px;
    margin-bottom: 10px;
    color: #315378;
  }
  p{
    color: #808080;
    line-height: 25px;
    font-size: 14px;
  }
}

.container{
  display: flex;
  justify-content: space-around;
  .section{
    margin:30px;
    h2{
      font-size: 28px;
      margin-bottom: 15px;
      font-weight: 800;
      color: #263485;
    }
    p{
      line-height: 30px;
      font-size: 18px;
    }
  }
}

.icon{
  font-size: 24px;
  line-height: 24px;
  display: inline-block;
  float: left;
  font-weight: initial;
  color: #263485;
  margin-right: 5px;
}
.tip{
  width: 50%;
  padding: 10px 20px;
  background: #393637;
  border-radius: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  color: #fff;
}
.img-pig{
  width: 55%
}

</style>
