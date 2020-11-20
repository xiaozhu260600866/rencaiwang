<template>
  <el-dialog title="请使用微信扫一扫" :visible.sync="dialogVisible" width="380px" :before-close="handleClose">
    <div>
      <img :src="imgUrl" alt="" style="width:300px">
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
	export default {
		props: [],
		data() {
			return {
				dialogVisible: false,
				imgUrl: '',
				timer: '',
				user: ''
			}
		},
		methods: {
			init(imgUrl, user) {
				this.imgUrl = imgUrl
				this.user = user
				this.dialogVisible = true
				this.timer = setInterval(() => {
					this.postAjax('/checkVerify', { user_id: user.id }, msg => {
            if (msg.data.status == 2) {
                    clearInterval(this.timer)
                    this.$emit('callBack')
                  }
					}, 'notloing')
				}, 2000)
			},
			handleClose(done) {
				this.dialogVisible = false
			}
		}

	}
</script>

<style>
</style>
