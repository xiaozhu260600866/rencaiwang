export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 0,
        'canEdit': 0,
        "canDel":false,
        'tableName': 'visits',
        'createAction': '/admin/phone/create',
        'editAction': '/admin/phone/edit',
        'checkAll': true,
        'searchFields': [
          {
            'name': '',
            'prop': 'title',
            'type': 'text',
            'label': '标题'
        },
        // {
        //     'name': '',
        //     'prop': 'user_name',
        //     'type': 'text',
        //     'label': '微信呢称'
        // },
        {
            'name': '',
            'prop': 'created_at',
            'type': 'betweenDate',
            'label': '时间'
        }],
        'tableFields': [
          { 'prop': 'getTitle', 'minWidth': '100','width':'', 'append_table_': 0, 'label': '标题' },
          { 'prop': 'count(*)', 'minWidth': '','width':'120', 'append_table_': 0, 'label': '访问量' },
          // { 'prop': 'created_at', 'minWidth': '','width':'160', 'append_table_': 0, 'label': '访问时间' }
       ],
        'formFields': [
          { prop: 'name', datatype: 'require', type: 'text', label: '名称' },
          { prop: 'phone', datatype: 'require|phone', type: 'text', label: '电话号码' },
          { prop: 'sort', datatype: 'require|integer', type: 'text', label: '排序' }
        ]
    }
}
