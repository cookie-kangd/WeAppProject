Component({
  properties: {
    indicatorDots: {
      type: Boolean, //是否显示小圆点，默认不显示小圆点（有问题，false还是显示）
			default: false
    },
    indicatorColor: {
      type: String //轮播小圆点颜色
    },
    indicatorActiveColor: {
      type: String //轮播小圆点激活颜色
    },
    autoplay: {
      type: Boolean //是否自动播放
    },
    interval: {
      type: Number //轮播时间
    },
    duration: {
      type: Number //动画时间
    },
    imageList: {
			type: Array //图片列表
		},
    width: {
      type: String //图片宽度
    },
    height: {
      type: String //图片高度
    }
  },
  data: {
    cardCur: 0
  },
  methods: {
    //卡片轮播滑动切换
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    //抛出卡片轮播点击事件
    cardTap(e) {
			console.log(e)
      this.triggerEvent("is-cardTap")
    }
  }
})