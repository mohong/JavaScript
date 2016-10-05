# js-effects  ![](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff.svg?maxAge=2592000)
一个原生js特效仓库，用来练习js基础。

# 要点总结

关于offset系列的几点说明：

* **offsetWidth offsetHeight**

    得到对象的自身的宽度和高度
    
    ``` 
    offsetWidth =  width  + border  +  padding
     
    offsetHidth =  Height  + border  +  padding
    ```

* **offsetLeft  offsetTop**

    返回元素距离上级**有定位**父元素的左边距离和上边距离
    
* **offsetParent**

    返回元素的**有定位**父元素（不一定是亲父亲）
    
    
    *注意：返回值均为数值，不带单位*
    
    ![offset一部分关系图](gif/offset.png)


# 目录
- 匀速运动 [演示](http://arthas.com.cn/js-effects/lesson01/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson01/index.html)