# js-effects  ![](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff.svg?maxAge=2592000)
一个原生js特效仓库，用来练习js基础。

# 目录
- 匀速运动 [演示](http://arthas.com.cn/js-effects/lesson01/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson01/index.html)
- 缓动动画 [演示](http://arthas.com.cn/js-effects/lesson02/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson02/index.html)
- 焦点图 [演示](http://arthas.com.cn/js-effects/lesson03/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson03/index.html)
- 匀速运动 [演示](http://arthas.com.cn/js-effects/lesson04/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson04/index.html)
- 点击轮播图 [演示](http://arthas.com.cn/js-effects/lesson05/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson05/index.html)
- 拖动水平条 [演示](http://arthas.com.cn/js-effects/lesson06/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson06/index.html)
- 拖动窗口 [演示](http://arthas.com.cn/js-effects/lesson07/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson07/index.html)
- 导航固定 [演示](http://arthas.com.cn/js-effects/lesson08/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson08/index.html)
- 全屏显示 [演示](http://arthas.com.cn/js-effects/lesson09/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson09/index.html)
- 响应式 [演示](http://arthas.com.cn/js-effects/lesson10/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson10/index.html)
- 阻止冒泡事件 [演示](http://arthas.com.cn/js-effects/lesson11/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson11/index.html)
- 点击空白处隐藏内容 [演示](http://arthas.com.cn/js-effects/lesson12/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson12/index.html)
- 显示选择的文字 [演示](http://arthas.com.cn/js-effects/lesson13/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson13/index.html)
- 封装动画函数 [演示](http://arthas.com.cn/js-effects/lesson14/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson14/index.html)
- 缓动动画原理 [演示](http://arthas.com.cn/js-effects/lesson16/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson16/index.html)
- 缓动动画封装 [演示](http://arthas.com.cn/js-effects/lesson17/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson17/index.html)
- 获取CSS属性 [演示](http://arthas.com.cn/js-effects/lesson18/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson18/index.html)
- 封装动画函数 [演示](http://arthas.com.cn/js-effects/lesson19/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson19/index.html)
- 仿360开机动画 [演示](http://arthas.com.cn/js-effects/lesson22/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson22/index.html)
- 封装透明度 [演示](http://arthas.com.cn/js-effects/lesson23/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson23/index.html)
- 手风琴效果 [演示](http://arthas.com.cn/js-effects/lesson24/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson24/index.html)
- 仿网易轮播图 [演示](http://arthas.com.cn/js-effects/lesson25/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson25/index.html)
- 旋转木马 [演示](http://arthas.com.cn/js-effects/lesson26/index.html)  [源码](https://github.com/mohong/js-effects/blob/master/lesson26/index.html)
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


