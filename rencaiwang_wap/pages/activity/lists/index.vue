<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 搜索 -->
			<search areaShow @step="step = false"></search>
			
			<view v-if="step == true">
				<!-- 切换 -->
				<view class="pb10">
					<dx-tabs :tabs="[
						{value: 0,name: '全部活动'},
						{value: 1,name: '已报名'}
					]" :height="88" :sliderWidth="170" :sliderHeight="60" bottom="50%" selectedColor="#fff" sliderBgColor="#419cf5" color="#404040" size="32"
					 @change="change" v-model="tabsStatus" unlined></dx-tabs>
				 </view>
				
				<!-- 列表 -->
				<view class="activity">
					<view class="main_activity" v-for="(v,key) in activityLists" v-if="key == 0" @click="goto('/pages/activity/show/index')">
						<view class="title fc-4 fs-15 fw-bold nowrap">{{ v.title }}</view>
						<view class="sign-date fs-14 fc-5 pb15">报名日期：<text class="Arial">{{v.signup_at}}</text></view>
						<view class="cover ptb15" v-if="v.cover">
							<image class="img w-b100" :src="v.cover" mode="aspectFill"></image>
						</view>
						<view class="content fc-7 fs-14 wrap3">{{v.content}}</view>
						<view class="flex-between flex-middle fs-12 fc-7 pt15">
							<view class="name">{{ v.getUser.name }}</view>
							<view class="date Arial">{{ v.created_at }}</view>
						</view>
					</view>
					<view class="activity_lists" v-for="(v,key) in activityLists" v-if="key > 0" @click="goto('/pages/activity/show/index')">
						<view class="lists_box">
							<view class="title fc-4 fs-15 fw-bold nowrap">{{ v.title }}</view>
							<view class="sign-date fs-14 fc-5">报名日期：<text class="Arial">{{v.signup_at}}</text></view>
							<view class="fb-info flex-middle">
								<image class="head" :src="v.getUser.headerPic"></image>
								<view class="name fs-12 fw-bold fc-4">{{ v.getUser.name }}</view>
							</view>
							<view class="activity_info flex-start ptb10">
								<view class="content fc-7 fs-13 wrap4">{{v.content}}</view>
								<view class="cover" v-if="v.cover">
									<image class="img" :src="v.cover" mode="aspectFill"></image>
								</view>
							</view>
						</view>
					</view>
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
	import search from '@/components/search';
	import dxTabs from "doxinui/components/tabs/tabs"
	export default {
		components:{topHeader,downFooter,search,dxTabs},
		data() {
			return {
				formAction: '/shop/product/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				tabsStatus: 0,
				step: true,
				activityLists:[{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'../../../static/images/index-ad.jpg',
					signup_at:'2020.9.22-10.30',
					created_at:'2020-09-17',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'',
					signup_at:'2020.9.20-10.30',
					created_at:'2020-09-15',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'../../../static/images/index-ad.jpg',
					signup_at:'2020.9.20-10.30',
					created_at:'2020-09-15',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'../../../static/images/index-ad.jpg',
					signup_at:'2020.9.20-10.30',
					created_at:'2020-09-15',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				}]
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
			ajax() {
				
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>