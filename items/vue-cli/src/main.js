import Vue from 'vue'
import App from './App.vue'
import Home from './Server/Home.vue'
export const Bus =new Vue({
    methods:{
      changeName(name){
        this.$emit('childName',name)
      }
    }
});//非父子通信  概念“建立公交总台”
Vue.component('Home',Home)//我可是全局注册了一个组件
new Vue({
  el: '#app',
  render: h => h(App)
})
