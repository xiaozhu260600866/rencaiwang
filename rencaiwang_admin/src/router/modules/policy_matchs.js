/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const policyMatchRouter = {
    path: '/policyMatch',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Policy',
    meta: {title: '政策匹配发布', icon: 'dx-hr',roles:['policyMatch']},
    children: [{
        path: 'lists',
        component: () => import('@/views/policyMatch/lists'),
        name: 'PolicyLists',
        meta: { title: '政策匹配列表', icon: 'dx-hr-info',roles:['policyMatch.lists']  },
        children:[
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看政策匹配', icon: 'dx-hr-info',roles:['policyMatch.lists.show']  },
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除政策匹配', icon: 'dx-hr-info',roles:['policyMatch.lists.del']  },
            }
        ]
    },{
        path: 'create',
        component: () => import('@/views/policyMatch/create'),
        hidden: true,
        name: 'PolicyCreate',
        meta: { title: '发布政策匹配',roles:['policyMatch.create'] }
    },{
        path: 'edit',
        component: () => import('@/views/policyMatch/create'),
        hidden: true,
        name: 'PolicyEdit',
        meta: { title: '编辑政策匹配',roles:['policyMatch.edit'] }
    }]
}

export default policyMatchRouter
