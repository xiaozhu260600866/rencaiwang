import Vue from 'vue'
import App from './App'
import myfun from 'xiaozhu/uniapp/js/myfun.js' //引入自定义方法
import filter from 'xiaozhu/uniapp/js/filter.js' //引入自定义方法
import myfun2 from './public/js/myfun.js' //引入自定义方法
import ajax from 'xiaozhu/uniapp/js/ajax.js' //引入自定义方法
import message from 'xiaozhu/uniapp/js/message.js' //引入自定义方法
import date from 'xiaozhu/uniapp/js/date.js' //引入自定义方法
import vaildate from 'xiaozhu/uniapp/js/vaildate.js' //引入自定义方法
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
import page from 'xiaozhu/uniapp/components/default'
Vue.component(
	'page',
	page
);
import floatBtn from 'xiaozhu/uniapp/components/floatBtn'
Vue.component(
	'floatBtn',
	floatBtn
);
//全局组件
import myswiper from 'doxinui/components/swiper/swiper'
Vue.component(
	'myswiper',
	myswiper
);

Vue.config.productionTip = false
Vue.use(myfun);
Vue.use(ajax);
Vue.use(myfun2);
Vue.use(message);
Vue.use(date);
Vue.use(filter);
Vue.use(vaildate);


App.mpType = 'app'
import 'provider.js';
import '@/public/css/app.css';
import "doxinui/css/global_upx.css";
import "doxinui/css/global_icon.css";
import '@/public/weui/weui.css';
import "@/public/font/iconfont.css";

const app = new Vue({
    ...App
})
app.$mount()
