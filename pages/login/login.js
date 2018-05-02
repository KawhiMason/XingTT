// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     math1: "1855",
     img2: "./image/cs1.png",
     math2:"1658",
     math3: "1997",
     imgUrls: [
       './image/shouye.jpg',
       './image/banner2.jpg',
       './image/banner3.jpg',
       './image/banner4.jpg'
     ],
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 1000,


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
  
  },
  varmath: function (e) {

  },
  Ari:function (e) {
    if (this.data.img2 == "./image/cs1.png") {
    this.setData({
      img2: "./image/cs0.png",
      math1: "1856"
    })
    }else{
        this.setData({
          img2: "./image/cs1.png",
          math1: "1855"
        })
      }}
  })