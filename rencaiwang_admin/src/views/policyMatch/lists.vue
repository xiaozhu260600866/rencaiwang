<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="append_table_question" slot-scope="scope">
        <div v-for="v in scope.row.getQuestions">
          <span>{{ v.question }}</span>
        </div>
      </div>
      <div slot="operate" slot-scope="scope">
        <div>
          <el-button v-if="checkPermission(['policyMatch.edit'])" type="primary" size="mini" @click="goto('/policyMatch/edit?id='+scope.row.id)">编辑</el-button>
        </div>
      </div>
      <div slot="header">
        <el-button type="primary" @click="$refs.category1.ajax()">类别管理</el-button>
        <el-button type="primary" @click="$refs.category2.ajax()">福利管理</el-button>
      </div>
      <div slot="headerR">
        <el-button v-if="checkPermission(['policyMatch.create'])" type="primary" @click="goto('/policyMatch/create')">新建</el-button>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />
    <new-class
      ref="category1"
      :diag="true"
      :fields="[{
                  label: '排序',
                  prop: 'sort',
                  width: 100,
                  type: 'text',
                  defaultValue: 100,
                  datatype: 'require|integer'
                },
                {
                  label: '名称',
                  prop: 'name',
                  type: 'text',
                  width: 200,
                  datatype: 'require'
                },
                {
                  label: '说明',
                  prop: 'remark',
                  type: 'text',
                  width: 200,
                  append_class_table_url:0,
                  datatype: 'require'
                },
                {
                  label: '隐藏/显示',
                  prop: 'can_show',
                  type: 'switch',
                  width: 100,
                  defaultValue: 1,
                },
                {
                  label: '上传图片',
                  prop: 'cover',
                  type: 'upload',
                  width: 150,
                  allowUpLoadNum: 1,
                  upurl: 'product'
                },
                {
                  label: '编号',
                  prop: 'id',
                  width: 100
                },
      ]"
      :add-lev="2"
      type="0"
      form-action="/admin/policyMatch/"
      :class-children-hidden="false"
      :canupload="true"
    />

    <new-class
      ref="category2"
      :diag="true"
      :add-lev="2"
      no="1"
      type="1"
      form-action="/admin/policyMatch/"
      :class-children-hidden="true"
      :canupload="false"
    />

  </div>
</template>
<script type="text/javascript">
	import globalData from './layouts/policyMatch.js'
	export default {
		components: {
			'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
			'new-class': resolve => require(['xiaozhu/elementAdmin/components/new_class/2020new_class.vue'], resolve)
		},
		data() {
			return {
				formAction: '/admin/policyMatch/lists',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				globalData: globalData
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			this.ajax()
		},
		methods: {

			submitBeforeCallBack(ruleform) {
				delete ruleform.api_token
				console.log(ruleform)
				this.$set(ruleform, 'role', 7)
			},
			ajax() {
				this.getAjax(this, {}, msg => {
					// this.$nextTick(()=>{
					//   this.$refs.createEdit.ajax('',this.data,this.globalData.data.formFields);
					// })
				})
			}
		}
	}
</script>
