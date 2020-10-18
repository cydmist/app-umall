import Vue from "vue"
import goBack from "./goBack"
import boxHeader from "./boxHeader"

let obj={
    goBack,
    boxHeader,
    
}
for(let i in obj){
    Vue.component(i,obj[i])
}