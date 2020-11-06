<template>

  <el-dialog title="新建或编辑答案" :visible.sync="answerDiag" top="10px">
    <el-form ref="ruleForm" :model="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="问题">
        <el-input v-model="question.label" :disabled="true" type="textarea" />
      </el-form-item>
      <el-form-item label="答案" :rules="[{ required: true, message: '答案不能为空'},]">
        <el-input v-model="ruleForm.label" type="textarea" />
      </el-form-item>
      <div class="flex-center flex-middle" style="height: 50px;" @click="createBenefit"><el-button type="mini">新增福利</el-button></div>
      <div v-for="(benefit,benefitKey) in ruleForm.benefitArr" class="p20" style="border:1px solid #ccc;position: relative;margin-bottom: 10px;">
        <div style="position: absolute;right: 10px;top:0" @click="ruleForm.benefitArr.splice(benefitKey,1)"><i class="el-icon-close" /></div>
        <el-form-item label="福利" :rules="[{ required: true, message: '答案不能为空'},]">
          <el-select v-model="benefit.benefitCategory" placeholder="请选择">
            <el-option
              v-for="item in benefitArr"
              :label="item.label"
              :value="item.value"
            />
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
          <el-tag v-if="benefit.policy_name" type="gray">{{ benefit.policy_name }}</el-tag>
        </el-form-item>
        <el-form-item label="对应第">
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
    <searchAll ref="searchAll" @callBack="searchCallBack" />
  </el-dialog>

</template>

<script>
  import searchAll from 'xiaozhu/elementAdmin/components/searchAll'
  export default {
     components: { searchAll },
      props: ['appendQuestionData', 'question', 'questions', 'benefitArr', 'policyArr'],
      data() {
        return {
            answerDiag: false,
            type: '',
            benefitKey: 0,
            ruleForm: { label: '' }
        }
      },
      methods: {
        createBenefit() {
           this.ruleForm.benefitArr.push({

           })
        },
        edit(row) {
          this.answerDiag = true
          this.type = 'edit'
          this.ruleForm = row
        },
        create(row) {
          this.answerDiag = true
          this.ruleForm = { benefitArr: [] }
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
              searchFields: [
                  {
                  name: '',
                  prop: 'title',
                  type: 'text',
                  label: '政策名称'
                  }
              ],
              'tableFields': [
                  {
                      'name': '',
                      'prop': 'title',
                      'minWidth': '180',
                      'width': '',
                      'append_table_': 0,
                      'label': '政策名称'
                  },
                  {
                      'name': '',
                      'prop': 'unit',
                      'minWidth': '180',
                      'width': '',
                      'append_table_': 0,
                      'label': '单位'
                  },
                  {
                      'name': '',
                      'prop': 'fclassname',
                      'minWidth': '',
                      'width': '180',
                      'append_table_': 0,
                      'label': '分类'
                  },
                   { 'prop': 'show', 'minWidth': '', 'width': '90', 'align': 'center', 'type': 'editField', 'url': '/admin/article/editField', 'append_table_': 0, 'label': '隐藏/显示' },
                  {
                      'name': '',
                      'prop': 'published_at',
                      'minWidth': '',
                      'width': '120',
                      'append_table_': 0,
                      'label': '发布日期'
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

          if (this.type == 'create') {
            const res = this.getChildren(this.questions, this.question.label)
            if (!res.children) {
               this.$set(res, 'children', [])
            }
            res.children.push(
               {
                label: this.ruleForm.label,
                type: 'answer',
                benefitArr: this.ruleForm.benefitArr
               }
            )
          }

            this.answerDiag = false
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
        }
      }
  }
</script>

<style>
</style>
