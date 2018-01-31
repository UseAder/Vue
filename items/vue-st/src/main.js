import Vue from 'vue'
import App from './App.vue'

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

new Vue({
  el: '#app',
  render: h => h(App)
})
