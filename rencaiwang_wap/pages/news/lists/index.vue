<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view v-if="data.show">
			<view class="bg-f" style="position: relative;z-index: 12;">
				<!-- 头部 -->
				
				<top-header :title="data.parent.name"></top-header>

				<!-- 搜索 -->
				<search @callBack="searchCallBack"></search>
			</view>

			<!-- 导航tab -->
			<!-- <view class="tab-group">
				<view class="group-box">
					<view class="flex1"><dx-tabs :tabs="children" selectedColor="#419cf5" sliderBgColor="#419cf5" @change="change" v-model="data.query.fid" :padding="0"></dx-tabs></view>
					<view class="right-icon" @click="showMoreTabs"><view class="dxi-icon dxi-icon-down"></view></view>
				</view>
				<view class="tab_popup" :class="{'show_popup':showPopup}">
					<scroll-view scroll-y>
						<view class="box">
							<view class="pop" v-for="tabs in popLists" @click="showPopup = false">{{tabs.name}}</view>
						</view>
					</scroll-view>
				</view>
			</view> -->
			<dx-tabs-scroll :tabs="children" :nameSize="15" selectedColor="#419cf5" sliderBgColor="#419cf5" @change="change" v-model="data.query.fid"
			 :padding="0"></dx-tabs-scroll>

			<!-- 列表 -->
			
			
			<view class="news">
				<view class="news_lists" v-for="v in data.lists.data" @click="goto('/pages/news/show/index?id='+v.id,1)">
					<view class="lists_box">
						<view class="title fc-4 fs-15 wrap2">{{ v.title }}</view>
						<view class="pic" v-if="v.firstCover">
							<image class="img" :src="v.firstCover" mode="aspectFill"></image>
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
	import dxTabsScroll from "doxinui/components/tabs/tabs_scroll"
	import dxTabs from "doxinui/components/tabs/tabs"
	import dxNewsLists from "doxinui/components/news/lists"
	export default {
		components: {
			topHeader,
			downFooter,
			search,
			dxTabsScroll,
			dxTabs,
			dxNewsLists
		},
		data() {
			return {
				formAction: '/article/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				children: [],
				tabsStatus: 0,
				showPopup: false,
				popLists: [{
						name: '项目一'
					},
					{
						name: '项目二'
					},
					{
						name: '项目三'
					},
					{
						name: '项目四'
					},
					{
						name: '项目一'
					},
					{
						name: '项目二'
					},
					{
						name: '项目三'
					},
					{
						name: '项目四'
					},
					{
						name: '项目一'
					},
					{
						name: '项目二'
					},
					{
						name: '项目三'
					},
					{
						name: '项目四'
					},
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
			searchCallBack(val) {
				this.data.query.title = val;
				this.ajax();
			},
			change() {
				this.ajax();
			},
			showMoreTabs(n) {
				if (showPopup != 'order')
					this.showPopup = true;
			},
			ajax() {
				this.getAjax(this).then(msg => {
					if (this.children.length == 0) {
						this.children = msg.children;
					}
					this.rencaiwangShare(this);

				});
			}
		}
	}
</script>
<style scoped="">
	@import url("./index.css");
</style>
