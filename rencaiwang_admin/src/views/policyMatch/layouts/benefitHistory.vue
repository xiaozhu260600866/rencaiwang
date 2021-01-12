<template>
  <section>
    <el-dialog
      :title="'选择' "
      :visible.sync="dialogVisible"
      top="10px"
      width="1000px"
      :before-close="handleClose"
      append-to-body
      class="searchAll"
    >
      <div class="flex-right mb20"><el-button type="primary" @click="handleClose">选中关闭</el-button></div>
      <div class="clear search_class">
        <el-col :span="24" style="background: white;z-index: 999">
          <el-table
            ref="multipleTable"
            v-loading="data.listLoading"
            :data="lists"
            border
            tooltip-effect="dark"
            style="width:100%"
            @selection-change="selsChange"
          >
            <el-table-column type="selection" min-width="30" />
            <el-table-column prop="benefitCategoryName" label="福利" />
            <el-table-column prop="benefitTitle" label="福利标题" />
            <el-table-column prop="benefitContent" label="福利内容" />
            <el-table-column prop="policy_name" label="政策" />
            <el-table-column prop="policyNum" label="对应第几条政策" />
            <el-table-column label="操作" :width="'160'">
              <template scope="scope">
                <el-button
                  class="canDel"
                  size="mini"
                  @click.native="benefitDel(scope.$index,scope.row)"
                >删除</el-button>
              </template></el-table-column>
          </el-table></el-col></div></el-dialog></section></template>
          </el-table>
        </el-col>
      </div>
    </el-dialog>
  </section>
</template>
<style type="text/css" scoped="">
	.searchAll /deep/.el-dialog {
		padding-bottom: 15px;
		height: auto !important;
	}

	.search_class {
		display: flex;
	}

	.left-col {
		padding-right: 20px;
	}

	.left-col .search-product-title {
		font-size: 15px;
		margin-bottom: 12px;
	}

	.clear {
		clear: both;
	}
</style>
<script type="text/javascript">
	export default {
		props: ['top'],
		data() {
			return {
				dialogVisible: false,
				data: this.formatData(this),
				formAction: '',
				type: 'radio',
				lists: [],
				sels: []

			}
		},
		methods: {
			benefitDel(benefitKey) {
				const row = this.lists[benefitKey]
				console.log(row)
				this.lists.splice(benefitKey, 1)
				const benefitArr = localStorage.getItem('benefitArr')
				if (benefitArr) {
					const benefitArr_ = JSON.parse(benefitArr)
					if (benefitArr_.length) {
						benefitArr_.forEach((v, benefitKey) => {
							 if (v.bid == row.bid) {
								 benefitArr_.splice(benefitKey, 1)
							 }
						})
						localStorage.setItem('benefitArr', JSON.stringify(benefitArr_))
					}
				}
			},
			click(row) {
				if (this.type == 'radio') {
					this.dialogVisible = false
					this.$emit('callBack', [row])
				}
				console.log(row)
			},
			ajax() {
				this.lists = []
				const benefitArr = localStorage.getItem('benefitArr')
				if (benefitArr) {
					let benefitArr_ = JSON.parse(benefitArr)
					benefitArr_ = benefitArr_.reverse()
					benefitArr_.forEach((v, key) => {
						if (v.length >= 8) {
							benefitArr_.splice(key, 1)
						}
					})
					this.lists = benefitArr_
				}
				this.dialogVisible = true
			},
			selsChange(sels) {
				console.log(this.$refs.multipleTable)
				this.sels = sels
			},
			handleClose() {
				this.dialogVisible = false
				this.$emit('callBack', this.sels)
			},
			handleCurrentChange(val) {
				this.data.query.page = val
				this.ajax()
			},
			toSearch() {
				this.data.query.page = 1
				this.ajax()
			},
			handleNodeClick(data, e, b) {
				if (e.childNodes.length == 0) {
					if (e.level == 1) {
						this.fclass = data.value
					} else {
						this.fclass = data.value
					}
					this.ajax()
				}
			}
		}
	}
</script>
