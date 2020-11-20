/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const videoRouter = {
    path: '/video',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Video',
    meta: { title: '视频发布', icon: 'dx-video', roles: ['video', 'admin'] },
    children: [{
        path: 'lists',
        component: () => import('@/views/video/lists'),
        name: 'VideoLists',
        meta: { title: '视频列表', icon: '', roles: ['video.lists', 'admin'] },
        children: [
          {
            path: 'lists-show',
            hidden: true,
            meta: { title: '查看视频', icon: '', roles: ['video.lists.show'] }
          },
            {
              path: 'lists-del',
              hidden: true,
              meta: { title: '删除视频', icon: '', roles: ['video.lists.del'] }
            }
        ]
    }, {
        path: 'create',
        component: () => import('@/views/video/create'),
        hidden: true,
        name: 'VideoCreate',
        meta: { title: '发布视频', roles: ['video.create', 'admin'] }
    }, {
        path: 'edit',
        component: () => import('@/views/video/create'),
        hidden: true,
        name: 'VideoEdit',
        meta: { title: '编辑视频', roles: ['video.edit', 'admin'] }
    },
    {
        path: 'visit',
        component: () => import('@/views/video/visit'),
         name: 'SettingPhone',
         meta: { title: '访问量', icon: '', params: { table_name: 'videos' }, roles: ['video.visit', 'admin'] },
         children: [
             {
               path: 'lists-show',
               hidden: true,
               meta: { title: '查看', icon: '', roles: ['video.visit.show'] }
             },

             {
               path: 'lists-del',
               hidden: true,
               meta: { title: '删除', icon: '', roles: ['video.visit.del'] }
             }
         ]
     }

    ]
}

export default videoRouter
