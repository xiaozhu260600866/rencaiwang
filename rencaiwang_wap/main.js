import Vue from 'vue'
import App from './App'
import myfun from 'xiaozhu/uniapp/js/myfun.js' //引入自定义方法

import hasMore from 'xiaozhu/uniapp/components/hasMore'
Vue.component(
	'hasMore',
	hasMore
);

import weui_input from 'xiaozhu/uniapp/components/weui_input'
Vue.component(
	'weui-input',
	weui_input
);

import dxButton from "doxinui/components/button/button"
Vue.component(
	'dxButton',
	dxButton
);

import dxftButton from "doxinui/components/button/footer-button"
Vue.component(
	'dxftButton',
	dxftButton
);

Vue.config.productionTip = false
Vue.use(myfun);

App.mpType = 'app'

import '@/public/css/app.css';
import "doxinui/css/global_upx.css";
import "doxinui/css/global_icon.css";
import '@/public/weui/weui.css';
import "@/public/font/iconfont.css";

const app = new Vue({
    ...App
})
app.$mount()
