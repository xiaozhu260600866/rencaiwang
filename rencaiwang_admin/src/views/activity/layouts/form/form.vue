<template>
	<div style="height: 644px;" v-if="lists.length">
		<div class="edit-box">
			<div class="edit-carousel edit-images">
				<div class="edit-shop-header flex-middle flex-center"><h3 class="fs-17">标题栏设置</h3>
				</div>
				<div class="edit-shop-content">
					<div v-if="ruleForm.type == '标题'">
						<myTitle :ruleForm="ruleForm"></myTitle>
					</div>
					<div v-if="ruleForm.type == '文本'">
						<myText :ruleForm="ruleForm"></myText>
					</div>
					<div v-if="ruleForm.type == '多行文本'">
						<myTextarea :ruleForm="ruleForm"></myTextarea>
					</div>
					<div v-if="ruleForm.type == '时间'">
						<myTime :ruleForm="ruleForm"></myTime>
					</div>
					<div v-if="ruleForm.type == '日期'">
						<myDate :ruleForm="ruleForm"></myDate>
					</div>
					<div v-if="ruleForm.type == '单项选择'">
						<myRatio :ruleForm="ruleForm"></myRatio>
					</div>
					<div v-if="ruleForm.type == '多项选择'">
						<myCheckbox :ruleForm="ruleForm"></myCheckbox>
					</div>
					<div v-if="ruleForm.type == '下拉框'">
						<mySelect :ruleForm="ruleForm"></mySelect>
					</div>
					<div v-if="ruleForm.type == '上传图片'">
						<myUpload :ruleForm="ruleForm"></myUpload>
					</div>
					<div v-if="ruleForm.type == '地址'">
						<myAddress :ruleForm="ruleForm"></myAddress>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import myTitle from "./title";
import myText from "./text";
import myTextarea from "./textarea";
import myTime from "./time";
import myDate from "./date";
import myRatio from "./ratio";
import myCheckbox from "./checkbox";
import mySelect from "./select";
import myUpload from "./upload";
import myAddress from "./address";

export default {
	props: ['lists', 'ruleForm'],
	components: {
		myTitle,
		myText,
		myTextarea,
		myTime,
		myDate,
		myRatio,
		myCheckbox,
		mySelect,
		myUpload,
		myAddress
	}
}

</script>
