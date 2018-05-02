Page({
  data:{
    imgHoverIndex:0,
    loveImg:{ isChecked:true},
   
  },
  onShow:function(){
      this.getLove();
  },
  clickMe:function(e) {
    var isChecked = this.data.loveImg.isChecked;
    var like={};
    var that = this;
      if(this.data.loveImg.isChecked){
          like = {
            isChecked : false,
            amount : 1851,
            src :"../../img/love-cur.png"
          }
      }else{
          like = {
            isChecked : true,
            amount :1850,
            src :"../../img/love.png"
          }
      }
        this.setData({
          loveImg:like
        })
        wx.setStorage({
              key:"loveKey",
              data:like
          })
        console.log(like);
        console.log(this.data.loveImg)
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];   //当前页面
      var prevPage = pages[pages.length - 2];  //上一个页面
      var img2 = this.data.loveImg.src;
      var math1 = this.data.loveImg.amount;
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        img2:img2,
        math1:math1
      })
  },
  getLove:function(){
      var value = {};
      try {
          value = wx.getStorageSync('loveKey');
          if (value) {
              // Do something with return value
              this.setData({
                  loveImg: value
              });
          }else{
            var text = {
              src:"../../img/love.png",
              amount:1850,
              isChecked:true
            };
            this.setData({
              loveImg:text
            })
          }
      } catch (e) {
          // Do something when catch error
      }
      
  },
  preView1:function(){
    wx.previewImage({
      urls:"../../img/detailed-nike1.jpg"
    })
  },
  preView2:function(){
    wx.previewImage({
      urls:"../../img/detailed-nike2.jpg"
    })
  },
  preView3:function(){
    wx.previewImage({
      urls:"../../img/detailed-nike3.jpg"
    })
  },
  preView4:function(){
    wx.previewImage({
      urls:"../../img/detailed-nike4.jpg" 
    })
  },
  add:function(){
    wx.showToast({
      title: '成功添加兴趣圈',
      icon: 'success',
      duration: 800
    })
  }

})