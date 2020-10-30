<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 置顶视频 -->
			<view class="video-show">
				<video class="w-b100 flex" src="http://vsite20.doxincn.net/images/video/video-index.mp4" poster="/static/images/index-ad.jpg"></video>
			</view>
			
			<!-- 类 -->
			<view class="tips-info flex-between flex-middle fs-14 fc-7 plr30 ptb12">
				<view class="item">江门市社会保障部</view>
				<view class="item">焦点新闻</view>
				<view class="item Arial">2020-10-20</view>
			</view>
			
			<!-- 搜索 -->
			<search padding="10rpx 40rpx 40rpx"></search>
			
			<!-- 视频新闻列表 -->
			<view class="video-lists plr20">
				<dx-news-lists :img="item.cover" :title="item.title" :time="item.create_at" v-for="(item,key) in videoLists"
				 padding="30rpx 0" :imgWidth="140"></dx-news-lists>
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
	import dxNewsLists from "doxinui/components/news/lists"
	export default {
		components:{topHeader,downFooter,search,dxNewsLists},
		data() {
			return {
				formAction: '/shop/product/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				videoLists: [{
					cover:"/static/images/index-ad.jpg",
					title:"大数据拥有大智慧 新技术催生新生态",
					create_at:"2020-04-24",
				},{
					cover:"/static/images/index-ad.jpg",
					title:"大数据拥有大智慧 新技术催生新生态",
					create_at:"2020-04-22",
				},{
					cover:"/static/images/index-ad.jpg",
					title:"微信小程序正式发布！这是最全的上手指南",
					create_at:"2020-04-21",
				}],
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