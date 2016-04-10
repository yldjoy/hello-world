/**
 * Created by Yjoy on 2016/4/9.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-1.12.2',
        jqueryUI: 'jquery-ui'
    }
});

require(['jquery','window'], function($,w){
    $('#alert').click(function(){
        var win = new w.Window();
        win.alert();
        win.on("alert",function(){
            alert("alert function");
        });
        win.on("close", function(){
            alert("close funtcion");
        });
    })
});