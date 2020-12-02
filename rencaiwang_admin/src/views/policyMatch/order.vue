<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180">
      <div slot="operate" slot-scope="scope">
        <!-- <div>
          <el-button v-if="data.query.status == 0" type="primary" size="mini" @click="handel(scope.row,1)">处理</el-button>
          <el-button v-if="data.query.status == 1" type="primary" size="mini" @click="handel(scope.row,0)">设为未处理</el-button>
        </div> -->
      </div>
    </dx-table>
    <qrcode ref="qrcode" />
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/order.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve),
             'my-class': resolve => require(['xiaozhu/elementAdmin/components/class.vue'], resolve)
        },
        data() {
            return {
                formAction: '/admin/policyMatch/order',
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
          handel(row, status) {
            this.postAjax('/admin/policyMatch/orderStatus', { id: row.id, status: status }).then(msg => {
              if (msg.data.status == 2) {
                  this.ajax()
              }
            })
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
