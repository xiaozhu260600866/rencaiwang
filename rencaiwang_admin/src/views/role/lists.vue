<template>
  <div>

    <dx-table :data="data" :global-data="globalData" :operate-width="160" @submitBeforeCallBack="submitBeforeCallBack" @createBeforeCallBack="createBeforeCallBack">
      <div slot="append_form_role_menus" slot-scope="scope">
        <el-button type="primary" @click="checkAllMethods(checkAll)">{{ !checkAll ? '全选' : '取消全选' }}</el-button>
        <el-tree
          v-if="treeShow"
          ref="tree"
          :data="routes"
          show-checkbox
          :default-expand-all="true"
          node-key="value"
          :default-checked-keys="checkedKeys"
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
        routes: [],
        checkAll: false,
        treeShow: true,
        checkedKeys: []

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
      createBeforeCallBack(row) {
           this.checkedKeys = row.role_menus.split(',')
      },
      checkAllMethods(row) {
        this.checkAll = !this.checkAll
        if (this.checkAll) {
          var res = []// 定义一个不不赋值的变量
          var data = this.routes
          var find = function(data) {
              data.forEach((item) => { // 利用foreach循环遍历
                   res.push(item.value)
                   if (item.children && item.children.length > 0) // 判断chlidren是否有数据
                    {
                        find(item.children) // 递归调用
                    }
              })
          }
          find(data)
           this.treeShow = false
          this.checkedKeys = res
          setTimeout(() => {
            this.treeShow = true
          }, 50)
        } else {
          this.treeShow = false
            this.checkedKeys = []
          setTimeout(() => {
            this.treeShow = true
          }, 50)
        }
      },
      getKeys(row) {
          if (row.role_menus) {
            return row.role_menus.split(',')

            return false
            // return row.role_menus.split(',')
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
