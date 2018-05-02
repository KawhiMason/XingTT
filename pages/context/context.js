// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     math1: "",
     img2: "",
     math2:"1658",
     math3: "1997",
     imgUrls: [
       '../../img/shouye.jpg',
       '../../img/banner2.jpg',
       '../../img/banner3.jpg',
       '../../img/banner4.jpg'
     ],
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 500,
      screenWidth:0,
      screenHeight:0,
      isChecked:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    console.log(width);
    this.setData({
      screenWidth:width,
      screenHeight:height
    })
    var value = {};
      try {
          value = wx.getStorageSync('loveKey');
          if (value) {
              // Do something with return value
              this.setData({
                  img2 :value.src,
                  math1:value.amount
              });
          }else{
            var img2 = "../../img/love.png";
            var math1 = "1850"
            this.setData({
              img2 :img2,
              math1:math1
            })
          }
      } catch (e) {
          // Do something when catch error
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    console.log(width);
    this.setData({
      screenWidth:width,
      screenHeight:height
    })
    console.log(this.data.screenWidth);

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
    onSrc:function(){
      console.log(222);
      wx.navigateTo({
        url: '../detailed/detailed'      //结束后的回调(成功，失败都会执行)
      })
    }
  })