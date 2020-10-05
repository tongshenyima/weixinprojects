// pages/WeUI/WeUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["正在热映", "搜索", "分类"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    contents: [{
      id: 1,
      poster: "../../images/poster.jpg",
      title: "龙猫",
      article: "电影内容简介"
    },
    {
      id: 2,
      poster: "../../images/poster.jpg",
      title: "龙猫",
      article: "电影内容简介"
    },
    {
      id: 3,
      poster: "../../images/poster.jpg",
      title: "龙猫",
      article: "电影内容简介"
    }
    ],

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