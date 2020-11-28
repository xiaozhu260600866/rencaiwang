<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="160" @submitBeforeCallBack="submitBeforeCallBack" />
  </div>
</template>
<script type="text/javascript">
    import globalData from './layouts/redirectArticle.js'
    export default {
        components: {
            'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
            // "dx-create-edit": resolve => require(["xiaozhu/elementAdmin/components/create_edit.vue"], resolve),
        },
        data() {
            return {
                formAction: '/admin/redirectArticle/lists',
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

            submitBeforeCallBack(ruleform) {
               delete ruleform.api_token
                this.$set(ruleform, 'type', this.data.query.type)
            },
            ajax() {
                this.getAjax(this, {}, msg => {

                })
            }
        }
    }
</script>
