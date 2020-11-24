<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180" @submitBeforeCallBack="submitBeforeCallBack">

      <div slot="operate" slot-scope="scope">
        <div v-if="checkPermission(['video.edit'])">
          <el-button type="primary" size="mini" @click="goto('/video/edit?id='+scope.row.id)">编辑</el-button>
        </div>
      </div>
      <div slot="append_table_playUrl" slot-scope="scope">
        {{ siteName + '/h5/#/pages/video/lists/index?fid='+JSON.parse(scope.row.class_value)[0]+ '&video_id='+scope.row.id }}
      </div>
      <div slot="headerR">
        <el-button v-if="checkPermission(['video.create'])" type="primary" @click="goto('/video/create')">新建</el-button>
      </div>
    </dx-table>
    <qrcode ref="qrcode" />

    <!-- <dx-create-edit  ref="createEdit" :fields="globalData.data.formFields" :data="data" noDialog="true" createEditLabel="120px">
         	  <div slot="content" slot-scope="scope">
         		   <slot :name="scope.field" :row="scope.row"/>
         	  </div>
         </dx-create-edit> -->
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/video.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/video/lists',
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
