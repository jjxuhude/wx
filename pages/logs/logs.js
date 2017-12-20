//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    isBottom:false,
    count:0,

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady(){},
  onShow(){},
  onHide(){},
  onUnload(){},
  onPullDownRefresh(){
   
  },
  onPageScroll(){
    console.log((new Date).toLocaleString());
  },
  //是否到底
  onReachBottom(){
    this.setData({
      isBottom:true
    })
  },
  //设置转发
  onShareAppMessage(){
    return {
      title: '转发的内容',
      path: '/pages/logs/logs?id=123'

    }
  },
  bindtap1(){
    this.setData({
      count:this.data.count+1
    })
  }

})
