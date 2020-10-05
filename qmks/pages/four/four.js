// pages/four/four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  next(){
    wx.navigateTo({
      url: '../five/five',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  massage(){
    wx.showToast({
      title: "成功", // 提示的内容
      icon: "success", // 图标，默认success
      image: "", // 自定义图标的本地路径，image 的优先级高于 icon
      duration: 3000, // 提示的延迟时间，默认1500
      mask: false, // 是否显示透明蒙层，防止触摸穿透
      success: function () {
        console.log("success");
      },
      fail: function () {
        console.log("fail");
      },
      complete: function () {
        console.log("finish");
      }
    })
  },
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  openActionsheet() {
    wx.showActionSheet({
      itemList: ['1', '2','3', '4'],
      itemColor: '#007aff',
      success(res) {
        console.log(res.tapIndex);
        if (res.tapIndex === 0) {
          wx.chooseVideo({
            sourceType: ['camera'],
            success(res) {
              console.log(res.tempFilePath);
            }
          })
        } else if (res.tapIndex === 1) {
          
        }
      }
    })
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