const app = getApp();
Component({
	properties: {
		messageList: {
			type: Array //左滑删除列表组件表格
		}
	},
	data: {},
	methods: {
		// 列表可触摸
		ListTouchStart(e) {
			this.setData({
				ListTouchStart: e.touches[0].pageX
			})
		},
		// 列表滑动方向
		ListTouchMove(e) {
			this.setData({
				ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
			})
		},
		// 列表滚动
		ListTouchEnd(e) {
			if (this.data.ListTouchDirection == 'left') {
				this.setData({
					modalName: e.currentTarget.dataset.target
				})
			} else {
				this.setData({
					modalName: null
				})
			}
			this.setData({
				ListTouchDirection: null
			})
		},
		//抛出删除按钮点击事件
		remove(e) {
			console.log(e);
			this.triggerEvent("is-remove");
		}
	}
})