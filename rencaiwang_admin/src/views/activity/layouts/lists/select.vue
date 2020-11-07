<template>
	<div class="module-titleBar module_m">
		<div class="mod-shop-title">
			<div class="single-text"><span class="required" v-if="v.isRequire">*</span>{{ v.title }} </div>
			<div class="pl20 width100">
				<el-select v-model="ruleForm.value" placeholder="请选择" class="width100 pr20">
					<el-option v-for="v in v.children"  :label="v.label" :value="v.value">
					</el-option>
				</el-select>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	props: ["v"],
	data() {
		return {
			ruleForm: {}
		}
	}
}

</script>
<style type="text/css" scoped="">
.width100{width:100%}
.single-text {
	line-height: 46px;
	font-size: 14px;
	color: #888;
	padding-left: 12px;
}

</style>
