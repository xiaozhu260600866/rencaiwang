<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page> 
		<view>
			<view class="index-bg">
				<image class="img" src="../../static/images/index-bg.jpg" mode="aspectFill"></image>
			</view>
			<view class="into" @click="goto('/pages/index/index',1)">
				<dx-button type="danger" myclass="plr30" round>点击进入</dx-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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