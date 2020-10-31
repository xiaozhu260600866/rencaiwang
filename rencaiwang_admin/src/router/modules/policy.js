/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const policyRouter = {
    path: '/policy',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Policy',
    meta: {title: '政策发布', icon: 'dx-hr',roles:['policy']},
    children: [{
        path: 'lists',
        component: () => import('@/views/policy/lists'),
        name: 'PolicyLists',
        meta: { title: '政策列表', icon: 'dx-hr-info',roles:['policy.lists']  },
        children:[
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看政策', icon: 'dx-hr-info',roles:['policy.lists.show']  },
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除政策', icon: 'dx-hr-info',roles:['policy.lists.del']  },
            }
        ]
    },{
        path: 'create',
        component: () => import('@/views/policy/create'),
        hidden: true,
        name: 'PolicyCreate',
        meta: { title: '发布政策',roles:['policy.create'] }
    },{
        path: 'edit',
        component: () => import('@/views/policy/create'),
        hidden: true,
        name: 'PolicyEdit',
        meta: { title: '编辑政策',roles:['policy.edit'] }
    }]
}

export default policyRouter
