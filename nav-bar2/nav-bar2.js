Component({
	properties: {
		navTab2: {
			type: Array //导航栏栏目列表
		}
	},
  data: {
    tabCur: 0
  },
  methods: {
    tabSelect(e) {
      //导航栏切换栏目
      this.setData({
        tabCur: e.currentTarget.dataset.id
      })
      //抛出导航栏栏目点击事件
			console.log(e)
			const index = e.currentTarget.dataset.index;
			const item = this.data.navTab2[index];
      this.triggerEvent("is-tabSelect", {index: index, item: item})
    }
  }
})