Component({
  properties: {
		proList: {
			type: Array //作品卡片信息列表
		},
		width: {
			type: String //作品卡片宽度
		},
		height: {
			type: String //作品卡片高度
		}
  },
  data: {
  },
  methods: {
		jumpPro(e) {
			console.log(e);
			this.triggerEvent("is-jumpPro");
		},
		addHeart(e) {
			console.log(e);
			this.triggerEvent("is-addHeart");
		},
		jumpUser(e) {
			console.log(e);
			this.triggerEvent("is-jumpUser");
		}
  }
})