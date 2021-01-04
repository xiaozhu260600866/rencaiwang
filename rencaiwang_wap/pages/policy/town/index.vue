<template>
	<view>
		 <page :parentData="data" :formAction="formAction" ref="page"></page>
		<view v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="/static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			
			<!-- 搜索 -->
		
			<view class="select-area" >
				<view class="area-box">
					<view class="top flex-between flex-middle">
						<view class="left flex-middle">
							<image class="img" src="/static/images/area-location.png"></image>
							<text class="fs-15 fc-6">市区县</text>
						</view>
						<view class="right fs-12 fc-7">多选</view>
					</view>
					<view class="con">
						<weui-input v-model="ruleform.selectArea" errorMessage="市区县" name="selectArea" changeField="value" type="checkbox" dataKey="selectAreaArr"
						 :row="true" Labelleft datatype="array"></weui-input>
					</view>
				</view>
				<view class="tips mtb10 text-center fs-14 fc-7">更多人才政策持续更新中…</view>
				<view class="flex-center" @click="submit">
					<dx-button type="danger" myclass="plr50" round >提 交</dx-button>
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
	import dxNavClass from "doxinui/components/nav-class/nav-class"
	import dxListCell from "doxinui/components/list-cell/list-cell"
	export default {
		components:{topHeader,downFooter,search,dxNavClass,dxListCell},
		data() {
			return {
				formAction: '/policy/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				vaildate:{},
				ruleform:{
					
				},
				selectAreaArr: [
					
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
			this.ajax();
		},
		methods: {
			submit(){
				
				this.vaildForm(this, res => {
					if(res){
						this.goto("/pages/policy/question/index?class_value="+this.data.query.class_id+"&town_value="+this.ruleform.selectArea.join(","),1);
					}
				})
			},
			ajax() {
				this.selectAreaArr = [];
				this.getAjax(this).then(msg => {
					this.rencaiwangShare(this);
					if(msg.town.length){
						msg.town.forEach(v=>{
							if(v.value!=0){
								this.selectAreaArr.push(v)
							}
						})
					}
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>