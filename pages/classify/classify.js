// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sellerName: "厦门麦当劳集美万达店",
    sellerIntro: "欢迎光临，高峰期请提前下单，谢谢！",
    sellerLogo: "/assets/img/mcd.jpg",
    cateItems: [
      {
        cate_id: 1,
        cate_name: "新品推荐",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '那么大鲜柠特饮（可乐味）',
            image: "/assets/img/new-1.jpg",
            price: '13'
          },
          {
            child_id: 2,
            name: '那么大鲜柠特饮（雪碧味）',
            image: "/assets/img/new-2.jpg",
            price: '13'
          },
          {
            child_id: 3,
            name: '那么大鲜柠特饮（柠檬味）',
            image: "/assets/img/new-3.jpg",
            price: '13'
          },
          {
            child_id: 4,
            name: '鲜奶抹茶',
            image: "/assets/img/new-4.jpg",
            price: '17'
          },
          {
            child_id: 5,
            name: '鲜奶抹茶奥利奥雪冰',
            image: "/assets/img/new-5.jpg",
            price: '22'
          },
          {
            child_id: 6,
            name: '抹茶红豆千层蛋糕',
            image: "/assets/img/new-6.jpg",
            price: '21'
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "星厨系列",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '星厨鲜脆纯牛堡',
            image: "/assets/img/star-1.jpg",
            price: '36'
          },
          {
            child_id: 2,
            name: '俄式红肠双鸡堡组合',
            image: "/assets/img/star-2.jpg",
            price: '18'
          },
          {
            child_id: 3,
            name: '不素之霸双层牛肉堡组合',
            image: "/assets/img/star-3.jpg",
            price: '18'
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "经典套餐",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '麦辣鸡腿堡',
            image: "/assets/img/classic-1.jpg",
            price: '25'
          },
          {
            child_id: 2,
            name: '原味板烧鸡腿堡',
            image: "/assets/img/classic-2.jpg",
            price: '27'
          },
          {
            child_id: 3,
            name: '巨无霸',
            image: "/assets/img/classic-3.jpg",
            price: '29.5'
          },
          {
            child_id: 4,
            name: '麦香鱼',
            image: "/assets/img/classic-4.jpg",
            price: '26'
          },
          {
            child_id: 5,
            name: '培根蔬萃双层牛堡',
            image: "/assets/img/classic-5.jpg",
            price: '29.5'
          },
          {
            child_id: 6,
            name: '麦香鸡',
            image: "/assets/img/classic-6.jpg",
            price: '20'
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "小食甜品",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '麦辣鸡翅',
            image: "/assets/img/snack-1.jpg",
            price: '10'
          },
          {
            child_id: 2,
            name: '香骨鸡腿',
            image: "/assets/img/snack-2.jpg",
            price: '11'
          },
          {
            child_id: 3,
            name: '甜香玉米杯',
            image: "/assets/img/snack-3.jpg",
            price: '11'
          },
          {
            child_id: 4,
            name: '那么大鸡排',
            image: "/assets/img/snack-4.jpg",
            price: '12'
          },
          {
            child_id: 5,
            name: '那么大小食盒',
            image: "/assets/img/snack-5.jpg",
            price: '58'
          },
          {
            child_id: 6,
            name: '薯条',
            image: "/assets/img/snack-6.jpg",
            price: '7'
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
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
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})