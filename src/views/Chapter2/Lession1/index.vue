<template>
  <div class="wrapper">
    <div class="tip">
      <div class="left">
        <h2 class="title">LESSION-2  匹配器</h2>
        <p>範例在這邊: tests\unit\Chapter2\Lession1\matchers.spec.js</p>
        <p><a href="https://jestjs.io/docs/using-matchers">https://jestjs.io/docs/using-matchers</a></p>
        <p><a href="https://jestjs.io/docs/expect">https://jestjs.io/docs/expect</a></p>
      </div>  
      <div class="right"><img src="../../../images/matchers.png"></div>
    </div>
    <!-- 內容 -->
    <div class="section-wrapper">
      <div class="section green">
        <div class="type">相等匹配器</div>
        <div class="desc">
          <div>toBe</div>
          <div class="text">類似JS中的 === 完全相等</div>
        </div>
        <div class="desc">
          <div>toEqual</div>
          <div class="text">測試物件內容相等</div>
        </div>
        <div class="desc">
          <div>toBeNull</div>
          <div class="text">測試物件內容是否為空</div>
        </div>
      </div>

      <div class="section red">
        <div class="type">測試真假相關回傳 true/false</div>
        <div class="desc">
          <div>toBeUndefined</div>
          <div class="text"></div>
        </div>
        <div class="desc">
          <div>toBeDefined</div>
          <div class="text"></div>
        </div>
        <div class="desc">
          <div>toBeFalsy</div>
          <div class="text"></div>
        </div>
        <div class="desc">
          <div>toBeTruthy</div>
          <div class="text"></div>
        </div>
      </div>

      <div class="section blue">
        <div class="type">測試數字相關</div>
        <div class="desc">
          <div>toBeGreaterThan</div>
          <div class="text">大於某數字</div>
        </div>
        <div class="desc">
          <div>toBeLessThan</div>
          <div class="text">小於某數字</div>
        </div>
        <div class="desc">
          <div>toBeGreaterThanOrEqual</div>
          <div class="text">大於且等於某數字</div>
        </div>
      </div>

      <div class="section orange">
        <div class="type">測試字串相關是否匹配</div>
        <div class="desc">
          <div>toMatch</div>
          <div class="text">測試物件內容是否"包含"某字串</div>
        </div>
      </div>

      <div class="section purple">
        <div class="type">測試數組相關是否匹配</div>
        <div class="desc">
          <div>toContain</div>
          <div class="text">測試物件內容是否"包含"某個陣列值</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// export default {
//   data(){
//     return{
//       matchersList:[
//         {type:'相等匹配器', desc:'類似JS中的 === 完全相等'},
//         {type:'相等匹配器', desc:'測試對象內容相等'}
//       ]
//     }
//   }
// }
</script>
<style scoped lang="scss">
.tip{
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  .left{
    
    p{
      color: #808080;
      line-height: 25px;
      font-size: 14px;
    }
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
