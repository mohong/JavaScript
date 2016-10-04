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
}