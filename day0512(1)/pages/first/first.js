// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasid: "myCanvas"

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
    // const cc =wx.createCanvasContext(this.data.canvasid, this);
    // cc.setFillStyle('red');
    // cc.fillRect(20,30,330,100);
    // cc.draw();

    const cc = wx.createCanvasContext(this.data.canvasid, this);
    cc.setStrokeStyle('red');
    cc.setLineWidth(2);
    cc.moveTo(160, 100);
    cc.arc(100, 100, 60, 0, 2 * Math.PI, true)
    cc.moveTo(140, 100);
    cc.arc(100, 100, 40, 0, Math.PI, false);
    cc.moveTo(85, 80);
    cc.arc(80, 80, 5, 0, 2 * Math.PI, true);
    cc.moveTo(125, 80);
    cc.arc(120, 80, 5, 0, 2 * Math.PI, true);
    

    cc.stroke();
    cc.draw();

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