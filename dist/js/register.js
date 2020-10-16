define(["jquery"], function($){
    function registerSend(){
        $(".register-log").click(function(){            
            $.ajax({
                type: "post",
                url: "./php/register.php",
                data: {
                    username: $("#inlogin").val(),
                    password: $("#inpassword").val(),
                    repassword: $("#inpassword2").val(),
                    createTime: (new Date()).getTime()
                },
                success: function(result){

                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".text1").find("em").attr("class", "icon_error");
                        $(".text1").find("span").attr("class", "icon_error");
                        $(".text1").find("em").html("!");
                    }else{
                        $(".text1").find("em").attr("class", "icon_true");
                        $(".text1").find("span").attr("class", "icon_true");
                        $(".text1").find("em").html("✓");
                        setTimeout(function(){
                            location.assign("login.html");
                        }, 1000);
                    }
                    $(".text1").show().find("span").html(obj.message);
                    
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        registerSend: registerSend
    }
})