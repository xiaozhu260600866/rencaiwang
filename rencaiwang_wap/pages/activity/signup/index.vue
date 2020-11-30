<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="show">
			<top-header></top-header>
			<view class="opinion plr30">
				<view v-for="(v,key) in data.detail.getAttribute">
					<weui-input :disabled="data.detail.order ? true : false"  v-model="ruleform['field_'+key]" :label="v.title"  type="textarea" :name="'field_'+key" :datatype="v.isRequire ? 'require' : ''" v-if="v.type == '多行文本'"></weui-input>
					<weui-input :disabled="data.detail.order ? true : false"  v-model="ruleform['field_'+key]" :label="v.title"  type="text" :name="'field_'+key" :datatype="v.isRequire ? 'require' : ''" v-if="v.type == '文本'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :label="v.title" :name="'field_'+key" changeField="label" :datatype="v.isRequire ? 'require' : ''" :type="!data.detail.order ? 'select' :'text'" :dataKey="'arr'+key"  v-if="v.type == '下拉框'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :row="true" :label="v.title" :name="'field_'+key" changeField="label" :datatype="v.isRequire ? 'require' : ''" :type="!data.detail.order ? 'radio' :'text'" :dataKey="'arr'+key"  v-if="v.type == '单项选择'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :row="true" :label="v.title" :name="'field_'+key" changeField="label" :datatype="v.isRequire ? 'array' : ''" :type="!data.detail.order ? 'checkbox' :'text'"  :dataKey="'arr'+key"  v-if="v.type == '多项选择'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :row="true" :label="v.title" :name="'field_'+key"  :datatype="v.isRequire ? 'require' : ''" :type="!data.detail.order ? 'time' :'text'"  v-if="v.type == '时间'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :row="true" :label="v.title" :name="'field_'+key"  :datatype="v.isRequire ? 'require' : ''" :type="!data.detail.order ? 'date' :'text'"   v-if="v.type == '日期'"></weui-input>
					<weui-input  :disabled="data.detail.order ? true : false" v-model="ruleform['field_'+key]" :row="true" :label="v.title" :name="'field_'+key"  upurl='activity' :allowUpLoadNum="v.allowUploadNum" :datatype="v.isRequire ? 'require' : ''" type="upload"  v-if="v.type == '上传图片'"></weui-input>
				</view>
				<!-- <weui-input v-model="ruleform.title" placeholder="请填写标题" type="text" name="title" datatype="require"></weui-input>
				<view class="date fs-15 fc-3">提交时间：<text class="Arial">{{ruleform.id ? ruleform.date :data.date}}</text></view>
				<weui-input v-model="ruleform.phone" placeholder="请填写联系方式" type="number" name="phone" datatype="require|phone"></weui-input>
				<weui-input v-model="ruleform.remark" placeholder="请填写您的意见" type="textarea" name="remark" datatype="require"></weui-input> -->
			</view>
			<dx-button type="success" block @click="submit" v-if="!data.detail.order">提交</dx-button>
			<dx-button type="success" block @click="cancelOrder" v-if="data.detail.order">取消报名</dx-button>
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
				formAction: '/activity/show',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {},
				show:false,
				arr0:[],
				arr1:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[],
				arr6:[],
				arr7:[],
				arr8:[],
				arr9:[],
				arr10:[],
				arr11:[],
				arr12:[],
				arr13:[],
				arr14:[],
				arr15:[],
				arr16:[],
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
			this.ajax();
		},
		methods: {
			cancelOrder(){
				uni.showModal({
					title: '提示',
					content: '您确定要取消报名吗?',
					success: res => {
						if (res.confirm) {
							this.postAjax('/ajax/mydel', {
								id: this.data.detail.order.id,
								tablename: 'activity_order'
							}).then(msg => {
								if (msg.data.status == 2) {
									this.goto('/pages/activity/lists/index');
								}
							});
						}
					}
				})
			},
			submit(){
				console.log(this.vaildate);
				 console.log(this.ruleform);
				 //return
				this.vaildForm(this, res => {
					if(res){
						this.ruleform.activity =  this.data.detail;
						this.postAjax("/activity/signup",this.data.detail).then(res=>{
							if(res.data.status == 2){
								this.postAjax('/activity/order', this.ruleform).then(msg => {
									if (msg.data.status == 2) {
										this.back();
									}
								});
							}
							
						})
					}
				})
			},
			canSignUp(){
				this.postAjax("/activity/signup",this.data.detail).then(msg=>{
					
				})
			},
			ajax() {
				this.getAjax(this).then(msg => {
					msg.detail.getAttribute.forEach((v,key)=>{
						if(v.children){
							let arr = JSON.parse(v.children);
							this['arr'+key] = arr;
						}
						if(msg.detail.order && msg.detail.order['field_'+ key]){
							 let value = JSON.parse(msg.detail.order['field_'+ key]);
							 if(value.attribute_id == v.id){
								  if(v.children){
									  
									  this.$set(this.ruleform,"field_"+key,value.value)
								  }else{
									  if(v.type == '上传图片'){
										   this.$set(this.ruleform,"field_"+key,value.value.split(','))
									  }else{
										  this.$set(this.ruleform,"field_"+key,value.value)
									  }
								  }
							 }
									
							
						}
					})
					
					this.show = true;
					
					console.log(this.$data)
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>