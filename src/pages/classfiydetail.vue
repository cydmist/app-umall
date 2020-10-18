<template>
  <div>
      <box-header></box-header>
      <go-back></go-back>
      <div class="page">

        <div class="list">
            <a href="javascrip:;" @click="Toclassfiygooddetail(item.id)" v-for="item in list" :key="item.id">
                
                <img class="item-img" :src="'http://localhost:3000/' + item.img" alt="" />
                <div class="item-con">
                    <div class="goodsname">{{item.goodsname}}</div>
                    <div class="price">{{item.pirce}}</div>
                    <div class="btn">立即抢购</div>
                </div>
            </a>
        </div>
      </div>
  </div>
</template>

<script>
import {reqGoodclassfiy} from "../utils/request"
import {reqGetgooddetail} from "../utils/request"
export default {
    
    methods:{
        Toclassfiygooddetail(id){
            
            this.$router.push("/gooddetail?id="+id);
        }
    },
    data(){
        return {
            list:[],
           
        }
    },
    
    mounted(){
        var fid = this.$route.query.fid;
        reqGoodclassfiy(fid).then(res=>{
            this.list=res.data.list;
        });
        
    }
}
</script>

<style scoped>
.btn{
    padding: .2rem .4rem;
    background: #f90;
    color: #fff;
    display: inline-block;
    border-radius: .2rem;
}
.price{
    color: #e23838;
    font-size: .4rem;
}
.goodsname{
    font-size: .38rem;
    color: #333;
    line-height: .6rem;
    margin-bottom: .2rem;
}

.item-con{
    flex: 1;
    margin-left: .3rem;
} 
.item-img{
    width: 2rem;
    height: 2rem;
    border-radius: .2rem;
}
.list a{
    display: flex;
    padding: .2rem;
}
.page{
    padding-top: .8rem;
}

</style>