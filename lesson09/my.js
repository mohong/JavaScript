/**
 * Created by mohong on 2016/9/28.
 */
// 封装id选择器
function $(id) {
    return document.getElementById(id);
}
//显示
function show(obj) {
    obj.style.display = "block";
}
//隐藏
function hide(obj) {
    obj.style.display = "none";
}

//返回scrollLeft和scrollTop
function scroll() {
    if (window.pageYOffset != null){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    else if (document.compatMode == "CSS1Compat"){ //表示声明了，不是怪异模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}