<template>
  <div class="cox-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item">
        我是首页的孩子:{{cname}}是引用props通过父组件传递的属性
        <p>反转名称：{{reverseName()}} this.xxx.split().reverse().join()</p>
        <button v-on:click="childNameFuc">通过函数重置姓名来影响父组件</button>
      </li>
    </ul>
    </div>
</template>
<script>
import {Bus} from '../main';
export default {
  // props:['name'],
  props:{
        cname:{
            type:String,//需要传递的类型
            required:true,
            default:'可以传默认值'
        },
        childName:{
          type:Function
        }
    },
  methods:{
    reverseName:function(){
      return this.cname.split('').reverse().join('')
    }
    ,
    childNameFuc:function(){//第一种
      // this.childName("GUAL")
    }
  },
  created(){//第三种
    //在组件创建的时候 ，我们需要进行事件的侦听
    Bus.$on("childName",(gname)=>{
      this.cname=gname
    })
  }
}
</script>
<style scoped>
  div{border:2px solid blue}
</style>


