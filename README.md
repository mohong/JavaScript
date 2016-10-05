# js-effects  ![](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff.svg?maxAge=2592000)
一个原生js特效仓库，用来练习js基础。

# 目录
- 匀速运动 [演示](http://arthas.com.cn/js-effects/lesson01/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson01/index.html)
- 缓动动画 [演示](http://arthas.com.cn/js-effects/lesson02/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson02/index.html)
- 焦点图 [演示](http://arthas.com.cn/js-effects/lesson03/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson03/index.html)
- 匀速运动 [演示](http://arthas.com.cn/js-effects/lesson04/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson04/index.html)
- 点击轮播图 [演示](http://arthas.com.cn/js-effects/lesson05/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson05/index.html)

------

# 要点总结

## offset系列

- offsetWidth offsetHeight
 得到对象的自身的宽度和高度
    
    ``` 
    offsetWidth =  width  + border  +  padding
     
    offsetHidth =  Height  + border  +  padding
    ```
- offsetLeft  offsetTop
 返回元素距离上级有定位父元素的左边距离和上边距离
    
- offsetParent
 返回元素的有定位父元素（不一定是亲父亲）
 注意：返回值均为数值，不带单位
![offset一部分关系图](gif/offset.png)


