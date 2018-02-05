<template>
    <div class="container">  {{gaicounter}}</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    // counter(){
    //     // return this.$store.state.counter*2
    //     return this.$store.getters.gaicounter
    // }
    ...mapGetters([
        'gaicounter'
    ])
  }
}
</script>
