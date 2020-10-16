 define(["jquery","jquery-cookie"],function($){ 
   
    function download() { 
        $.ajax({
         url:"data/site.json",
         success:function(arr){
             var site=arr.site;
            for(var i=0;i<site.length;i++){
                var node=$(`<section><span>${site[i].title}</span></section>`).appendTo($(".header-left-div-hide-bottom1"))
                if(site[i].info){
                    var child=site[i].info;
                    for(var j=0;j<child.length;j++){
                        $(` <a href="">${child[j]}</a>`).appendTo(node)
                    }
                }
            }
         },
         error: function(msg){
            console.log(msg);
          }
     })
     $.ajax({
        url:"data/site.json",
        success:function(arr){
            var xichen=arr.xichen;
           for(var i=0;i<xichen.length;i++){
               $(`<a href="">${xichen[i]}</a>`).appendTo($(".header-left-div-hide-bottom2"))  
               }
           
        },
        error: function(msg){
           console.log(msg);
         }
    })
    $(".header-left-div").on("mouseenter",function(){
        $(".header-left-div-hide").css("display","block");


    $(".header-left-div-hide-drop ul").on("click","li",function(){
        $(".header-left-div-hide-drop ul li").removeClass("active");
        $(".header-left-div-hide-drop div").css("display","none");
        var a=$(this).index();
        $(this).addClass("active");
   $(".header-left-div-hide-drop div").eq(a).css("display","block");
       }) 
       $(".header-left-div-hide-drop div").on("click","a",function(){
        $(".header-left-div-hide-drop div a").removeClass("current");
        $(this).addClass("current");
        return false;
       })
   })
   $(".header-left-div").on("mouseleave",function(){
    $(".header-left-div-hide").css("display","none");
   
   })
   
   
    }
    function banner() { 
$.ajax({
    url:"data/nav.json",
    success:function(arr){
        var nav=arr.zhu;

        for(let i=0;i<nav.length;i++){
            var node=$(`<div class="logo-bootom-popup-pd">
            <div class="logo-bottom-popup-ctitle">
            <img src="${nav[i].images}">
            <a href="">${nav[i].title}</a> </div>
            <div class="logo-bottom-popup-linear"></div>
           
        </div>`).appendTo($(".logo-bottom-popup-min"));
            if(nav[i].site){
                var site=nav[i].site;
                for(let j=0;j<site.length;j++){
                    $(`<div class="logo-bottom-popue-front">
                        <a href="">${site[j].head}</a>
                        <img src="${site[j].img}" alt=""></div>
                        <div class="logo-bottom-popue-rear"></div>
                    `).appendTo(node);
                    if(site[j].min){
                        var min=site[j].min;
                        for(let k=0;k<min.length;k++){
                            $(`
                            <a href="">${min[k]}</a>
                        `).appendTo(node.find(".logo-bottom-popue-rear").eq(j));
                        }
                    }
                    $(`<div class="logo-bottom-popup-linear"></div>`).appendTo(node);

                }
            }
    }
    var pic=arr.pic;
         var dt=$(`<div class="logo-bottom-popue-pic"> <ul>
    <li> </li>
 </ul></div>`).appendTo($("#popup"))
            if(pic[0].pic1){
                var pic1=pic[0].pic1;
                for(let g=0;g<pic1.length;g++){
                     $(`<div><a href=""><img src="${pic1[g]}" alt=""></a></div>`).appendTo(dt.find("li"))
                }
       }
       if(pic[0].pic2){
           var pic2=pic[0].pic2;
           $(`<p class="logo-bottom-popue-more"><a href=""><img src="${pic2}" alt=""></a></p>`).appendTo(dt)
       }
},
    error: function(msg){
        console.log(msg);
      }
})
   $(".logo-bottom-list-min").on("mouseenter","li",function(){
       $(".logo-bottom-popup").css("display","block");
    $(".logo-bottom-list-min li").removeClass("hov");
    $(".logo-bootom-popup-pd").css("display","none");
    $(".logo-bottom-popue-pic").css("display","none");
    $(this).addClass("hov");
    var a=2*$(this).index()+1;

    $(".logo-bootom-popup-pd").eq(a-1).css("display","block");
    $(".logo-bootom-popup-pd").eq(a).css("display","block");
   })
   $(".logo-bottom-list-min").on("mouseleave","li",function(){
    $(".logo-bottom-list-min li").removeClass("hov");
   })
   $(".logo-active").on("mouseenter",function(){
       $(".logo-bottom-popue-pic").css("display","block");
       $(".logo-bottom-popup").css("display","none");
       $(".logo-bottom-list-min li").removeClass("hov");
   })
   $("#popup").on("mouseleave",function(){
    $(".logo-bootom-popup-pd").css("display","none");
    $(".logo-bottom-popup").css("display","none");
    $(".logo-bottom-popue-pic").css("display","none");
   })
    $(".logo-bottom-menu-head").on("mouseenter","span",function(){
        $(".logo-bottom-menu-head span").removeClass("hov1");
        $(".logo-bottom-list-min").css("display","none");
        $(this).addClass("hov1");
        var a=$(this).index();
        $(".logo-bottom-list-min").eq(a).css("display","block");
    })
    $(".logo-bottom-list-min dl").on("mouseenter","dd",function(){
        $(this).find(".logo-bottom-list-img1").css("left","-27px")
    })
    $(".logo-bottom-list-min dl").on("mouseleave","dd",function(){
        $(this).find(".logo-bottom-list-img1").css("left","0")
    })
   $.ajax({
    url:"data/main.json",
    success:function(arr){
        var data=arr.main; 
        for(let i=0;i<data.length;i++){
            var add=$(`<ul class="main-block-list">
            </ul>`).appendTo($(".main-js").eq(i));
            if(data[i].key){
                var add2=data[i].key;
                for(let j=0;j<add2.length;j++){
                    $(`<li><a href="">
                    <div>
                        <img src="${add2[j].img}" alt="">
                    </div>
                    <h3>${add2[j].h3}</h3>
                    <p>${add2[j].money}</p>
                </a></li>`).appendTo(add);
                }
            }
        }
    },
    error: function(msg){
        console.log(msg);
      }
})
    $(".main-right-menu1 li").on("mouseenter",function(){
        var a=$(this).index();
        $(".main-right-major-min1").css("display","none");
        $(".main-right-menu1 li").removeClass("hover");
        $(this).addClass("hover");
        $(".main-right-major-min1").eq(a).css("display","block");
    })
    $(".main-right-menu2 li").on("mouseenter",function(){
        var a=$(this).index();
        $(".main-right-major-min2").css("display","none");
        $(".main-right-menu2 li").removeClass("hover");
        $(this).addClass("hover");
        $(".main-right-major-min2").eq(a).css("display","block");
    })
    $(".main-right-menu3 li").on("mouseenter",function(){
        var a=$(this).index();
        $(".main-right-major-min3").css("display","none");
        $(".main-right-menu3 li").removeClass("hover");
        $(this).addClass("hover");
        $(".main-right-major-min3").eq(a).css("display","block");
    })
   
}
function slideshow(){
        var inow = 0;
        var aimgs =null;
        var abtns = null;
        var timer =setInterval(function(){
            inow++;
            tab()
        },2500)
        function tab(){
            if(!aimgs){
                aimgs=$(".sensor")
            }
            if(!abtns){
                abtns = $(".playpic a")
            }
            if(inow==6){
                inow=0;
            }
            aimgs.hide().css({"opacity":0.3,"display":"none"}).eq(inow).show().animate({opacity:1,display:"block"},500)
            abtns.removeClass("hov").eq(inow).addClass("hov");
        }
        $(".sensor").on("mouseenter","img",function(){
            clearInterval(timer);
        })
        $(".sensor").on("mouseleave","img",function(){
            timer =setInterval(function(){
                inow++;
                tab()
            },2500)
        })
        $(".playpic").on("mouseenter","a",function(){
            clearInterval(timer);
            inow=$(this).index();
            tab();
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
return {
    download:download,
    banner:banner,
    slideshow:slideshow,
    shopping:shopping
}
})