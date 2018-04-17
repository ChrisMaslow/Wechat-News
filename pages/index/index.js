Page({
  data: {
    newsList: []
  },
  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'gn'
      },
      success: res => {
        console.log(res.data.result)
        let result = res.data.result
        this.setData({
          newsList: result
        })
      }
    })

  }
})