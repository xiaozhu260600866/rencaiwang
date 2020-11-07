<template>
	<div class="module-titleBar module_m">
		<div class="mod-shop-title">
			<div class="single-text"><span class="required" v-if="v.isRequire">*</span>{{ v.title }} </div>
			<div class="pl20"><el-radio v-model="ruleForm.title" :label="v.label" v-for="v in v.children"></el-radio></div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	props: ["v"],
	data(){
		return {
			ruleForm:{}
		}	
	}
}

</script>
<style type="text/css" scoped="">
.single-text {
    line-height: 46px;
    font-size: 14px;
    color: #888;
    padding-left: 12px;
}

</style>
