/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const settingRouter = {
    path: '/setting',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Setting',
    meta: { title: '基本配置', icon: 'dx-setting',roles:["setting","admin"] },
    children: [{
        path: 'system',
        component: () => import('@/views/setting/system'),
        name: 'SettingSystem',
        meta: { title: '系统配置', icon: 'dx-sales-order',roles:["setting.setting","admin"] }
    },
    {
        path: 'phone',
        component: () => import('@/views/phone/lists'),
         name: 'SettingPhone',
         meta: { title: '电话设置', icon: 'dx-sales-order', params: { type: 1 },roles:["setting.phone","admin"]},
         children:[
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看', icon: 'dx-hr-info',roles:['setting.phone.show']  },
             },
             {
               path: 'lists-create',
               hidden: true,
               meta: { title: '新建', icon: 'dx-hr-info',roles:['setting.phone.create']  },
             },
             {
               path: 'lists-edit',
               hidden: true,
               meta: { title: '编辑', icon: 'dx-hr-info',roles:['setting.phone.edit']  },
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除', icon: 'dx-hr-info',roles:['setting.phone.del']  },
             }
         ]
     },
	 {
	      path: 'poster',
	      component: () => import('@/views/poster/lists'),
	      name: 'SettingPoster',
	      meta: { title: '媒体设置', icon: 'dx-sales-order', params: { type: 1 },roles:["setting.poster","admin"]},
		  children:[
		      {
		        path: 'lists-show',
		        hidden: true,
		        meta: { title: '查看', icon: 'dx-hr-info',roles:['setting.poster.show']  },
		      },
		      {
		        path: 'lists-create',
		        hidden: true,
		        meta: { title: '新建', icon: 'dx-hr-info',roles:['setting.poster.create']  },
		      },
		      {
		        path: 'lists-edit',
		        hidden: true,
		        meta: { title: '编辑', icon: 'dx-hr-info',roles:['setting.poster.edit']  },
		      },
		      {
		        path: 'lists-del',
		        hidden: true,
		        meta: { title: '删除', icon: 'dx-hr-info',roles:['setting.poster.del']  },
		      }
		  ]
	 }
    
    ]
    //{
    //     path: 'poster',
    //     component: () => import('@/views/poster/lists'),
    //     name: 'SettingPoster',
    //     meta: { title: '媒体设置', icon: 'dx-sales-order', params: { type: 1 }}
    // },
    // {
    //     path: 'userRechargeRole',
    //     component: () => import('@/views/setting/rechargeRole/lists'),
    //     name: 'SettingPoster',
    //     meta: { title: '充值规则', icon: 'dx-sales-order', params: { type: 1 }}
    // },
    // {
    //     path: 'city',
    //     component: () => import('@/views/city/lists'),
    //     name: 'SettingPoster',
    //     meta: { title: '地区设置', icon: 'dx-sales-order' }
    // },
    // {
    //     path: 'market',
    //     component: () => import('@/views/market/lists'),
    //     name: 'SettingPoster',
    //     meta: { title: '市场设置', icon: 'dx-sales-order' }
    // }]
}

export default settingRouter
