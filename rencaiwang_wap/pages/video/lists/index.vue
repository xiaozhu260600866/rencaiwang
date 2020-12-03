<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view v-if="show">
			<!-- 头部 -->
			<top-header :title="row.title" ref="header"></top-header>
			
			<!-- 置顶视频 -->
			<view v-if="data.lists.data">
				<view class="video-show" v-if="row.play_url">
					<video class="w-b100 flex" :src="row.play_url" poster="/static/images/index-ad.jpg"></video>
				</view>
				
				<!-- 类 -->
				<view class="tips-info flex-between flex-middle fs-14 fc-7 plr30 ptb12">
					<view class="item">{{row.unit_name}}</view>
					<view class="item">{{row.fclassname}}</view>
					<view class="item Arial">{{row.published_at}}</view>
				</view>
				
				<!-- 搜索 -->
				<search padding="10rpx 40rpx 40rpx" typeShow @callBack="searchCallBack"></search>
				
				<!-- 视频新闻列表 -->
				<view class="video-lists plr20">
					<dx-news-lists :img="item.firstCover" :title="item.title" :time="item.published_at" v-for="(item,key) in data.lists.data"
					 padding="30rpx 0" :imgWidth="140" @click="showVideo(item)"></dx-news-lists>
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
	import dxNewsLists from "doxinui/components/news/lists"
	export default {
		components:{topHeader,downFooter,search,dxNewsLists},
		data() {
			return {
				formAction: '/video/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				show:false,
				row:'',
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
			this.ajax();
		},
		methods: {
			searchCallBack(val){
				this.data.query.title=val;
				this.ajax();
			},
			showVideo(row){
				this.postAjax("/video/show",row,"notloading").then(msg=>{
					row.play_url = msg.data.video.url;
					this.row = row;
					this.show = true;
					this.$refs.header.title2 = row.title;
				});
			},
			ajax() {
				this.getAjax(this).then(msg => {
						if(msg.lists.data.length){
							if(this.data.query.video_id){
								msg.lists.data.forEach(item=>{
									 if(item.id == this.data.query.video_id){
										 this.showVideo(item);		
									 }
								})
							}else{
								this.showVideo(msg.lists.data[0]);		
							}
							
						}
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>