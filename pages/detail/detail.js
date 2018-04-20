Page({
  data: {
    showingId: 1523074607635,
    newsDetail: ""
  },

  onLoad() {
    const { showingId } = this.data
    this.getNewsDetail(showingId)
  },

  getNewsDetail(id) {
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
      }
    })
  }
})