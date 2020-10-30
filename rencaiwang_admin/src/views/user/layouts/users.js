export default {
    data: {
        listsAction: '',
        pageSize: '15',
        canCreate: false,
        tableName: 'users',
        createAction: '',
        editAction: '',
        tableOperateButton: true,
        // 是否需要审核
        // auditAction:'/admin/user/change-status',
        checkAll: true,
        // tarbars:{
        //     prop:'status',
        //     data:[
        //         {label:'审核中',value:'0','count':1,'datakey':'status0'},
        //         {label:'已审核',value:'1','count':1,'datakey':'status1'},
        //         {label:'审核拒绝',value:'2','count':1,'datakey':'status2'},
        //     ]
        // },
        tableFields: [
            { prop: 'id', label: '编号', width: '80' },
            { prop: 'name', label: '姓名', minwidth: '100' },
            { prop: 'headerPic', label: '头像', append_table_headerPic: 'true', width: '60',align: 'center' },
            { prop: 'phone', label: '手机号码', width: '120' },
            { prop: 'amount', label: '余额', width: '120' },
            { prop: 'updated_at', label: '最后一次登录', width: '160' },
            { prop: 'created_at', label: '注册时间', width: '160' }
        ],
        searchFields: [
            { prop: 'sex', label: '姓别', type: 'select', data: [
              { label: '男', value: 1 },
              { label: '女', value: 2 }
              ] },
            { prop: 'name', label: '姓名' },
            { prop: 'phone', label: '电话' },
            { prop: 'created_at', label: '日期', minWidth: '200', type: 'betweenDate' }
        ]
        /* formFields:[
            {prop:'name',label:'姓名',type:'text',datatype:'require'},
            {prop:'phone',label:'电话',type:'text',datatype:'require|phone'},
            {prop:'sex',label:'性别',type:'select',datatype:'require',datakey:'sexArr'},
            {prop:'address',label:'服务地址',type:'location',datatype:'require'},
            {prop:'remark',label:'备注',type:'textarea'},

        ] */
    }
}
