<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="180">

      <div v-for="(v,attributeKey) in data.activity.getAttribute" :slot="'append_table_field_'+attributeKey" slot-scope="scope">
        <span v-if="v.type!='上传图片'">{{ getValue(scope.row['field_'+attributeKey],v) }}</span>
        <span v-if="v.type =='上传图片'">

          <div v-for="img in getValue(scope.row['field_'+attributeKey],v)"> <a href="javascript:;" :href="img"><img :src="img" alt="" width="50"></a></div>

        </span>
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
    import globalData from './layouts/activityOrder.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/activity/order-lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
                arr: []
            }
        },
        watch: {
            '$route': 'ajax'
        },
        mounted() {
            this.ajax()
        },
        methods: {

            getValue(row, attribute) {
              if (attribute.type != '上传图片') {
                    const value = JSON.parse(row)
                    if (value) return value.value
              } else {
                const value = JSON.parse(row)
                if (value) {
                    const res = []
                    value.value.split(',').forEach(img => {
                        res.push(this.siteName + '/upload/images/activity/' + img)
                    })
                   return res
                }
              }
            },
            ajax() {
                this.globalData.data.searchFields = []
                this.globalData.data.tableFields = []
                this.globalData.data.tableFields.push(
                  { label: '活动名称', prop: 'activity_name' },
                  { label: '提交时间', prop: 'created_at' },
                )
                this.getAjax(this, {}, msg => {
                    msg.activity.getAttribute.forEach((attribute, attributeKey) => {
                        // searchField start
                        if (attribute.type == '文本') {
                           this.globalData.data.searchFields.push(
                              { type: 'text', label: attribute.title, prop: 'field_' + attributeKey }
                           )
                        } else if (attribute.children) {
                            const data = JSON.parse(attribute.children)
                            if (data.length > 0) {
                              data.forEach((res, resKey) => {
                                data[resKey].value = res.label
                              })
                            }
                            data.unshift({
                               value: 0, label: '全部'
                            })
                            this.globalData.data.searchFields.push(
                               { type: 'select', label: attribute.title, prop: 'field_' + attributeKey, data: data }
                            )
                        }
                       // searchField end

                        // tableFields start
                          this.globalData.data.tableFields.push(
                             { label: attribute.title, prop: 'field_' + attributeKey }
                          )

                          this.globalData.data.tableFields[this.globalData.data.tableFields.length - 1 ]['append_table_field_' + attributeKey] = 1
                        // tableFields start
                    })
                })
            }
        }
    }
</script>
