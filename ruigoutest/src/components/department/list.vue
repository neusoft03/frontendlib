<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">部门管理</h3>
		</div>
		<div class="box-body">
			  <table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">编码</th>
				  <th scope="col">名称</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in departmentList" v-bind:key="dm.no">
				  <td>{{dm.no}}</td>
				  <td>{{dm.code}}</td>
				  <td>{{dm.name}}</td>
				  <td>  
					  <router-link v-bind:to="'/department/modify/'+dm.no" class="btn btn-default">修改</router-link>  
					  <a href="#" v-on:click="deleteDepartment(dm.no)" class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="{name:'departmentview',params:{no:dm.no}}" class="btn btn-default">查看</router-link> 
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
		<router-link to="/department/add" class="btn btn-default">增加新部门</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios"
	export default{
		name:"EmployeeList",
		data:function(){
			return {
				departmentList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0
			};
		},
		created(){
			this.getList();
			this.$parent.$parent.subTitle="部门列表";
		},
		methods:{
			getList:function(){
				this.axiosJSON.get("department/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.departmentList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteDepartment:function(no){
				let checkresult=window.confirm("您确认删除此部门吗？");
				if(checkresult){
					this.axiosJSON.post("department/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
			},
			toFirstPage(){
				this.page=1;
				this.getList();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
				else{
					alert("当前已经是第一页了");
				}
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getList();
				}
				else{
					alert("当前已经是最后一页了");
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getList();
			}
		}
	}
</script>

<style>
</style>
