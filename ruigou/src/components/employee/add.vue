<template>
  <!-- Default box -->
  <div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">增加部门</h3>

	</div>
	<div class="box-body">
		  <form action="add.mvc" method="post">
			  <div class="form-group">
				<label for="exampleInputEmail1">部门编码</label>
				<input type="text" class="form-control" name="code" >
				<small id="emailHelp" class="form-text text-muted"></small>
			  </div>
			  <div class="form-group">
				<label for="exampleInputPsassword1">部门的名称</label>
				<input type="text" class="form-control" name="name">
			  </div>
			  <button type="text" class="btn btn-primary">提交</button>
		  </form>
	</div>
	<!-- /.box-body -->
	
  </div>
  <!-- /.box -->
</template>

<script>
	export default{
		name:"EmployeeAdd",
		data:function(){
			return {};
		}
	}
</script>

<style>
</style>
