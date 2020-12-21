/**
 * 本插件是基于750的设计稿,font-size的基准值为50px,设备最大宽度为540.
 *  375/50 = 7.5;//方便计算
 */
!(function(doc, win) {
    var docEle = doc.documentElement, //获取html元素
        fnLoaded = function() {
            var width = docEle.clientWidth;
            if(width>540){
            	//设计稿PC以1080,页面将为540,Phone以750,页面将为375
                width && (docEle.style.fontSize = 50 * (540 / 375) + "px");
            }else{
                width && (docEle.style.fontSize = 50 * (width / 375) + "px");
            }
            //设置html的fontSize，随着event的改变而改变。
        };
    fnChange = function() {
        var width = docEle.clientWidth;
        var height = docEle.clientHeight;
        var u = navigator.userAgent;
        if (width > 540) {
            width = 540;
        }
        //          if (ua.indexOf("iPad") > -1 || !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || ua.indexOf('iPhone') > -1) {
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            if (window.orientation === 180 || window.orientation === 0) {
                height && (docEle.style.fontSize = 50 * (height / 375) + "px");
            }
            if (window.orientation === 90 || window.orientation === -90) {
                width && (docEle.style.fontSize = 50 * (width / 375) + "px");
            }
            //          } else if (ua.indexOf("Android") > -1) {
        } else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        } else {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        }
        //设置html的fontSize，随着event的改变而改变。
    };
    fnResize = function() {
        var width = docEle.clientWidth;
        if (width > 540) {
            width && (docEle.style.fontSize = 50 * (540 / 375) + "px");
        } else {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        }
    }
    win.addEventListener("orientationchange", fnChange, false);//在orientationchange当设备的方向已经改变事件。
    win.addEventListener("resize", fnResize, false);//事件会在窗口被调整大小时发生
    doc.addEventListener("DOMContentLoaded", fnLoaded, false);
    /*当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。
     * 另一个不同的事件 load 应该仅用于检测一个完全加载的页面。
     * 在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。*/
}(document, window));