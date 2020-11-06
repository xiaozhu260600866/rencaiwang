<template>
  <div v-if="data.show" class="bg-f p20">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm pb50">
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
    <el-tree :data="questions" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" />
    <el-button class="mt20" @click="createQuestion(questions)">新建1级问题</el-button>
    <createQuestion ref="createQuestion" :rule-form="ruleForm" :append-question-data="appendQuestionData" :questions="questions" />
    <createAnswer ref="createAnswer" :policy-arr="data.policy" :benefit-arr="data.benefitFclass" :rule-form="ruleForm" :append-question-data="appendQuestionData" :question="question" :questions="questions" />
    <el-button @click="stickQuestion(questions,1)">粘贴问题</el-button>
    <el-button @click="submit">提交</el-button>
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
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },

      createQuestion(appendQuestionData) {
        console.log(appendQuestionData)
        this.ruleForm.question = ''
         this.appendQuestionData = appendQuestionData

        this.$refs.createQuestion.create(this.appendQuestionData)
      },
      appendQuestion(appendQuestionData) {
          if (!appendQuestionData.children) {
             this.$set(appendQuestionData, 'children', [])
          }

          this.createQuestion(appendQuestionData.children)
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
              <span style='flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding-right: 8px;'>
                <span>
                 <span style='color:red'> [问题]{node.label}</span>
                </span>
                <span>
                 <el-button style='font-size: 16px;color:green' type='text' on-click={ () => this.copyQuestion(data) }>复制问题</el-button>
                  <el-button style='font-size: 16px;color:green' type='text' on-click={ () => this.editQuestion(data) }>修改问题</el-button>
                  <el-button style='font-size: 16px;color:green' type='text' on-click={ () => this.appendAnswer(node, data) }>新增答案</el-button>
                  <el-button style='font-size: 16px;' type='text' on-click={ () => this.remove(node, data) }>删除</el-button>
                </span>
              </span>)
          } else if (data.type == 'answer') {
              return (
                <span style='flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 20px; padding-right: 8px;'>
                  <span>
                    <span style='color:green'>[答案] {node.label}</span>
                  </span>
                  <span>
                    <el-button style='font-size: 16px;color:green' type='text' on-click={ () => this.editAnswer(data, node) }>修改答案</el-button>
                    <el-button style='font-size: 16px;color:res' type='text' on-click={ () => this.appendQuestion(data) }>后续问题</el-button>
                    <el-button style='font-size: 16px;color:res' type='text' on-click={ () => this.stickQuestion(data, 0) }>粘贴问题</el-button>
                    <el-button style='font-size: 16px;' type='text' on-click={ () => this.remove(node, data) }>删除</el-button>
                  </span>
                </span>)
          }
       }
    }
  }
</script>
<style>
 .el-tree-node__content{
      height:56px;
      border:1px solid #ccc;
 }
 #shou-feng-qin-xiao-guo{
     margin: 55px 0 20px;
 }
 </style>
