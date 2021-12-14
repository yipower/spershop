import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/City',
            name:'City',
            component:City
        },
        {
            path:'/Detail',
            name:'Detail',
            component:Detail
        }
    ]
})
