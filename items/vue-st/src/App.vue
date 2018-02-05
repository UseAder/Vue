<template>
  <div id="app">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            
            <h1><p v-highlight:color="'red'">自定义指令 Directives</p></h1>
             <h1><p v-local-highlight:color.delayed="'red'">自定义指令 Directives</p></h1>
              <h1><p v-local-highlight-to:color.delayed.hehe="{color:'red',color1:'pink',delay:800}">自定义指令 Directives</p></h1>
          </div>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            <h2>过滤器Filter</h2>
            <p>{{text | to-lowercase | toUppercase}}</p>
           <List></List>
           <button @click="gonggong">appMixin</button>
            <h3 ref='h3'>ff</h3>
          </div>
        </div>
      </div>
      <hr><hr><hr>
      <Animations></Animations>
      <hr>
      <Axios></Axios>
      <hr>
      <hr>
      <hr>
      <RouterApp></RouterApp>
      <router-view name='hea-top'></router-view> <!--通过设置路由名称 ，以router-view指定名称模块的显示-->
      <transition name="slide" mode='out-in'>
        <router-view></router-view> 
      </transition>
      
      <router-view name='hea-bottom'></router-view> 
      <br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import List from './list.vue';
import Animations from './Animations.vue';
import {Mixin} from './Mixin';
import Axios from './Axios/axios.vue';
import RouterApp from './Router/routerApp.vue';
export default {
  mixins:[Mixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text:"我是一个Filter过滤器"
    
    }
  },
  components:{
    List,
    Animations,
    Axios,
    RouterApp
  },
  directives:{
    "local-highlight":{
        bind(el,binding,vnode){
          var delay=0;
          if(binding.modifiers['delayed']){
            delay=3000;
          }
          setTimeout(()=>{
              if (binding.arg==="background") {
                el.style.backgroundColor=binding.value
              } else {
                el.style.color=binding.value
              }    
          },delay)
            
       }
    },
    "local-highlight-to":{
        bind(el,binding,vnode){
          var delay=0;
          if(binding.modifiers['delayed']){
            delay=3000;
          }
           if(binding.modifiers['hehe']){
            let color=binding.value.color;
            let color1=binding.value.color1;
            let currColor=color
             setTimeout(()=>{
               setInterval(()=>{
                   currColor==color1?currColor=color:currColor=color1;
                  if (binding.arg==="background") {
                    el.style.backgroundColor=currColor
                  } else {
                    el.style.color=currColor
                  }    
               },binding.value.delay)
              
            },delay)
            

          }      
       }
    }
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>
    .fade-enter{
        opacity: 0
    }
    .fade-enter-active{
        transition:opacity 1s;
    }
    .fade-leave{
        opacity: 1 
    }
    .fade-leave-active{
        transition:opacity 1S;
        opacity: 0 
    }
/* enter/enter-active/leave/leave-activ */
    .slide-enter{
        opacity: 0
    }
    .slide-enter-active{
        animation: slide-in 1S forwards;
        transition: opacity .5s;
    }
    .slide-leave{
        
    }
    .slide-leave-active{
         animation: slide-out 1S ease-in-out forwards;
         transition:opacity 3s;
         opacity:0;
    }
    @keyframes slide-in{
        from{
            transform: translateY(0px)
        }
        to{
            transform: translateY(20px)
        }
    }
</style>

