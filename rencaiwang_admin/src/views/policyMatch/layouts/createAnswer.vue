<template>

  <el-dialog title="新建或编辑答案" :visible.sync="answerDiag" top="10px" width="800px">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="问题">
        <el-input v-model="question.label" :disabled="true" type="textarea" />
      </el-form-item>
      <el-form-item label="答案" :rules="[{ required: true, message: '答案不能为空'},]">
        <el-input v-model="ruleForm.label" type="textarea" />
      </el-form-item>
      <div class="flex-center flex-middle mb10" style="height: 50px;">
        <el-button type="primary" size="samll" @click="createBenefit">新增福利+</el-button>
        <el-button v-if="ruleForm.benefitArr.length" type="primary" size="samll" @click="copy">复制+</el-button>
        <el-button type="primary" size="samll" @click="history">福利历史+</el-button>
      </div>
      <div v-for="(benefit,benefitKey) in ruleForm.benefitArr" class="p20" style="border:1px solid #ccc;position: relative;margin-bottom: 10px;">

        <div style="position: absolute;right: 5px;top:5px;cursor: pointer;" @click="benefitDel(benefitKey)">
          <i class="el-icon-close fs-20" />
        </div>
        <el-form-item label="福利" :rules="[{ required: true, message: '答案不能为空'},]">
          <el-select v-model="benefit.benefitCategory" placeholder="请选择">
            <el-option v-for="item in benefitArr" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="福利标题" :rules="[{ required: true, message: '答案不能为空'},]">
          <el-input v-model="benefit.benefitTitle" />
        </el-form-item>
        <el-form-item label="福利内容" :rules="[{ required: true, message: '答案不能为空'},]">
          <el-input v-model="benefit.benefitContent" type="textarea" />
        </el-form-item>
        <el-form-item label="政策">
          <el-button @click="searchPolicy(benefitKey)">请选择政策</el-button>
          <div class="mt10 policy-tag">
            <el-tag v-if="benefit.policy_name" type="gray">{{ benefit.policy_name }}</el-tag>
          </div>
        </el-form-item>
        <el-form-item label="对应">
          <el-input v-model="benefit.policyNum">
            <template slot="append">条款</template>
          </el-input>
        </el-form-item>
        <el-form-item label="隐藏/显示" :rules="[{ required: true, message: '答案不能为空'},]">
          <el-switch v-model="benefit.show " on-text="" off-text="" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </div>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="answerDiag = false">取 消</el-button>
      <el-button type="primary" @click="answerCreateSubmit">确 定</el-button>
    </span>
    <searchAll ref="searchAll" @callBack="searchCallBack">
      <div slot="append_searchAll_open" slot-scope="scope">
        <el-button @click="openPolicy(scope.row)">
          查看详细
        </el-button>
      </div>
    </searchAll>
    <createEdit
      ref="createEdit"
      create-action="/admin/policy/create"
      edit-action="/admin/policy/edit"
      :fields="formFields"
      :data="data"
      create-edit-label="120px"
    >
      <div slot="content" slot-scope="scope">
        <slot :name="scope.field" :row="scope.row" />
      </div>
    </createEdit>
    <benefitHistory ref="benefitHistory" @callBack="historyCallBack" />
  </el-dialog>

</template>

<script>
	import searchAll from 'xiaozhu/elementAdmin/components/searchAll'
	import benefitHistory from './benefitHistory'
	import createEdit from 'xiaozhu/elementAdmin/components/create_edit'
	export default {
		components: {
			searchAll,
			createEdit,
			benefitHistory

		},
		props: ['appendQuestionData', 'question', 'questions', 'benefitArr', 'policyArr'],
		data() {
			return {
				answerDiag: false,
				type: '',
				data: {},
				'formFields': [{
						'name': '',
						'prop': 'title',
						'datatype': 'require',
						'type': 'text',
						'editDisabled': 1,
						'label': '标题'
					},

					{
						'name': '',
						'prop': 'start_at',
						'datatype': 'require',
						'type': 'dateTime',

						 editDisabled: 1,

						'label': '生效开始时间'
					},
					{
						'name': '',
						'prop': 'end_at',
						'datatype': 'require',
						'type': 'dateTime',
						 editDisabled: 1,

						'label': '生效结束时间'
					},
					{
						'name': '',
						'prop': 'keywords',
						'datatype': 'require',
						'type': 'text',
						 editDisabled: 1,

						'label': '关键字'
					},
					{
						'name': '',
						'prop': 'published_at',
						'datatype': 'require',
						'type': 'date',
						 editDisabled: 1,
						'label': '发布时间'
					},

					{
						'name': '',
						'prop': 'content',
						'datatype': 'require',
						'type': 'editor',
						 editDisabled: 1,
						'label': ''
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
				],
				benefitKey: 0,
				ruleForm: {
					label: ''
				}
			}
		},
		methods: {
			historyCallBack(row) {
				if (row.length) {
					row.forEach(v => {
						v.bid = Math.ceil(Math.random() * 100000)
						this.ruleForm.benefitArr.push(
							v
						)
					})
				}
			},
			history() {
				this.$refs.benefitHistory.ajax()
			},
			benefitDel(benefitKey) {
				const row = this.ruleForm.benefitArr[benefitKey]
				console.log(row)
				this.ruleForm.benefitArr.splice(benefitKey, 1)
				const benefitArr = localStorage.getItem('benefitArr')
				if (benefitArr) {
					const benefitArr_ = JSON.parse(benefitArr)
					if (benefitArr_.length) {
						benefitArr_.forEach((v, benefitKey) => {
							 if (v.bid == row.bid) {
								 benefitArr_.splice(benefitKey, 1)
							 }
						})
						localStorage.setItem('benefitArr', JSON.stringify(benefitArr_))
					}
				}
			},
			copy() {
				const res = this.ruleForm.benefitArr[this.ruleForm.benefitArr.length - 1]
				const newRes = JSON.parse(JSON.stringify(res))
				newRes.bid = Math.ceil(Math.random() * 100000)
				this.ruleForm.benefitArr.push(newRes)
			},
			openPolicy(row) {
				console.log(1)
				this.$refs.createEdit.ajax(row, this.data, this.formFields, true)
			},
			createBenefit() {
				this.ruleForm.benefitArr.push({
					// bid: Math.ceil(Math.random() * 100000)
				})
			},
			edit(row) {
				this.answerDiag = true
				this.type = 'edit'
				this.ruleForm = row
			},
			create(row) {
				this.answerDiag = true
				this.ruleForm = {
					benefitArr: []
				}
				this.type = 'create'
			},
			searchCallBack(row) {
				if (row.length > 1) {
					this.getError('只能选择一项')
					return false
				}
				if (row.length) {
					this.$set(this.ruleForm.benefitArr[this.benefitKey], 'policy_name', row[0]['title'])
					this.$set(this.ruleForm.benefitArr[this.benefitKey], 'policy_id', row[0].id)
					console.log(this.ruleForm)
				} else {
					this.getError('您还没有选择')
					return false
				}
			},
			searchPolicy(benefitKey) {
				this.benefitKey = benefitKey
				const row = {
					url: '/admin/policy/lists',
					searchClass: true,
					searchFields: [{
						name: '',
						prop: 'content',
						type: 'text',
						label: '政策名称'
					}],
					'tableFields': [{
							'name': '',
							'prop': 'title',
							'minWidth': '180',
							'width': '',
							'append_table_': 0,
							'label': '政策名称'
						},
						{
							'name': '',
							'prop': 'unit_name',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '单位'
						},
						{
							'name': '',
							'prop': 'fclassname',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '分类'
						},

						{
							'name': '',
							'prop': 'published_at',
							'minWidth': '',
							'width': '100',
							'append_table_': 0,
							'label': '发布日期'
						},
						{
							'name': '',
							'prop': 'open',
							'minWidth': '',
							'width': '150',
							'append_searchAll_open': 1,
							'label': '操作'
						}
					]
				}
				this.$refs.searchAll.ajax(row, this.ruleForm.policy)
			},
			answerCreateSubmit() {
				if (!this.ruleForm.label) {
					return this.getError('你还没有填写答案')
				}
				for (const v of this.ruleForm.benefitArr) {
					if (!v.benefitCategory) {
						return this.getError('福利分类还没有选择')
					}
					if (!v.benefitTitle) {
						return this.getError('福利标题还没有选择')
					}
					if (!v.benefitContent) {
						return this.getError('福利内容还没有选择')
					}
				}
				for (const v of this.ruleForm.benefitArr) {
					this.benefitArr.forEach(q => {
						if (q.value == v.benefitCategory) {
							v.benefitCategoryName = q.label
						}
					})
					if (!v.bid) {
						v.bid = Math.ceil(Math.random() * 100000)
					}
				}
				const benefitArr = localStorage.getItem('benefitArr')
				if (!benefitArr) {
					localStorage.setItem('benefitArr', JSON.stringify(this.ruleForm.benefitArr))
				} else {
					const benefitArr_ = JSON.parse(benefitArr)
					for (const v of this.ruleForm.benefitArr) {
						console.log(v)
						let is_new = true
						benefitArr_.forEach((benefit_, benefitArrKey) => {
							if (benefit_.bid == v.bid) {
								is_new = false
								benefitArr_[benefitArrKey] = v
							}
						})
						if (is_new) {
							benefitArr_.push(v)
						}
					}

					console.log(benefitArr_)
					localStorage.setItem('benefitArr', JSON.stringify(benefitArr_))
				}

				if (this.type == 'create') {
					const res = this.getChildren(this.questions, this.question.uid)
					if (!res.children) {
						this.$set(res, 'children', [])
					}
					res.children.push({
						label: this.ruleForm.label,
						type: 'answer',
						benefitArr: this.ruleForm.benefitArr,
						uid: Math.ceil(Math.random() * 1000)
					})
				}

				this.answerDiag = false
			},
			getChildren(data, uid) {
				var res // 定义一个不不赋值的变量
				var find = function(data, uid) {
					data.forEach((item) => { // 利用foreach循环遍历
						if (item.uid == uid) // 判断递归结束条件
						{
							console.log(item.uid)
							res = item
							return item
						} else if (item.children && item.children.length > 0) // 判断chlidren是否有数据
						{
							find(item.children, uid) // 递归调用
						}
					})
				}
				find(data, uid)
				return res
			}
		}
	}
</script>

<style>
	.policy-tag .el-tag {
		white-space: normal;
		height: auto;
	}
</style>
