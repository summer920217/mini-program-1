// pages/novel/novel.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.bookben.net",
      success:res=>{
        this.formatData(res.data)
      },
      fail(err){
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

  choose: function(e){
    console.log(e)
    let href = e.currentTarget.dataset.href;
    let bookName = e.currentTarget.dataset.bookname
    wx.navigateTo({
      url: `novelDetail?href=${href}&bookName=${bookName}`,
    })
  },
  /**
   * 格式化数据
   * @param {string} html 
   */
  formatData(html){
    // console.log(html)
    let pics = html.substring(html.indexOf('<div id="ifocus_pic">'),html.indexOf('<div id="ifocus_btn">'))
    let contents = html.substring(html.indexOf('<div id="ifocus_tx">'),html.indexOf('<div id="warp_top_bottom">'))
    // console.log(pics)
    let arrPics = pics.split("<li>")
    let arrContents = contents.split("</li>");
    // console.log(arrContents)
    // console.log(arrPics)
    let top = []
    for(let i=1;i<5;i++){
      let src = arrPics[i].substring(arrPics[i].indexOf('https'),arrPics[i].indexOf('"/>'))
      // console.log(src)
      let con = arrContents[i-1]
      let title = con.substring(con.indexOf('target'),con.indexOf('</a>'))
      title = title.substring(title.indexOf(">")+1)
      // console.log(title)
      let href = con.substring(con.indexOf('href'),con.indexOf('" target'))
      href = href.substring(href.indexOf('"')+1)
      // console.log(href)
      let intro = con.substring(con.indexOf('</h3>')+5)
      // console.log(intro)
      top.push({
        img: src,
        bookName: title,
        href: href,
        intro: intro
      })
    }
    this.setData({
      top:top
    })
  }
})