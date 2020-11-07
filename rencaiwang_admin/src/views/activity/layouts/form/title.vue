<!-- 企业简介 -->
<template>
	<section>
		<el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
			<el-form-item label="标题：" prop="title">
				<el-input v-model="ruleForm.title" style="width:60%" maxlength="32"> </el-input>
			</el-form-item>
		</el-form>
	</section>
</template>
<script type="text/javascript">
export default {
	props: ["ruleForm"],
	data() {
		return {
			siteName: this.getSiteName(),
		}
	},
}

</script>
