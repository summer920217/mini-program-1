// pages/novel/novelDetail.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapters:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let href = options.href;
    href = href.substring(4,href.indexOf('.'))
    href = "https://www.bookben.net/read" + href;
    // console.log(options)
    wx.setNavigationBarTitle({
      title: app.globalData.bookName
    })
    console.log(href)
    wx.request({
      url: href,
      success: res=>{
        this.formatHtml(res.data)
      },
      fail: function(err){
        console.log(err)
      }
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

  },
/**
 * 
 * @param {String} html 
 */
  formatHtml: function(html){
    // console.log(html)
    let start = html.indexOf('<div class="info_views">');
    let end = html.indexOf('</div>',start+1);
    html = html.substring(start, end)
    // console.log(html);
    let arr = html.split('</a>')
    // console.log(arr);
    let chapters = [];
    for(let i=0;i<arr.length-1;i++){
      let a = arr[i]
      let url = a.substring(a.indexOf('https'),a.indexOf('html'))+'html';
      let title = a.substring(a.indexOf('target="_blank"'));
      title = title.substring(title.indexOf('>')+1,title.indexOf('['));
      chapters.push({
        url,title
      })
    }
    // console.log(chapters)
    this.setData({
      chapters:chapters
    })
  },

  choose: function(e){
    let url = e.currentTarget.dataset.href;
    wx.navigateTo({
      url: `novelContent?href=${url}`,
    })
  }

})