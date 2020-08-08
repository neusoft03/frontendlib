import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件

//登录组件
import AdminLogin from "./../components/admin/login.vue"

//首页区组件
import HomeMain from "./../components/home/main.vue"
import DepartmentMain from "./../components/department/main.vue"
import EmployeeMain from "./../components/employee/main.vue"
import BehaveMain from "./../components/behave/main.vue"

Vue.use(VueRouter)

const routes = [
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/department",name:"departmentmain",component:DepartmentMain},
	{path:"/employee",name:"employeemain",component:EmployeeMain},
	{path:"/behave",name:"behaveMain",component:BehaveMain},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
