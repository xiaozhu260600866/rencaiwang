<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view class="pb30" v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="https://rencaiwang.doxinsoft.com/images/wap/banner-yj.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 搜索 -->
			<view class="feedback-search flex-between flex-middle pl30 pt30 pb20">
				<view class="flex1 w-b100"><search padding="0" @callBack="searchTitle"></search></view>
				<view class="flex-center" @click="goto('/pages/feedback/create_edit/index',1)"><view class="dxi-icon dxi-icon-add-circle fs-26 fc-6 pl15 pr30"></view></view>
			</view>
			
			<view class="feedback-lists">
				<view class="item" v-for="item in data.lists.data" @click="goto('/pages/feedback/create_edit/index?id='+item.id,1)">
					<dx-list-cell :name="item.title" padding="30rpx 60rpx">
						<view slot="right" class="fc-7 Arial fs-14">{{item.created_at}}</view>
					</dx-list-cell>
				</view>
				<hasMore :parentData="data" message="未提交意见"></hasMore>
			</view>
			
			<!-- 脚部 -->
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import search from '@/components/search';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{topHeader,downFooter,search,dxListCell},
		data() {
			return {
				formAction: '/feedback/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				feedbackLists:[
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
					{title:'网络安全大赛成功在广州举办',created_at:'2020-09-15'},
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
			searchTitle(res){
				this.data.query.title = res;
				this.ajax();
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.rencaiwangShare(this);
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>