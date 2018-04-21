Page({
  data: {
    newsDetail: ""
  },

  onLoad() {
    const { showingId } = getApp().globalData
    this.getNewsDetail(showingId)
  },

  getNewsDetail(id) {
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id
      },
      success: res => {
        console.log(res.data.result)
        let result = res.data.result
        result.date = result.date.substring(11, 16)
        this.setData({
          newsDetail: result
        })
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  },

  onPullDownRefresh() {
    const { showingId } = getApp().globalData
    this.getNewsDetail(showingId)
    wx.stopPullDownRefresh()
  }
})