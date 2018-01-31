<template>
  <div class="container">
      <div class="col-xs-12">
          <slot name='h1'></slot>
          <slot name='p'></slot>
          <slot>默认的slot</slot>
      </div>

      <New v-for="(i,index) in quotes" :key="i" @click.native="deleteQuote(index)">
             {{i}}
    </New>
  </div>
</template>
<script>
import New from './new';
export default {
   props:['quotes'],
    components:{
        New
    },
    methods:{
        deleteQuote(index){
            this.$emit('quoteDeleted',index)
        }
    }
}
</script>

