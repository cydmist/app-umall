import Vue from "vue"
import filtersprice from "./filtersprice"


let obj={
    filtersprice
}
for(var i in obj){
    Vue.filter(i,obj[i])
}