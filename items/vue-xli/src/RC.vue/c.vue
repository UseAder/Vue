<template>
    <div class="container">
  
        <button class="btn btn-primary" @click="increment">增加</button>
        <button class="btn btn-primary" @click="decrement(50)">减少</button>
         
    </div>
</template>
<script>
// import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default {
  methods:{
      increment(){
    //       console.log(this.$store);
    //     //   this.$store.state.counter++
        // this.$store.commit('increment')
        this.$store.dispatch('increment')
      },
    //   decrement(){
    //     //   this.$store.state.counter--
    //       this.$store.commit('decrement')
    //   }
    // ...mapMutations([
       
    //     'decrement'
    // ])
    ...mapActions([
       
        'decrement'
    ])
  }
}
</script>
