Component({
	properties: {
		themeList: {
			type: Array //主题滑动组件列表
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