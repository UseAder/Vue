<template>
   <div class="row">
       <div class="cox-xs-12">
           <footer><button v-on:click="childNameFuc">非父子通信</button>我是开始{{cname}}</footer>
       </div>
   </div>
</template>
<script>
import {Bus} from '../main';
export default {
    props:['cname'],
        methods:{
            childNameFuc:function(){
                this.cname="13"
                // this.$emit("childName","GUAL") //第二种
                // Bus.$emit("childName","13")
                Bus.changeName(this.cname)
            }
        }
}
</script>
