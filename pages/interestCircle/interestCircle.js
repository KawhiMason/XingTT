Page({
  data: {
    amount: 98,
    isChecked: true,
    imgLoveSrc: "../../img/love.png",
    amount1: 98,
    isChecked1: true,
    imgLoveSrc1: "../../img/love.png",
    imgLogoSrc: "../../img/logo.png",
    imgLogoSrc1: "../../img/logo.png",
    footLogoScr:"",
    foot:"foot-cur",
    isChecked3: true,
    isChecked4: true,
    loveImg2:{ isChecked2:true},
    loveImg3:{ isChecked3:true},
    hotList: [
      {
        pic: "../../img/give1.jpg",
        wri1:"Supreme与Nike联名推出的",
        wri2: "复古老爹鞋将于下月底发售。"
      }, 
      {
        pic: "../../img/give2.jpg",
        wri1: "　　NIKE发售詹15新配色" 
      }, 
      {
        pic: "../../img/give3.jpg",
        wri1: "Nike3D打印革新之作全新概" ,
        wri2: "念跑鞋"

      }
    ]
  },
  onShow:function(){
    console.log(122);
    this.getLove1();
    this.getLove2();
  },
  clickMe: function (e) {
    var isChecked = this.data.loveImg2.isChecked;
    var like={};
    var that = this;
      if(this.data.loveImg2.isChecked2){
          like = {
            isChecked2: false,
            amount : 99,
            src :"../../img/love-cur.png"
          }
      }else{
          like = {
            isChecked2: true,
            amount :98,
            src :"../../img/love.png"
          }
      }
        this.setData({
          loveImg2:like
        })
        wx.setStorage({
              key:"loveKey2",
              data:like
          })

  },
  getLove1:function(){
      var value = {};
      try {
          value = wx.getStorageSync('loveKey2');
          if (value) {
              // Do something with return value
              this.setData({
                  loveImg2: value
              });
          }else{
            var text = {
              src:"../../img/love.png",
              amount:98,
              isChecked2:true
            };
            this.setData({
              loveImg2:text
            })
          }
      } catch (e) {
          // Do something when catch error
      }
      
  },
  getLove2:function(){
      var value = {};
      try {
          value = wx.getStorageSync('loveKey3');
          if (value) {
              // Do something with return value
              this.setData({
                  loveImg3: value
              });
          }else{
            var text = {
              src:"../../img/love.png",
              amount:98,
              isChecked3:true
            };
            this.setData({
              loveImg3:text
            })
          }
      } catch (e) {
          // Do something when catch error
      }
      
  },
  clickMe1: function (e) {
    var isChecked = this.data.loveImg3.isChecked;
    var like={};
    var that = this;
      if(this.data.loveImg3.isChecked3){
          like = {
            isChecked3: false,
            amount : 99,
            src :"../../img/love-cur.png"
          }
      }else{
          like = {
            isChecked3: true,
            amount :98,
            src :"../../img/love.png"
          }
      }
        this.setData({
          loveImg3:like
        })
        wx.setStorage({
              key:"loveKey3",
              data:like
          })

  },
  click: function (e) {
    var isChecked3 = this.data.isChecked3; //获取true
    if (isChecked3) {
      var src = "../../img/logo-cur.png";
      isChecked3 = false;
    } else {
      var src = "../../img/logo.png";
      var isChecked3 = true;
    }
    this.setData({
      isChecked3: isChecked3,
      imgLogoSrc: src
    })


  },
  click1: function (e) {
    var isChecked4 = this.data.isChecked4; //获取true
    if (isChecked4) {
      var src = "../../img/logo-cur.png";
      isChecked4 = false;
    } else {
      var src = "../../img/logo.png";
      var isChecked4 = true;
    }
    this.setData({
      isChecked4: isChecked4,
      imgLogoSrc1: src
    })


  },
  move: function (e){
    var footclass="foot";
    this.setData({
      foot: footclass
    })
  },
  end:function(e){
    var srcc2 = this.data.footLogoScr;
    this.setData({
      footLogoScr: srcc2
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