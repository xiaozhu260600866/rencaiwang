
export default {
	data: {
		'listsAction': '',
		'pageSize': 15,
		'canCreate': 0,
		'canEdit': 0,
		'tableName': 'activitys',
		classChildrenHidden: true,
		classno: true,
        canupload: false,
		'createAction': '/admin/activity/create',
		'editAction': '/admin/activity/edit',
		classAction: '/admin/activity/',
		'checkAll': true,
		'searchFields': [
			{ 'name': '', 'prop': 'title', 'type': 'text', 'label': '活动名称' },
			{ 'prop': 'fclass', 'type': 'manyselect', 'datakey': 'fclass', 'label': '分类' }
		],
		// "tarbars": {
		// 	"prop": "type",
		// 	"data": [
		// 		{"name": "","value": "1","count": 0,"label": "首页幻灯片"},
		// 		{"name": "","value": "2","count": 0,"label": "首页广告位"},
		// 		{"name": "","value": "3","count": 0,"label": "首页导航"}
		// 	]
		// },
		'tableFields': [
				{ 'name': '', 'prop': 'title', 'minWidth': '180', 'width': '', 'append_table_': 0, 'label': '活动名称' },
				{ 'name': '', 'prop': 'unit_name', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '单位' },
				{ 'name': '', 'prop': 'getTown', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '涉及区县' },
				{ 'name': '', 'prop': 'fclassname', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '分类' },
				{ 'name': '', 'prop': 'start_at', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '开始时间' },
				{ 'name': '', 'prop': 'activity_unit', 'minWidth': '', 'width': '120', 'append_table_': 0, 'label': '活动举办单位' },
				{ 'name': '', 'prop': 'end_at', 'minWidth': '', 'width': '100', 'append_table_': 0, 'label': '结束时间' },
				{ 'prop': 'show', 'minWidth': '', 'width': '85', 'align': 'center', 'type': 'editField', 'url': '/admin/activity/editField', 'append_table': 0, 'label': '隐藏/显示' },
				{ 'prop': 'sort', 'minWidth': '', 'width': '85', 'align': 'center', 'type': 'sort', 'url': '/admin/activity/editField', 'append_table': 0, 'label': '排序' }

		],
		'formFields': [
			{ 'name': '', 'prop': 'title', 'datatype': 'require', 'type': 'text', 'append_form_': 0, 'label': '文章标题' },
			{ 'name': '', 'prop': 'class_value', 'datatype': 'require', datakey: 'fclass', 'type': 'manyselect', multiple: true, 'append_form_': 0, 'label': '分类' },
			{ 'name': '', 'prop': 'unit', 'datatype': 'require', datakey: 'unit', 'type': 'select', 'append_form_': 0, 'label': '单位' },
			{ 'name': '', 'prop': 'cover', allowUpLoadNum: 1, upurl: 'article', 'type': 'upload', 'append_form_': 0, 'uploadMessage': '最佳尺寸：750*563像素', 'label': '图片' },
			{ 'prop': 'upload_file', allowUpLoadNum: 1, upurl: 'article', 'type': 'uploadFile', 'append_form_': 0,
						action: '/admin/article/upload-file',
						allowSuffix: ['.doc', '.docx', '.xls', '.xlsx', '.et', '.pdf', '.jpg', '.png', '.zip', '.rar'],
						accept: '', 'label': '上传附件'
			},
			{ 'name': '', 'prop': 'published_at', 'datatype': 'require', 'type': 'date', 'append_form_': 0, 'label': '发布日期' },
			{ 'name': '', 'prop': 'content', 'datatype': 'require', 'type': 'editor', 'append_form_': 0, 'label': '' }
			// {
			//     "name": "",
			//     "prop": "video_url",
			//     "type": "text",
			//     "append_form_": 0,
			//     "label": "视频地址"
			// },
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
