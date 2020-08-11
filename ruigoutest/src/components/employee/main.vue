<template>
	<div>
		<RouterView></RouterView>
	</div>
</template>

<script>
	export default{
		name:"EmployeeMain",
		data:function(){
			return {};
		},
		created() {
			this.$parent.mainTitle="员工管理";
		}
	}
</script>

<style>
</style>
