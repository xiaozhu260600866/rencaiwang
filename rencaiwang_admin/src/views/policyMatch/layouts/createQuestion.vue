<template>
  <el-dialog title="新建或编辑问题" :visible.sync="questionDiag" width="800px">
    <el-form ref="ruleForm" :model="ruleForm" label-width="60px" class="demo-ruleForm">
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
						ruleForm: { label: '' },
						appendQuestionData: []
				}
			},
			methods: {
				edit(row) {
					console.log(row)
					this.questionDiag = true
					this.type = 'edit'
					this.ruleForm = row
				},
				create(appendQuestionData) {
					// this.ruleForm = row
					this.questionDiag = true
					this.ruleForm.label = ''
					this.type = 'create'
					this.appendQuestionData = appendQuestionData
				},
				questionCreateSubmit() {
							if (!this.ruleForm.label) {
									return this.getError('问题必填')
							}
							if (this.type == 'create') {
								this.appendQuestionData.push({
									 label: this.ruleForm.label,
									 type: 'question',
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
