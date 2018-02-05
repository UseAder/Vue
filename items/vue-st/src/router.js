import Home from './Router/Home.vue';
import User from './Router/User.vue';

import User1 from './Router/User1.vue';
import User2 from './Router/User2.vue';
import User3 from './Router/User3.vue';
import Hea from './Router/Hea.vue'
export const routes=[
    {path:'/',
        components:{
        default:Home,//默认
        "hea-top":Hea//在app中使用标签<router-view name='hea-top'></router-view> 
        }
        ,name:'home'},
    {path:'/user',components:{
        default:User,
        'hea-bottom':Hea
    }
  
    ,children:[
        {path:'',component:User1},
        {path:':id',component:User2},
        {path:':id/edit',component:User3,name:'user3'}
    ]},
    //匹配失败 重定向
    {
        path:"/redirect-wo",redirect:'/user'//地址跳转
    },
    {
        path:"/redirect-ni",redirect:{name:'home'}//上面的name对象跳转
    },
    {
        path:'*',redirect:'/'//通配符
    }

]