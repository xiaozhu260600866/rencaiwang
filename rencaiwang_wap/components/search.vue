<template>
	<view>
		<view class="search" :style="{padding:padding}">
			<view class="search-box" :class="areaShow && typeShow ? 'twoSelect':''">
				<view class="dxi-icon dxi-icon-search2"></view>
				<input class="input"  type="text" :placeholder="placeholder" v-model="searchVal" @confirm="callBack"/>
				<slot></slot>
				<view class="area flex" v-if="areaShow" >
					<picker :value="actIndex" class="order-picker" :range="selectAreaArr" range-key="label" @change="selectRes">
						{{  actIndex == -1 ? '市区县' : selectAreaArr[actIndex].label }}</picker>
					<text class="dxi-icon dxi-icon-down"></text>
				</view>
				<view class="area flex" v-if="typeShow" >
					<picker :value="curIndex" class="order-picker" :range="fclass" range-key="label" @change="selectType">
						{{  curIndex == -1 ? '分类' : fclass[curIndex].label }}</picker>
					<text class="dxi-icon dxi-icon-down"></text>
				</view>
			</view>
		</view>
		<!-- <view class="select-area" v-if="selectArea == true">
			<view class="area-box">
				<view class="top flex-between flex-middle">
					<view class="left flex-middle">
						<image class="img" src="/static/images/area-location.png"></image>
						<text class="fs-15 fc-6">市区县</text>
					</view>
					<view class="right fs-12 fc-7">多选</view>
				</view>
				<view class="con">
					<weui-input v-model="ruleform.selectArea" name="selectArea" changeField="value" type="checkbox" dataKey="selectAreaArr"
					 :row="true" Labelleft></weui-input>
				</view>
			</view>
			<view class="tips mtb10 text-center fs-14 fc-7">更多人才政策持续更新中…</view>
			<view class="flex-center">
				<dx-button type="danger" myclass="plr50" round>提 交</dx-button>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		props:{
			placeholder:{
				type: String,
				default: '请输入搜索关键字'
			},
			padding:{
				type:String,
				default:'60rpx 40rpx 40rpx'
			},
			fclass:{
				type:Array,
				default:[]
			},
			selectAreaArr:{
				type:Array,
				default:[]
			},
			areaShow:{
				type: Boolean,
				default: false
			},
			typeShow:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectArea: false,
				searchVal:'',
				actIndex:-1,
				curIndex:-1,
				ruleform:{},
				
			}
		},
		methods: {
			selectRes(event) {
				this.actIndex = event.mp.detail.value;
				this.$emit('callBackTown',this.selectAreaArr[this.actIndex]);
			},
			selectType(event) {
				this.curIndex = event.mp.detail.value;
				this.$emit('callBackClass',this.fclass[this.curIndex]);
			},
			callBack(){
				this.$emit("callBack",this.searchVal);
			}
		}
	}
</script>
<style>
.search-box{display: flex;align-items: center;border-radius: 8upx;border: 2upx #999 solid;height: 88upx;padding: 0 20upx;}
.search-box .dxi-icon{font-size: 32upx;color: #737373;padding-right: 20upx;}
.search-box .input{display: block;flex: 1;}
.search-box .area{padding-left: 30upx;position: relative;font-size: 28upx;color: #737373;}
.search-box .area .dxi-icon{font-size: 24upx;padding-left: 30upx;}
.search-box .area::before{content: '';display: block;position: absolute;left: 0;top: 50%;margin-top: -24upx;height: 48upx;width: 2upx;background-color: #bfbfbf;}

.twoSelect{padding-right: 0;}
.twoSelect .area{padding-left: 16upx;}
.twoSelect .area .dxi-icon{padding: 0 16upx;}
.twoSelect .input{font-size: 30upx;}


/* 选择区域 */
.select-area{margin: 60upx 40upx 40upx;}
.select-area .area-box{padding: 0 20upx 20upx;border: 1upx solid #999;border-radius: 8upx;box-shadow: 0 2px 10px 0 hsla(0,6%,58%,.6)}
.select-area .top{border-bottom: 1upx #e6e6e6 solid;height: 100upx;}
.select-area .top .img{width: 40upx;height: 40upx;margin-right: 10upx;display: flex;}
.select-area .con{max-height: 520upx;overflow-y: auto;}
.select-area /deep/.dx-cell{padding: 10upx 0 0;border-bottom: 0;font-size: 32upx;}
.select-area /deep/.dx-check_label{margin: 10upx 0;}
.select-area /deep/.uni-checkbox-input{width: 52upx;height: 52upx;border: 4upx #404040 solid;}
</style>