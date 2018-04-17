// pages/homepage/homepage.js
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
      id: 1,url: '/assets/img/new-1.jpg',name: '那么大鲜柠特饮',
      sale: 100,praise: '100%',price: 13,
    },
    {
      id: 2,url: '/assets/img/classic-1.jpg',name: '麦辣鸡腿堡',
      sale: 85,praise: '96%',price: 25,
    },
    {
      id: 3,url: '/assets/img/classic-2.jpg',name: '原味板烧鸡腿堡',
      sale: 124,praise: "98%",price: 27,
    },
    {
      id: 4,url: '/assets/img/snack-1.jpg',name: '麦辣鸡翅',
      sale: 286,praise: '99%',price: 10,
    },
    {
      id: 5,url: '/assets/img/snack-2.jpg',name: '香骨鸡腿',
      sale: 37,praise: '100%',price: 11,
    },
    {
      id: 6, url: '/assets/img/star-2.jpg', name: '俄式红肠双鸡堡组合',
      sale: 37, praise: '100%', price: 18,
    },
    {
      id: 7, url: '/assets/img/star-1.jpg', name: '星厨鲜脆纯牛堡',
      sale: 37, praise: '100%', price: 36,
    },
  ],
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
  addSuit: function (e) {
    console.log("用户点击");
    console.log(item.key);
  },
  linkToDetail: function (){
    
  },
  cartClick: function () {
    wx.navigateTo({
      url: '../myCart/myCart',
    })
    console.log("用户点击");
  },
  payClick: function (){
    wx.navigateTo({
      url: '../myCart/myCart',
    })
    console.log("用户点击");
  },
  addSuit: function (e){
    
  },
  labelClick: function (e){
    console.log(e);
  }
})