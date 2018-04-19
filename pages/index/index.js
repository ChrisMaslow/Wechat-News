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
    newsList: []
  },

  onLoad() {
    this.getNewsList("gn")
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

  onTapNewsType(e) {
    const { type } = e.currentTarget.dataset
    this.getNewsList(type)
  },

  onTapNewsList() {
    wx.showToast()
  }
})