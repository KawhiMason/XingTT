
var isShowKey;
Page({
	data:{
		showMindKey:false,
		showView: true,
		wxSearchData:{
			keys:["鞋","电影","服装","玩物","电子产品","配饰","美妆","街头涂鸦","VANS","Supreme"]
		},
		add:'../../img/add.png',
		delete:'../../img/delete.png',
		screenWidth:0,
		screenHeight:0,
		fontSize:16,
		flyKey:[
		{value:"鞋",color:"#62D2A2"},
		{value:"电影",color:"#9DF3C4"},
		{value:"服装",color:"#95E8D7"},
		{value:"玩物",color:"#D7FBE8"},
		{value:"电子产品",color:"#2F9296"},
		{value:"音乐",color:"#46B7B9"},
		{value:"美妆",color:"#9DF3C4"},
		{value:"街头涂鸦",color:"#87DFD6"},
		{value:"配饰",color:"#6EB6FF"},
		{value:"VANS",color:"#0DCEDA"},
		{value:"Supreme",color:"#00E0FF"}
		],
		canvasWidth:510,
		canvasHeight:300,
		context:'',
		radius :230,
		d : 200,
		mcList : [],
		lasta : 1,
		lastb : 1,
		tspeed : 35,
		size : 200,
		howElliptical : 1,
 		aA : null,
 		oDiv : null,
 		mouseY:10,
 		mouseX:0
	},
	earchFocus:function(){
		if (this.data.wxSearchData.his) {
			this.setData({
				showView:true
			})
		}
	},
	searchBlur:function(e){
		this.setData({
			showView:false
		})
	},
	searchConfirm:function(e){
		var temData = this.data.wxSearchData;
		var text = e.detail.value;
		console.log(text);
		var mindKeys = [];
		if(typeof(text) == "undefined" || text.length == 0){
			if (this.data.wxSearchData.his) {
        		var view = true;
        	}
        	var mindView = false
    	}else{
    		view = false;
    		mindView = true;
			for(var i = 0; i<temData.keys.length;i++){
				var mindKey = temData.keys[i];
				if(mindKey.indexOf(text)>-1){
					mindKeys.push(mindKey);
				}
			}
		}
		temData.mindKeys = mindKeys;
		console.log(temData);
		this.setData({
			showMindKey:mindView,
			showView:view,
			wxSearchData:temData
		});
	},

	wxSearchHiddenPancel:function(){

		if (this.data.wxSearchData.his) {
        		var value = true;
        	}
	   	this.setData({ 
	   		showMindKey :false,
	    	showView : value
	    });
	},
	addImgKey:function(e){
		var that = this;
	    var text = e.target.dataset.key;
	    var value = wx.getStorageSync('wxSearchMindKeys');
	    if(value){
	        if(value.indexOf(text) < 0){
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    })
	        }else{
	        	wx.showToast({
			        title: '您添加过此标签',
			        icon: 'none',
			        duration: 800
      			})
	        }
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            success: function(){
	                that.getHisKeys();
	            }
	        })
	    }else{
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            success: function(){
	                that.getHisKeys();
	            }
	        })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 1000
			})
	    }
	},

	getHisKeys:function(){
	    var value = [];
	    try {
	        value = wx.getStorageSync('wxSearchMindKeys')
	        if (value) {
	            // Do something with return value
	            var temData = this.data.wxSearchData;
	            temData.his = value;
	            this.setData({
	                wxSearchData: temData
	            });
	            this.wxSearchHiddenPancel();
	        }
	    } catch (e) {
	        // Do something when catch error
	    };
	    
	    
	},
	deleteKey:function(e){
		if (this.data.delete == "../../img/delete.png") {
			this.setData({
				img2: "../../img/delete-cur.png"
			})
		}else{
			this.setData({
				img2: "../../img/delete.png"
			})
		}
		var text = e.target.dataset.key;
		console.log(text);
		var that =this;
	    var value = wx.getStorageSync('wxSearchMindKeys');
	    value.splice(value.indexOf(text),1);
	    wx.setStorage({
	        key:"wxSearchMindKeys",
	        data:value,
	        success:function(){
	        	that.getHisKeys();
	        }
	    })
	},

	onShow:function(e){
		this.getHisKeys();
		var _this = this;  
	    wx.getSystemInfo({  
	      success: function (res) {  
	        _this.setData({  
	          screenHeight: res.windowHeight,  
	          screenWidth: res.windowWidth,  
	        });  
	      }  
	    });
		this.render();
	},
	render:function(){
		var mcList = this.data.mcList;
		var i=0;
		var aA = this.data.flyKey;
		for(i=0;i<aA.length;i++)
		{	
			var oTag = {};
			mcList.push(oTag);
		}
		this.positionAll();
		var update = this.update();
		var that = this;
		console.log(aA);	
	},
	positionAll:function(){
		var radius = this.data.radius;
		var mcList = this.data.mcList;
		var phi = 0;
	    var theta = 0;
	    var max = mcList.length;
	    var aA = this.data.flyKey;
	    for (var i = 0; i < aA.length; i++) {
	    	//改动
	        if (true) {
	            phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
	            theta = Math.sqrt(max * Math.PI) * phi;
	        } else {
	            phi = Math.random() * (Math.PI);
	            theta = Math.random() * (2 * Math.PI);
	        }
	        //坐标变换
	        mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
	        mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
	        mcList[i].cz = radius * Math.cos(phi);

	        aA[i].left = mcList[i].cx + 275 - 100/ 2 + 'rpx';
	        aA[i].top = mcList[i].cy + 235 - 40 / 2 + 'rpx';
	    }
	    this.setData({
	    	mcList:mcList,
	    	flyKey:aA
	    })
	},
	update:function(){
		
		var cz = this.data
		var mcList = this.data.mcList;
		var lasta = this.data.lasta;
		var lastb = this.data.lastb;
		var mouseY = this.data.mouseY;
		var mouseX = this.data.mouseX;
		var howElliptical = this.data.howElliptical;
		var d = this.data.d;
		var tspeed = this.data.tspeed;
		var a, b, c = 0;
		var radius = this.data.radius;
        a = (Math.min(Math.max(-mouseY, -200), 200) / radius) * tspeed;
        b = (-Math.min(Math.max(-mouseX, -200), 200) / radius) * tspeed;
        lasta = a;
        lastb = b;
        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
            return;
        }
        var dtr = Math.PI / 180,
		sa = Math.sin(a * dtr),
	    ca = Math.cos(a * dtr),
	    sb = Math.sin(b * dtr),
	    cb = Math.cos(b * dtr),
		sc = Math.sin(c * dtr),
		cc = Math.cos(c * dtr);
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            var rx1 = mcList[i].cx;
            var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
            var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;

            var rx2 = rx1 * cb + rz1 * sb;
            var ry2 = ry1;
            var rz2 = rx1 * (-sb) + rz1 * cb;

            var rx3 = rx2 * cc + ry2 * (-sc);
            var ry3 = rx2 * sc + ry2 * cc;
            var rz3 = rz2;

            mcList[i].cx = rx3;
            mcList[i].cy = ry3;
            mcList[i].cz = rz3;

            var per = d / (d + rz3);

            mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
            mcList[i].y = ry3 * per;
            mcList[i].scale = per;
            var alpha = per;
            alpha = (alpha - 0.6) * (10 / 6);
            mcList[i].alpha = alpha * alpha * alpha - 0.2;
            mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
        }
        this.setData({
        	mcList:mcList
        })
        this.doPosition();
	},
	doPosition:function(){
		var mcList = this.data.mcList;
		var l = 265;
        var t = 235;
        var aA = this.data.flyKey;
        for (var i = 0; i < mcList.length; i++) {
            if (mcList[i].on) {
                continue;
            }
            if (mcList[i].alpha > 0.1) {
                if (aA.display != '')
                    aA.display = '';
            } else {
                if (aA.display != 'none')
                    aA.display = 'none';
                continue;
            }
            aA[i].top = mcList[i].cy + t -  40/ 2 + 'rpx';
            //aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
            //aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";
            aA[i].zIndex = mcList[i].zIndex;
            aA[i].opacity = mcList[i].alpha;
        }
        console.log(aA);
        this.setData({
        	flyKey:aA
        })

	},	
	sineCosine:function( a, b, c){
		var dtr = Math.PI / 180,
		sa = Math.sin(a * dtr);
	    ca = Math.cos(a * dtr);
	    sb = Math.sin(b * dtr);
	    cb = Math.cos(b * dtr);
		sc = Math.sin(c * dtr);
		cc = Math.cos(c * dtr);

	},
	tagsAddKey:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
	    if(value){
	        if(value.indexOf(text) < 0){
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    })
	        }else{
	        	wx.showToast({
			        title: '您添加过此标签',
			        icon: 'none',
			        duration: 800
      			})
	        }
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            success:function(){
	            	that.getHisKeys();
	            }
	        });
	        this.setData({
	        	keyColor:"#B8B0B0"
	        })
	    }else{
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            success:function(){
	            	that.getHisKeys();
	            }
	        })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 1000
			})
	    }
	}
	
})