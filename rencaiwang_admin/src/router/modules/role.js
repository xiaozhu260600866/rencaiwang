/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const roleRouter = {
    path: '/role',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Role',
    meta: {title: '角色列表', icon: 'dx-hr',roles:['role','admin']},
    children: [{
        path: 'lists',
        component: () => import('@/views/role/lists'),
        name: 'RoleLists',
        meta: { title: '角色列表', icon: 'dx-hr-info',roles:['role.lists','admin']  },
        children:[
            {
              path: 'lists-show',
              hidden: true,
              meta: { title: '查看角色', icon: 'dx-hr-info',roles:['role.lists.show']  },
            },
            {
              path: 'lists-create',
              hidden: true,
              meta: { title: '新建角色', icon: 'dx-hr-info',roles:['role.lists.create']  },
            },
            {
              path: 'lists-edit',
              hidden: true,
              meta: { title: '编辑角色', icon: 'dx-hr-info',roles:['role.lists.edit']  },
            },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除角色', icon: 'dx-hr-info',roles:['role.lists.del']  },
            }
        ]
    }]
}

export default roleRouter
