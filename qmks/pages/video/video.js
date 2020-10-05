// pages/second/second.js
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
let txvContext;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vid: "e0354z3cqjp",
    playerid: "txv1",
    danmuList: [{
      text: '第1s出现的弹幕',
      color: '#ff0000',
      time: '1'
    }, {
      text: '第3s出现的弹幕',
      color: '#ff00ff',
      time: '3'
    }],
    input: ""
  },
  play(e) {
    this.txvContext.play();
  },
  pause(e) {
    this.txvContext.pause();
  },
  blur(e) {
    this.setData({
      input: e.detail.value
    });
  },
  sendDanmu(e) {
    this.txvContext.sendDanmu({
      text: this.data.input,
      color: getRandomColor()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const TxvContext = requirePlugin("tencentvideo");
    this.txvContext = TxvContext.getTxvContext(this.data.playerid);
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