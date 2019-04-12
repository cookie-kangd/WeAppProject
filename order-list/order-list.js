Component({
	properties: {
		orderList: {
			type: Array //订单展示列表
		}
	},
	data: {},
	methods: {
		//抛出蓝色按钮点击事件
		_activeButtonTap(e) {
			console.log(e)
			this.triggerEvent("is-activeButtonTap");
		},
		//抛出灰色按钮点击事件
		_normalButtonTap(e) {
			console.log(e)
			this.triggerEvent("is-normalButtonTap");
		}
	}
})