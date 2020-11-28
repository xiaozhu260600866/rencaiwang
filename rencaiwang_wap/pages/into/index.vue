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
				timer:''
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
			this.toIn();
			this.ajax();
		},
		methods: {
			toIn(){
				let num = 3;
				this.timer = setInterval(()=>{
					
					if(num<=0){
						clearInterval(this.timer);
						return this.goto('/pages/index/index',1);
					}else{
						// uni.showToast({
						//     title: ''+num,
						//     duration: 1000,
						// 	icon:'none'
						// });
						num-=1;
					}
					
				},1000)
				
			},
			ajax() {
				
			}
		}
	}
</script>
<style>
@import url("./index.css");
</style>