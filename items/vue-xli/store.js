import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//进行接口暴露 暴露一个stroe仓库的对象 这个对象是Vuex的Store仓库的实例对象
export const store =new Vuex.Store({
    //state的取值是用this.$store.state.xxx，我们使用 只进行数据设置
    state:{//state是Vuex仓库的一个状态内容
        counter: 0,
        value:1
    },
    //getters是数据执行的地方
    getters:{
        gaicounter:state=>{
            return state.counter*2
        },
        value:state=>{
            return state.value
        }
    },
    //mutations是vuex中唯一执行数据修改的地方
    //mutations只支持同步的数据变化操作，它不支持异步的数据变化操作
    mutations:{
        increment:state=>{
            state.counter++//进行mutations的调用通过可以以commit的方式进行操作
        },
        decrement:(state,payload)=>{
            console.log('mutions:',payload)
            state.counter=state.counter-payload
            // state.counter--
        },
        updataValue:(state,payload)=>{
            // console.log(payload);
            state.value=payload
        }
    },
    //所以 我们可以通过actions进行异步的处理，利用actions进行调用mutations的方法来进行数据的修改  程序会先执行actions 在执行mutations
    actions:{
        increment:context=>{//context是上下文关系
            setTimeout(()=>{
                context.commit('increment')//commit调用mutations的方法
            },2000)
          
        },
        decrement:({commit},payload)=>{//第二个参数接收c.vue的减少传递来的值 在传递给mutations 数据修改
           commit('decrement',payload)//commit调用mutations的方法
        },
        updataV:({commit},payload)=>{
            commit('updataValue',payload)//commit调用mutations的方法
         }
    }
})