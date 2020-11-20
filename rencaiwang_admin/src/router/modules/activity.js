/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const activityRouter = {
    path: '/activity',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Activity',
    meta: { title: '活动发布', icon: 'documentation', roles: ['activity'] },
    children: [{
        path: 'lists',
        component: () => import('@/views/activity/lists'),
        name: 'ActivityLists',
        meta: { title: '活动列表', icon: '', roles: ['activity.lists'] },
        children: [
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看活动', icon: '', roles: ['activity.lists.show'] }
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除活动', icon: '', roles: ['activity.lists.del'] }
            }
        ]
    }, {
        path: 'create',
        component: () => import('@/views/activity/create'),
        hidden: true,
        name: 'ActivityCreate',
        meta: { title: '发布活动', roles: ['activity.create'] }
    }, {
        path: 'edit',
        component: () => import('@/views/activity/create'),
        hidden: true,
        name: 'ActivityEdit',
        meta: { title: '编辑活动', roles: ['activity.edit'] }
    },
    {
        path: 'order',
        component: () => import('@/views/activity/order'),
        hidden: true,
        name: 'ActivityOrder',
        meta: { title: '查看用户报名数据', roles: ['activity.order'] },
        children: [
          {
            path: 'order-show',
            hidden: true,
            meta: { title: '查看活动', icon: '', roles: ['activity.order.show'] }
          },
            {
              path: 'order-del',
              hidden: true,
              meta: { title: '删除活动', icon: '', roles: ['activity.order.del'] }
            }
        ]
    }]
}

export default activityRouter
