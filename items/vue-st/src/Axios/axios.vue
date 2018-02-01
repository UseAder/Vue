<template>
  <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            http球球
            <button @click="getdata" class="btn">GETdata</button>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    methods:{
        getdata(){
            // console.log(this.axios);
            this.$http.get('http://localhost:3000/posts').then((response) => {
                console.log(response.data)
                })
        }
    }
//   Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })
// this.$http.get(api).then((response) => {
//   console.log(response.data)
// })
}
</script>
