<template>
    <div>
        <slot></slot>
        {{count}}
       
        <button v-on:click="oncount">count++</button>
    </div>
</template>
<script>

export default {
   
    data(){
        return {
            count:0
        }
    }
    ,
    methods:{
        oncount(){
            this.count++
        }
    },
    activated(){
        console.log('激活状态');
        
    },
    deactivated(){
        console.log('休眠');
        
    }
      
}
</script>
