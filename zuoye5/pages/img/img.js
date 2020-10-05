// pages/img/img.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 15,
    array: [{
        title: "01",
        image: "../pic/avatar.png",
      },
      {
        title: "02",
        image: "../pic/avatar.png",
      },
      {
        title: "03",
        image: "../pic/avatar.png",
      },
      {
        title: "04",
        image: "../pic/avatar.png",
      },
      {
        title: "05",
        image: "../pic/avatar.png",
      },
      {
        title: "06",
        image: "../pic/avatar.png",
      },
      {
        title: "07",
        image: "../pic/avatar.png",
      },
      {
        title: "08",
        image: "../pic/avatar.png",
      },
      {
        title: "09",
        image: "../pic/avatar.png",
      },
      {
        title: "10",
        image: "../pic/avatar.png",
      },
      {
        title: "11",
        image: "../pic/avatar.png",
      },
      {
        title: "12",
        image: "../pic/avatar.png",
      },
      {
        title: "13",
        image: "../pic/avatar.png",
      },
      {
        title: "14",
        image: "../pic/avatar.png",
      },
      {
        title: "15",
        image: "../pic/avatar.png",
      }
    ]
  },
  scrolltolower: function() {
    var arr = new Array(this.data.array.length + 15);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
        title: i,
        image: "../pic/avatar.png"
      }
    }
    this.setData({
      array: arr,
      total: arr.length,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})