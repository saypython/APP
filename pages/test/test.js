Page({
  onPullDownRefresh: function () {
    console.log('1111')
    setTimeout(wx.stopPullDownRefresh,500)
  },
  onLoad: function (options){
    wx.startPullDownRefresh();
    //test
  }
})