<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="/static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 搜索 -->
			<search areaShow @step="step = false"></search>
			
			<view class="step1" v-if="step == true">
				
				<!-- 导航 -->
				<view class="index-nav plr20">
					<dx-nav-class :data="[
						{url:'/pages/policy/result/index',type:1,name:'扶持政策匹配',cover:'/static/images/header-pic.png'},
						{url:'/pages/policy/result/index',type:1,name:'身份学历匹配',cover:'/static/images/header-pic.png'},
						{url:'/pages/policy/result/index',type:1,name:'企业政策匹配',cover:'/static/images/header-pic.png'},
					]" @click="checkAuth" :imgWidth="70" :imgHeight="70" :namePTop="5" nameColor="#404040" :nameSize="14" :num="3" :lrPadding="0"
					:tbPadding="0"></dx-nav-class>
				</view>
				
				<!-- 列表 -->
				<view class="release-lists pt20">
					<dx-list-cell :name="item.name" padding="30rpx" v-for="item in releaseLists" @click="goto('/pages/policy/show/index',1)">
						<view slot="right">
							<view class="right-box flex-baseline">
								<view class="area fs-12">{{ item.area }}</view>
								<view class="time Arial fs-13">{{ item.created_at }}</view>
							</view>
						</view>
					</dx-list-cell>
				</view>
			</view>
			
			<!-- 选择市区县 -->
			
			
			<!-- 脚部 -->
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import search from '@/components/search';
	import dxNavClass from "doxinui/components/nav-class/nav-class"
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{topHeader,downFooter,search,dxNavClass,dxListCell},
		data() {
			return {
				formAction: '/shop/product/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				releaseLists:[
					{name:'网络安全大赛成功在广州举行',area:'蓬江区',created_at:'2020-10-20'},
					{name:'网络安全大赛成功在广州举行',area:'蓬江区',created_at:'2020-10-20'},
					{name:'网络安全大赛成功在广州举行',area:'蓬江区',created_at:'2020-10-20'}
				],
				step: true,
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
			checkAuth(v){
				return this.goto(v.url,v.type);
			},
			ajax() {
				
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>