define(['jquery', "jquery-cookie"], function($){
    function loginSend(){
        $(".register-log").click(function(){
            $.ajax({
                type: "post",
                url: "./php/login.php",
                data: {
                    username: $("#outlogin").val(),
                    password: $("#outpassword").val()
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
                        $.cookie("username", obj.username, {
                            expires: 7
                        })
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
        loginSend: loginSend
    }
})