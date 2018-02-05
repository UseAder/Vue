<template>
<div>
    <P> USER1 总线</P>
    <ul class="list-group">
         
         <router-link to="/user/1" tag="li" active-class="list-group-item ">USER 1</router-link>
         <router-link to="/user/2" tag="li" active-class="list-group-item">USER 2</router-link>
         <router-link to="/user/3" tag="li" active-class="list-group-item">USER 3</router-link>
     
    </ul>
</div>  
</template>
<script>
export default {
  
}
</script>
