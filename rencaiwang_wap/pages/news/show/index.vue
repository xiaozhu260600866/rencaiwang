<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page" Fbottom="bottom:10%">
			<view slot="floatBtn">
				<view @click="toDown" v-if="scrollHeigth > 800">
				<image mode="widthFix" src="/static/floatBtn.png" style="width:50px"></image>
			<!-- 	<floatBtn type="0" icon="dxi-icon dxi-icon-top" myclass="xiaozhu-btn"></floatBtn> -->
				</view>
			</view>
		</page>
		<view v-if="data.show">
			
			<top-header :title="data.detail.title"></top-header>
			<view class="news-show p30">
				<view class="show-top fc-4 pb10">
					<view class="show-title">{{data.detail.title}}</view>
					<view class="row">
						<view class="fs-13 fc-7">{{data.detail.fclassname}}</view>
						<view class="Arial">{{data.detail.getTime}}</view>
					</view>
					<view class="row fs-14">
						<view>{{data.detail.unit_name}}</view>
					
					</view>
				</view>
				<view class="content ptb20">
						<!-- <u-parse class="lh-24" :content="data.detail.content" v-if="data.detail.content"/> -->
						<view v-html="data.detail.content"></view>
				</view>
				<view>
					<image class="w-b100" :src="getSiteName+ '/upload/images/product/'+ data.siteConfig.news_cover" mode="widthFix" @click="previewImage(data.siteConfig.news_cover,'product')"></image>
				</view>
				<view class="attachment" v-if="getFileArr(data.detail.upload_file_name).length">
					<view class="title">附件下载</view>
					<view class="lists">
						<dx-list-cell @click="downLoad(item,key)" :name="item.name+''" padding="0" nameColor="#777" slotLeft v-for="(item,key) in getFileArr(data.detail.upload_file_name)" noborder>
							<view slot="left" class="dot"></view>
						</dx-list-cell>
					</view>
				</view>
			</view>
			<down-footer v-if="!scrollDown"></down-footer>
			<dx-share :show="shareDiag"></dx-share>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	import dxShare from "doxinui/components/share/share"
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components:{topHeader,downFooter,dxListCell,dxShare,uParse},
		data() {
			return {
				formAction: '/article/show',
				shareDiag:false,
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				scrollHeigth:0,
				scrollDown:false,
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
			window.onscroll = ()=>{ 
				let scrollHeigth = document.documentElement.scrollTop || document.body.scrollTop;  
				if(scrollHeigth > this.scrollHeigth){
					this.scrollDown  = true
				}else{
					this.scrollDown  = false
				}
				this.scrollHeigth = scrollHeigth;
			}
			this.ajax();
		},
		methods: {
			toDown(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 50
				})
			},
			downLoad(item,key){
				return  window.location.href= this.getSiteName + "/downloadfile?filename="+this.data.detail.upload_file.split(",")[key]+'&folder=article'
			},
			ajax() {
				this.getAjax(this).then(msg => {
					
					this.rencaiwangShare(this,msg.detail.title);
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>