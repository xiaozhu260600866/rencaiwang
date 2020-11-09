/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const redirectArticleRouter = {
    path: '/redirectArticle',
    component: Layout,
    redirect: 'noRedirect',
    name: 'redirectArticle',
    meta: { title: '跳转管理', icon: 'dx-setting',roles:["redirectArticle","admin"] },
    children: [
    {
        path: 'redirectArticle',
        component: () => import('@/views/redirectArticle/lists'),
         name: 'redirectArticle',
         meta: { title: '跳转', icon: 'dx-sales-order', params: { role: 3 },roles:["redirectArticle.lists","admin"]},
         children:[
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看跳转', icon: 'dx-hr-info',roles:['redirectArticle.lists.show']  },
             },
             {
               path: 'lists-create',
               hidden: true,
               meta: { title: '新建跳转', icon: 'dx-hr-info',roles:['redirectArticle.lists.create']  },
             },
             {
               path: 'lists-edit',
               hidden: true,
               meta: { title: '修改跳转', icon: 'dx-hr-info',roles:['redirectArticle.lists.edit']  },
             },
             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除跳转', icon: 'dx-hr-info',roles:['redirectArticle.lists.del']  },
             }
         ]
     },
   ]
}

export default redirectArticleRouter
