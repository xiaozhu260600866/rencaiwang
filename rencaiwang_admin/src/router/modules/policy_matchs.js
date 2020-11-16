/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const policyMatchRouter = {
    path: '/policyMatch',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Policy',
    meta: {title: '政策匹配发布', icon: 'dx-hr',roles:['policyMatch']},
    children: [
      {
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
    },
    {
        path: 'visit',
        component: () => import('@/views/policyMatch/visit'),
         name: 'SettingPhone',
         meta: { title: '访问量', icon: 'dx-sales-order', params: { table_name: 'policy_matchs' },roles:["policyMatch.visit","admin"]},
         children:[
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看', icon: 'dx-hr-info',roles:['policyMatch.visit.show']  },
             },

             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除', icon: 'dx-hr-info',roles:['policyMatch.visit.del']  },
             }
         ]
     },

    {
        path: 'order',
        component: () => import('@/views/policyMatch/order'),
        name: 'PolicyOrderLists',
        meta: { title: '政策咨询查看', icon: 'dx-hr-info',roles:['policyMatch.order'],params:{status:0}  },
        children:[
          {
            path: 'order-show',
            hidden: true,
            meta: { title: '查看咨询查看', icon: 'dx-hr-info',roles:['policyMatch.order.show']  },
          },
            {
              path: 'order-del',
              hidden: true,
              meta: { title: '删除政策咨询查看', icon: 'dx-hr-info',roles:['policyMatch.order.del']  },
            }
        ]
    },

    {
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
