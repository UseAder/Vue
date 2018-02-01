<template>
  <div>
    <input type="text" v-model="filterText"/>
    <ul>
    <li v-for="fruits in filter" :key="fruits">
        {{fruits}}
    </li>
    </ul>
    <button @click="gonggong">listMixin</button>
    <h3 ref='h3'></h3>
  </div>
</template>
<script>
import {Mixin} from './Mixin'
export default {
  mixins:[Mixin],
  data () {
    return {    
      fruits:['apple','banana','monggo'],
      filterText:''
    }
  },
  computed:{
    filter(){
      return this.fruits.filter(element=>{//这里实现了了一个循环
        // console.log(element)
        return element.match(this.filterText)
      })
    }
  }
}
</script>
