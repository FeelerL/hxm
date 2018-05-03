// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
      {
        name:'黄珞琳',
        phone:'15605020408',
        sex:'先生',
        address:'银江路137号万达广场5号门娱乐楼4层'
      },
      {
        name: '张嘻嘻',
        phone: '123456789',
        sex: '女士',
        address: '福建省厦门市集美区海凤南里75号'
      },
    ]
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
  toAddressAdd: function (){
    wx.navigateTo({
      url: '../addressAdd/addressAdd',
    })
  },
  toAddressModify: function (){
    wx.navigateTo({
      url: '../addressModify/addressModify',
    })
  }
})