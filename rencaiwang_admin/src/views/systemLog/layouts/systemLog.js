export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 0,
        'canEdit': 0,
        'tableName': 'system_logs',
		"exportUrl":'/admin/systemLog/lists?excel=1',
        'checkAll': true,
        'searchFields': [
            {
            'name': '',
            'prop': 'user_name',
            'type': 'text',
            'label': '用户名'
            }
        ],
      
        'tableFields': [
            {
                'name': '',
                'prop': 'name',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '用户名'
            },
			{
			    'name': '',
			    'prop': 'getUser.username',
			    'minWidth': '180',
			    'width': '',
			    'append_table_': 0,
			    'label': '登录帐号'
			},
			{
			    'name': '',
			    'prop': 'getUser.getRole',
			    'minWidth': '180',
			    'width': '',
			    'append_table_': 0,
			    'label': '角色'
			},
			{
			    'name': '',
			    'prop': 'getUser.nickname',
			    'minWidth': '180',
			    'width': '',
			    'append_table_': 0,
			    'label': '微信呢称'
			},

            {
                'name': '',
                'prop': 'login_time',
                'minWidth': '',
                'width': '170',
                'append_table_': 0,
                'label': '登录时间'
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
