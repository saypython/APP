// fk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagearr:[
      { dbsl: 0, name: "待办事项", src:"img/db.png" , url:"../fk/dbsx"},
      { dbsl: 0, name: "当前申请", src: "img/sq.png", url: "../logs/logs"},
      { dbsl: 0, name: "机票预订", src:"img/jp.png" , url:"../test/test"},
      { dbsl: 0, name: "机票查询", src:"img/cx.png" ,},
      { dbsl: 0, name: "单据授权", src:"img/djsq.png" ,},
      { dbsl: 0, name: "差旅政策", src:"img/zc.png" ,},
      { dbsl: 0, name: "历史审批", src:"img/lssp.png" ,},
      { dbsl: 0, name: "PC代办项", src:"img/pcdb.png" ,},
      { dbsl: 0, name: "税务信息", src:"img/sw.png" ,}
    ]
  },
  test: function (e) { 
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 	var that = this;
    wx.request({
      url: 'http://gank.io/api/data/Android/30/1',
      method: 'GET',
      success: function (res) {
        var obj = res.data.results;
        var a = 0;
        var b = 0;
        for(var i=0;i<obj.length;i++){
          if(obj[i].source == 'web'){
            a++;
          } else if (obj[i].source == 'chrome') {
            b++;
          }
        }
        that.setData({
          'pagearr[0].dbsl': a,
          'pagearr[1].dbsl': b,
        })
      }
    })
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