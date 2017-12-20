var app = getApp();
var util = require ('../../utils/util.js');
Page({
  data:{
    title:'列表页'
  },
  onLoad: function() {},
  onReady: function() {},
  onShow: function(){
    console.log(getCurrentPages());
  },
  onHide: function(){},
  onUnload: function(){},
  onPullDownRefresh: function(){},
  onShareAppMessage:function(){
    return {
      "title":"转发的标题111111111111111"
    }
  }

});