<template>
  <div class="app-container">
    <el-row>
      <el-col v-if="data.show" :span="24">
        <div class="dx-container">
          <tyt-page-header content="网站配置开始" />
          <div class="dx-main">
            <div class="list-box">
              <el-form ref="ruleForm" :model="ruleForm" label-width="150px" class="demo-ruleForm pt20" style="margin: 0;width:100%;min-width:600px;">
                <el-tabs v-model="activeName2">
                  <el-tab-pane label="导航栏" name="first">
                    <newClass
                      :data="data.category"
                      :fields="
                        [{label: '排序',prop: 'sort',width: 100,type: 'text',defaultValue: 100,datatype: 'require|integer'},
                         {label: '名称',prop: 'name',type: 'text',width: 200,datatype: 'require'},
                         {label: '页面路径',prop: 'url',type: 'text',width: 200,append_class_table_url:0,datatype: 'require'},
                         {label: '隐藏/显示',prop: 'can_show',type: 'switch',width: 100,defaultValue:1,},
                         {label: '编号',prop: 'id',width: 100},]
                      "
                      type="1"
                      form-action="/admin/system/"
                      :class-children-hidden="false"
                      :add-lev="2"
                    >
                      <!-- <div slot="append_class_table_url" slot-scope="scope">

                     </div> -->

                    </newClass>
                  </el-tab-pane>
                  <el-tab-pane label="单位" name="sixth">
                    <newClass
                      :data="data.category"
                      type="0"
                      form-action="/admin/system/"
                      :class-children-hidden="true"
                      :canupload="false"
                    >
                      <!-- <div slot="append_class_table_url" slot-scope="scope">

                        </div> -->

                    </newClass>

                  </el-tab-pane>
                  <el-tab-pane label="首面封面图" name="indexCover">
                    <div class="el-form-item">
                      <label class="el-form-item__label" style="width: 170px">首面封面图LOGO</label>
                      <my-upload upurl="product" :upload-length="1" :file-list="ruleForm.web_logo" :sizearr="300" />
                      <div>建议尺寸：758*1383</div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="分享logo图" name="shareCover">
                    <div class="el-form-item">
                      <label class="el-form-item__label" style="width: 170px">分享图LOGO</label>
                      <my-upload upurl="product" :upload-length="1" :file-list="ruleForm.wechat_logo" :sizearr="300" />

                    </div>
                  </el-tab-pane>

                </el-tabs>
                </el-tabs>
                <el-form-item v-if="activeName2 == 'indexCover' || activeName2 == 'shareCover'">
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                <chooseLocation ref="chooseLocation" @callBack="locationCallBack" />
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>
<style type="text/css">

</style>
<script>
	import chooseLocation from 'xiaozhu/vue/components/admin/chooseLocation'
	import category from 'xiaozhu/elementAdmin/components/category.vue'
	import newClass from 'xiaozhu/elementAdmin/components/new_class/2020new_class'
	export default {
		components: {
			chooseLocation,
			category,
			newClass

		},
		data() {
			return {
				ruleForm: {
					order_deadline: 0,
					order_autook: 0,
					is_make_menu: false,
					is_siginin: false
				},
				formAction: '/admin/system/config',
				activeName2: 'first',
				dialogVisible: false,
				getSiteName: this.getSiteName(),
				data: this.formatData(this)
			}
		},
		mounted: function() {
			this.ajax()
		},
		methods: {
			chooseLocation() {
				this.$refs.chooseLocation.ajax()
			},
			locationCallBack(res) {
				if (res.latlng) {
					this.$refs.chooseLocation.handleClose()
					this.ruleForm.address = res.poiaddress
					this.ruleForm.location_x = res.latlng.lng
					this.ruleForm.location_y = res.latlng.lat
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (this.ruleForm.end_date && typeof this.ruleForm.end_date === 'object') {
							this.ruleForm.end_date = this.dateToString(this.ruleForm.end_date, 'dateTime')
						}
						this.postAjax(this.formAction, this.ruleForm, function(msg) {})
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
			toBing() {
				this.dialogVisible = true
				this.$refs.qrcode.getQrcode()
			},
			resetForm(formName) {
				this.$refs[formName].resetFields()
			},
			ajax: function() {
				this.getAjax(this, {}, msg => {
					if ('detail' in msg) {
						this.ruleForm = msg.detail
						this.ruleForm.web_logo = this.ruleForm.web_logo ? this.splitCover(this.ruleForm.web_logo,
							'product') : []
						this.ruleForm.wechat_logo = this.ruleForm.wechat_logo ? this.splitCover(this.ruleForm
							.wechat_logo, 'product') : []
						this.ruleForm.card_user_id_default = parseInt(this.ruleForm.card_user_id_default)
					}
				})
			}
		}
	}
</script>
