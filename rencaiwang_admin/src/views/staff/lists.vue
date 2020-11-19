<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="160" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="append_table_wechat" slot-scope="scope">
        <span v-if="scope.row.admin_openid" @click="cancel(scope.row)"><el-button>已绑定</el-button></span>
        <span v-else><el-button>未绑定</el-button></span>
      </div>
    </dx-table>
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/staff.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/staff/lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData
            }
        },
        watch: {
            '$route': 'ajax'
        },
        mounted() {
            setTimeout(() => {
                 this.ajax()
            }, 100)
        },
        methods: {
            cancel(row) {
              this.getConfirm('是否取消绑定', () => {
                  this.postAjax('/admin/staff/cancelWechat', row).then(msg => {
                       if (msg.data.status == 2) {
                          this.ajax()
                       }
                  })
              })
            },
            submitBeforeCallBack(ruleform) {
               delete ruleform.api_token
                this.$set(ruleform, 'type', this.data.query.type)
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
