<template>
  <div>

    <dx-table :data="data" :global-data="globalData" :operate-width="160" @submitBeforeCallBack="submitBeforeCallBack">
      <div slot="append_form_role_menus" slot-scope="scope">

        <el-tree
          ref="tree"
          :data="routes"
          show-checkbox
          :default-expand-all="true"
          node-key="value"
          :default-checked-keys="getKeys(scope.row)"
        />
      </div>

    </dx-table>
  </div>
</template>
<script type="text/javascript">
  import globalData from './layouts/role.js'
  export default {
    components: {
      'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
      // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
    },
    data() {
      return {
        formAction: '/admin/role/lists',
        data: this.formatData(this),
        siteName: this.getSiteName(),
        globalData: globalData,
        routes: []
      }
    },
    watch: {
      '$route': 'ajax'
    },
    mounted() {
      this.routes = []
      const routes = JSON.parse(localStorage.getItem('asyncRoutes'))
      this.initRoutes(this.routes, routes)

       this.ajax()
    },
    methods: {
      getKeys(row) {
          if (row.role_menus) {
            return row.role_menus.split(',')
          }
      },
      initRoutes(arr, routes) {
        routes.forEach(v => {
            if (v.meta) {
              arr.push({
                label: v.meta.title,
                value: v.meta.roles[0]
              },)
              if (v.children) {
                arr[arr.length - 1].children = []
                this.initRoutes(arr[arr.length - 1].children, v.children)
              }
            }
        })
      },
      submitBeforeCallBack(ruleform) {
        // this.$set(ruleform, 'type', this.data.query.type)
        // alert(1)
        // console.log(1111222)
        this.$set(ruleform, 'role_menus', this.$refs.tree.getCheckedKeys())
        // this.$set(ruleform, 'role_menus_keys', this.$refs.tree.getCheckedNodes())
        console.log(ruleform)
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
