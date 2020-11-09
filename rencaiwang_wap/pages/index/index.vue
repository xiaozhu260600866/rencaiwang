<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view v-if="data.show"> 
			<top-header></top-header>
			<view class="index-user-info">
				<dx-list-msg imgSrc="/static/images/header-pic.png" name="Dr.Carol J.McLean" nameColor="#757575" last padding="30rpx 40rpx">
					<view slot="con" class="info mt3">
						<view class="">Cardiologist</view>
						<view class="">Lorem Ipsum Dolor</view>
					</view>
				</dx-list-msg>
			</view>
			<view class="index-nav">
				<view class="nav-box">
					<view class="nav-title">常用功能</view>
					<dx-nav-class :data="[
						{url:'/pages/news/lists/index',type:1,name:'权威发布',cover:'/static/images/header-pic.png'},
						{url:'/pages/policy/lists/index',type:1,name:'政策发布',cover:'/static/images/header-pic.png'},
						{url:'/pages/video/lists/index',type:1,name:'视频图解',cover:'/static/images/header-pic.png'},
						{url:'/pages/policy/class/index',type:1,name:'政策解读',cover:'/static/images/header-pic.png'},
						{url:'/pages/activity/lists/index',type:1,name:'活动报名',cover:'/static/images/header-pic.png'},
						{url:'/pages/feedback/lists/index',type:1,name:'意见征集',cover:'/static/images/header-pic.png'},
						{url:'/pages/service/index',type:1,name:'服务大厅',cover:'/static/images/header-pic.png'},
					]" @click="checkAuth" :namePTop="0" nameColor="#707070" :nameSize="12" :num="4"></dx-nav-class>
				</view>
			</view>
			<view class="index-ad">
				<image class="img" src="../../static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			<view class="index-nav2">
				<dx-nav-class :data="[
					{url:'/pages/policy/result/index',type:1,name:'扶持政策匹配',cover:'/static/images/header-pic.png'},
					{url:'/pages/policy/result/index',type:1,name:'身份学历匹配',cover:'/static/images/header-pic.png'},
					{url:'/pages/policy/result/index',type:1,name:'企业政策匹配',cover:'/static/images/header-pic.png'},
				]" @click="checkAuth" :imgWidth="70" :imgHeight="70" :namePTop="5" nameColor="#404040" :nameSize="14" :num="3" :lrPadding="0"
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
				return this.goto(v.url,v.type);
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