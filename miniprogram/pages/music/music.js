// pages/music/music.js

const MAX_LIMIT = 15
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      {
        url:'http://p1.music.126.net/nVUH7O5ZNMG1OQ1kE-tq9g==/109951165665595417.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
      }
  ],
  playlist:[
    // {
    // "id":"1001",
    // "playCount":1.4641238e+06,
    // "name":"随情节流淌|富有叙事感的柔软音乐片段",
    // "picUrl":"http://p2.music.126.net/1hzImIzOsRzG0iBSvHOO7w==/109951165511341127.jpg?param=140y140"
    // },
    // {
    //   "id":"1002",
    //   "playCount":622822.6,
    //   "name":"我试着把孤独藏在耳机",
    //   "picUrl":"http://p2.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg?param=140y140"
    // },
    // {
    //   "id":"1003",
    //   "playCount":7.719329e+06,
    //   "name":"2021·心里装着鲜花银河星光和我爱的人",
    //   "picUrl":"http://p2.music.126.net/O8LkkfC7PtV7TA4UP693XA==/109951164569667332.jpg?param=140y140"
    // },
    // {
    //   "id":"1004",
    //   "playCount":3.12367e+06,
    //   "name":"Childer of the City",
    //   "picUrl":"http://p2.music.126.net/ySHtkTD4VuhQ3JDv4sreag==/109951165650282126.jpg?param=140y140"
    // },
    // {
    //   "id":"1005",
    //   "playCount":1.3925e+06,
    //   "name":"温柔不是我说，而是你觉得",
    //   "picUrl":"http://p2.music.126.net/PJylNWy_2-jI7LRgQ2Cm6w==/109951165649129522.jpg?param=140y140"
    // },
    // {
    //   "id":"1006",
    //   "playCount":1.4641238e+06,
    //   "name":"Pitchfork评选70年代最佳200首歌曲",
    //   "picUrl":"http://p1.music.126.net/CObKLNue7cWdPMfbVsiOzA==/109951165666370374.jpg?param=140y140"
    // }
     
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlayList()
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

  _getPlayList(){
    wx.showLoading({
      title: 'title',
    })
    wx.cloud.callFunction({
      name:'playlist'
    }).then((res)=>{
      console.log(res)
      this.setData({
        playlist:res.result
      })
      wx.hideLoading()
    })
  }
})