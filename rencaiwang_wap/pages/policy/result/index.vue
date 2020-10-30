<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view class="result-box">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="/static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			
			<view class="shadow-block result">
				<view class="title">
					<dx-list-cell name="经济福利" slotLeft last>
						<view slot="left"><view class="circle"></view></view>
						<view slot="right" class="fs-15 fc-6"><text class="Arial">1</text>条</view>
					</dx-list-cell>
				</view>
				<view class="lists">
					<dx-list-cell name="最高1亿元的综合资助" nameColor="#626262" noborder iconName="success" iconSize="13" iconColor="#626262">
						<view slot="right"><view class="dxi-icon fs-14 fc-6" :class="showMore?'dxi-icon-top':'dxi-icon-down'" @click="showMore=!showMore"></view></view>
					</dx-list-cell>
				</view>
				<view class="content" v-if="showMore==true">
					<view class="box">日前，省人才工作领导小组办公室发出公告，启动2017年珠江人才计划、广东特支计划、扬帆计划申报工作，入选团队和人才可享受广东省和我市相关政策待遇。梅州市人才工作领导小组办公室要求，各负责单位要按照所负责项目申报要求、规定时限做好申报工作。据了解，“珠江人才计划”聚焦重点产业、核心技术，突出高精尖缺，大力引进集聚海外高层次人才，给予每个创新创业团队1000万元至1亿元的资助资金，资助海（境）外专家来粤短期工作和海（境）外博士来粤开展博士后研究。日前，省人才工作领导小组办公室发出公告，启动2017年珠江人才计划、广东特支计划、扬帆计划申报工作，入选团队和人才可享受广东省和我市相关政策待遇。梅州市人才工作领导小组办公室要求，各负责单位要按照所负责项目申报要求、规定时限做好申报工作。据了解，“珠江人才计划”聚焦重点产业、核心技术，突出高精尖缺，大力引进集聚海外高层次人才，给予每个创新创业团队1000万元至1亿元的资助资金，资助海（境）外专家来粤短期工作和海（境）外博士来粤开展博士后研究</view>
				</view>
			</view>
			
			<view class="shadow-block r-policy">
				<view class="title">
					<dx-list-cell name="相关政策" slotLeft last>
						<view slot="left"><view class="circle"></view></view>
					</dx-list-cell>
				</view>
				<view class="rp-list p15 pr0">
					<dx-list-cell arrow :name="item.name" noborder padding="10rpx 0" nameColor="#737373" :nameSize="14" v-for="item in policyList"></dx-list-cell>
				</view>
			</view>
			
			<view class="shadow-block">
				<view class="title tit-blue">
					<dx-list-cell name="咨询申报" slotLeft last>
						<view slot="left"><view class="circle"></view></view>
					</dx-list-cell>
				</view>
			</view>
			
			<view class="consult">
				<view class="item">
					<weui-input v-model="ruleform.name" placeholder="联系方式" type="text" name="name" datatype="require"></weui-input>
				</view>
				<view class="item">
					<weui-input v-model="ruleform.remark" placeholder="咨询内容" type="textarea" name="remark" datatype="require"></weui-input>
				</view>
			</view>
			
			<view class="pt10 text-center">
				<dx-button type="danger" myclass="plr50" round >提 交</dx-button>
			</view>
			
			<!-- 脚部 -->
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
				ruleform:{},
				showMore: false,
				policyList:[
					{name:'社会发展网络安全的重要性及推广必要性'},
					{name:'社会发展推动网络安全产业发展'},
					{name:'提升社会网络安全意识与防护'}
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