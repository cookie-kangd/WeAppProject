Component({
	properties: {
		normalList: {
			type: Array //普通卡片信息列表
		},
		width: {
			type: String //普通卡片宽度
		},
		height: {
			type: String //普通卡片高度
		}
	},
	data: {
		tabCur: 0,
		slideLeft: 0 //默认选中第1个主题
	},
	methods: {
		themeClick(e) {
			this.setData({
			  tabCur: e.currentTarget.dataset.id,
				scrollLeft: (e.currentTarget.dataset.id - 1) * 60
			})
			//抛出主题点击事件
			this.triggerEvent("is-themeClick");
		}
	}
})