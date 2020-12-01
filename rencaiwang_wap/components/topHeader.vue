<template>
	<view class="top_header main-bg">
		<view class="head_left icon" @click="back">
			<image class="img" src="../static/images/return-icon.png"></image>
		</view>
		<span style="color: white;">{{title2}}</span>
		<view class="head_right icon" @click="goto('/pages/index/index',1)">
			<image class="img" src="../static/images/home-icon.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				currentPageTitle:'',
				title2:''
			}
		},
		watch:{
			title(value){
				
				
			}
		},
		created(){
			var pages = getCurrentPages();  
			var page = pages[pages.length - 1];  
			var currentPageTitle = page.$holder.navigationBarTitleText;
			this.currentPageTitle = currentPageTitle;
			setTimeout(()=>{
				if(this.title && this.title.length >15){
					
					this.title2	 = this.title.substring(0, 12) + '...';
					
				}
			},50)
			
		},
		
		methods: {
			
		}
	}
</script>
<style>
.top_header{height: 100upx;display: flex;justify-content: space-between;align-items: center;position: fixed;width: 100%;left: 0;top: 0;z-index: 999;box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6)}
.top_header .icon{padding: 20upx 50upx;}
.top_header .img{width: 56upx;height: 56upx;display: flex;}
</style>