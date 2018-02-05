<template>
<div>
   <h3>USER3</h3>
   <P>lacal:{{$route.query.lacal}}</P>
   <p>q: {{$route.query.q}}</p>
   <div style="height:10000px;"></div>
   <p id="data">some text</p>
</div>
</template>
<script>
export default {
  data(){
      return {
          confirmed:false
      }
  },
  //beforeRouteLeave 是路由的钩子函数   离开一个组件
  //beforeRouteEnter  进入一个组件
  beforeRouteLeave: (to, from, next) => {
      if (this.confirmed) {
          next()
      } else {
          if (confirm('are you sure')) {
              next()
          } else {
              next(false)
          }
      }
  }
}
</script>
