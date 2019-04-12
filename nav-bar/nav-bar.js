Component({
	properties: {
		navTab: {
			type: Array //导航栏栏目列表
		}
	},
	//页面初始数据
	data: {
		tabCur: 0,
		scrollLeft: 0
	},
	methods: {
		//导航栏左右滑动
		tabSelect(e) {
			this.setData({
				tabCur: e.currentTarget.dataset.id,
				scrollLeft: (e.currentTarget.dataset.id - 1) * 60
			})
			//抛出导航栏栏目点击切换事件
			console.log(this.data.tabCur)
			const index = e.currentTarget.dataset.index;
			const item = this.data.navTab[index];
			this.triggerEvent("is-tabSelect", {index: index, item: item})
		},
		//抛出搜索图标点击事件
		jumpSearch(e) {
			console.log(e)
			this.triggerEvent("is-jumpSearch")
		}
	}
})