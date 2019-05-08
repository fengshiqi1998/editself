// component/typePanel/typePanel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
  },

  /**
   * 组件的初始数据
   */
  data: {
      "typeList":[],
      "num":-1
      
  },

  /**
   * 组件的方法列表
   */
  methods: {
      fillTypeData:function(dataList){
          this.setData({
            "typeList":dataList
          });
      },
      setTypeNum:function(typeIndex){
          this.setData({
            "num":typeIndex
          });
      },
      _typeCheck:function(e){
        var typeIndex=e.target.dataset.num;
        this.triggerEvent("typeCheck", typeIndex);
      }
  }
})
