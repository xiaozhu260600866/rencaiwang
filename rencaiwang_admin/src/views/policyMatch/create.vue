<template>
  <div>
    <el-tree :data="questions" :props="defaultProps" node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" />

    <el-button @click="createQuestion(questions)">新建问题</el-button>
    <el-dialog title="新建或编辑问题" :visible.sync="questionDiag">
      <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="问题" prop="question" :rules="[{ required: true, message: '问题不能为空'},]">
          <el-input v-model="ruleForm.question" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="questionDiag = false">取 消</el-button>
        <el-button type="primary" @click="questionCreateSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新建或编辑答案" :visible.sync="answerDiag">
      <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="问题">
          <el-input v-model="question.label" :disabled="true" />
        </el-form-item>
        <el-form-item label="答案">
          <el-input v-model="ruleForm.answer" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="answerDiag = false">取 消</el-button>
        <el-button type="primary" @click="answerCreateSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  import text from './layouts/text.js'
  export default {
    components: {},
    data() {
      return {
        questionDiag: false,
        answerDiag: false,
        ruleForm: { question: '1' },
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
      // this.ajax()

    },
    methods: {

        renderContent(h, { node, data, store }) {
            if (data.type == 'question') {
              return (
                <span style='flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;'>
                  <span>
                   <span style='color:red'> [问题]{node.label}</span>

                  </span>

                  <span>
                    <el-button style='font-size: 12px;color:green' type='text' on-click={ () => this.appendAnswer(node, data) }>新增答案</el-button>
                    <el-button style='font-size: 12px;' type='text' on-click={ () => this.remove(node, data) }>删除</el-button>
                  </span>
                </span>)
            } else if (data.type == 'answer') {
                return (
                  <span style='flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;'>
                    <span>
                      <span style='color:green'>[答案] {node.label}</span>
                    </span>
                    <span>
                      <el-button style='font-size: 12px;color:res' type='text' on-click={ () => this.appendQuestion(data) }>新增问题</el-button>
                      <el-button style='font-size: 12px;' type='text' on-click={ () => this.remove(node, data) }>删除</el-button>
                    </span>
                  </span>)
            }
        },
       appendAnswer(node, data) {
          this.question = data
          this.answerDiag = true
      },
      remove(node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },
      questionCreateSubmit() {
          this.appendQuestionData.push({
             label: this.ruleForm.question,
             type: 'question'
          })
          this.questionDiag = false
      },
      answerCreateSubmit() {
           const res = this.getChildren(this.questions, this.question.label)
           if (!res.children) {
              this.$set(res, 'children', [])
           }
           res.children.push(
              { label: this.ruleForm.answer, type: 'answer' }
           )
          this.answerDiag = false
      },
      createQuestion(appendQuestionData) {
        console.log(appendQuestionData)
        this.ruleForm.question = ''
        this.appendQuestionData = appendQuestionData
        this.questionDiag = true
      },
      appendQuestion(appendQuestionData) {
          this.$set(appendQuestionData, 'children', [])
          this.createQuestion(appendQuestionData.children)
      },
      getChildren(data, label) {
          var res // 定义一个不不赋值的变量
          var find = function(data, label) {
              data.forEach((item) => { // 利用foreach循环遍历
                   if (item.label == label)// 判断递归结束条件
                   {
                     console.log(item.label)
                       res = item
                       return item
                   } else if (item.children && item.children.length > 0) // 判断chlidren是否有数据
                   {
                       find(item.children, label) // 递归调用
                   }
              })
          }
           find(data, label)
           return res
      },
      ajax() {
        this.getAjax(this, {}, msg => {
          this.$nextTick(() => {
            this.$refs.createEdit.ajax(msg.detail ? msg.detail : '', this.data, this.globalData.data.formFields)
          })
        })
      }
    }
  }
</script>
