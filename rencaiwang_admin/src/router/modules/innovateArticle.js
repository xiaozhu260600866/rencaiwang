/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const innovatetArticleRouter = {
    path: '/innovatetArticle',
    component: Layout,
    redirect: 'noRedirect',
    name: 'innovateArticle',
    meta: { title: '创新搜索管理', icon: 'component', roles: ['innovateArticle', 'admin'] },
    children: [
    {
        path: 'innovateArticle',
        component: () => import('@/views/innovateArticle/lists'),
         name: 'innovateArticle',
         meta: { title: '创新搜索', icon: '', params: { role: 3 }, roles: ['innovateArticle.lists', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看创新搜索', icon: '', roles: ['innovateArticle.lists.show'] }
             },
             {
               path: 'lists-create',
               hidden: true,
               meta: { title: '新建创新搜索', icon: '', roles: ['innovateArticle.lists.create'] }
             },
             {
               path: 'lists-edit',
               hidden: true,
               meta: { title: '修改创新搜索', icon: '', roles: ['innovateArticle.lists.edit'] }
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除创新搜索', icon: '', roles: ['innovateArticle.lists.del'] }
             }
         ]
     },
     {
         path: 'visit',
         component: () => import('@/views/innovateArticle/visit'),
          name: 'SettingPhone',
          meta: { title: '访问量', icon: '', params: { table_name: 'innovate_articles' }, roles: ['innovateArticle.visit', 'admin'] },
          children: [
              {
                path: 'lists-show',
                hidden: true,
                meta: { title: '查看', icon: '', roles: ['innovateArticle.visit.show'] }
              },
     
              {
                path: 'lists-del',
                hidden: true,
                meta: { title: '删除', icon: '', roles: ['innovateArticle.visit.del'] }
              }
          ]
      }
   ]
}

export default innovatetArticleRouter
