<template>
  <div class="wraaper">
    <h2 class="title">LESSION-2  匹配器</h2>
    <p>範例在這邊</p>
    <div class="section">
      <div class="type">相等匹配器</div>
      <div class="desc">
        <div>toBe</div>
        <div>類似JS中的 === 完全相等</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style scoped lang="scss">
.title{
  font-size: 38px;
}
.section{
  padding: 20px;
  margin: 20px 0;
  font-size: 18px;
  background: white;
  box-shadow: 1px 1px 10px rgba(200,200,200,0.3);
  border-top: 6px solid #48ba88;
  width: 30%;
  
  .type{
    color: #315378;
    font-weight: bold;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 15px;
  }
  .desc{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
}
</style>
