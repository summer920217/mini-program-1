// pages/novel/novelContent.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    nav: {},
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let href = options.href;
    wx.setNavigationBarTitle({
      title: app.globalData.bookName,
    });
    wx.request({
      url: href,
      success: res=>{
        this.getContent(res.data);
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
  getContent: function(html){
    // console.log(html)
    let start = html.indexOf('<table id="pager_top">');
    let end = html.indexOf("</table>",start+1)
    let nav = html.substring(start,end);
    let arr = nav.split('<td>');
    // console.log(arr)
    let host = 'https://www.bookben.net';
    let navList = {
      pre: host+arr[1].substring(arr[1].indexOf('"')+1,arr[1].lastIndexOf('"')),
      chapters: host+arr[2].substring(arr[2].indexOf('"')+1,arr[2].lastIndexOf('"')),
      next: host+arr[3].substring(arr[3].indexOf('"')+1,arr[3].lastIndexOf('"'))
    }
    // console.log(navList)
    start = html.indexOf('<div id="content">')
    end = html.indexOf('</div>',start+1);
    let content = html.substring(start,end);
    content = content.substring(content.indexOf('>')+1)
    arr = content.split('<br />')
    start = html.indexOf('<div id="headline">')
    end = html.indexOf('</div>',start+1)
    let title = html.substring(start,end)
    title = title.substring(title.indexOf('>')+1)
    // console.log(title)
    this.setData({
        title: title,
        nav: navList,
        content: arr
    })
  }
})