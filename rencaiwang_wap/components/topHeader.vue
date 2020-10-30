<template>
	<view class="top_header main-bg">
		<view class="head_left icon">
			<image class="img" src="../static/images/return-icon.png"></image>
		</view>
		<view class="head_right icon" @click="goto('/pages/index/index',1)">
			<image class="img" src="../static/images/home-icon.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			
		},
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>
<style>
.top_header{height: 168upx;display: flex;justify-content: space-between;align-items: center;position: fixed;width: 100%;left: 0;top: 0;z-index: 999;box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6)}
.top_header .icon{padding: 20upx 50upx;}
.top_header .img{width: 56upx;height: 56upx;display: flex;}
</style>