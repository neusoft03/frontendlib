<template>
  <!-- Default box -->
  <div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">部门信息</h3>

	  <div class="box-tools pull-right">
		<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
				title="Collapse">
		  <i class="fa fa-minus"></i></button>
		<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
		  <i class="fa fa-times"></i></button>
	  </div>
	</div>
	<div class="box-body">
		  <form>
			  <div class="form-group">
				<label for="exampleInputEmail1">部门编码:</label>
				<span>	{{department.code}}</span>
				
			  </div>
			  <div class="form-group">
				<label for="exampleInputPassword1">部门的名称:</label>
				<span>	{{department.name}}</span>
			  </div>
			  <router-link to="/department/list" class="btn btn-default">返回</router-link>
		  </form>
	</div>
	<!-- /.box-body -->
	
  </div>
  <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"DepartmentView",
		data:function(){
			return {
				department:{
					no:0,
					code:"",
					name:""
				}
			};
		},
		//这是通过转发而得到的参数
		//这也是组件的对象的属性，可直接用this.xx的方式访问
		//这样就不用通过this.$route.param.xxx来获取携带的参数了
		props:{
			no:{required:true}
		},
		created() {
			this.getDepartment();
			this.$parent.$parent.subTitle="查看部门";
		},
		methods:{
			getDepartment:function(){
				this.axiosJSON.get("department/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					if(result.data.status=="OK"){
						this.department=result.data.result;
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
