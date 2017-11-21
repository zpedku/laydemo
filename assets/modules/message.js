/**
 * Created by yalith on 2017/10/10.
 */
layui.define(function(exports){
    //var message =function(options){
    //   var msg=options.msg
    //       ,sender=options.sender
    //       ,revisiver=options.revisiver;
    //    console.log(sender+' has send a message : '+msg+' to '+revisiver);
    //};
    exports('message',function(options){
        var msg=options.msg
            ,sender=options.sender
            ,revisiver=options.revisiver;
        console.log(sender+' has send a message : '+msg+' to '+revisiver);
    });
});