<template>
  <div id="app">
     <div class="container">
       <C></C>
       <R></R>
       <input type="text" :value="value" @input="updataValue">
        <input type="text" v-model="value">
    </div>
  </div>
</template>

<script>

import C from './RC.vue/c.vue';
import R from './RC.vue/r.vue';
import {mapActions} from 'vuex'
export default {
 computed:{
  //  value(){
  //    console.log('VALUE:',this.$store.getters);   
  //    return this.$store.getters.value;
  //  }
    value:{
      get(){
        return this.$store.getters.value;//取值
      },
      set(value){
        this.$store.dispatch('updataV',value) 
      }
    }
   
 },
  methods:{
    updataValue(event){
      // console.log(event.target.value);
      this.$store.dispatch('updataV',event.target.value)   //dispatch调用store中的actions
    }
  },
  components:{
    C,
    R
  }
}
</script>

<style>

</style>
