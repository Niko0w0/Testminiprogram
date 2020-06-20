// pages/demo16/demo16.js
Page({
  data: {
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape"
      },
      {
        id:2,
        name:"香蕉",
        value:"banana"
      }
    ],
    checkedList:[]
  },
  // 复选框中的选中事件
  handleIdtemChange(e){
    // 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 进行赋值
    this.setData({
      checkedList
    })
  }
})