<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="https://rencaiwang.doxinsoft.com/images/wap/banner-wd.jpg" mode="widthFix"></image>
			</view>
			
			<view class="question">
				<view class="que-item shadow-block pb0" v-for='(v,questionKey) in question'>
					<view class="topic"><text class="Arial">{{questionKey+1}}</text>、<span v-html="getTitle(v.label)"></span></view>
					<view class="answer">
						<radio-group class="radio-group" @change="radioChange">
							<label class="radio-item" v-for="(item, answerKey) in v.children" :key="answerKey">
								<view>
									<radio :value="questionKey + ':' + answerKey" :checked="item.checked" :data-answerkey="answerKey" :data-questionkey="questionKey"/>
								</view>
								<view v-html="getTitle(item.label)"></view>
							</label>
						</radio-group>
					</view>
				</view>
				<hasMore :parentData="data" message="没有找到符合条件的政策"></hasMore>
				<view class="pt10 text-center" @click="submit" v-if="data.lists.data.length">
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
	export default {
		components:{topHeader,downFooter},
		data() {
			return {
				formAction: '/policyMatch/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				question:[],
				answerResult:[],
				question_copy:[]
				
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
			getTitle(title){
				return title.replace(/\n/g,"</br>");
			},
			submit(){
				let nextQuestion = [];
				console.log(this.question);
				for (let question of this.question) {
					let canVaild = false;
					for (let answer of question.children) {
						if(answer.checked){
							canVaild = true;
							if(!answer.append){
								this.answerResult.push(question);
								answer.append = true;
							}
						
							if(answer.children){
								answer.children.forEach(children=>{
									nextQuestion.push(children);
								})
							}
						}
					}
					if(!canVaild){
						return this.getError(question.label+'未填写');
					}
				}
				if(nextQuestion.length >0){
					this.question = nextQuestion
				}else{
					
					
					uni.setStorageSync('question', this.question_copy);
					uni.setStorageSync('answerResult', this.answerResult);
					this.postAjax('/policyMatch/visit',{id:this.data.lists.data[0].id}).then(msg=>{
						this.goto('/pages/policy/result/index');
					});
					
					
					// this.postAjax('/policyMatch/order',{question:this.question_copy,answerResult:this.answerResult});
					// console.log(this.question_copy)
					// this.answerResult.forEach(v=>{
					// 	this.reSetDataCopy(this.question_copy,v.uid);
					// })
					// console.log(this.question_copy)
				}
				
			},
			radioChange: function(evt) {
				let res = evt.detail.value.split(":");
				this.question[res[0]].children.forEach((v,key)=>{
					if(res[1] == key){
						this.$set(v,"checked",true);
						
					}else{
						this.$set(v,"checked",false);
					}
				})
				
			},
			reSetDataCopy(content,uid){
				content.forEach(v=>{
					if(v.uid == uid){
						v.checked = true;
					}
					if(content.children){
					  this.reSetDataCopy(content.children,uid);
					}
				})
				return content;
			},
			
			reSetData(content){
				content.uid = Math.ceil(Math.random()*100);
			    if(content.children){
				  this.reSetData(content.children);
			    }
				return content;
			},
			reSort(data){
				let res = [];
				for (var i = 0; i < data.length; i++) {
						//console.log(data[i].sort);
					  for (var j = i+1; j < data.length; j++) {
					  	  if(parseInt(data[i].sort) < parseInt(data[j].sort)){
							  let temp = data[i];
							  data[i] = data[j];
							  data[j] = temp;
						  }
					  }
				}
				// let arr =[100,300,200,50,70];
				// for (var i = 0; i < arr.length; i++) {
				// 	  for (var j = i+1; j < arr.length; j++) {
				// 	  	  if(arr[i] < arr[j]){
				// 			  let temp = arr[i];
				// 			  arr[i] = arr[j];
				// 			  arr[j] = temp;
				// 		  }
				// 	  }
				// }
				// console.log(arr);
				
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.data.lists.data.forEach(v=>{
						if(v.getQuestions && v.getQuestions.length){
							v.getQuestions.forEach(msg=>{
								let content =this.reSetData(JSON.parse(msg.content));
								this.question.push(content);
								this.question_copy.push(content);
							})
						}
					})
					this.reSort(this.question);
					
				});
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>