// pages/homepage/homepage.js
import Http from '../../utils/http';
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  sellerName: "厦门麦当劳集美万达店",
  sellerIntro: "欢迎光临，高峰期请提前下单，谢谢！",
  sellerLogo: "/assets/img/mcd.jpg",
  addSuitImg: '/assets/img/add.jpg',
  imgUrls: [
    '/assets/img/prom1.jpg',
    '/assets/img/prom2.jpg',
    '/assets/img/prom3.jpg'
  ],
  suit:[
    {
      id: "1",
      name: "全部商品",
      url: "/assets/img/all.png",
      style: "2",
      link: "../all/all"
    },
    {
      id: "2",
      name: "好物推荐",
      url: "/assets/img/good.png",
      style: "1",
      link: "../good/good"
    },
    {
      id: "3",
      name: "商品搜索",
      url: "/assets/img/search.png",
      style: "1",
      link: "../search/search"
    },
    {
      id: "4",
      name: "热销推荐",
      url: "/assets/img/hot.png",
      style: "1",
      link: "../hot/hot"
    },
    {
      id: "5",
      name: "访问平台",
      url: "/assets/img/plat.png",
      style: "1",
      link: "../plat/plat"
    },
    {
      id: "6",
      name: "版本信息",
      url: "/assets/img/verson.png",
      style: "1",
      link: "../verson/verson"
    },
    {
      id: "7",
      name: "镇店之宝",
      url: "/assets/img/star.png",
      style: "1",
      link: "../star/star"
    },
    {
      id: "8",
      name: "彩蛋",
      url: "/assets/img/idea.png",
      style: "1",
      link: "../idea/idea"
    }
  ],
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
        console.log(res);
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
  swiperClick: function (e) {
    console.log(this.data.imgUrls[this.data.current]);
    var index = this.data.current+1;
    wx.navigateTo({
      url: '../promotionDetail/promotionDetail?key=index',
    })
  },
  swiperBindChange: function (e){
    this.setData({
      current: e.detail.current
    })
  },
})