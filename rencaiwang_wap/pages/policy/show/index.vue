<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<top-header></top-header>
			<view class="news-show p30">
				<view class="show-top">
					<view class="show-title">网络安全大赛成功在广州举行</view>
					<view class="row fs-14">
						<view>江门市社会保障部</view>
						<view class="Arial">2020-09-15</view>
					</view>
					<view class="row fs-12 fc-7">
						<view class="class">焦点新闻</view>
						<view class="area">江门市蓬江区</view>
					</view>
					<view class="row fs-12 fc-7">
						<view>有效期限：<text class="Arial">2020.08.20-2020.12.30</text></view>
					</view>
				</view>
				<view class="content ptb20">
					<view class="p">活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。</view>
					<view class="p">活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全知识，引导群众广泛参与，提升社会网络安全意识和防护技能。</view>
				</view>
				<view class="attachment">
					<view class="title">附件下载</view>
					<view class="lists">
						<dx-list-cell :name="item.name" padding="0" nameColor="#777" :nameSize="13" slotLeft v-for="item in attachmentLists" noborder>
							<view slot="left" class="dot"></view>
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
				formAction: '/shop/product/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				attachmentLists:[
					{name:'关于做好人才政策个人待遇发放工作方案'},
					{name:'关于做好人才政策企事业单位补贴发放工作方案'},
					{name:'江门市人才政策个人待遇与企事业单位补贴机构（部门）明细表'},
					{name:'个人待遇与企事业单位补贴申请表格（人社部分）'},
				],
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
			//this.ajax();
		},
		methods: {
			ajax() {
				
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>