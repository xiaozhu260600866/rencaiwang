<template>
	<div class="module-titleBar module_m">
		<div class="mod-shop-title">
			<div class="single-text"><span class="required" v-if="v.isRequire">*</span>{{ v.title }} </div>
			<div class="pl20 width100">
				<div class="upBtn"><i class="el-icon-plus"></i></div>
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
.upBtn {
    width: 76px;
    height: 76px;
    line-height: 76px;
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    margin-bottom: 12px;
}
</style>
