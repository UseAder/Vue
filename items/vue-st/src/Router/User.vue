<template>
<div class="container">
  
  <div>USER</div>
  <!-- <p>ID:{{id}}</p> -->
  <button @click="navhome" class="btn btn-primary">通过methos方式跳转到HOME页</button>
  <router-view></router-view>
</div>  
</template>
<script>
export default {
  // data(){
  //   return {
  //     id:this.$route.params.id
  //   }
  // },
  // watch:{
  //   '$route'(to,from){
  //     this.id=to.params.id
  //   }
  // },
  methods:{
    navhome(){
      this.$router.push({path:'/'})
    }
  }
}
</script>
