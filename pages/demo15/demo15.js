// pages/demo15/demo15.js
Page({
  data: {
    gender:""
  },
  handleChange(e){
    // 获取单选框中的值
    // console.log(e);
    let gender = e.detail.value;
    //把值 赋值给data中的数据
    this.setData({
      gender
    })
  }
})