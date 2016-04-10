/**
 * Created by Yjoy on 2016/4/9.
 */
define(['widget','jquery', 'jqueryUI'], function(widget, $, $UI){
   function Window(cfg){
        this.cfg = {
            width: 300,
            height: 100,
            title: "系统消息",
            content: "1323",
            hasCloseBtn: true,
            hasMask: true,
            isDraggable: true,
            dragHandle: null,
            skinClassName: null,
            textAlertBtn: "确定",
            handlerAlertBtn: null,
            handlerCloseBtn: null
        };

   }
    Window.prototype = $.extend({}, new widget.Widget(), {
        alert: function(cfg){
            that = this;
            var CFG = $.extend(this.cfg, cfg);
            boundingBox = $(
                '<div class="window_boundingBox">'+
                    '<div class="window_header">' + CFG.title + '</div>'+
                    '<div class="window_body">' + CFG.content + '</div>'+
                    '<div class="window_footer"><div class="footer_btn"></div></div>'+
                '</div>'
            );
            boundingBox.appendTo($("body"));
            var alertBtn = $('<input type="button" value="' + CFG.textAlertBtn + '">');
            alertBtn.appendTo($('.footer_btn'));
            alertBtn.click(function(){
                that.fire("alert");
            });
            var closeBtn = $('<div class="closeBtn">X</div>');
            if(CFG.hasCloseBtn){
                closeBtn.appendTo($('.window_header'));
                closeBtn.click(function(){
                    that.fire("close");
                })
            }
            $('.window_boundingBox').css({
                width: CFG.width + "px",
                height: CFG.height + "px",
                top: "100px",
                left:"100px"
            });
        }
    })

    return {
        Window: Window
    }
});