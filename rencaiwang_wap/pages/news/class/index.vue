<template>
	<view>
	 <page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<top-header></top-header>
			<view class="news-class">
				<view class="fc-4 fs-16 fw-bold mb15">{{data.parent.name}}</view>
				<view>
					<view class="class-lists" v-for="(item,key) in data.children" @click="goto('/pages/news/lists/index?fid='+item.id+'&lev=2')">
						<dx-list-cell :name="item.name" nameColor="#777" slotLeft arrow padding="12rpx 20rpx" noborder>
							<view slot="left" >
								<img :src="item.getcover" alt="" mode="widthFix"/>
							</view>
						</dx-list-cell>
					</view>
				</view>
			</view>
			<down-footer></down-footer>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{topHeader,downFooter,dxListCell},
		data() {
			return {
				formAction: '/article/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				classLists:[
					{name:'焦点新闻'},
					{name:'综合报道'},
					{name:'人物专访'},
					{name:'时事讲台'},
					{name:'国际动态'},
					{name:'五邑乡情'},
					{name:'民风民情'},
					{name:'人物专访'},
				]
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
				this.classLists = [];
				this.getAjax(this).then(msg => {
						
						this.data.children.splice(0,1)
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>