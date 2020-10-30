<template>
	<view>
		<!-- <page :parentData="data" :formAction="formAction"></page> -->
		<view>
			<!-- 头部 -->
			<top-header></top-header>
			
			<!-- 广告位 -->
			<view class="ad">
				<image class="w-b100 flex" src="/static/images/index-ad.jpg" mode="widthFix"></image>
			</view>
			
			<view class="question">
				<view class="que-item shadow-block" v-for='(v,key) in questionArr'>
					<view class="topic"><text class="Arial">{{key+1}}</text>、{{v.title}}</view>
					<view class="answer">
						<radio-group class="radio-group" @change="radioChange">
							<label class="radio-item" v-for="(item, index) in v.answerArr" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === current" />
								</view>
								<view>{{item.label}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="pt10 text-center">
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
				formAction: '/shop/product/class',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
				questionArr:[{
					title:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全意识，引导群众广泛参与，提升社会网络安全意识和防护功能。活动正式举办？',
					answerArr:[
						{value: 1,label: '是'},
					]
				},{
					title:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全意识，引导群众广泛参与，提升社会网络安全意识和防护功能。活动正式举办？',
					answerArr:[
						{value: 1,label: '是'},
						{value: 2,label: '否'},
						{value: 3,label: '都不是'},
					]
				},{
					title:'活动正式举办，本次活动突出展示了网络安全，在国家安全、社会发展推动网络安全产业发展，普及网络安全意识，引导群众广泛参与，提升社会网络安全意识和防护功能。活动正式举办？',
					answerArr:[
						{value: 1,label: '否'},
					]
				}],
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
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			ajax() {
				
			}
		}
	}
</script>
<style scoped="">
@import url("./index.css");
</style>