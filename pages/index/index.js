Page({
  data: {
    newsType: [
      {
        name: "国内",
        type: "gn"
      },
      {
        name: "国际",
        type: "gj"
      },
      {
        name: "财经",
        type: "cj"
      },
      {
        name: "娱乐",
        type: "yl"
      },
      {
        name: "军事",
        type: "js"
      },
      {
        name: "体育",
        type: "ty"
      },
      {
        name: "其他",
        type: "other"
      }
    ],
    noImage: "/images/img_not_available.png",
    showingType: "gn",
    newsList: []
  },

  onLoad() {
    const {showingType} = this.data
    this.getNewsList(showingType)
  },

  getNewsList(type) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type
      },
      success: res => {
        console.log(res.data.result)
        let result = res.data.result
        this.setData({
          newsList: result
        })
      }
    })
  },

  changeType(type) {
    this.setData({
      showingType: type
    })
  },

  onTapNewsType(e) {
    const { type } = e.currentTarget.dataset
    this.changeType(type)
    this.getNewsList(type)
  },

  onPullDownRefresh() {
    const { showingType } = this.data
    this.getNewsList(showingType)
    wx.stopPullDownRefresh()
  },

  onTapNewsList(e) {
    const { id } = e.currentTarget.dataset
    getApp().globalData.showingId = id
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})