<template>
	<view>
		 <page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="https://rencaiwang.doxinsoft.com/images/wap/banner-rc.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 搜索 -->
			<search areaShow  :selectAreaArr="selectAreaArr" @callBackTown="searchTown" @callBack="searchTitle"></search>
			
			<view class="step1" >
				
				<!-- 导航 -->
				<view class="index-nav plr20">
					<dx-nav-class :data="data.policyMatchClass" @click="checkAuth" :imgWidth="70" :imgHeight="70" :namePTop="5" nameColor="#404040" :nameSize="14" :num="3" :lrPadding="0"
					:tbPadding="0"></dx-nav-class>
				</view>
				
				<!-- 列表 -->
				<view class="release-lists pt20">
					<dx-list-cell :name="item.title" padding="30rpx" v-for="item in data.lists.data" @click="goto('/pages/policy/show/index?id='+item.id,1)">
						<view slot="right">
							<view class="right-box flex-baseline">
								<view class="area fs-12" v-if="item.townname">{{ item.townname.length >1 ?item.townname[0][0] + '等' : item.townname[0][0]}}</view>
								<view class="time Arial fs-13">{{ item.published_at }}</view>
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
				formAction: '/policy/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				selectAreaArr: [
					
				],
				
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
			searchTown(res){
				this.data.query.town = res.value;
				this.ajax();
			},
			searchTitle(res){
				this.data.query.content = res;
				this.ajax();
			},
			checkAuth(v){
				return this.goto(v.url,v.type);
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.selectAreaArr = msg.town	
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>