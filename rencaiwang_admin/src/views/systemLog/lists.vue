<template>
  <div>
    <dx-table :data="data" :global-data="globalData" :operate-width="160" />
  </div>
</template>
<script type="text/javascript">
	import globalData from './layouts/systemLog.js'
	export default {
		components: {
			'dx-table': resolve => require(['xiaozhu/elementAdmin/components/dx_table.vue'], resolve)
		},
		data() {
			return {
				formAction: '/admin/systemLog/lists',
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

			},
			ajax() {
				this.getAjax(this, {}, msg => {

				})
			}
		}
	}
</script>
