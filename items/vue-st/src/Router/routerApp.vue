<template>
  <div class="container">
    <ul class="nav nav-pills">
      <!-- <li role="presentation">
        <a href="/">HOME</a>
      </li>
      <li role="presentation">
        <a href="/user">USER</a>
      </li> -->
      <router-link to="/" tag="li" active-class="active" exact>HOME</router-link>
      <router-link to="/user" tag="li" active-class="active">USER</router-link>
     

  </ul>
  </div>
</template>
<script>
export default {
 
}
</script>
<style scoped>
.active{color:red}
</style>
