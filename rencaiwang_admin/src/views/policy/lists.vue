<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180" @submitBeforeCallBack="submitBeforeCallBack">

      <div slot="operate" slot-scope="scope">
        <div>
          <el-button v-if="checkPermission(['policy.edit'])" type="primary" size="mini" @click="goto('/policy/edit?id='+scope.row.id)">编辑</el-button>
        </div>
      </div>
      <div slot="header">
        <el-button type="primary" @click="$refs.category1.ajax()">类别管理</el-button>
        <el-button type="primary" @click="$refs.category2.ajax()">区县管理</el-button>
      </div>
      <div slot="headerR">
        <el-button v-if="checkPermission(['policy.create'])" type="primary" @click="goto('/policy/create')">新建</el-button>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />
    <new-class ref="category1" :diag="true" :add-lev="2" no="1" type="0" form-action="/admin/policy/" :class-children-hidden="true" :canupload="false" />
    <new-class ref="category2" :diag="true" :add-lev="2" no="1" type="1" form-action="/admin/policy/" :class-children-hidden="true" :canupload="false" />
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/policy.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
              'new-class': resolve => require(['xiaozhu/elementAdmin/components/new_class/2020new_class.vue'], resolve)
        },
        data() {
            return {
                formAction: '/admin/policy/lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData
            }
        },
        watch: {
            '$route': 'ajax'
        },
        mounted() {
            this.ajax()
        },
        methods: {

            submitBeforeCallBack(ruleform) {
                delete ruleform.api_token
                console.log(ruleform)
                this.$set(ruleform, 'role', 7)
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
