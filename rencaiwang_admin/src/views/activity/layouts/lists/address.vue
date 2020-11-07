<template>
	<div class="module-titleBar module_m bg-f">
		<div class="mod-shop-title flex-middle flex-between">
			<div class="title primary_title"><span class="required" v-if="v.isRequire">*</span>{{ v.title }} </div>
			<button class="dx-btn dx-btn-blue mr10">导航</button>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	props:["v"]
}	
</script>
<style type="text/css" scoped="">
.primary_title {
    padding: 30px 0 15px 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: 700;
    font-size: 16px
}	
</style>
