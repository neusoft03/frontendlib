<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	//部门的主组件
	export default{
		name:"DepartmentMain",
		data:function(){
			return {};
		},
		created(){
			this.$parent.mainTitle="部门管理";
		}
	}
</script>

<style>
</style>
