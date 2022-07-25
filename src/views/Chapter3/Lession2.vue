<template>
  <div class="wrapper">
    <!-- 標題 -->
    <TopHeader title="CH3-LESSION-2 測試組件資料更新">
      <p class="example-link">範例在這邊: tests\unit\Chapter3\lession2.spec.js</p>
    </TopHeader>
    <!-- 內容 -->
    <div class="container">
      <div class="left">
        <div class="section">
          <h2><span class="iconfont icon-tips_chat icon"></span>對下面畫面寫測試案例</h2>
          <p>1.預期-點即攻擊按鈕</p>
          <p>2.預期-出現火球攻擊綠龍</p>
          <p>3.預期-被攻擊的綠龍血量-50HP </p>
          <p>4.預期-綠龍血量=0時，龍消失</p>
        </div>
        <!-- 測試案例的畫面 -->
        <div class="test-case-wrapper">
          <div class="img-wrapper mage"><img src="@/images/CH3-LESSION1-img1.png"></div>
          <div class="img-wrapper btn" @click="attack">
            <img src="@/images/CH3-LESSION2-img3.png">
          </div>
          <div class="img-wrapper dragon">
            <img class="dragon-img" v-if="hp!==0" src="@/images/CH3-LESSION2-img1.png">
            <div class="hp">HP : <span class="fc-red hpNumber">{{hp}}</span></div>
          </div> 
          <div class="img-wrapper fire" v-if="isShowfire"><img src="@/images/CH3-LESSION2-img2.png"></div>
        </div>
 
      </div>
      <!-- 筆記 -->
      <div class="right">
        <div class="section">
          <h2><span class="iconfont icon-moshubang icon"></span>重點筆記</h2>
          <div class="note-title">
            <p> 1.判斷 dom 是否存在於畫面上有2個方法</p>
            <ul>
              <li><span class="fw-blod fc-red">isVisible ( )</span> : 物件被隱藏，但還是在畫面上</li>
              <li><span class="fw-blod fc-red">exists ( )</span> : 物件是否真的存在</li>
            </ul>
          </div>
          <div class="note-title">
            <p>2. <span class="fw-blod fc-red">setData()</span>修改該組件 data 值，為異步操作，只能用在 option aip 中</p>
          </div>
          <div class="note-title">
            <p>3. <span class="fw-blod fc-red">trigger() </span>模擬事件觸發，為異步操作</p>
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
      hp: 150,
      isShowfire: false,
      isAttacking: false,
    }
  },
  methods:{
    attack(){
      if(this.isAttacking) return
      if(this.hp !== 0){
        console.log('123123')
        this.isAttacking = true;
        this.isShowfire = true;
        setTimeout(()=>{
          this.hp = this.hp - 50;
          this.isShowfire = false;
          this.isAttacking = false;
        },500)
      } 
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
  position: relative;
  .img-wrapper{
    width: 150px;
    p{
      margin-top: 15px;
      text-align: center;
      font-size: 16px;
      font-weight: 900;
    }
    &.btn{
      width: 100px;
      cursor: pointer;
      top: 50px;
      left: 140px;
      position: absolute;
    }
    &.fire{
      position: absolute;
      width: 80px;
      top: 80px;
      left: 238px;
    }
    &.dragon{
      width: 240px;
      margin-left: 50px;
      text-align: center;
      .hp{
        font-size: 25px;
      }
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
