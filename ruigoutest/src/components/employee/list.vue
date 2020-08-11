<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">员工管理</h3>
		</div>
		<div class="row">
			<div clas="col-md-12">
				<form>
				  <div class="form-row">
				    <div class="form-group col-md-3">
				      <label for="inputEmail4">部门</label>
				      <select class="form-control" v-model="departmentNo" v-on:change="getListByCondition" >
						  <option value="0">所有部门</option>
						  <option v-for="dm in departmentList" v-bind:key="dm.no" v-bind:value="dm.no">{{dm.name}}</option>
					  </select>
				    </div>
				    <div class="form-group col-md-3">
				      <label for="inputPassword4">入职开始日期</label>
				      <input type="date" class="form-control" v-model="startDate" v-on:change="getListByCondition">
				    </div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">入职截止日期</label>
					  <input type="date" class="form-control" v-model="endDate" v-on:change="getListByCondition">
					</div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">姓名检索</label>
					  <input type="text" class="form-control" v-model="nameKey" v-on:change="getListByCondition">
					</div>
				  </div>
				</form>
			</div>
		</div>
		<div class="box-body">
			  <table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">账号</th>
				  <th scope="col">姓名</th>
				  <th scope="col">性别</th>
				  <th scope="col">年龄</th>
				  <th scope="col">工资</th>
				  <th scope="col">生日</th>
				  <th scope="col">入职日期</th>
				  <th scope="col">部门</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="em in employeeList" v-bind:key="em.id">
				<td>{{em.id}}</td>
				<td>{{em.name}}</td>
				<td>{{em.sex}}</td>       
				<td>{{em.age}}</td>
				<td>{{em.salary}}</td>
				<td>{{em.birthday}}</td>
				<td>{{em.joinDate}}</td>
				<td>{{em.department.name}}</td>
				  <td>  
					<router-link to="/employee/modify/1001" class="btn btn-default">修改 </router-link>
					<a href="#" class="btn btn-default">删除 </a> 
					<router-link v-bind:to="{name:'employeeview',params:{id:em.id}} " class="btn btn-default">查看</router-link>   
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<div class="row">
			<div class="col-md-6">
				个数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
			</div>
			<nav>
				<ul class="pagination justify-content-end">
					<li class="page-item"><a class="page-link" href="#" v-on:click="toFirstPage()">首页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toPreviousPage()">上页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toNextPage()">下页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toLastPage()">末页</a></li>
				</ul>
			</nav>
		</div>
		<!-- /.box-body -->
		<router-link to="/employee/add" class="btn btn-default">增加新员工</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//员工列表组件
	export default {
		name:"EmployeeList",
		data(){
			return {
				employeeList:[],
				departmentList:[],
				count:0,
				pageCount:0,			
				rows:3,
				page:1,
				departmentNo:0,
				lowAge:0,
				highAge:0,
				startDate:null,
				endDate:null,
				nameKey:"",
				sex:""		
			};
		},
		created(){
			this.$parent.$parent.subTitle="员工列表";
			this.getDepartmentList();
			this.getListByCondition();
		},
		methods:{
			getListByCondition(){
				this.axiosJSON.get("/employee/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						departmentNo:this.departmentNo,
						nameKey:this.nameKey,
						startJoinDate:this.startDate,
						endJoinDate:this.endDate
					}					
				}).then(result=>{
					if(result.data.status=="OK"){
						this.employeeList=result.data.list;
						this.count=result.data.count;
						this.pageCount=result.data.pageCount;
					}
				});
			},
			getDepartmentList(){
				this.axiosJSON.get("/department/list/all").then(result=>{
					if(result.data.status=="OK"){
						this.departmentList=result.data.list;
					}
					else{
						alert(result.data.message);
					}
				});
			},
			toFirstPage(){
				this.page=1;
				this.getListByCondition();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getListByCondition();
				}
				else{
					alert("已经是第1页了");
				}
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getListByCondition();
				}
				else{
					alert("已经是最后一页了");
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getListByCondition();
			}
			
		}
	}
</script>

<style>
</style>
