// pages/map/map.js
var mapContext;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapid: "map1",
    latitude: "39.91489",
    longitude: "116.390854",
    markers: [{
      iconPath: "../../img/xss.png",
      id: 1,
      latitude: 30.74288,
      longitude: 120.712921,
      width: 50,
      height: 50
    },
    {
      iconPath: "../../img/xss.png",
      id: 1,
      latitude: 39.91489,
      longitude: 116.390854,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      iconPath: '../../img/xss1.png',
      position: {
        left: 0,
        top: 300,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  controltap(e) {
    console.log(e);
    if (e.controlId == 1) {
      this.mapContext.moveToLocation({
        latitude: "30.74288",
        longitude: "120.712921",
        success: res => {
          console.log("success");
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapContext = wx.createMapContext(this.data.mapid, this);

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