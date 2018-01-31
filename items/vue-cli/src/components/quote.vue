<template>
  <div>
      <textarea name="" id="" cols="30" rows="10" v-model="quote"></textarea>
      <button @click.prevent="quoteNew">quoteNew</button>
  </div>
</template>
<script>
// import New from './new'
export default {
  data(){
      return {
          quote:''
      }
  },
  methods:{
      quoteNew(){
          this.$emit('quoteAdd',this.quote)
      }
  }
}
</script>
