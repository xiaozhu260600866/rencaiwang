<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view class="result-box">
			<!-- 头部 -->
			<top-header></top-header>
			
			
			<view class="question-record">
				<view class="shadow-block ptb12">
					<view class="content">世界儿童日（11月20日）是一个由联合国发起的纪念日，其目的是为促进儿童保护、福利和教育等事业的发展。旨在就儿童问题促进国际共识，提高全世界儿童的权利意识，改善儿童福祉。1954年12月14日，联合国大会通过第836(IX)号决议，建议所有国家设立世界儿童</view>
					<view class="time pt8 fs-13 fc-9">咨询日期：<text class="Arial">2020-11-20 11:41:23</text></view>
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
				formAction: '/policy/lists',
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
			
			//this.ajax();
		},
		methods: {
			
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>