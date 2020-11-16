<template>
	<view class="down_footer">
		<dx-button type="primary" btnBg="#00459c" btnBd="#00459c" @click="goto('/pages/policy/lists/index',1)" v-for="v in lists">{{v.label}}</dx-button>
		<!-- <dx-button type="primary" btnBg="#1565c0" btnBd="#1565c0" @click="goto('/pages/news/lists/index',1)">人才资讯</dx-button>
		<dx-button type="primary" btnBg="#55acee" btnBd="#55acee" @click="goto('/pages/service/index',1)">人才服务</dx-button> -->
	</view>
</template>

<script>
	export default {
		props:{
			
		},
		data() {
			return {
				lists:[]
			}
		},
		created(){
			this.postAjax("/category.html",{type:1},"notloing").then(msg=>{
				this.lists = msg.data.data;
			})
		},
		methods: {
			
		}
	}
</script>
<style>
.down_footer{display: flex;justify-content: space-between;padding: 60upx 40upx;background-color: #fff;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 999;}
</style>