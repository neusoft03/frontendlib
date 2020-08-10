<template>
  <!-- Default box -->
  <div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">修改部门</h3>

	  <div class="box-tools pull-right">
		<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
				title="Collapse">
		  <i class="fa fa-minus"></i></button>
		<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
		  <i class="fa fa-times"></i></button>
	  </div>
	</div>
	<div class="box-body">
		  <form method="post" v-on:submit.prevent="modify()">
			  <div class="form-group">
				<label for="exampleInputEmail1">部门编码</label>
				<input type="text" class="form-control" v-model="department.code">
				
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">部门的名称</label>
				<input type="text" class="form-control" v-model="department.name">
			  </div>
			  <button type="submit" class="btn btn-primary">提交</button>
			  <router-link to="/department/list" class="btn btn-default">取消</router-link>
			  <input type="hidden" name="no" value="${dm.no}" />
		  </form>
	</div>
	<!-- /.box-body -->
	
  </div>
  <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"DepartmentModify",
		data:function(){
			return {
				department:{
					no:0,
					code:"",
					name:""
				}
			};
		},
		created() {
			let departmentNo=this.$route.params.no;
			this.getDepartment(departmentNo);
		},
		methods:{
			getDepartment:function(no){
				this.axiosJSON.get("department/get?no="+no).then(result=>{
					this.department=result.data.result;
				});
			},
			modify:function(){
				this.axiosJSON.post("department/modify",this.department).then(result=>{
					alert(result.data.message);
					if(result.data.status=="OK"){
						this.$router.push("/department/list");//编程方式跳转并替换当前组件
					}
				});
			}
		}
	}
</script>

<style>
</style>
