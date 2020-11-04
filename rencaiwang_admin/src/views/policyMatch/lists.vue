<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180" @submitBeforeCallBack="submitBeforeCallBack">

      <div slot="operate" slot-scope="scope">
        <div>
          <el-button v-if="checkPermission(['policyMatch.edit'])" type="primary" size="mini" @click="goto('/policyMatch/edit?id='+scope.row.id)">编辑</el-button>
        </div>
      </div>
      <div slot="header">
        <el-button type="primary" @click="$refs.category1.ajax()">类别管理</el-button>
        <el-button type="primary" @click="$refs.category2.ajax()">福利管理</el-button>
      </div>
      <div slot="headerR">
        <el-button v-if="checkPermission(['policyMatch.create'])" type="primary" @click="goto('/policyMatch/create')">新建</el-button>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />

    <my-class ref="category1" top="2%" type="0" form-action="/admin/policyMatch/" :sizearr="300" :class-children-hidden="false" :canupload="true" />
    <my-class ref="category2" top="2%" type="1" form-action="/admin/policyMatch/" :sizearr="300" :class-children-hidden="true" :canupload="true" no="true" />
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/policyMatch.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
             'my-class': resolve => require(['xiaozhu/elementAdmin/components/class.vue'], resolve)
        },
        data() {
            return {
                formAction: '/admin/policyMatch/lists',
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
