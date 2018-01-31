<template>
  <div id="app">
    {{msg}}
    <Header></Header>
    <hr>
    <Home></Home>
    <hr>
    <hr><hr><hr><hr><hr>

  
    <button @click="select='Cat'">Cat</button>
    <button @click="select='New'">New</button>
    <button @click="select='Users'">Users</button>
    {{select}}

    <keep-alive>
      <component :is="select" :quotes="quotes" @quoteDeleted="deleteQuote">
        <p slot="p">存在slot的name是p的slot标签 p标签显示 下面的h1 没有显示哦</p>
        <h1>slot属性没定义  我显示的是默认没有定义name的slot</h1>
      </component>
    </keep-alive>
  <hr>
  <Quote @quoteAdd="quotess"></Quote>
  <Hea :quoteCount='quotes.length' :maxQuotes='maxQuotes'></Hea>
    <br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import Footer from './Shared/Footer.vue';
import Header from './Shared/Header'
import Hea from './Shared/hea'
import Cat from './components/cat.vue'
import New from './components/new.vue'
import Users from './components/users.vue'
import Quote from './components/quote'
export default {
  data () {
    return {
      quotes:['我竟然是一个数组','我竟然是一个数组'],
      msg: 'Welcome to Your Vue.js App',
      select:"users",
      maxQuotes:5
    }
  },
  components:{
    'Header':Header,
    Footer,
    Cat,
    Users,
    New,Quote,Hea

  },
 methods:{
   quotess(quote){
     if (this.quotes.length<this.maxQuotes) {
       this.quotes.push(quote)
     } else {
       
     }
     
   },
   deleteQuote(index){
     this.quotes.splice(index,1)
   }
 }

}
</script>

<style>

</style>
