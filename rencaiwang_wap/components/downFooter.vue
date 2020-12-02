<template>
	<view>
		<view class="share-bg" v-if="bgShow" @click="toHidden"></view>
		<view class="down_footer">
			<div v-for="(v,key) in lists" class="parentDiv">
				<button class="dxi-btn parent-btn" @click="toggle(lists,v)">{{v.label}}</button>
				<div class="children w-b100" v-if="v.children && v.children.length" :style="{top:'-'+(10+80 * v.children.length)+'rpx'}">
					<button @click="gotoUrl(children.url)" class="dxi-btn children-btn" v-if="children.show" v-for="children in v.children">
						<span class="fs-14 text-center">{{children.label}}</span>
					</button>
				</div>
			</div>
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
.share-bg{position: fixed;top: 0px;right: 0;bottom: 0;left: 0;width: 100%;height: 800px;background: #000;filter: alpha(opacity=60);-moz-opacity: 0.6;opacity: 0.6;}
.down_footer{display: flex;justify-content: space-between;padding: 24upx 30upx;background-color: #fff;position: fixed;bottom: 0;left: 0;width: 100%;z-index: 999;}
.down_footer .dxi-btn{display: flex;line-height: 1;white-space: nowrap;cursor: pointer;background: #fff;border: 1px solid #dcdfe6;color: #606266;text-align: center;box-sizing: border-box;outline: none;margin: 0;transition: .1s;font-weight: 500;padding: 24upx 40upx;font-size: 15px;border-radius: 8upx;background-color: #419cf5;color: #fff;}
.down_footer .dxi-btn::after{display: none;}
.down_footer .parentDiv {width: 30%;margin: 0 1.5%;position: relative;}
.down_footer .children{position: absolute;}
.down_footer .children-btn{background-color: white !important;color: #000000 !important;border: 0;border-radius: 0;justify-content: center;}
</style>
