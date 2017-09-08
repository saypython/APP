// dbsx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagearr:[
      { id: '0', title: '测试标题1', time: '2017-01-01', name: '张三', url: '../fk/detail'},
        { id: '0', title: '测试标题2', time: '2017-01-01', name: '李四', url: '../fk/detail'},
        { id: '0', title: '测试标题1', time: '2017-01-01', name: '张三', url: '../fk/detail'},
        { id: '0', title: '测试标题3', time: '2017-01-01', name: '张三', url: '../fk/detail'},
        { id: '0', title: '测试标题4', time: '2017-01-01', name: '张三', url: '../fk/detail'}]
  },
  pagejump: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})