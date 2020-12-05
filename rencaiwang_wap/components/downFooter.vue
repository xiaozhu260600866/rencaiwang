<template>
	<view>
		<view class="share-bg" v-if="bgShow" @click="toHidden"></view>
		<view class="down_footer">
			<view v-for="(v,key) in lists" class="parentDiv">
				<button class="dxi-btn parent-btn" @click="childrenKey = key;toggle(lists,v)">{{v.label}}</button>
				<view class="children w-b100" v-if="v.children && v.children.length" :style="{top:'-'+(40+90 * v.children.length)+'rpx'}">
					<view class="children-box" v-if="childrenKey == key">
						<button @click="gotoUrl(children.url)" class="dxi-btn children-btn" v-if="children.show" v-for="children in v.children">
							<span class="fs-15 text-center">{{children.label}}</span>
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				lists: [],
				bgShow:false,
				childrenKey:-1
				
				
			}
		},
		created() {
			this.postAjax("/category.html", {
				type: 1
			}, "notloing").then(msg => {
				this.lists = msg.data.data;
			})
		},
		methods: {
			gotoUrl(url){
				this.toHidden();
				console.log(url)
				this.bgShow= false;
				window.location.href=url;
			},
			toHidden(){
				this.bgShow= !this.bgShow;
				this.childrenKey = -1;
				this.lists.forEach(v=>{
					 if (v.children && v.children.length) {
					 	v.children.forEach(children => {
					 		children.show = false;
					 	})
					 }
				})
				
			},
			toggle(data, v) {
				this.bgShow = true;
				data.forEach(v => {
					if (v.children && v.children.length) {
						v.children.forEach(children => {
							children.show = false;
						})
					}
				})
				if (v.children && v.children.length) {
					v.children.forEach(children => {
						children.show = !children.show;
						console.log(children)
					})
				} else {
					this.gotoUrl(v.url);
				}
			}
		}
	}
</script>
<style scoped>
.share-bg{position: fixed;top: 0px;right: 0;bottom: 0;left: 0;width: 100%;height: 800px;background: #000;filter: alpha(opacity=40);-moz-opacity: 0.4;opacity: 0.4;}
.down_footer{display: flex;justify-content: space-between;padding: 12upx 10upx;background-color: #fff;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 999;}
.down_footer .dxi-btn{display: flex;line-height: 1;white-space: nowrap;cursor: pointer;background: #fff;border: 1px solid #dcdfe6;color: #606266;text-align: center;box-sizing: border-box;outline: none;margin: 0;transition: .1s;font-weight: 500;padding: 24upx 40upx;font-size: 15px;border-radius: 8upx;background-color: #419cf5;color: #fff;justify-content: center;}
.down_footer .dxi-btn::after{display: none;}
.down_footer .parentDiv {width: 32%;margin: 0 0.5%;position: relative;}
.down_footer .children{position: absolute;}
.down_footer .children-box{position: relative;border: 1px #d0d0d0 solid;border-radius: 6upx;background-color: white;}
.down_footer .children-btn{color: #000!important;border: 0;border-radius: 0;justify-content: center;margin: 0 20upx;background-color: white!important;border-bottom: 1px solid #e7e7eb;padding: 0;height: 45px;line-height: 45px;text-align: center;}
.down_footer .children-btn:last-child{border-bottom: 0;}
.down_footer .children-box::before{content: '';display: block;position: absolute;left: 50%;bottom: -16px;width: 0;height: 0;border-width: 8px;border-style: solid;border-color: #fff transparent transparent transparent;margin-left: -8px;}
</style>
