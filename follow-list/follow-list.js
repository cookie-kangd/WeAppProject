Component({
  properties: {
		followList: {
			type: Array //关注粉丝列表
		}
  },
  data: {},
  methods: {
		//抛出关注按钮点击事件
		followTap(e) {
			console.log(e)
			this.triggerEvent("is-followTap")
		}
  }
})