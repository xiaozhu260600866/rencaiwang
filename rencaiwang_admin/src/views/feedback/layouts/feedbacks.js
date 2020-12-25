export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 0,
        'showInfo': 1,
        'tableName': 'feedbacks',
        'createAction': '/admin/feedback/create',
        'editAction': '/admin/feedback/edit',
		 exportUrl:'/admin/feedback/lists?excel=1',
        'checkAll': true,
        'searchFields': [

            {
            'name': '',
            'prop': 'phone',
            'type': 'text',
            'label': '电话号码'
            },
            {
            'name': '',
            'prop': 'user_name',
            'type': 'text',
            'label': '提交人'
            }
        ],
        'tarbars': {
        	'prop': 'status',
        	'data': [{
        		'value': '0',
        		'count': 0,
        		'label': '未处理'
        	}, {
        		'value': '1',
        		'count': 0,
        		'label': '已处理'
        	}]
        },
        'tableFields': [
          {
              'name': '',
              'prop': 'user_name',
              'minWidth': '180',
              'width': '',
              'append_table_': 0,
              'label': '提交人'
          },
            {
                'name': '',
                'prop': 'remark',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '反馈内容'
            },
            {
                'name': '',
                'prop': 'phone',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '电话'
            },
            {
                'name': '',
                'prop': 'created_at',
                'minWidth': '180',
                'width': '',
                'append_table_': 0,
                'label': '反馈日期'
            },
            { 'prop': 'status', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/feedback/editField', 'label': '未/已处理' }

             ],
        'formFields': [
          {
              'name': '',
              'prop': 'user_name',
              'datatype': 'require',
              'type': 'text',
              'append_form_': 0,

              'label': '提交人'
          },
            {
                'name': '',
                'prop': 'remark',
                'datatype': 'require',
                'type': 'textarea',
                'append_form_': 0,

                'label': '反馈内容'
            },

        {
            'name': '',
            'prop': 'phone',
            'datatype': 'require|phone',
            'type': 'text',
            'append_form_': 0,

            'label': '电话'
        },
        {
            'prop': 'pic',
            'datatype': 'array',
            'type': 'upload',
            'append_form_': 0,
            'label': 'pic',
            'allowUpLoadNum': '1',
            'upurl': 'article'
        }
        ]
    }
}
