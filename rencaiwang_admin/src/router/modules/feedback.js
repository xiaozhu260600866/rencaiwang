/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const feedbackRouter = {
    path: '/feedback',
    component: Layout,
    redirect: 'noRedirect',
    name: 'feedback',
    meta: { title: '意见反馈管理', icon: 'edit', roles: ['feedback', 'admin'] },
    children: [
    {
        path: 'feedback',
        component: () => import('@/views/feedback/lists'),
         name: 'feedback',
         meta: { title: '意见反馈', icon: '', params: { status: 0 }, roles: ['feedback.lists', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看意见反馈', icon: '', roles: ['feedback.lists.show'] }
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除意见反馈', icon: '', roles: ['feedback.lists.del'] }
             }
         ]
     }
   ]
}

export default feedbackRouter
