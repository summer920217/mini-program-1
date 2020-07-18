// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audio: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '音乐Music'
    })
    this.setData({
      audio: wx.createInnerAudioContext()
    })
    this.data.audio.src = "http://mp3.9ku.com/hot/2004/07-17/56770.mp3";
    this.data.audio.play();
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
    this.stop()
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

  },
  play(){
    this.data.audio.play();
  },
  pause(){
    this.data.audio.pause();
  },
  stop(){
    this.data.audio.stop();
  }
})