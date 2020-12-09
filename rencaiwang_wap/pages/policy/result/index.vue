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
			
			<view class="shadow-block result" v-for="benefit in benefitArr">
				<view class="title">
					<dx-list-cell :name="benefit.name" slotLeft last>
						<view slot="left"><view class="circle"></view></view>
						<view slot="right" class="fs-15 fc-6"><text class="Arial">{{benefit.children.length}}</text>条</view>
					</dx-list-cell>
				</view>
				<view v-for="v in benefit.children">
					<view class="lists">
						<dx-list-cell :name="v.benefitTitle" nameColor="#626262" noborder iconName="success" iconSize="13" iconColor="#626262">
							<view slot="right"><view class="dxi-icon fs-14 fc-6" :class="v.show?'dxi-icon-top':'dxi-icon-down'" @click="v.show=!v.show"></view></view>
						</dx-list-cell>
					</view>
					<view class="content" v-if="v.show==true">
						<view class="box">
							<span class="main-color pr15 fw-bold fs-15">第{{v.benfitNum}}条</span>
								{{v.benefitContent}}
						</view>
					</view>
				</view>
				<view class="p15 text-center fs-14 fc-9" v-if="benefit.children.length == 0">没有找到符合条件的{{benefit.name}}</view>
			</view>
			
			<view class="shadow-block r-policy" >
				<view class="title" >
					<dx-list-cell name="相关政策" slotLeft last>
						<view slot="left"><view class="circle"></view></view>
					</dx-list-cell>
				</view>
				<view class="rp-list p15 pr0" v-if="policyArr.length > 0">
					<dx-list-cell arrow @click="goto('/pages/policy/show/index?id='+item.id,1)" :name="item.title" noborder padding="10rpx 0" nameColor="#737373" :nameSize="14" v-for="item in policyArr"></dx-list-cell>
				</view>
				<view class="p15 text-center fs-14 fc-9" v-if="policyArr.length == 0">没有找到符合条件的政策</view>
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
					<weui-input v-model="ruleform.phone" placeholder="联系方式" type="text" name="phone" datatype="require"></weui-input>
				</view>
				<view class="item">
					<weui-input v-model="ruleform.remark" placeholder="咨询内容" type="textarea" name="remark" datatype="require"></weui-input>
				</view>
			</view>
			
			<view class="ptb10 flex-center plr15">
				<view class="w-b100 mr5">
					<dx-button type="success" myclass="plr50" round block @click="goto('/pages/policy/result/record',1)">咨询记录</dx-button>
				</view>
				<view class="w-b100 ml5">
					<dx-button type="danger" myclass="plr50" round block @click="submit">提 交</dx-button>
				</view>
			</view>
			
			<!-- 脚部 -->
			<down-footer></down-footer>
			<dx-prompt :open="submitSuccess" content="提交成功" :cancel="false" @confirmCallBack="goto('/pages/index/index',1)"></dx-prompt>
		</view>
	</view>
</template>

<script>
	import topHeader from '@/components/topHeader';
	import downFooter from '@/components/downFooter';
	import dxListCell from "doxinui/components/list-cell/list-cell"
	import dxPrompt from "doxinui/components/diag/prompt"
	export default {
		components:{topHeader,downFooter,dxListCell,dxPrompt},
		data() {
			return {
				formAction: '/policy/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{},
				policyArr:[],
				benefitArr:[],
				showMore: false,
				question:[],
				answerResult:[],
				submitSuccess: false,
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
			this.question = uni.getStorageSync('question', this.question_copy);
			this.answerResult = uni.getStorageSync('answerResult', this.answerResult);
			let policyArr = [];
			let benefitArr = [];
			this.answerResult.forEach(question=>{
				if(question.children){
					question.children.forEach(answer=>{
						 if(answer.checked){
							 if(answer.benefitArr.length){
								 answer.benefitArr.forEach(benfit=>{
									 policyArr.push(benfit.policy_id);
									 benefitArr.push({show:false,benefitCategory:benfit.benefitCategory,benefitTitle:benfit.benefitTitle,benefitContent:benfit.benefitContent,benfitNum:benfit.policyNum});
								 });
							 }
						 }
					})
				}
			})
			
			if(policyArr.length){
				console.log(policyArr)
				this.getAjax(this,{ids:policyArr}).then(msg => {
					this.policyArr = msg.lists.data;
				});
				this.postAjax("/policyMatch/benefit",{benefitArr:benefitArr}).then(msg=>{
					this.benefitArr = msg.data.res;
				});
			}
			
			
			//this.ajax();
		},
		methods: {
			submit(){
				this.vaildForm(this, res => {
					if(res){
						this.postAjax("/policyMatch/order", this.ruleform).then(msg => {
							if (msg.data.status == 2) {
								this.ruleform = {};
							}
						});
						
					}
				})
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>