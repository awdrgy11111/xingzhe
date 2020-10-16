define(["jquery","jquery-cookie"],function($){
    function download(){

        var id=valueName(location.search,"id");
        $.ajax({
            type:"get",
            url:"data/productlist.json",
            success:function(arr){
                 var pro=arr.pro;
            var goods = pro.find(item=>item.id==id);
            $(` <div class="main1-md">
            <div class="fl main1-flimg">
                <div class="main1-goodslogo">
                    <div class="main1-glass">
                        
                        <div class="main1-msk">

                        </div>
  
                    </div>
                </div>
                <div class="main1-picroll">
                    <p class="fl break"><i></i></p>
                    <div>
                        <ul class="main1-oborder">

                        </ul>
                    </div>
                    <p class="fr nexton"><i></i></p>
                </div>
                <div class="main1-num">
                    <div class="main1-num-fl">
                        <span> 编号：</span> ${goods.bianhao}
                    </div>
                    <div class="main1-num-fr">
                        <a href="" class="fl"><span class="xqico1">分享</span></a>
                        <a href="" class="fl"><span class="xqico2">收藏商品</span></a>
                    </div>
                </div>
             </div>
             <div class="fl main1-gdms">
                <h2>${goods.p1}</h2>
                <div class="main1-gdms-word1">
                ${goods.p2}
                </div>
                <div>
                    <div class="main1-gdms-bg cr">
                        <div class="fl main1-gdms-bg-word">
                            此商品参与“折扣”活动
                        </div>
                    </div>
                    <div class="main1-gdms-daybg">
                        <span>活动价：</span>
                        <span>￥</span>
                        <span>${goods.money2}</span>
                        <span>${goods.money1}</span>
                    </div>
                </div>
                <div class="main1-gdms-gd">
                    <div class="cr">
                        <div class="main1-gdms-gd-word">
                            月销：<span>${goods.cake}</span>袋
                        </div>
                        <div class="main1-gdms-gd-word">评价：<span>1111</span></div>
                        <div class="main1-gdms-gd-word">咨询：<span>1111</span></div>
                    </div>
                    <div class="main1-gdms-gd-pointer">
                        <ul class="cr">
                            <li>
                                <img src="./images/qualityassurance.png" alt="">
                                正品保证
                            </li>
                            <li>
                                <img src="./images/freeshipping.png" alt="">
                                99元包邮
                            </li>
                            <li>
                                <img src="./images/thirtydays.png" alt="">
                                30天退货
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div class="specification cr">
                    <span>规格：</span>
 
                </div>
                <div class="main1-gdms-norm cr">
                    <span class="main1-gdms-norm-word1">我要买：</span>
                    <div class="main1-gdms-norm-shop fl">
                        <span class="cgnum">
                            <span class="main1-jian">-</span>
                            <input type="text" value=1>
                            <span  class="main1-jia">+</span>
                        </span>
                        <span class="main1-gdms-norm-word2">袋</span>
                    </div>
                </div>
                <div class="main1-freight cr">
                   <div>
                    16点前下单，当天发货。
                    <a href="">运费详情>></a></div>
                </div>
                <div class="main-cart cr">
                    <div class="main-cart-join">
                        <a href="" id="${goods.id}">
                            <span>加入购物车</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>`).insertAfter(".main1-min .main1-min-nav");
        var bigimg=goods.bigimg;
        for(let i=0;i<bigimg.length;i++){
            $(` <img src="${bigimg[i]}" alt="">`).appendTo(".main1-glass");
            $(`<div class="main1-big" style="background-image:url(${bigimg[i]})">
            </div>`).appendTo(".main1-glass");
            $(`<li><img src="${bigimg[i]}" alt=""></li>`).appendTo(".main1-oborder");
        }
        var weight=goods.weight;
        for(let i=0;i<weight.length;i++){
            $(`<a>${weight[i]}</a>`).appendTo(".specification")
        }
            },
            error:function(msg){
                console.log(msg);
            }
        })
        $(".main1-min").on("mouseenter",".main1-oborder li",function(){
            $(".main1-oborder li").removeClass("on");
            $(".main1-glass img").css("display","none");
            var a=$(this).index();
            $(this).addClass("on");
            $(".main1-glass img").eq(a).css("display","block");

        })
        $(".main1-min").on("mouseenter",".main1-glass img",function(){
            var a=($(this).index()-1)/2;
            $(".main1-big").eq(a).css("display","block");
            $(".main1-msk").css("display","block");
            $(".main1-min").on("mousemove",".main1-glass",function(e){
                
                var l =parseInt(e.pageX - $(this).offset().left - 93);
                l = Math.max(0, l);
                l = Math.min(113, l);
                var t =parseInt(e.pageY - $(this).offset().top - 71);
                t = Math.min(157, t);
                t = Math.max(0, t);
                
                $(".main1-msk").css("left",l);
                $(".main1-msk").css("top",t);
                $(".main1-big").css({"background-position":`${-8/3*l}px ${-8/3*t}px`});
                
            })
        })
        $(".main1-min").on("mouseleave",".main1-glass",function(){
            
            $(".main1-big").css("display","none");
            $(".main1-msk").css("display","none");
        })
        $(".main1-min").on("click",".main-cart-join a",function(){
            var id = this.id;
            var val = Number($(".cgnum input").val());
            console.log(val);
            var first = $.cookie("goods") == null ? true: false;
            if(first){
                var cookieArr=[{id:id,num:val}];
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                var same = false;
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                for(var i=0; i<cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        cookieArr[i].num+=val;
                        same=true;
                        break;
                    }
                }
                if(!same){
                        var obj={id:id,num:val};
                        cookieArr.push(obj);
                }
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }
             shopping()
            alert($.cookie("goods"))
           
            return false
        })
        $(".logo-bottom-list-min dl").on("mouseenter","dd",function(){
            $(this).find(".logo-bottom-list-img1").css("left","-27px")
        })
        $(".logo-bottom-list-min dl").on("mouseleave","dd",function(){
            $(this).find(".logo-bottom-list-img1").css("left","0")
        })
    }

    function valueName(search,name){
        var start = search.indexOf(name+"=");
        if(start==-1){
            return null;
        }
        else{
            var end =search.indexOf("&",start);
            if(end==-1){
                end=search.length;
            }
            var str= search.substring(start,end);
            var arr=str.split("=");
            return arr[1];
        }
    }
    function jia(){
        $(".main1-min").on("click",".main1-jian,.main1-jia",function(){
            var a=parseInt($(this).siblings("input").val());
            if(this.className =="main1-jian"){
                a ==1? alert("数量已经为1，不能再减少"):a--;
               }
               else{
                   a++;
               }
               $(this).siblings("input").val(a);
               shopping()
        })
    }
    function shopping(){
        var num=0;
    
        var cookieStr = $.cookie("goods");
        var cookieArr = JSON.parse(cookieStr);
        if(!cookieStr){
            $(".logo-buy a span").html(0);
            $("#shopping span").html(0);
        }else{
             for(var i=0;i<cookieArr.length;i++){
           num+=parseInt(cookieArr[i].num);
            }
        $(".logo-buy a span").html(num);
        $("#shopping span").html(num);
        }
       
    }
    return{
        jia:jia,
        download:download,
        shopping:shopping
    }
})