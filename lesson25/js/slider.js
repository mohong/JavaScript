/**
 * Created by mohong on 2016/10/4.
 */
window.onload = function () {
    //封装id选择器
    function $(id) {
        return document.getElementById(id);
    }
    var js_slider = $("js_slider");
    var slider_main_block = $("slider_main_block");
   //获取所有的图片组
    var imgs = slider_main_block.children;
    var slider_ctrl = $("slider_ctrl");
    //生成span
    for(var i=0; i<imgs.length; i++){
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length - i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");
    //移动的距离
    var scrollWidth = js_slider.clientWidth;
    //让第一张显示在可视区域，其他的都移动到可视区域右边，让其看不到
    for(var i=1; i<imgs.length; i++){
        imgs[i].style.left = scrollWidth + "px";
    }
    //遍历3个按钮
    var iNow = 0; //用来控制播放张数
    for(var k in spans){
        spans[k].onclick = function () {
            //点左侧按钮
            if (this.className == "slider-ctrl-prev"){
                animate(imgs[iNow],{left:scrollWidth});
                --iNow<0 ? iNow=imgs.length-1 : iNow ;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left:0});
            //点右侧按钮
            }else if (this.className == "slider-ctrl-next"){
                animate(imgs[iNow],{left:-scrollWidth});
                ++iNow>imgs.length-1 ? iNow=0 : iNow ;
                imgs[iNow].style.left = scrollWidth + "px";
                animate(imgs[iNow],{left:0});
            } else {
                var that = this.innerHTML - 1;
                if (that > iNow){
                    //做法等同于右侧按钮
                    //当前的这张慢慢的走出去，
                    animate(imgs[iNow],{left:-scrollWidth});
                    //点击的那个索引号快速的走到右侧，310
                    imgs[that].style.left = scrollWidth + "px";
                } else if (that < iNow){
                    //做法等同于左侧按钮
                    animate(imgs[iNow],{left:scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                //给当前的索引号
                iNow = that;
                animate(imgs[that],{left:0});
            }
        }
    }
}