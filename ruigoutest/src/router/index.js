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
//引入员工组件
import EmployeeMain from "./../components/employee/main.vue"
import EmployeeList from "./../components/employee/list.vue"
import EmployeeAdd from "./../components/employee/add.vue"
import EmployeeModify from "./../components/employee/modify.vue"
import EmployeeView from "./../components/employee/view.vue"
//引入爱好组件
import BehaveMain from "./../components/behave/main.vue"
import BehaveList from "./../components/behave/list.vue"
import BehaveAdd from "./../components/behave/add.vue"
import BehaveModify from "./../components/behave/modify.vue"
import BehaveView from "./../components/behave/view.vue"

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
	{
		path:"/employee",name:"employeemain",component:EmployeeMain,
		children:[
			{path:"list",name:"employeelist",component:EmployeeList},
			{path:"add",name:"employeeadd",component:EmployeeAdd},
			{path:"modify/:id",name:"employeemodify",component:EmployeeModify},
			{path:"view/:id",name:"employeeview",component:EmployeeView,props:true},
			{path:"",redirect:"list"}
		]
	},
	{
		path:"/behave",name:"behavemain",component:BehaveMain,
		children:[
			{path:"list",name:"behavelist",component:BehaveList},
			{path:"add",name:"behaveadd",component:BehaveAdd},
			{path:"modify/:no",name:"behavemodify",component:BehaveModify},
			{path:"view/:no",name:"behaveview",component:BehaveView,props:true},
			{path:"",redirect:"list"}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
