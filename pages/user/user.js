// pages/user/user.js
import Http from '../../utils/http';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    motto: 'Hello World',
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '/assets/img/pay.png'
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '/assets/img/shipped.png'
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '/assets/img/receipt.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '/assets/img/comment.png'
      },
    ],
    userIcon : '',
    userName : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取用户授权及信息
    Http.authorize()
      .then(() => Http.getUserInfo())
      .then((res) => {
        that.setData({
          userIcon: res.avatarUrl,
          userName: res.nickName
        })
        console.log(userIcon);
        console.log(userName);
        //用户信息数据处理操作

        // if (!app.globalData.isReAuth) {
        //   that.setData({
        //     userInfo: res
        //   })
        //   try {
        //     var ssid = wx.getStorageSync('ssid')
        //     if (ssid) {
        //       if (!app.globalData.changeState) {
        //         that.getFavData(ssid);
        //       }
        //     }
        //   } catch (e) {
        //     console.log(e);
        //   }
        // }
      }).catch(() => {
        Http.getUserInfo().then((res) => {
          // that.setData({
          //   userInfo: res
          // })
          // try {
          //   var ssid = wx.getStorageSync('ssid')
          //   if (ssid) {
          //     that.getFavData(ssid);
          //   }
          // } catch (e) {
          //   console.log(e);
          // }
        })
      })
    //登录
    Http.login().then((res) => {
      // 获取到code之后的操作
      // 获取openid
      Http.get('api/wxapp/public/login', { code: res.code, app_type: 'WX_MM_MANAGE' }).then(
        (res) => {
          if (res.data.success && res.data.data.openid != '' && res.data.data.token != '') {
            wx.setStorageSync('openid', res.data.data.openid);
            wx.setStorageSync('Token', res.data.data.token);
            that.setData({
              userIcon: res.avatarUrl,
              userName: res.nickName
            })
            console.log(userIcon);
            console.log(userName);
          } else {
            //获取openid失败操作
          }
        }
      );
    })
    var self = this
    //正常异步请求
    // Http.get('userinfo').then(function (res) {
    //   //返回数据处理
    // });
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
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
  listClick: function (e){
    console.log(e);
  },
  toUserInfo: function (){
    wx.navigateTo({
      url: '../userinfoModify/userinfoModify',
    })
  },
  toAddress: function (){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  tofavorite: function (){
    wx.navigateTo({
      url: '../favorite/favorite',
    })
  },
  toService: function(){
    wx.navigateTo({
      url: '../service/service',
    })
  },
  toPlatform: function(){
    wx.showModal({
      title: '温馨提示',
      content: '即将访问胡虾卖平台',
      showCancel: false,
      success(res){
        if(res.confirm){
          wx.navigateBackMiniProgram({
            appId:'',
            path:'pages/index/index'
          })
        }
      }
    })
  },
  showVerson: function(){
    wx.showModal({
      title: '版本信息',
      content: '当前版本为V.0.0.1',
      showCancel: false
    })
  }
})