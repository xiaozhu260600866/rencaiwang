<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<top-header></top-header>
			<view class="activity-show p30">
				<view class="cover">
					<image class="img" :src="data.detail.firstCover" mode="widthFix"></image>
				</view>
				<view class="show-top fc-4 pb10">
					<view class="show-title">{{data.detail.title}}</view>
					<view class="fs-15">报名开始时间：<text class="Arial">{{data.detail.start_at}}</text></view>
					<view class="fs-15">报名截止时间：<text class="Arial">{{data.detail.end_at}}</text></view>
					<view class="fs-15">举办单位：<text class="Arial">{{data.detail.activity_unit}}</text></view>
					<view class="mtb12">
						<dx-button type="primary" block v-if="!data.detail.order" @click="canSignUp">我要报名</dx-button>
						<dx-button type="danger" block v-else @click="goto('/pages/activity/signup/index?id='+data.detail.id+'&order_id='+data.detail.order.id)">取消报名</dx-button>
					</view>
					<view class="row fs-13">
						<view>发布单位：{{data.detail.unit_name}}</view>
						<view class="Arial">发布时间：{{data.detail.getDate}}</view>
					</view>
				</view>
				<view class="explain">
					<view class="title">活动说明：</view>
					<view class="detail" v-html="data.detail.content"></view>
				</view>
			</view>
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{topHeader,downFooter,dxListCell},
		data() {
			return {
				formAction: '/activity/show',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				signUp: 0,
				attachmentLists:[
					{name:'关于做好人才政策个人待遇发放工作方案'},
					{name:'关于做好人才政策企事业单位补贴发放工作方案'},
					{name:'江门市人才政策个人待遇与企事业单位补贴机构（部门）明细表'},
					{name:'个人待遇与企事业单位补贴申请表格（人社部分）'},
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
		onShow(){
			this.ajax();
		},
		methods: {
			canSignUp(){
				this.postAjax("/activity/signup",this.data.detail).then(msg=>{
					if(msg.data.status == 2){
						return this.goto('/pages/activity/signup/index?id='+this.data.detail.id,1);
					}
				})
			},
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