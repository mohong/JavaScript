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
            if (this.className == "slider-ctrl-prev"){
                alert("left");
            }else if (this.className == "slider-ctrl-next"){
                animate(imgs[iNow],{left:-scrollWidth});
                iNow++;
                animate(imgs[iNow],{left:0});
            } else {
                alert("center");
            }
        }
    }
}