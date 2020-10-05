// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordTime: 0,
    formatRecordTime: "00:00:00",
    recordFile: ""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startRecord({
      success(res) {
        console.log(res);
        _this.setData({
          recordFile: res.tempFilePath
        });
        console.log(_this.data.recordTime);
      },
      complete() {
        clearInterval(interval);
      }
    })
  },
  stopRecord(e) {
    wx.stopRecord();
  },

  playRecord(e) {
    wx.playVoice({
      filePath: this.data.recordFile,
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
