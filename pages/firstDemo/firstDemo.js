Page({
	data:{
		tags:[
			{value:'电影',color:'#B8B0B0'},
			{value:'电子产品',color:'#B8B0B0'},
			{value:'鞋',color:'#B8B0B0'},
			{value:'服装',color:'#B8B0B0'},
			{value:'玩物',color:'#B8B0B0'},
			{value:'美妆',color:'#B8B0B0'},
			{value:'街头涂鸦',color:'#B8B0B0'},
			{value:'配饰',color:'#B8B0B0'},
			{value:'VANS',color:'#B8B0B0'}
		],
		keyColor1:'#fff',
		keyColor2:'#fff',
		keyColor3:'#fff',
		keyColor4:'#fff',
		keyColor5:'#fff',
		keyColor6:'#fff',
		keyColor7:'#fff',
		keyColor8:'#fff',
		keyColor9:'#fff'
	},
	onLoad:function(){
		var that = this;
    /**  
     * 获取用户信息  
     */
	    wx.getUserInfo({
	      success: function (res) {
	        console.log(res);
	        var avatarUrl = 'userInfo.avatarUrl';
	        var nickName = 'userInfo.nickName';
	        that.setData({
	          [avatarUrl]: res.userInfo.avatarUrl,
	          [nickName]: res.userInfo.nickName,
	        })
	      }
	    });
	},
	tapSrc:function(){
		var value = wx.getStorageSync('wxSearchMindKeys');
		var temData = this.data.tags;
		var arr = [];
		if(value){
				wx.switchTab({
	    		url:'../information/information'      //结束后的回调(成功，失败都会执行)
	  		})
		}else{
			console.log(222);
			for(var i = 0;i<temData.length;i++){
				arr.push(temData[i].value);
			}
			console.log(arr);
			wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:arr
	        });
		}
	},
	addKey1:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor1:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor1:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey2:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor2:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor2:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey3:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor3:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor3:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey4:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor4:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor4:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey5:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor5:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor5:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey6:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor6:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor6:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey7:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor7:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor7:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey8:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor8:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor8:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	},
	addKey9:function(e){
		var that = this;
		var text = e.target.dataset.key;
		var isAdd = true;
		var value = wx.getStorageSync('wxSearchMindKeys');
		var color = "";
	    if(value){
	        if(value.indexOf(text) < 0){
	        	color = "#DFD3D3";
	            value.unshift(text);
	            wx.showToast({
			        title: '成功添加标签',
			        icon: 'success',
			        duration: 800
			    }); 
	        }else{
	        	color = "#fff";
				value.splice(value.indexOf(text),1);
	        	wx.showToast({
			        title: '已取消此标签',
			        icon: 'none',
			        duration: 800
      			})
	        };
	        this.setData({
			    	keyColor9:color
			 })
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value
	            
	        });
	    }else{
	    	color = "#DFD3D3";
	        value = [];
	        value.push(text);
	        wx.setStorage({
	            key:"wxSearchMindKeys",
	            data:value,
	            
	        });
	        this.setData({
			    	keyColor9:color
			 })
	        wx.showToast({
			    title: '成功添加标签',
			    icon: 'success',
			    duration: 800
			})
			
	    }

	}

})