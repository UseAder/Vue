<template>
  <div>
     <!-- <Footer @childName="name=$event" :name="name"></Footer> -->
     <Footer :cname="name" @childName="name=$event"></Footer>
      {{status}}
      <button v-on:click="changeStatus" >你真是首页？</button>
      {{name}}
      <!--父组件给组件调用设置了一个属性-->
      <!--既然可以进行属性的传递，那么也可传递字符串。数组。对象-->
      <!-- <home-zi v-for="i in a" :key="i" :name="name" :childName="childName"></home-zi> 第一种-->
      <!-- <home-zi v-for="i in a" :key="i" :name="name" @childName="name=$event"></home-zi>   第二种 -->
      <home-zi v-for="i in a" :key="i" :cname="name"></home-zi>     
  </div>
</template>
<script>
import Footer from '../Shared/Footer';
import HomeZi from './HomeZi.vue';
export default {
  data(){
      return {
          status:'home页面',
          a:[1,2,3],
          name:"vune"
      }
  },
  methods:{
      changeStatus(){
          this.status="别看了,我真的首页"
      }
    //   ,
    //   childName(req){//第一种
    //       this.name=req
    //   }
  },
  components:{
      "home-zi":HomeZi,
      Footer
  }
}
</script>
