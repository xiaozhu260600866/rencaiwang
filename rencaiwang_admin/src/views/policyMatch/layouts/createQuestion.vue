<template>
  <el-dialog title="新建或编辑问题" :visible.sync="questionDiag" width="800px">
    <el-form ref="ruleForm" :model="ruleForm" label-width="60px" class="demo-ruleForm">
      <el-form-item v-if="isHeadLev" label="排序" :rules="[{ required: true, message: '排序不能为空'},]" style="margin-bottom: 20px;">
        <el-input v-model="ruleForm.sort" type="text" :rows="4" />
      </el-form-item>
      <el-form-item label="问题" :rules="[{ required: true, message: '问题不能为空'},]" style="margin-bottom: 0">
        <el-input v-model="ruleForm.label" type="textarea" :rows="4" />
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="questionDiag = false">取 消</el-button>
      <el-button type="primary" @click="questionCreateSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                questionDiag: false,
                type: 'create',
                ruleForm: {
                    label: '',
                    sort: 0
                },
                isHeadLev: false,
                appendQuestionData: []
            }
        },
        methods: {
            edit(row) {
                console.log(row)
                if (row.isHeadLev) {
                    this.isHeadLev = row.isHeadLev
                } else {
                    this.isHeadLev = false
                }
                this.questionDiag = true
                this.type = 'edit'
                this.ruleForm = row
            },
            create(appendQuestionData, isHeadLev) {
                // this.ruleForm = row

                if (isHeadLev) {
                    this.isHeadLev = isHeadLev
                } else {
                    this.isHeadLev = false
                }
                this.questionDiag = true
                this.ruleForm.label = ''

                this.ruleForm.sort = 0
                this.type = 'create'
                this.appendQuestionData = appendQuestionData
            },
            isNum(value) {
              return typeof value === 'number' && !isNaN(value)
            },
            questionCreateSubmit() {
                if (!this.ruleForm.label) {
                    return this.getError('问题必填')
                }
                if (this.isHeadLev && !this.isNum(parseInt(this.ruleForm.sort))) {
                      return this.getError('排序格式错误请重新输入')
                }
                if (this.type == 'create') {
                    this.appendQuestionData.push({
                        label: this.ruleForm.label,
                        type: 'question',
                        sort: this.ruleForm.sort,
                        isHeadLev: this.isHeadLev,
                        uid: Math.ceil(Math.random() * 100)
                    })
                }
                this.questionDiag = false
            }
        }
    }
</script>

<style>
</style>
