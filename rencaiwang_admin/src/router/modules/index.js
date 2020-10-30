/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const indexRouter = {
    path: '/index',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Index',
    title:'首页',
    meta: { title: '首页', icon: 'dx-index',roles:["index","admin"] },
    children: [
        {
          path: 'lists',
          component: () => import('@/views/index/index'),
          name: 'index',
           title:'首页',
          meta: { title: '首页', icon: 'dx-index',roles:["index.lists","admin"] }
        }
    ]
}

export default indexRouter
