
export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 0,
        "canEdit": 0,
        "tableName": "innovate_articles",
        "createAction": "/admin/innovateArticle/create",
        "editAction": "/admin/innovateArticle/edit",
        classAction:'/admin/innovateArticle/',
        "checkAll": true,
        classChildrenHidden:true,
          canupload:false,
        classno:true,
        "searchFields": [
            {
            "name": "",
            "prop": "title",
            "type": "text",
            "label": "创新搜索名"
            },
            {
            "prop": "fclass",
            "type": "manyselect",
            "datakey":'fclass',
            "label": "分类"
            },
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
        "tableFields": [
            {
                "name": "",
                "prop": "title",
                "minWidth": "180",
                "width": "",
                "append_table_": 0,
                "label": "创新搜索名"
            },
            {
                "name": "",
                "prop": "url",
                "minWidth": "180",
                "width": "",
                "append_table_": 0,
                "label": "url"
            },
            {
                "name": "",
                "prop": "fclassname",
                "minWidth": "",
                "width": "180",
                "append_table_": 0,
                "label": "分类"
            },
             { 'prop': 'show', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/innovateArticle/editField', 'append_table_': 0, 'label': '隐藏/显示' },
            	{ 'prop': 'sort', 'minWidth': '', 'width': '85', 'align': 'center', 'type': 'sort', 'url': '/admin/innovateArticle/editField', 'append_table': 0, 'label': '排序' },
            {
                "name": "",
                "prop": "created_at",
                "minWidth": "",
                "width": "120",
                "append_table_": 0,
                "label": "创建日期"
            },
        ],
        "formFields": [
            {
                "name": "",
                "prop": "title",
                "datatype": "require",
                "type": "text",
                "append_form_": 0,
                "label": "创新搜索名"
            },
            {
                "name": "",
                "prop": "url",
                "datatype": "require|url",
                "type": "text",
                "append_form_": 0,
                "label": "url"
            },
           {
               "name": "",
               "prop": "fclass",
               "datatype": "require",
               datakey:"fclass",
               "type": "select",
               "append_form_": 0,
               "label": "分类"
           },

           {
               "name": "",
               "prop": "cover",
               allowUpLoadNum:1,
               upurl:'innovatetArticle',
               "type": "upload",
               "append_form_": 0,
               "label": "图片"
           },


        {
            "name": "",
            "prop": "content",
            "datatype": "require",
            "label": "创新搜索说明",
            "type": "textarea",
            "append_form_": 0,
        },
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
