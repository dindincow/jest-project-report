<template>
  <div class="wrapper">
    <div class="tip">
      <div class="left">
        <h2 class="title">LESSION-3  鉤子函數</h2>
        <p>範例在這邊: tests\unit\Chapter2\Lession1\matchers.spec.js</p>
      </div>  
      <div class="right"></div>
    </div>
    <!-- 內容 -->
    <div class="section-wrapper">
      <div class="left">
        <div class="question"><span class="iconfont icon-magic"></span> 當測試案例很多時，對一個物件加加減減，要如何確保，都是以初始值來做測試?</div>
        <div class="img"><img src="@/assets/CH3-LESSION3-PIC1.png"></div>
      </div>
      <div class="right">
        <h2><span class="iconfont icon-magic"></span> 重點筆記</h2>
        <p>鉤子函數生命週期</p>
        <div class="img"><img src="@/assets/CH3-LESSION3-PIC2.png"></div>
        <p>基本上多個測試案例會互相影響，因為共用同一實例，如果希望在跑每個測試用例執行前，先初始化 beforeEach (不共用同一實例)，就不會互相影響</p>
        <p>針對單一測試案例執行 test.only()</p>
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
    padding: 10px;
    width: 48%;
    border-right: 1px solid #ccc;
    .question{
      margin: 20px 0;
      font-size: 24px;
      line-height: 34px;
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
      width: 350px;
    }
    p{
      margin: 10px 0;
      line-height: 26px;
    }
  }
}

</style>
