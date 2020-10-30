<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<view class="topAd">
				<image src="../../../static/banner01.jpg" class="w-b100 flex" mode="widthFix"></image>
			</view>
			<view class="bg-f">
				<dx-list-cell name="联系客服" iconName="tel-fill" iconSize="18" iconColor="#ff721f" arrow @click="phone('0750-3229010')">
					<view slot="right" class="fs-15 fc-6 Arial">0750-3229010</view>
				</dx-list-cell>
				<dx-list-cell  name="修改密码"iconName="password-fill" iconSize="18" iconColor="#409EFF" arrow last></dx-list-cell>
			</view>
			<view class="p20">
				<dx-button type="primary" size="lg" block>退出</dx-button>
			</view>
		</view>
	</view>
</template>

<script>
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{dxListCell},
		data() {
			return {
				formAction: '/shop/product/class',
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
			ajax() {
				
			}
		}
	}
</script>
<style>
@import url("./index.css");
</style>