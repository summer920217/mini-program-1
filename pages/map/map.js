// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tools:[
      {key:"地图",id:"map",img:"icon-map.png"},
      {key:"视频",id:"video",img:"icon-video.png"},
      {key:"音乐",id:"music",img:"icon-music.png"},
      {key:"小说",id:"novel",img:"icon-novel.png"},
      {key:"图片",id:"pic",img:"icon-pic.png"}
    ]
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
    wx.setNavigationBarTitle({
      title: '功能列表'
    })
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

  },
  choose(e){
    let id = e.currentTarget.id;
    switch(id){
      case "map": 
        this.getMap();
        break;
      case "music":
        this.getMusic();
        break;
      case "video":
        this.getVideo();
        break;
      case "novel":
        this.getNovel();
        break;
      case "pic":
        this.getPic();
        break;
    }
  },
  getMap(){
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  getMusic(){
    wx.navigateTo({
      url: '../music/music'
    })
  },
  getVideo(){
    wx.navigateTo({
      url: '../video/video',
    })
  },
  getNovel(){
    wx.navigateTo({
      url: '../novel/novel',
    })
  },
  getPic(){
    wx.navigateTo({
      url: '../pic/pic'
    })
  }
})