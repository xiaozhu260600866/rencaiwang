export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 1,
        'canEdit': 1,
        'tableName': 'phones',
        'createAction': '/admin/phone/create',
        'editAction': '/admin/phone/edit',
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
          { 'prop': 'name', 'minWidth': '100','width':'', 'append_table_': 0, 'label': '名称' },
          { 'prop': 'phone', 'minWidth': '','width':'120', 'append_table_': 0, 'label': '电话' },

          { 'prop': 'sort', 'minWidth': '','width':'90', 'align': 'center','type': 'sort', 'url': '/admin/phone/editField', 'append_table_': 0, 'label': '排序' },
          { 'prop': 'created_at', 'minWidth': '','width':'160', 'append_table_': 0, 'label': '创建时间' }
       ],
        'formFields': [
          { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
          { prop: 'phone', datatype: 'require', type: 'text', label: '电话号码' },
          { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
        ]
    }
}
