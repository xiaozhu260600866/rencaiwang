<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 搜索 -->
			<search></search>
			
			<!-- 导航tab -->
			<view class="tab-group">
				<view class="flex1"><dx-tabs :tabs="[
					{value: 0,name: '全站'},
					{value: 1,name: '政策'},
					{value: 2,name: '意见'},
					{value: 3,name: '服务'},
					{value: 3,name: '报道'}
				]" selectedColor="#419cf5" sliderBgColor="#419cf5" @change="change" v-model="tabsStatus" :padding="0"></dx-tabs></view>
				<view class="right-icon"><view class="dxi-icon dxi-icon-down"></view></view>
			</view>
			
			<!-- 列表 -->
			<view class="news">
				<view class="news_lists" v-for="v in newsLists" @click="goto('/pages/news/show/index',1)">
					<view class="lists_box">
						<view class="title fc-4 fs-15 fw-bold nowrap">{{ v.title }}</view>
						<view class="fb-info flex-middle">
							<image class="head" :src="v.getUser.headerPic"></image>
							<view class="name fs-12 fw-bold fc-4">{{ v.getUser.name }}</view>
						</view>
						<view class="news_info flex-start ptb10">
							<view class="content fc-7 fs-14" :class="v.cover?'wrap4':'wrap3'">{{v.content}}</view>
							<view class="img" v-if="v.cover">
								<image class="img" :src="v.cover" mode="aspectFill"></image>
							</view>
						</view>
						<view class="bottom flex-middle flex-between fs-14 fc-7">
							<view class="date">{{v.create_at}}</view>
							<view class="more"><text class="dxi-icon dxi-icon-ellipsis-row"></text></view>
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
				newsLists:[{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'',
					create_at:'2020年9月15日',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'../../../static/images/index-ad.jpg',
					create_at:'2020年9月15日',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'../../../static/images/index-ad.jpg',
					create_at:'2020年9月15日',
					getUser:{
						name:'江门市社会保障部',
						headerPic:'../../../static/images/header-pic.png'
					}
				},{
					title:'网络安全大赛成功举办',
					content:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。',
					cover:'',
					create_at:'2020年9月15日',
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