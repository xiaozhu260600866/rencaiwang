
export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 0,
        "canEdit": 0,
        "tableName": "activity_orders",
        classChildrenHidden:true,
        classno:true,
        "createAction": "/admin/activity/create",
        "editAction": "/admin/activity/edit",
        "checkAll": true,
        exportUrl:'/admin/activity/order-export',
        "searchFields": [

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


        ],
        "formFields": [
            {
                "name": "",
                "prop": "title",
                "datatype": "require",
                "type": "text",
                "append_form_": 0,
                "label": "文章标题"
            },
           {
               "name": "",
               "prop": "class_value",
               "datatype": "require",
               datakey:"fclass",
               "type": "manyselect",
               multiple:true,
               "append_form_": 0,
               "label": "分类"
           },
           {
               "name": "",
               "prop": "unit",
               "datatype": "require",
               datakey:"unit",
               "type": "select",
               "append_form_": 0,
               "label": "单位"
           },
           {
               "name": "",
               "prop": "cover",
               allowUpLoadNum:1,
               upurl:'article',
               "type": "upload",
               "append_form_": 0,
               "label": "图片"
           },
           {
               "prop": "upload_file",
               allowUpLoadNum:1,
               upurl:'article',
               "type": "uploadFile",
               "append_form_": 0,
                action:'/admin/article/upload-file',
                allowSuffix:[".doc",".docx",".xls",".xlsx",".et",".pdf",".jpg",".png",".zip",".rar"],
                accept:"image/*",
               "label": "上传附件"
           },
           // {
           //     "name": "",
           //     "prop": "video_url",
           //     "type": "text",
           //     "append_form_": 0,
           //     "label": "视频地址"
           // },
        {
            "name": "",
            "prop": "published_at",
            "datatype": "require",
            "type": "date",
            "append_form_": 0,
            "label": "发布日期"
        },
        {
            "name": "",
            "prop": "content",
            "datatype": "require",
            "type": "editor",
            "append_form_": 0,
            "label": ""
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
