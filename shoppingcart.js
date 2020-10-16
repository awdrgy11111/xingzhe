define(["jquery","jquery-cookie"],function($){
    function download(){
        $.ajax({
            url:"data/productlist.json",
            success:function(arr){
                var cookieStr = $.cookie("goods");
                var arr=arr.pro;
                if(cookieStr)
                {
                    var cookieStr=JSON.parse(cookieStr);
                    var newArr=[];
                    for(var i=0;i<cookieStr.length;i++){
                        for(var j=0;j<arr.length;j++){
                            if(cookieStr[i].id==arr[j].id){
                                arr[j].num=cookieStr[i].num;
                                newArr.push(arr[j]);
                            }
                        }
                    }
                    for(var k=0;k<newArr.length;k++){
                        $(`<tr>
                        <td colspan="5" class="cart-shopping1 cr">
                            <span>
                                E宠西部中央仓
                            </span>
                            <b><img src="./images/help.jpg" alt=""></b>
                            <div>
                                <a href="">已包邮</a>
                                订单已包邮
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5"  class="cart-shopping2 cr">
                            <p class="fl"><img src="./images/change_img.png" alt=""></p>
                            <p class="p110">已满足399.00元，立享超值低价换购福利> ></p>
                            <p class="p120">超值换购>></p>
                        </td>
                    </tr>
                    <tr class="cart-shopping3 " id="${newArr[k].id}">
                        <td width="50" align="center class="cart-td" >
                            <input  type="checkbox"class="cart-dui">
                        </td>
                        <td width="500" valign="middle">
                            <div class="cart-img">
                                <img src="${newArr[k].bigimg[0]}" alt="">
                            </div>
                            <div class="cart-intro">
                            ${newArr[k].p1}
                            </div>
                        </td>
                        <td width="150" align="center" style="padding-top:20px">
                        <div class="cart-num cr">
                            <span class="cart-jian">-</span>
                            <input type="text" value="${newArr[k].num}">
                            <span class="cart-jia">+</span>
                        </div>
                        <p class="you">有货</p>
                    </td>
                        <td width="200" align="center" class="cart-shopping-word" >
                            ￥<span>${newArr[k].money2*newArr[k].num}</span> </td>
                        <td width="200" align="center">
                            <a href="">[收藏]</a>
                            <a href="" class="cart-del">[删除]</a>
                        </td>
                    </tr>`).insertBefore($("#cart-jie"))
                    }
                    ischeck();

                }
            },
            error:function(msg){
                console.log(msg);
            }
        })

        $(".cart-menu-top ul").on("mouseenter","li",function(){
            var a=$(this).index();
            console.log(a);
            if(a==0){
                $(".cart-line").animate({left:0,width:176
                })
            }
            if(a==1){
                $(".cart-line").animate({left:171,width:151
                })
            }
            if(a==2){
                $(".cart-line").animate({left:321,width:151
                })
            }
            if(a==3){
                $(".cart-line").animate({left:474,width:147
                })
            }
        })
        $(".cart-menu-top ul").on("mouseleave",function(){
                $(".cart-line").animate({left:0,width:176
                },500)
            
        })
      
        }
        function check(){
            var count=true;
              $(".cart-contbox").on("click",".cart-check input",function(){
                  
                if(!count){
                    $(".cart-dui").prop("checked",false);
                    count=true;
                    console.log(count);
                }else{
                    $(".cart-dui").prop("checked",true);
                    count=false;
                    console.log(count);
                } 
                ischeck()
              })
              $(".cart-contbox").on("click",".cart-dui",function(){
                     console.log($(this).prop("checked"))   
                     ischeck()
              })
    }
    function ischeck(){
        var allchecks = $(".cart-contbox").find(".cart-shopping3");
        var isall = true;
        var total = 0;
        var count = 0;
        var totalcount = 0;
        allchecks.each(function(index,item){
            if(!$(item).find(".cart-dui").prop("checked")){
                isall = false;
            }else{
                total += parseInt( $(item).find(".cart-shopping-word span").html().trim());
                count +=parseInt($(this).find(".cart-num input").val());
            }
            totalcount +=parseInt($(this).find(".cart-num input").val());
        })
        $("#cart-menu-num").html( totalcount);
        $(".cart-account span").html(count);
        $(".cart-account strong").html(total);
        $(".logo-buy a span").html(totalcount);
        $("#shopping span").html(totalcount);
        if(isall){
         $(".cart-check input").prop("checked",true);   
        }
        else{
            $(".cart-check input").prop("checked",false);    
        }
    }
    function checkcart(){
        $(".cart-contbox").on("click",".cart-del",function(){ 
           var   a=$(this).closest(".cart-shopping3").index();
           $(".cart-contbox tr").eq(a-1).remove();
           $(".cart-contbox tr").eq(a-2).remove();
            var id= $(this).closest(".cart-shopping3").remove().attr("id");
          
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for(var i=0;i<cookieArr.length;i++){
                if(id == cookieArr[i].id ){
                    cookieArr.splice(i,1);
                    break;
                }
            }
            cookieArr.length == 0? $.cookie("goods",null):$.cookie("goods",JSON.stringify(cookieArr),{expires:7});
            ischeck()
            return false

        })
        $(".cart-contbox").on("click",".cart-jia,.cart-jian",function(){
           
            var id= $(this).closest(".cart-shopping3").attr("id");
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for(var i=0;i<cookieArr.length;i++){
                if(id == cookieArr[i].id ){
                   if(this.className =="cart-jian"){
                    cookieArr[i].num ==1? alert("数量已经为1，不能再减少"):cookieArr[i].num--;
                   }
                   else{
                       cookieArr[i].num++;
                   }
                   break;
                }
            }
            var a=parseInt($(this).siblings("input").val());
            var b=parseInt($(this).closest(".cart-shopping3").find(".cart-shopping-word span").html());
            var c=parseInt(b/a);
            $(this).siblings("input").val(cookieArr[i].num);
            $(this).closest(".cart-shopping3").find(".cart-shopping-word span").html(c*cookieArr[i].num.toFixed(1));
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            ischeck()
        })
    }

    return{
        download:download,
        check:check,
        checkcart:checkcart,
    }
})