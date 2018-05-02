//logs.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informations:[
      {mind:'鞋',img:"../../img/information1.jpg"},
      {mind:'电影',img:"../../img/information2.jpg"},
      {mind:'服装',img:"../../img/information3.jpg"},
      {mind:'玩物',img:"../../img/information4.jpg"},
      {mind:'电子产品',img:"../../img/information5.jpg"},
      {mind:'美妆',img:"../../img/information6.jpg"},
      {mind:'配饰',img:"../../img/information7.jpg"},
      {mind:'街头涂鸦',img:"../../img/information8.jpg"},
      {mind:'VANS',img:"../../img/information9.jpg"},
      {mind:'Supreme',img:"../../img/information10.jpg"}

    ],
    imgSrc:[]
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
    this.data.imgSrc = [];
    var value = wx.getStorageSync('wxSearchMindKeys');
    var temData = this.data.informations;
    console.log(value);
    if(value){  
        for(var i=0;i<temData.length;i++){
          var src = this.data.imgSrc;
          if(value.indexOf(temData[i].mind) >= 0 && src.indexOf(temData[i].img) <0){
              src.push(temData[i].img);
          }
        }
        this.setData({
                imgSrc:src
              })
        console.log(temData.length);
        console.log(src);
    }
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
    wx.stopPullDownRefresh();
    wx.vibrateShort();
    wx.navigateTo({
    url:'../interest/interest'      //结束后的回调(成功，失败都会执行)
  })    
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
  toSrc:function(){
    wx.navigateTo({
    url:'../context/context'      //结束后的回调(成功，失败都会执行)
  })    
  }
})
