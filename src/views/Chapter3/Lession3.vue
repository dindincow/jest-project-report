<template>
  <div class="wrapper">
    <TopHeader title="CH3-LESSION-3 資料更新2">
    <!-- 標題 -->
      <p class="example-link">範例在這邊: tests\unit\Chapter3\lession3.spec.js</p>
    </TopHeader>
    <!-- 內容 -->
    <div class="container">
      <div class="left">
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>對下面畫面寫測試案例</h2>
          <p>1.預期-法師一定要在畫面上</p>
          <p>2.預期-畫面上人物有3個人</p>
          <p>3.預期-公主的名子要叫 NANA </p>
          <p>4.預期-Goods 組件要在畫面上</p>
        </div>
        <!-- 測試案例的畫面 -->
        <div class="test-case-wrapper">
          <div class="img-wrapper princess"><img src="@/images/CH3-LESSION1-img2.png"></div>
          <div class="btn" @click="openGoods">開啟物品欄</div>
        </div>
        <Goods :isShowGoods="isShowGoods" @close="close"/>
      </div>
      <!-- 筆記 -->
      <div class="right">
        <div class="section">
          <h2><span class="iconfont icon-moshubang icon"></span>重點筆記</h2>
          <div class="note-title">
            <p>1. 渲染組件有2種方法</p>
            <ul>
              <li><span class="fw-blod fc-red">shallowMount ( )</span> : 淺層渲染當前組件</li>
              <li><span class="fw-blod fc-red">mount ( )</span> : 全部渲染該組件和子組件</li>
            </ul>
          </div>
          <div class="note-title">
            <p>2. shallowMount 和 mount 涵式包裹的組件，可以拿到該組件的實例，都常叫 <span class="fw-blod fc-red"> wrapper </span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from '@/components/TopHeader'
import Goods from './components/Goods'
export default {
  components:{
    TopHeader,
    Goods
  },
  data(){
    return{
      isShowGoods:false
    }
  },
  methods:{
    openGoods(){
      this.isShowGoods = true
    },
    close(){
      this.isShowGoods = false
    }
  }
}
</script>
<style scoped lang="scss">
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

.test-case-wrapper{
  display: flex;
  .img-wrapper{
    width: 150px;
    p{
      margin-top: 15px;
      text-align: center;
      font-size: 16px;
      font-weight: 900;
    }
  }
}

.right{
  margin-left: 80px;
  flex-grow: 1;
  .note-title{
    margin-bottom: 20px;
    p{
      font-weight: 700;
    }
  }
  ul li{
    line-height: 32px;
    text-indent: 20px;
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

.img-pig{
  width: 55%
}



</style>
