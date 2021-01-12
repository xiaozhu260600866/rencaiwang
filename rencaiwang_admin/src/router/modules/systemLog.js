/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const systemLogRouter = {
    path: '/systemLog',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Role',
    meta: { title: '登录日志', icon: 'dx-hr', roles: ['systemLog', 'admin'] },
    children: [{
        path: 'lists',
        component: () => import('@/views/systemLog/lists'),
        name: 'systemLogLists',
        meta: { title: '登录日志', icon: '', roles: ['systemLog.lists', 'admin'] },
        children: [
            {
              path: 'lists-show',
              hidden: true,
              meta: { title: '查看登录日志', icon: '', roles: ['systemLog.lists.show'] }
            },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除登录日志', icon: '', roles: ['systemLog.lists.del'] }
            }
        ]
    }]
}

export default systemLogRouter
