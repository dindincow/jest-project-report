<template>
  <div class="wrapper">
    <div class="tip">
      <div class="left">
        <h2 class="title">LESSION-2  匹配器</h2>
        <p>範例在這邊: tests\unit\Chapter2\Lession1\matchers.spec.js</p>
        <p><a href="https://jestjs.io/docs/using-matchers">https://jestjs.io/docs/using-matchers</a></p>
        <p><a href="https://jestjs.io/docs/expect">https://jestjs.io/docs/expect</a></p>
      </div>  
      <div class="right"><img src="../../../assets/matchers.png"></div>
    </div>
    <!-- 內容 -->
    <div class="section-wrapper">
      sdfsdfsdf
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
.tip{
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  p{
    line-height: 25px;
    font-size: 14px;
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
  flex-wrap: wrap;
  .section{
    padding: 20px;
    margin: 20px 10px;
    font-size: 18px;
    background: white;
    box-shadow: 1px 1px 10px rgba(200,200,200,0.3);
    width: 25%;
    &.green{
      border-top: 6px solid #48ba88;
    }
    &.red{
      border-top: 6px solid #c43682;
    }
    &.blue{
      border-top: 6px solid #3175db;
    }
    &.orange{
      border-top: 6px solid #ea945e;
    }
    &.purple{
      border-top: 6px solid #9c69e3;
    }
    
    .type{
      color: #315378;
      font-weight: bold;
      border-bottom: 1px dashed #ccc;
      padding-bottom: 15px;
    }
    .desc{
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .text{
        color: #868686;
        font-size: 16px;
      }
    }
  }
}

</style>
