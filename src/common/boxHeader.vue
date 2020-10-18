<template>
    <div class="boxH">
      <span>{{$route.name}}</span>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.boxH{
  width: 100vw;
  height: 0.8rem;
  line-height: .8rem;
  background: #f90;
  position: fixed;
  top: 0;
  left: 0;
}
span{
  display: block;
  font-size: 0.6rem;
  text-align: center;
  color: #fff;
}
</style>