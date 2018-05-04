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
    showingType: "gn",
    headLine: null,
    newsList: []
  },

  onLoad() {
    const {showingType} = this.data
    this.getNewsList(showingType)
  },

  getNewsList(type, callback) {
    wx.showLoading({
      title: "加载中"
    })
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type
      },
      success: res => {
        console.log(res.data.result)
        let result = res.data.result
        result.forEach( (news, index) => {
          result[index].date = news.date.substring(11, 16)
        })
        this.setData({
          headLine: result[0]
        })
        result.shift
        this.setData({
          newsList: result
        })
      },
      complete: () => {
        wx.hideLoading()
        callback && callback
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
    this.getNewsList(showingType, wx.stopPullDownRefresh())
  },

  onTapNewsList(e) {
    const { id } = e.currentTarget.dataset
    getApp().globalData.showingId = id
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})