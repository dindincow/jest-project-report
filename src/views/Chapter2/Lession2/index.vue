<template>
  <div class="wrapper">
    <div class="tip">
      <div class="left">
        <h2 class="title">LESSION-2  異步測試方法</h2>
        <p>範例在這邊: tests\unit\Chapter2\Lession1\matchers.spec.js</p>
      </div>  
      <div class="right"></div>
    </div>
    <!-- 內容 -->
    <div class="section-wrapper">
      <div class="left">
        <div class="question"><span class="iconfont icon-magic"></span> 如何寫測試後端回傳API是否為正確資料?</div>
        <div class="img"><img src="@/assets/ch2-lession2.png"></div>
      </div>
      <div class="right">
        <h2><span class="iconfont icon-magic"></span> 重點筆記</h2>
        <p>1. 測試異步函數接收 callback function 時，需增加done 告訴程式，需要跑完  callback function 內容才算結束，如果沒加 done()，是不會跑 expect(data).toEqual({"success":true}) 這句的</p>
        <div class="img"><img src="@/assets/ch2-lession2-1.png"></div>
        <p>2. 發請求結果成功，是不會執行catch 語句，就無法測試失敗的案例，所以需加上expect.assertions(1)，最少讓案例執行一次</p>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
img{
  width: 100%;
}
.tip{
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  p{
    line-height: 25px;
    font-size: 14px;
    color: #808080;
  }
  .right{
    margin-left: 50px;
  }
}
.title{
  font-size: 38px;
  margin-bottom: 10px;
}
.section-wrapper{
  display: flex;
  .left{
    width: 48%;
    .question{
      margin: 20px 0;
      font-size: 24px;
    }
    .img{
      width: 100%;
    }
  }
  .right{
   
    margin: 0 2%;
    h2{
      margin: 20px 0;
      font-size: 24px;
    }
    .img{
      width: 80%;
    }
    p{
      margin: 10px 0;
      line-height: 26px;
    }
  }
}

</style>
