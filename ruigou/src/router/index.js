import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件

//登录组件
import AdminLogin from "./../components/admin/login.vue"

//首页区组件
import HomeMain from "./../components/home/main.vue"
//引入部门的组件
import DepartmentMain from "./../components/department/main.vue"
import DepartmentList from "./../components/department/list.vue"
import DepartmentAdd from "./../components/department/add.vue"
import DepartmentModify from "./../components/department/modify.vue"
import DepartmentView from "./../components/department/view.vue"

import EmployeeMain from "./../components/employee/main.vue"
import BehaveMain from "./../components/behave/main.vue"

Vue.use(VueRouter)

const routes = [
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/",name:"homemain",component:HomeMain},
	{
		path:"/department",name:"departmentmain",component:DepartmentMain,
		children:[
			{path:"list",name:"departmentlist",component:DepartmentList},
			{path:"add",name:"departmentadd",component:DepartmentAdd},
			{path:"modify/:no",name:"departmentmodify",component:DepartmentModify},
			{path:"view/:no",name:"departmentview",component:DepartmentView,props:true},
			{path:"",redirect:"list"}
		]
	},
	{path:"/employee",name:"employeemain",component:EmployeeMain},
	{path:"/behave",name:"behaveMain",component:BehaveMain},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
