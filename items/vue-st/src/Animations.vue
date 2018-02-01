<template>
  <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            <button class="btn btn-primary" @click="show=!show">show</button>             
            <transition name="fade" appear>
                <h1 v-show="show" class="alert alert-info">Animations fade</h1>
            </transition>
            <transition name="slide" type="animation">
                <h1 v-show="show" class="alert alert-info">Animations slide</h1>
            </transition>
            <transition enter-active-class="animated bounce" leave-active-class="animated shake">
                <h1 v-show="show" class="alert alert-info">Animations getHub</h1>
            </transition>
            <select v-model="alertAnimation" class="form-control" @click="show=!show">
                <option value="fade">fade</option>
                <option value="slide">slide</option>
            </select>
            <br>
            <transition :name="alertAnimation" mode="out-in">
                <h1 class="alert alert-info" v-if="show" key="info">ANIMATIONS MODE</h1>
                <h1 class='alert alert-warning' v-else key="warning">animations mode</h1>
            </transition>
            <transition :name="alertAnimation" mode="out-in">
                <h1 class="alert alert-info" v-if="show" key="info">ANIMATIONS MODE</h1>
                <h1 class='alert alert-warning' v-else key="warning">animations mode</h1>
            </transition>

            <hr>
            <button class="btn btn-primary" @click="load=!load">load</button>
            {{load}}             
            <transition 
             @before-enter="beforeEnter"
             @enter="Enter"
             @after-enter="afterEnter"
             @enter-cancelled="enterCancelled"

             @before-leave="beforeLeave"
             @leave="Leave"
             @after-leave="afterLeave"
             @leave-cancelled="leaveCancelled"
             appear>
                <h1 v-if="load" class="alert alert-info" style="width:100px;height:100px;background-color:green"></h1>
            </transition>
          </div>
        </div>
        <hr>
        <button class="btn btn-primary"
          @click="selectComponent=='Success'?selectComponent='Danger':selectComponent='Success'"   >
            component
        </button>
        <transition name="fade" mode="out-in">
            <component :is="selectComponent"></component>
        </transition>
        <ul class="list-group">
            <transition-group name="slide" type="animation" mode="out-in">
                <li v-for="(number,i) in numbers" :key="number" @click="removegroup(i)" class='list-group-item' style="cursor:pointer">hehe</li>
            </transition-group>
        </ul>
        <button class="btn btn-primary" @click="addgroup">add group</button>
        <br> <br>     
    </div>
</template>
<script>
import Success from './Animation/Success.vue';
import Danger from './Animation/Danger.vue';
export default {
  components:{
      Success,
      Danger
  },
  data(){
      return{
          show:true,
          alertAnimation:"fade",
          load:true,
          loadWidth:100,
          selectComponent:'Success',
            numbers:['t1','t2','t3','t4','t5']

      }
  },
  methods:{
      addgroup(){
          const pos=Math.floor(Math.random()*this.numbers.length);
          this.numbers.splice(pos,0,this.numbers.length+1)
      },
      removegroup(i){
          this.numbers.splice(i,1)
      },
      beforeEnter(el){
          console.log('beforeEnter 进入之前');
        //    console.log(el);
        el.style.width=this.loadWidth+'px'
          
      },
       Enter(el,done){
          console.log('Enter 进入');
          let round=1;
          const interval=setInterval(()=>{
              el.style.width=(this.loadWidth+round*10)+'px';
              round++;
              if (round>20) {
                  clearInterval(interval);
                  done();
              }
          },20)
      },
       afterEnter(){
          console.log('afterEnter 进入之后');
          
      },
       enterCancelled(){
          console.log('enterCancelled 取消进入');
          
      },

       beforeLeave(el){
          console.log('beforeLeave 离开之前');
          this.loadWidth=300;
          el.style.width=this.loadWidth+'px';
      },     
       Leave(el,done){
          console.log('Leave 离开');
           let round=1;
          const interval=setInterval(()=>{
              el.style.width=(this.loadWidth-round*10)+'px';
              round++;
              if (round>20) {
                  clearInterval(interval);
                  done();
              }
          },20)
      },
       afterLeave(){
          console.log('afterLeave 离开之后');
          
      },
       leaveCancelled(){
          console.log('leaveCancelled 取消离开');
          
      }
       
    
  }
}
</script>
<style>
    .fade-enter{
        opacity: 0
    }
    .fade-enter-active{
        transition:opacity 1s;
    }
    .fade-leave{
        opacity: 1 
    }
    .fade-leave-active{
        transition:opacity 1S;
        opacity: 0 
    }
/* enter/enter-active/leave/leave-activ */
    .slide-enter{
        opacity: 0
    }
    .slide-enter-active{
        animation: slide-in 1S forwards;
        transition: opacity .5s;
    }
    .slide-leave{
        
    }
    .slide-leave-active{
         animation: slide-out 1S ease-in-out forwards;
         transition:opacity 3s;
         opacity:0;
    }
    @keyframes slide-in{
        from{
            transform: translateY(0px)
        }
        to{
            transform: translateY(20px)
        }
    }
</style>
