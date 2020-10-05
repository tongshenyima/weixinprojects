// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "",
    question: {
      stem: "人生，是一种阅历的凝聚。是一种深厚的底蕴。伴随沉淀的有汗水和努力, 真情与苦楚、付出与给予..所有这些将一点不落地还给每一个人，慢慢渗透至你的身体从你的气质中展现出来。上述材料蕴含的哲理是:",
      candidates: [
        {
          no: 1,
          value: "A 量的积累促进事物质的飞跃"
        },
        {
          no: 2,
          value: "B 量变比质变更重要"
        },
        {
          no: 3,
          value: "C 没有质变就没有发展"
        },
        {
          no: 4,
          value: "D 量变质变同等重要"
        },
      ],
      answer: 1
    }

  },
  handleFormSubmit(e) {
    console.log(e.detail.value);
    if (e.detail.value.radiogroup == this.data.question.answer) {
      this.setData({ result: "答案正确" });
    } else {
      this.setData({
        result: "答案错误"
      })
    }

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