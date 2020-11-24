export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 1,
        'canEdit': 1,
        'tableName': 'users',
        'createAction': '/admin/staff/create',
        'editAction': '/admin/staff/edit',
        'checkAll': true,
        'searchFields': [{
            'name': '',
            'prop': 'name',
            'type': 'text',
            'label': '名称'
        },
        {
            'name': '',
            'prop': 'phone',
            'type': 'text',
            'label': '电话'
        }],
        'tableFields': [
          { 'prop': 'name', 'minWidth': '100', 'width': '', 'append_table_': 0, 'label': '名称' },
          { 'prop': 'phone', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '电话' },
          { 'prop': 'rolename', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '角色' },
          { 'prop': 'unitname', 'minWidth': '80', 'width': '', 'append_table_': 0, 'label': '单位' },
          { 'prop': 'wechat', 'minWidth': '', 'width': '220', 'append_table_wechat': 1, 'label': '绑定微信' },

          { 'prop': 'created_at', 'minWidth': '', 'width': '160', 'append_table_': 0, 'label': '创建时间' }
       ],
        'formFields': [
          { prop: 'name', datatype: 'require', type: 'text', label: '用户名', column: 2 },
          { prop: 'username', datatype: 'require', type: 'text', label: '登录帐号' },
          { prop: 'phone', datatype: 'require|phone', type: 'text', label: '电话号码' },
          { prop: 'password', datatype: 'require', type: 'password', label: '登录密码', column: 2 },
          { prop: 'role_id', datatype: 'require', type: 'select', datakey: 'roleArr', label: '角色' },
          { prop: 'unit_id', multiple: true, datatype: 'require', type: 'select', datakey: 'unitArr', label: '单位', column: 2 },
          { prop: 'status', datatype: 'require', type: 'select', label: '状态', defaultValue: 1, data: [
              { label: '是', value: 1 },
              { label: '否', value: 0 }
          ] }
        ]
    }
}
