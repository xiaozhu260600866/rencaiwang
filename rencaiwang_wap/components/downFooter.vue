<template>
	<view class="down_footer">
		<div class="flex-between w-b100">
			<div  v-for="(v,key) in lists" class="parentDiv">
				<div  class="parentDiv_">
					<button style="padding: 12px 20px !important" data-v-8688deb0="" class="dxi-btn dxi-btn-primary" @click="toggle(lists,v)">	{{v.label}}</button>
					<div class="children w-b100" v-if="v.children && v.children.length" :style="{top:'-'+ 50 * v.children.length+'px'}">
						<button @click="goto(children.url,1)" style="padding: 0!important; height: 40px;text-align: center;line-height: 40px;" data-v-8688deb0="" class="dxi-btn dxi-btn-primary children-btn" v-if="children.show" v-for="children  in v.children">
							<span class="fs-12">{{children.label}}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				lists: [],
				text: [
				 {
					label: '人才资一',
					children: [{
							label: '人才资1',
							show: false
						},
						{
							label: '人才资2',
							show: false
						},
						{
							label: '人才资3',
							show: false
						},
					]
				},
				{
					label: '人才资二',
					children: [{
							label: '人才资1',
							show: false
						},
						{
							label: '人才资2',
							show: false
						},
						{
							label: '人才资3',
							show: false
						},
					]
				},
				{
					label: '人才资三',
					children: [{
							label: '人才资1',
							show: false
						},
						{
							label: '人才资2',
							show: false
						},
						{
							label: '人才资3',
							show: false
						},
					]
				},
				]
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
			toggle(data,v) {
				data.forEach(v=>{
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
				}else{
					this.goto(v.url,1);
				}
			}
		}
	}
</script>
<style>
	.children-btn{
		background-color: white !important;
		color: #000000 !important;
	},
	.parentDiv_{
		width:100%;position: relative;
	}
	.parentDiv{
		width:30%;margin-right: 3%;
	}
	.dxi-btn[data-v-8688deb0] {
		color:white;
		width:100%;
		background-color: rgb(21, 101, 192) ;
		border-color: rgb(21, 101, 192) !important;
	    display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    cursor: pointer;
	    border: 1px solid #dcdfe6;
	    -webkit-appearance: none;
	    text-align: center;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    outline: none;
	    margin: 0;
	    -webkit-transition: .1s;
	    transition: .1s;
	    font-weight: 500;
	    -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	  
	    font-size: 15px;
	    -webkit-border-radius: 4px;
	    border-radius: 4px;
	}
	.children {
		margin-bottom: 20px;
		position: absolute;
		
	}

	.children uni-form {
		margin-bottom: 5px;
	}

	.down_footer {
		display: flex;
		justify-content: space-between;
		padding: 60upx 40upx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}
</style>
