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
        this.winDiv = $(
            '<div class="window-boundingBox">'+
                '<div class="window-header">' + '系统消息' + '</div>'+
                '<div class="window-body">' + 
                    '<div class="body-content">' + 
                        '<div class="body-text">'+ '请输入：' + '</div>' + 
                        '<input class="prompt-input" placeholder="' + '请输入内容' + '">' +
                    '</div>' +
                '</div>'+
                '<div class="window-footer">' +
                    '<div class="footer-btn">' + 
                        '<button class="btn btn-confirm">' + '确定' + '</button>' +
                        '<button class="btn btn-cancel">' + '取消' + '</button>' +
                    '</div>' + 
                '</div>'+
                '<button class="btn btn-close">' + 'X' + '</button>'+
            '</div>'
            );
        this.maskDiv = $('<div class="mask-div"></div>');
   }
    Window.prototype = $.extend({}, new widget.Widget(), {
        alert: function(cfg){
            that = this;
            var CFG = $.extend(this.cfg, cfg);
            this.maskDiv.appendTo($('body'));
            this.winDiv.appendTo($('body'));
        }
    })

    return {
        Window: Window
    }
});