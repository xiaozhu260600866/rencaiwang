<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<top-header></top-header>
			<view class="news-show p30">
				<view class="show-top fc-4 pb10">
					<view class="show-title">{{data.detail.title}}</view>
					<view class="row">
						<view class="fs-13 fc-7">{{data.detail.fclassname}}</view>
					</view>
					<view class="row fs-14">
						<view>{{data.detail.unit_name}}</view>
						<view class="Arial">{{data.detail.getTime}}</view>
					</view>
				</view>
				<view class="content ptb20">
						<u-parse class="lh-24" :content="data.detail.content" v-if="data.detail.content"/>
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
			<down-footer></down-footer>
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
				getSiteName: this.getSiteName()
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
			downLoad(item,key){
				return  window.location.href= this.getSiteName + "/downloadfile?filename="+this.data.detail.upload_file.split(",")[key]+'&folder=article'
			},
			ajax() {
				this.getAjax(this).then(msg => {
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>