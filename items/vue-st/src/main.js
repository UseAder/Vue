import Vue from 'vue'
import App from './App.vue'
                import axios from 'axios'
                import VueAxios from 'vue-axios'
                Vue.use(VueAxios, axios)
import VueRouter from 'vue-router';                
import {routes} from './router';
Vue.use(VueRouter)
const router =new VueRouter({
  //实例化路由对象
  routes,
  mode:'history',   //还有一个是hash/history  它们的作用是关于地址的#
  scrollBehavior(to,from){//锚点
    if (to.hash) {
      return {selector:to.hash}
    }
  }
})

router.beforeEach((to,from,next)=>{
  console.log('beforeEach Router',to,from);
  next()
})

//全局注册了一个指令
Vue.directive('highlight',{
  bind(el,binding,vnode){
    // el.style.backgroundColor="green";  
    if (binding.arg==="background") {
      el.style.backgroundColor=binding.value
    } else {
      el.style.color=binding.value
    }
    
  }
})

//全局注册了一个过滤器 
Vue.filter('to-lowercase',function(value){
  return value.toLowerCase()
})

//全局注册了一个mixin
Vue.mixin({
  created(){
    console.log('我检测了mixin的调用');
    
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
