/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const activityRouter = {
    path: '/activity',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Article',
    meta: {title: '活动发布', icon: 'dx-hr',roles:['activity']},
    children: [{
        path: 'lists',
        component: () => import('@/views/activity/lists'),
        name: 'ArticleLists',
        meta: { title: '活动列表', icon: 'dx-hr-info',roles:['activity.lists']  },
        children:[
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看活动', icon: 'dx-hr-info',roles:['activity.lists.show']  },
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除活动', icon: 'dx-hr-info',roles:['activity.lists.del']  },
            }
        ]
    },{
        path: 'create',
        component: () => import('@/views/activity/create'),
        hidden: true,
        name: 'ArticleCreate',
        meta: { title: '发布活动',roles:['activity.create'] }
    },{
        path: 'edit',
        component: () => import('@/views/activity/create'),
        hidden: true,
        name: 'ArticleEdit',
        meta: { title: '编辑活动',roles:['activity.edit'] }
    }]
}

export default activityRouter
