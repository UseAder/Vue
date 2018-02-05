<template>
  <div>
      <p>ID:{{$route.params.id}}</p>
      <router-link class="btn btn-primary" tag='button'
       :to="link">我去USER3</router-link>
  </div>
</template>
<script>
export default {
    data(){
      return {
        link:{
          name:'user3',
          params:{id:this.$route.params.id},
          query:{lacal:'zh',q:100},
          hash:'#data'
        }
      }
    }
}
</script>