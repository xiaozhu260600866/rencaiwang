<template>
  <section class="p20">
    <div>
      <span class="tip tip-link mr20" style="color: #f59642;"><i class="el-icon-info el-icon" />活动内容</span>
    </div>
    <el-form ref="ruleForm2" :model="ruleForm2" label-width="100px" class="demo-ruleForm pb50 mt20" :inline="true">
      <el-form-item label="活动名称" prop="title" :rules="[{ required: true, message: '活动名称不能为空'},]">
        <el-input v-model="ruleForm2.title" />
      </el-form-item>
      <el-form-item label="活动举办单位" prop="activity_unit" :rules="[{ required: true, message: '活动名称不能为空'},]">
        <el-input v-model="ruleForm2.activity_unit" />
      </el-form-item>
      <el-form-item label="开始时间" prop="start_at" :rules="[{ required: true, message: '活动名称不能为空'},]">
        <el-date-picker
          v-model="ruleForm2.start_at"
          type="datetime"
          placeholder="选择日期时间"
          format="yyyy-MM-dd/HH-mm-ss"
        />
      </el-form-item>
      <el-form-item label="结束时间" prop="end_at" :rules="[{ required: true, message: '活动名称不能为空'},]">
        <el-date-picker
          v-model="ruleForm2.end_at"
          type="datetime"
          placeholder="选择结速时间"
          format="yyyy-MM-dd/HH-mm-ss"
        />
      </el-form-item>
      <el-form-item label="分类" prop="fclass" :rules="[{ required: true, message: '分类名称不能为空'},]">
        <el-select v-model="ruleForm2.fclass" placeholder="请选择">
          <el-option
            v-for="item in data.fclass"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="涉及区县" prop="town" :rules="[{ required: true, message: '涉及区县名称不能为空'},]">
        <el-select v-model="ruleForm2.town" placeholder="请选择">
          <el-option
            v-for="item in data.townFclass"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="单位" prop="unit" :rules="[{ required: true, message: '分类名称不能为空'},]">
        <el-select v-model="ruleForm2.unit" placeholder="请选择">
          <el-option
            v-for="item in data.unit"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="封面图" prop="cover" :rules="[{ required: true, message: '分类名称不能为空'},]">
        <my-upload upurl="activity" upload-length="1" :file-list="ruleForm2.cover" :sizearr="300" />
      </el-form-item>
    </el-form>

    <div>
      <span class="tip tip-link mr20" style="color: #f59642;"><i class="el-icon-info el-icon" />勾选报名时需要填写什么个人信息</span>
    </div>
    <!-- 左边开始 -->
    <div class="flex mt20">
      <div class="tabs-box" style="overflow: auto; max-height: 644px;"><h3>基础组件</h3>
        <div class="ivu-tabs ivu-tabs-card">
          <div class="ivu-tabs-content ivu-tabs-content-animated">
            <div class="ivu-tabs-tabpane">
              <div class="coms-list">
                <div id="modular">
                  <!-- <div class="coms-item sortable-drag" draggable="false" @click="add('标题')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 标题</span></div> -->
                  <div class="coms-item" @click="add('文本')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 单行文本</span></div>
                  <div class="coms-item" @click="add('多行文本')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 多行文本</span></div>
                  <div class="coms-item" @click="add('时间')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 时间</span></div>
                  <div class="coms-item" @click="add('日期')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 日期</span></div>
                  <div class="coms-item" @click="add('单项选择')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 单项选择</span></div>
                  <div class="coms-item" @click="add('多项选择')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 多项选择</span></div>
                  <div class="coms-item" @click="add('下拉框')"><i alt="" class="icon-temp  iconfont icon-title" /> <span> 下拉框</span></div>
                  <div class="coms-item" @click="add('上传图片')"><i alt="" class="icon-temp  iconfont icon-title" /> <span>上传图片</span></div>
                  <!--   <div class="coms-item" @click="add('地址')"><i alt="" class="icon-temp  iconfont icon-title" /> <span>选择省市区</span></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 左边结束 -->
      <!-- 中间开始 -->
      <authLists ref="authLists" :lists="lists" :appointment-title="appointment_title" />
      <!-- 中间结束 -->
      <!-- 右边开始 -->
      <authForm :rule-form="ruleForm" :lists="lists" />
    </div>
    <div class="mt20 mb20">
      <span class="tip tip-link mr20" style="color: #f59642;"><i class="el-icon-info el-icon" />活动介绍</span>
    </div>
    <div class="el-form-item">
      <div :class="['el-form-item__content' ]">
        <Tinymce ref="editor" v-model="ruleForm2.content" :height="300" />
      </div>
    </div>
    <div class="flex-center">
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>

    </div>
  </section>
</template>
<style type="text/css" scoped="">
@import url('form.css');

</style>
<script type="text/javascript">
import authLists from './layouts/lists/lists'
import authForm from './layouts/form/form'
import Tinymce from 'xiaozhu/elementAdmin/components/Tinymce/index'
export default {
	components: {
		authLists,
		authForm,
    Tinymce
	},
	data() {
		return {
			ruleForm: { /* title: '管理团队', icon: 1, type: '管理团队', authDiag: false, checked: true,children:[]*/ },
      ruleForm2: { start_at: '', cover: [] },
			siteName: this.getSiteName(),
			showType: 0,
			appointment_name: '',
			appointment_title: '',
			status: 0,
			title: '',
			formAction: '/admin/activity/create',
			data: this.formatData(this),
			lists: []
		}
	},
	mounted() {
		this.ajax()
	},
	methods: {
    submitForm(formName) {
      if (this.lists.length == 0) {
      	this.getError('请选择表单内容')
      	return false
      }
      if (this.ruleForm2.id) {
         this.formAction = '/admin/activity/edit'
      } else {
        this.formAction = '/admin/activity/create'
      }
       this.$refs[formName].validate((valid) => {
       	if (valid) {
          this.ruleForm2.attribute = this.lists
       		this.postAjax(this.formAction, this.ruleForm2, msg => {
       			if (msg.data.status == 2) {
                this.goto('/activity/lists')
       			}
       		})
       	}
       })
     },
		ajax() {
			this.getAjax(this, {}, msg => {
        if (msg.detail) {
            this.ruleForm2 = msg.detail
            this.ruleForm2.cover = this.splitCover(this.ruleForm2.cover, 'activity')
            if (msg.detail.getAttribute.length > 0) {
            	msg.detail.getAttribute.forEach((v, i) => {
            		this.status = v.status
            		if (v.children) {
            			v.children = JSON.parse(v.children)
            		}
            		if (v.checked) {
            			this.ruleForm = v
            		}
            	})
            	this.lists = msg.detail.getAttribute
            }
        }
			})
		},
		noChecked() {
			this.lists.forEach((v, i) => {
				v.checked = true
			})
		},
		add(type) {
			this.$refs.authLists.add(type)
		}
	}
}

</script>
<style type="text/css" scoped="">
</style>
