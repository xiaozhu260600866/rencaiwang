/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const articleRouter = {
    path: '/article',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Article',
    meta: { title: '信息发布', icon: 'dx-purchase1', roles: ['article'] },
    children: [{
        path: 'lists',
        component: () => import('@/views/article/lists'),
        name: 'ArticleLists',
        meta: { title: '信息列表', icon: '', roles: ['article.lists'] },
        children: [
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看信息', icon: '', roles: ['article.lists.show'] }
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除信息', icon: '', roles: ['article.lists.del'] }
            }
        ]
    }, {
        path: 'create',
        component: () => import('@/views/article/create'),
        hidden: true,
        name: 'ArticleCreate',
        meta: { title: '发布信息', roles: ['article.create'] }
    }, {
        path: 'edit',
        component: () => import('@/views/article/create'),
        hidden: true,
        name: 'ArticleEdit',
        meta: { title: '编辑信息', roles: ['article.edit'] }
    },
    {
        path: 'visit',
        component: () => import('@/views/article/visit'),
         name: 'SettingPhone',
         meta: { title: '访问量', icon: '', params: { table_name: 'articles' }, roles: ['article.visit', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看', icon: '', roles: ['article.visit.show'] }
             },

             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除', icon: '', roles: ['article.visit.del'] }
             }
         ]
     }

    ]
}

export default articleRouter
