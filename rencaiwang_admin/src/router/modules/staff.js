/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const staffRouter = {
    path: '/staff',
    component: Layout,
    redirect: 'noRedirect',
    name: 'staff',
    meta: { title: '员工管理', icon: 'user', roles: ['staff', 'admin'] },
    children: [
    {
        path: 'staff',
        component: () => import('@/views/staff/lists'),
         name: 'staff',
         meta: { title: '员工', icon: '', params: { role: 3 }, roles: ['staff.lists', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看员工', icon: '', roles: ['staff.lists.show'] }
             },
             {
               path: 'lists-create',
               hidden: true,
               meta: { title: '新建员工', icon: '', roles: ['staff.lists.create'] }
             },
             {
               path: 'lists-edit',
               hidden: true,
               meta: { title: '编辑员工', icon: '', roles: ['staff.lists.edit'] }
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除员工', icon: '', roles: ['staff.lists.del'] }
             }
         ]
     }
   ]
}

export default staffRouter
