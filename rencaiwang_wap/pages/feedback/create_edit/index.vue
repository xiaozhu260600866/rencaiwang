<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<!-- 头部 -->
			<top-header></top-header>
			
			<view class="opinion plr30">
				<weui-input v-model="ruleform.title" placeholder="请填写标题" type="text" name="title" datatype="require"></weui-input>
				<view class="date fs-15 fc-3">提交时间：<text class="Arial">{{ruleform.id ? ruleform.date :data.date}}</text></view>
				<weui-input v-model="ruleform.phone" placeholder="请填写联系方式" type="number" name="phone" datatype="require"></weui-input>
				<weui-input v-model="ruleform.remark" placeholder="请填写您的意见" type="textarea" name="remark" datatype="require"></weui-input>
			</view>
			
			<view class="flex-middle m30">
				<view class="w-b100 pr5" v-if="!ruleform.id">
					<dx-button type="success" block @click="submit">提交</dx-button>
				</view>
				<view class="w-b100 pl5" v-if="ruleform.id" @click="del(ruleform)">
					<dx-button type="danger" block>删除</dx-button>
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
	export default {
		components:{topHeader,downFooter},
		data() {
			return {
				formAction: '/feedback/create',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				vaildate:{}
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
			if(options.id){
				this.formAction="/feedback/edit";
			}else{
			    this.formAction="/feedback/create";
			}
			this.ajax();
		},
		methods: {
			del(item){
				uni.showModal({
					title: '提示',
					content: '您确定要删除这个吗',
					success: res => {
						if (res.confirm) {
							this.postAjax('/ajax/mydel', {
								id: item.id,
								tablename: 'feedbacks'
							}).then(msg => {
								if (msg.data.status == 2) {
									this.back();
								}
							});
						}
					}
				})
			},
			submit(){
				this.vaildForm(this, res => {
					if(res){
						this.postAjax(this.formAction, this.ruleform).then(msg => {
							if (msg.data.status == 2) {
								this.back();
							}
						});
					}
				})
			},
			ajax() {
					this.getAjax(this).then(msg => {
						if(msg.detail){
							this.ruleform = msg.detail;
						}
					});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>