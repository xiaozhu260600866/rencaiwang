<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="result-box" v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			<view class="question-record" >
				<view class="shadow-block ptb12" v-for="v in data.lists.data">
					<view class="content">{{v.remark}}</view>
					<view class="time pt8 fs-13 fc-9">咨询日期：<text class="Arial">{{v.created_at}}</text></view>
				</view>
			</view>
			<!-- 脚部 -->
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	import dxPrompt from "doxinui/components/diag/prompt"
	export default {
		components:{topHeader,downFooter,dxListCell,dxPrompt},
		data() {
			return {
				formAction: '/policyMatch/order-lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{},
			}
		},
		onReachBottom() {
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			this.ajax();
		},
		onShareAppMessage() {
			return this.shareSource(this, '人才网');
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
						
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>