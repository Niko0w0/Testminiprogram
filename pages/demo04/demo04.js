// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  // 输入库的input事件的执行逻辑
  handleInput(e){
    console.log(e.detail.value);
    this.setData({
      num:(e.detail.value) || (parseInt(this.data.num) + operation)
    })
  },
  // + - 按钮事件
  handletap(e){
    console.log(e);
    // 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:parseInt(this.data.num) + operation
    })
  }

  
})