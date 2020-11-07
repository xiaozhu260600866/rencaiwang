<template>
	<div class="module-titleBar module_m bg-f">
		<div class="mod-shop-title">
			<div class="title primary_title">{{ v.title }} </div>
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
