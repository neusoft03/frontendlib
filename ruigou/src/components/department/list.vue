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
					  <router-link v-bind:to="'/department/view/'+dm.no" class="btn btn-default">查看</router-link> 
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/department/add" class="btn btn-default">增加新部门</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios"
	export default{
		name:"DepartmentList",
		data:function(){
			return {
				departmentList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){
			this.getList();
		},
		methods:{
			getList:function(){
				axios.get("http://localhost:8200/department/list/all/page",{
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
					axios.post("http://localhost:8200/department/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>
