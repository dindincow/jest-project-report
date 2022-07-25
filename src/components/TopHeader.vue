<template>
  <div class="top-header">
    <h2 class="title">{{title}}</h2>
    <slot class="example-link"></slot>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    title:{
      type:String
    },
    link:{
      type:String
    }
  }
}
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
  p.example-link{
    color: #808080;
    line-height: 25px;
    font-size: 14px;
  }
}
</style>
