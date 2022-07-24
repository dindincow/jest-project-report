<template>
  <div class="wrapper">
    <!-- 標題 -->
    <div class="top-header">
      <h2 class="title">CH1-LESSION-3 最最簡單的例子</h2>
    </div>
    <!-- 內容 -->
    <div class="container">
      <!-- <div class="section">
        <h2><span class="iconfont icon-tips_chat icon"></span>關於這些單元測試、TDD、BDD 的意思?</h2>
      </div> -->
      <div style="width:65%"><img src="@/assets/ch1-lession3-img2.png"></div>
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


</style>
