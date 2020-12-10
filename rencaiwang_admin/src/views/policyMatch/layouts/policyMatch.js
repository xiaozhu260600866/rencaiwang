
export default {
    data: {
        'listsAction': '',
        'pageSize': 15,
        'canCreate': 0,
        'canEdit': 0,
        'tableName': 'policy_matchs',
        'createAction': '/admin/policyMatch/create',
        'editAction': '/admin/policyMatch/edit',
        'checkAll': true,
        'searchFields': [

            {
            'prop': 'class_value',
            'type': 'manyselect',
            'datakey': 'fclass',
            'label': '分类'
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
                'prop': 'fclassname',
                'minWidth': '100',
                'width': '',
                'append_table_': 0,
                'label': '分类'
            },
            {
                'name': '',
                'prop': 'town',
                'minWidth': '',
                'width': '180',
                'append_table_': 0,
                'label': '区县'
            },
             { 'prop': 'show', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/policyMatch/editField', 'append_table_': 0, 'label': '隐藏/显示' },
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
                'prop': 'title',
                'datatype': 'require',
                'type': 'text',
                'append_form_': 0,
                'label': '标题'
            },
           {
               'name': '',
               'prop': 'class_value',
               'datatype': 'require',
               datakey: 'fclass',
               'type': 'manyselect',
               multiple: true,
               'append_form_': 0,
               column: 2,
               'label': '分类'
           },
           {
               'name': '',
               'prop': 'town_value',
               'datatype': 'require',
               datakey: 'townFclass',
               'type': 'manyselect',
               multiple: true,
               'append_form_': 0,
               'label': '区县'
           },
           {
               'name': '',
               'prop': 'unit',
               'datatype': 'require',
               datakey: 'unit',
               'type': 'select',
               column: 2,
               'append_form_': 0,
               'label': '单位'
           },

           // {
           //     "name": "",
           //     "prop": "video_url",
           //     "type": "text",
           //     "append_form_": 0,
           //     "label": "视频地址"
           // },
        {
            'name': '',
            'prop': 'end_at',
            'datatype': 'require',
            'type': 'date',
            'append_form_': 0,

            'label': '起止期限'
        },
        {
            'name': '',
            'prop': 'keywords',
            'datatype': 'require',
            'type': 'text',
            'append_form_': 0,
               column: 2,
            'label': '关键字'
        },
        {
            'name': '',
            'prop': 'published_at',
            'datatype': 'require',
            'type': 'date',
            'append_form_': 0,
            'label': '发布时间'
        },
        {
            'name': '',
            'prop': 'cover',
            allowUpLoadNum: 1,
            upurl: 'policy',
            'type': 'upload',
            'append_form_': 0,
            'label': '图片'
        },
        {
            'name': '',
            'prop': 'content',
            'datatype': 'require',
            'type': 'editor',
            'append_form_': 0,
            'label': ''
        },
        {
            'prop': 'upload_file',
            allowUpLoadNum: 1,
            upurl: 'policy',
            'type': 'uploadFile',
            'append_form_': 0,
             action: '/admin/article/upload-file',
             allowSuffix: ['.doc', '.docx', '.xls', '.xlsx', '.et', '.pdf', '.jpg', '.png', '.zip', '.rar'],
             accept: '',
            'label': '上传附件'
        }
        // {
        //     "prop": "pic",
        //     "datatype": "array",
        //     "type": "upload",
        //     "append_form_": 0,
        //     "label": "pic",
        //     "allowUpLoadNum": "1",
        //     "upurl": "coupon"
        // },
        ]
    }
}
