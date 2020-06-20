// components/Tabs/Tabs.js
Component({
  /**
   * 里面存放的是 要从父组件中接收的数据
   */
  properties: {
    // 要接收的数据的名称
    // aaa:{
    //   // type 要接收的数据的类型
    //   type:String,
    //   // value 默认值
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    

  },

  /**
   * 页面.js文件中 存放事件回调函数的时候 存放在data同层级下
   * 组件.js文件中 存放事件回调函数的时候必须要存在在methods中
   */
  methods: {
    handleItemTap(e){
      /**
       * 绑定点击事件 需要在methods中绑定
       * 获取被点击的索引
       * 获取原数组
       * 对数组循环
       *    给每一个循环 选中属性改为false
       *    给当前索引的想添加激活选中效果
       * 
       * 
       * 点击事件触发的时候
       *    触发父组件中的自定义事件 通知传递数据给 父组件
       *    this.triggerEvent("父组件自定义事件的名称",要传递的参数)
       */
      // 获取索引
      const {index} = e.currentTarget.dataset;
      // 触发父组件中自定义事件 同时传递数据
      this.triggerEvent("itemChange",{index});

      // 获取data中的原数组
      // 解构 对复杂类型进行结构的时候 复制了一份变量的引用而已
      // 最严谨的做法 重新拷贝一份数组,再对这个数组的备份进行处理
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // 不要直接修改this.data.数据
      // let {tabs}=this.data;
      //两种写法是等价的 let tabs = this.data.tabs;

      // 循环数组
      // [].foreach 遍历数组 遍历数组的时候 修改了v,也会导致原数组被修改
      // tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
      // this.setData({
        // tabs
      // })
    }
  }
})
