<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="https://rencaiwang.doxinsoft.com/images/wap/banner-tz.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 搜索 -->
			<search @callBack="searchTitle"></search>
			
			<view class="skip">
				<view class="shadow-block skip-item" v-for="item in data.lists.data" >
					<view class="left" @click="gotoUrl(item)">
						<image class="img" :src="item.firstCover"></image>
					</view>
					<view class="right" >
						<view class="title fc-3">
							<view class="name fs-15 fw-bold nowrap" @click="gotoUrl(item)">{{item.title}}</view>
							<view class="dxi-icon pl15 fs-14" :class="item.showMore?'dxi-icon-top':'dxi-icon-down'" @click="item.showMore=!item.showMore"></view>
						</view>
						<view class="content fs-13 fc-7 mt10" :class="item.showMore == true ? '':'wrap2'" >{{item.content}}</view>
					</view>
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
	export default {
		components:{topHeader,downFooter,search},
		data() {
			return {
				formAction: '/redirectArticle/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				skipLists:[{
					cover:'/static/images/index-ad.jpg',
					title:'网络安全大赛成功举办',
					showMore: false,
					content:'动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。'
				},{
					cover:'/static/images/index-ad.jpg',
					title:'网络安全大赛成功举办',
					showMore: false,
					content:'动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。'
				},{
					cover:'/static/images/index-ad.jpg',
					title:'网络安全大赛成功举办',
					showMore: false,
					content:'动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。'
				}]
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
			searchTitle(res){
				this.data.query.title = res;
				this.ajax();
			},
			gotoUrl(item){
				window.location.href=item.url;
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