const myfun = function() {};
myfun.install = (Vue, options) => {
	Vue.prototype.getClassName = (getClassName)=>{
		let res = "";
		if(getClassName.length){
			getClassName.forEach((v,key)=>{
				if(key==getClassName.length -1 ){
					res+=v[v.length-1];	
				}else{
					res+=v[v.length-1]+',';
				}
				
			})
		}
		return res;
	},
	Vue.prototype.getFileArr = (fileString)=>{
		let res = []
		fileString.split(",").forEach(file=>{
			name:res.push({name:file});
		})
		console.log(res)
		return res;
	},
	Vue.prototype.updateHistory=()=>{
		Vue.prototype.updateUrl(["/pages/shop/index/index","/pages/shop/product/class/index","/pages/shop/user/cart/index",'/pages/shop/user/index/index','/pages/index/main']);
	}
	Vue.prototype.shareData = (path, user_id, to_userid, title) => {
			return {
				title: title,
				path: path,
				success: res => {
					console.log('a');
					Vue.prototype.getError("1" + user_id);
					Vue.prototype.getError("1" + to_userid);
					Vue.prototype.postAjax("/user/card/create", {
						user_id: user_id,
						to_userid: to_userid,
						type: 3
					}, msg => {

					});
				},
				fail: res => {
					console.log(res);
				}
			}
		},
		Vue.prototype.toIndex = () => {

			let role_type = uni.getStorageSync('role_type');
			if (role_type == 0) {
				return Vue.prototype.goto("/pages/cardLists/index");
			}
			if (role_type == 1) {
				return Vue.prototype.goto("/pages/user/website/products/lists/index", 2);
			}
			if (role_type == 2) {

				return Vue.prototype.goto("/pages/shop/index/index", 2);
			}
			if (role_type == 3) {
				return Vue.prototype.goto("/pages/cardLists/index");
			}
			if (role_type == 4) {
				return Vue.prototype.goto("/pages/index/index", 2);
			}


		}

}

export default myfun;
