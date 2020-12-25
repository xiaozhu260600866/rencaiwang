<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view v-if="data.show"> 
			<top-header></top-header>
			<view class="index-user-info" v-if="data.user.nickname">
				<dx-list-msg :imgSrc="data.user.headimgurl" :name="data.user.nickname" nameColor="#757575" last padding="30rpx 40rpx">
					
				</dx-list-msg>
			</view>
			<view class="index-nav">
				<view class="nav-box">
					<view class="nav-title">常用功能</view>
					<dx-nav-class :data="[
						{url:'/pages/news/lists/index?fid=101',type:1,name:'权威发布',cover:'https://rencaiwang.doxinsoft.com/images/wap/news.png'},
						{url:'/pages/policy/lists/index',type:1,name:'政策发布',cover:'https://rencaiwang.doxinsoft.com/images/wap/policy.png'},
						{url:'/pages/video/lists/index?fid=1',type:1,name:'视频图解',cover:'https://rencaiwang.doxinsoft.com/images/wap/video.png'},
						{url:'/pages/news/lists/index?fid=135',type:1,name:'载体平台',cover:'https://rencaiwang.doxinsoft.com/images/wap/platform.png'},
						{url:'/pages/activity/lists/index',type:1,name:'活动发布',cover:'https://rencaiwang.doxinsoft.com/images/wap/activity.png'},
						{url:'/pages/feedback/lists/index',type:1,name:'意见征集',cover:'https://rencaiwang.doxinsoft.com/images/wap/feedback.png'},
						{url:'/pages/service/index',type:1,name:'服务大厅',cover:'https://rencaiwang.doxinsoft.com/images/wap/service.png'},
					]" @click="checkAuth" :namePTop="0" nameColor="#707070" :nameSize="13" :num="4"></dx-nav-class>
				</view>
			</view>
			<myswiper :data="data.silders.data"></myswiper>
			<view class="index-nav2">
				<dx-nav-class :data="data.policyMatchClass" @click="checkAuth" :imgWidth="70" :imgR="35" :imgHeight="70" :namePTop="5" nameColor="#404040" :nameSize="14" :num="3" :lrPadding="0"
				:tbPadding="0"></dx-nav-class>
			</view>
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListMsg from "doxinui/components/list-cell/list-msg"
	import dxNavClass from "doxinui/components/nav-class/nav-class"
	export default {
		components:{topHeader,downFooter,dxListMsg,dxNavClass},
		data() {
			return {
				formAction: '/wapindex',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
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
			checkAuth(v){
				return this.goto(v.url,1);
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.$nextTick(()=>{
						
						this.$refs.page.share("123");
					})
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>