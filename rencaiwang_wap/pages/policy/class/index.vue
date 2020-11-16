<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="/static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			
			<view class="policy-class">
				<view class="class-lists" v-for="item in data.class" @click="goto('/pages/policy/town/index?class_id='+item.id,1)">
					<dx-list-msg :imgSrc="item.getcover" :name="item.name" :content="item.remark" arrow padding="12rpx 30rpx" nameColor="#404040"
					 conColor="#737373" :conTop="0"></dx-list-msg>
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
	import dxListMsg from "doxinui/components/list-cell/list-msg"
	export default {
		components:{topHeader,downFooter,dxListMsg},
		data() {
			return {
				formAction: '/policyMatch/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				policyClass:[
					{cover:'/static/images/icon.png',name:'创业扶持',remark:'创业扶持相关政策'},
					{cover:'/static/images/icon.png',name:'奖励相应补贴',remark:'创业扶持相关政策'},
					{cover:'/static/images/icon.png',name:'创业扶持',remark:'创业扶持相关政策'},
					{cover:'/static/images/icon.png',name:'奖励相应补贴',remark:'创业扶持相关政策'},
					{cover:'/static/images/icon.png',name:'创业扶持',remark:'创业扶持相关政策'},
					{cover:'/static/images/icon.png',name:'奖励相应补贴',remark:'创业扶持相关政策'}
				]
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