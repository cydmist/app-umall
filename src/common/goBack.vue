<template>
<span @click="$router.go(-1)">返回</span>
     
</template>

<script>
export default {

}
</script>

<style scoped>
    span{
        font-size: .5rem;
        position: fixed;
        top: 0.1rem;
        left:0.1rem;
        color: #fff;
    }
</style>