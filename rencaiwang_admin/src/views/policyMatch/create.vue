<template>
  <div v-if="data.show" class="bg-f p20">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm pb15">
      <el-form-item label="请选择分类" prop="fclass" :rules="[{ required: true, message: '分类不能为空'},]">
        <el-cascader v-model="ruleForm.fclass" placeholder="请输入分类" expand-trigger="hover" :options="data.fclass" />
      </el-form-item>
      <el-form-item label="请选择区县" prop="town" :rules="[{ required: true, message: '区县不能为空'},]">
        <el-select v-model="ruleForm.town" placeholder="请选择" multiple>
          <el-option
            v-for="item in data.townFclass"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <h3 id="shou-feng-qin-xiao-guo">问题与答案</h3>
    <el-tree class="question_tree" :data="questions" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" />
    <el-button class="mt20" type="primary" size="small" @click="createQuestion(questions,1)">新建1级问题</el-button>
    <createQuestion ref="createQuestion" :rule-form="ruleForm" :append-question-data="appendQuestionData" :questions="questions" />
    <createAnswer ref="createAnswer" :policy-arr="data.policy" :benefit-arr="data.benefitFclass" :rule-form="ruleForm" :append-question-data="appendQuestionData" :question="question" :questions="questions" />
    <el-button type="primary" size="small" @click="stickQuestion(questions,1)">粘贴问题</el-button>
    <el-button type="primary" size="small" @click="submit">提交</el-button>
  </div>
</template>
<script type="text/javascript">
	import createQuestion from './layouts/createQuestion.vue'
	import createAnswer from './layouts/createAnswer.vue'
	import text from './layouts/text.js'
	export default {
		components: { createQuestion, createAnswer },
		data() {
			return {
				ruleForm: { town: [], fclass: [] },
				formAction: '/admin/policyMatch/create',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				text: text,
				appendQuestionData: {},
				appendAnswerData: {},
				question: {

				},
				questions: [
					// { label: '问题一', type: 'question', children: [
					//     { label: '112', type: 'answer' }

					// ] }
				],
				copyQuestionData: {},
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		watch: {
			'$route': 'ajax'
		},
		mounted() {
			this.ajax()
		},
		methods: {
			submit() {
				if (this.ruleForm.fclass == 0) {
					return this.getError('分类还没有选择')
				}
				if (this.ruleForm.town.length == 0) {
					return this.getError('区县不能为空')
				}
				if (this.questions.length == 0) {
						return this.getError('问题不能为空')
				}
				this.ruleForm.questions = this.questions
				if (this.data.query.id) {
						this.ruleForm.id = this.data.query.id
				}

				this.postAjax(this.data.query.id ? '/admin/policyMatch/edit' : '/admin/policyMatch/create', this.ruleForm).then(msg => {
					if (msg.data.status == 2) {
                        if (this.$route.fullPath.indexOf('edit') || this.$route.fullPath.indexOf('create')) {
                           if (this.$store.state.tagsView.visitedViews.length > 1) {
                               this.$store.state.tagsView.visitedViews.forEach((route, routeIndex) => {
                                    if (route.fullPath == this.$route.fullPath) {
                                         this.$store.state.tagsView.visitedViews.splice(routeIndex, 1)
                                    }
                               })
                           }
                        }
						return this.goto('/policyMatch/lists')
					}
				})
			},
			stickQuestion(appendQuestionData, parent) {
				if (parent) {
					appendQuestionData.push(this.copyQuestionData)
				} else {
					if (!appendQuestionData.children) {
						this.$set(appendQuestionData, 'children', [])
					}
					appendQuestionData.children.push(this.copyQuestionData)
				}
				this.getSuccess('操作成功')
			},
			copyQuestion(node) {
				this.copyQuestionData = JSON.parse(JSON.stringify(node))
				this.getSuccess('复制成功')
			},
			appendAnswer(node, data) {
				this.question = data
				this.$refs.createAnswer.create()
			},
			remove(node, data) {
				const parent = node.parent
				const children = parent.data.children || parent.data
				const index = children.findIndex(d => d.uid === data.uid)

				children.splice(index, 1)
			},

			createQuestion(appendQuestionData, isHeadLev) {
				console.log(appendQuestionData)
				this.ruleForm.question = ''
				this.appendQuestionData = appendQuestionData

				this.$refs.createQuestion.create(this.appendQuestionData, isHeadLev)
			},
			appendQuestion(appendQuestionData) {
					if (!appendQuestionData.children) {
						this.$set(appendQuestionData, 'children', [])
					}

					this.createQuestion(appendQuestionData.children, 0)
			},
			editQuestion(row) {
					console.log(row)
						// this.question = data
					this.$refs.createQuestion.edit(row)
			},
			editAnswer(row, node) {
				this.question = node.parent.data
				this.$refs.createAnswer.edit(row)
			},
			ajax() {
				this.getAjax(this, {}, msg => {
					if (msg.detail) {
						this.questions = []
						this.ruleForm.fclass = msg.detail.fclassArr
						this.ruleForm.town = msg.detail.townArr
						msg.detail.getQuestions.forEach(v => {
							const question = JSON.parse(v.content)
							question.id = v.id
							this.questions.push(
									question
							)
						})
					}
				})
			},
			renderContent(h, { node, data, store }) {
			if (data.type == 'question') {
				return (
					<div class='el-tree-right'>
						<div class='question-title'><span>[问题]</span> {node.label}</div>
						<div class='tree-btn'>
                            <div class='row'>
                                <el-button type='text' icon='el-icon-document-copy' on-click={ () => this.copyQuestion(data) }>复制问题</el-button>
                                <el-button type='text' icon='el-icon-edit' on-click={ () => this.editQuestion(data) }>修改问题</el-button>
                            </div>
                            <div class='row'>
                                <el-button type='text' icon='el-icon-document-add' on-click={ () => this.appendAnswer(node, data) }>新增答案</el-button>
                                <el-button type='text' icon='el-icon-delete' on-click={ () => this.remove(node, data) }>删除</el-button>
                            </div>
						</div>
					</div>
				)
			} else if (data.type == 'answer') {
                if (data.benefitArr && data.benefitArr.length) {
                    return (
                    	<div class='el-tree-right'>
                    		<div class='answer-title'><span>[答案]</span><i class='el-icon-present'></i> {node.label}</div>
                    		<div class='tree-btn'>
                                <div class='row'>
                                    <el-button type='text' icon='el-icon-edit' on-click={ () => this.editAnswer(data, node) }>修改答案</el-button>
                                    <el-button type='text' icon='el-icon-chat-line-square' on-click={ () => this.appendQuestion(data) }>后续问题</el-button>
                                </div>
                                <div class='row'>
                                    <el-button type='text' icon='el-icon-copy-document' on-click={ () => this.stickQuestion(data, 0) }>粘贴问题</el-button>
                                    <el-button type='text' icon='el-icon-delete' on-click={ () => this.remove(node, data) }>删除</el-button>
                                </div>
                    		</div>
                    	</div>
                    )
                } else {
                   return (
                   	<div class='el-tree-right'>
                   		<div class='answer-title'><span>[答案]</span> {node.label}</div>
                   		<div class='tree-btn'>
                               <div class='row'>
                                   <el-button type='text' icon='el-icon-edit' on-click={ () => this.editAnswer(data, node) }>修改答案</el-button>
                                   <el-button type='text' icon='el-icon-chat-line-square' on-click={ () => this.appendQuestion(data) }>后续问题</el-button>
                               </div>
                               <div class='row'>
                                   <el-button type='text' icon='el-icon-copy-document' on-click={ () => this.stickQuestion(data, 0) }>粘贴问题</el-button>
                                   <el-button type='text' icon='el-icon-delete' on-click={ () => this.remove(node, data) }>删除</el-button>
                               </div>
                   		</div>
                   	</div>
                   )
                }
			}
		}
	}
	}
</script>
<style >
.question_tree .el-tree-node>.el-tree-node__children{overflow: inherit;}
.question_tree .el-tree-node__content{height:56px;border:1px solid #ccc;border-bottom: 0;}
#shou-feng-qin-xiao-guo{margin: 20px 0;font-size: 15px;color: #333;}
.el-tree-right{flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding-right: 8px;height: 100%;position: relative;}
.question-title{flex: 1;padding-right: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.answer-title{flex: 1;padding-right: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: green;}
.question-title span,.answer-title span{font-weight:bold;}
.answer-title i{margin-left: 3px;font-size: 16px;}
.question_tree .tree-btn .el-button{margin-left: 15px;padding: 5px 0;color: #666;}
.question_tree .tree-btn .el-button span{font-size: 13px;}
/* .tree-btn .row:last-child .el-button:last-child{color: red;} */

/* 图标 */
.question_tree .el-tree-node__expand-icon{position: relative;z-index: 2;}
.question_tree .el-tree-node__expand-icon::before{background-color: #fff;}
.question_tree .el-tree-node__expand-icon.is-leaf::before{background-color: transparent;}

/* 定义线条 */
.question_tree .el-tree-node__content{padding-left: 0!important;border: 0!important;position: relative;}
.question_tree .el-tree-node__content::before{content: '';display: block;position: absolute;bottom: 0;border-bottom: 1px #ddd solid;right: 0;left: 24px;}

/* 阶层 */
.question_tree .el-tree-node{position: relative;padding: 0 0 0 15px;}
.question_tree .el-tree-node::before{position: absolute;content: '';top: -26px;left: 12px;width: 20px;height: 56px;border-style: none none dotted dotted;border-width: 1px;border-color: block;}
.question_tree .el-tree-node:not(:last-child)::after {position: absolute;content: '';top: -26px;left: 12px;bottom: 0;border-style: none none none dotted;border-width: 1px;border-color: block;z-index: 1;}
.question_tree>.el-tree-node{padding: 0;}
.question_tree>.el-tree-node::before{display: none;}
.question_tree>.el-tree-node::after{display: none;}
</style>
