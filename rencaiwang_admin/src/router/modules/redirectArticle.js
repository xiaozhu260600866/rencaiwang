/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const redirectArticleRouter = {
    path: '/redirectArticle',
    component: Layout,
    redirect: 'noRedirect',
    name: 'redirectArticle',
    meta: { title: '跳转管理', icon: 'component', roles: ['redirectArticle', 'admin'] },
    children: [
    {
        path: 'redirectArticle',
        component: () => import('@/views/redirectArticle/lists'),
         name: 'redirectArticle',
         meta: { title: '跳转', icon: '', params: { role: 3 }, roles: ['redirectArticle.lists', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看跳转', icon: '', roles: ['redirectArticle.lists.show'] }
             },
             {
               path: 'lists-create',
               hidden: true,
               meta: { title: '新建跳转', icon: '', roles: ['redirectArticle.lists.create'] }
             },
             {
               path: 'lists-edit',
               hidden: true,
               meta: { title: '修改跳转', icon: '', roles: ['redirectArticle.lists.edit'] }
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除跳转', icon: '', roles: ['redirectArticle.lists.del'] }
             }
         ]
     },
     {
         path: 'visit',
         component: () => import('@/views/redirectArticle/visit'),
          name: 'SettingPhone',
          meta: { title: '访问量', icon: '', params: { table_name: 'redirect_articles' }, roles: ['redirectArticle.visit', 'admin'] },
          children: [
              {
                path: 'lists-show',
                hidden: true,
                meta: { title: '查看', icon: '', roles: ['redirectArticle.visit.show'] }
              },
     
              {
                path: 'lists-del',
                hidden: true,
                meta: { title: '删除', icon: '', roles: ['redirectArticle.visit.del'] }
              }
          ]
      }
   ]
}

export default redirectArticleRouter
