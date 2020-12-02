
export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 0,
        'canEdit': 0,
        'tableName': 'policy_match_orders',
        'createAction': '/admin/policyMatch/create',
        'editAction': '/admin/policyMatch/edit',
        'checkAll': true,
        'searchFields': [
            {
            'name': '',
            'prop': 'name',
            'type': 'text',
            'label': '呢称'
            },
            {
            'name': '',
            'prop': 'remark',
            'type': 'text',
            'label': '内容'
            },
            {
            'name': '',
            'prop': 'phone',
            'type': 'text',
            'label': '电话'
            }

        ],
       'tarbars': {
            'prop': 'status',
            'data': [{
                'name': '',
                'value': '0',
                'count': 0,
                'label': '待处理'
            }, {
                'name': '',
                'value': '1',
                'count': 0,
                'label': '已处理'
            }]
        },
        'tableFields': [

            {
                'name': '',
                'prop': 'phone',
                'minWidth': '',
                'width': '160',
                'append_table_': 0,
                'label': '联系方式'
            },
            {
                'name': '',
                'prop': 'remark',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '内容'
            },
            {
                'name': '',
                'prop': 'name',
                'minWidth': '',
                'width': '180',
                'append_table_': 0,
                'label': '微信呢称'
            },
                { 'prop': 'status', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/policyMatch/orderStatus', 'label': '未/已处理' },
            {
                'name': '',
                'prop': 'created_at',
                'minWidth': '',
                'width': '170',
                'append_table_': 0,
                'label': '创建日期'
            }
        ]
    }
}
