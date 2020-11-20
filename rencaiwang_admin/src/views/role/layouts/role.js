export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 1,
        'canEdit': 1,
        'tableName': 'roles',
        'createAction': '/admin/role/create',
        'editAction': '/admin/role/edit',
        'checkAll': true,
        'searchFields': [
            {
            'name': '',
            'prop': 'name',
            'type': 'text',
            'label': '角色名称'
            }
        ],
       // "tarbars": {
       //      "prop": "type",
       //      "data": [{
       //          "name": "",
       //          "value": "1",
       //          "count": 0,
       //          "label": "首页幻灯片"
       //      }, {
       //          "name": "",
       //          "value": "2",
       //          "count": 0,
       //          "label": "首页广告位"
       //      }, {
       //          "name": "",
       //          "value": "3",
       //          "count": 0,
       //          "label": "首页导航"
       //      }]
       //  },
        'tableFields': [
            {
                'name': '',
                'prop': 'name',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '角色名称'
            },

            {
                'name': '',
                'prop': 'created_at',
                'minWidth': '',
                'width': '170',
                'append_table_': 0,
                'label': '发布日期'
            }
        ],
        'formFields': [
            {
                'name': '',
                'prop': 'name',
                'datatype': 'require',
                'type': 'text',
                'append_form_': 0,
                'label': '角色名称'
            },
            {
                'name': '',
                'prop': 'role_menus',
                'datatype': '',
                'type': 'text',
                'append_form_role_menus': 1,
                'label': '角色菜单'
            }

        ]
    }
}
