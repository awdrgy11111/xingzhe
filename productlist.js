define(["jquery"],function($){
    function logo(){
        $.ajax({
            type:"get",
            url:"data/productlist.json",
            success:function(arr){
                var pro=arr.pro;
                for(let i=0;i<pro.length;i++){
                    $(`<li>
                    <div class="main1-list-box">
                        <div class="main1-list-img">
                            <a href="product.html?id=${pro[i].id}">
                                <img src="${pro[i].bigimg[0]}" alt="">
                            </a>
                        </div>
                        <a href="product.html?id=${pro[i].id}" class="main1-list-word"><span>
                        ${pro[i].p1}
                        </span></a>
                        <p class="main1-list-word2"><span> ${pro[i].money1}</span><span>${pro[i].money2}</span><span>34.58元/斤</span> </p>
                        <p class="main1-list-word3"><em>${pro[i].cake}</em></p>
                    </div>
                </li>`).appendTo($(".main1-list"));
                }
            },
            error: function(msg){
                console.log(msg);
              }
        })
        $(".logo-bottom-menu-head").on("mouseenter","span",function(){
            $(".logo-bottom-menu-head span").removeClass("hov1");
            $(".logo-bottom-list-min").css("display","none");
            $(this).addClass("hov1");
            var a=$(this).index();
            $(".logo-bottom-list-min").eq(a).css("display","block");
        })
$(".logo-bottom-menu-head").on("mouseenter","span",function(){
    $(".logo-bottom-menu-head span").removeClass("hov1");
    $(".logo-bottom-list-min").css("display","none");
    $(this).addClass("hov1");
    var a=$(this).index();
    $(".logo-bottom-list-min").eq(a).css("display","block");
})
    $(".main1-w-min-gd").on("click","a",function(){
        $(".main1-w-min-gd a").removeClass("hov");
        $(this).addClass("hov");
        return false;
    })
    $(".main-w-mid-fil-max").on("click","div",function(){
        $(".main-w-mid-fil-max div").removeClass("hover");
        $(this).addClass("hover");
        return false;
    })
    $(".main-w-mid-gdmenu-fl").on("click","span",function(){
        $(".main-w-mid-gdmenu-fl span").removeClass("hov");
        $(this).addClass("hov");
        return false;
    })
    $(".logo-bottom-list-min dl").on("mouseenter","dd",function(){
        $(this).find(".logo-bottom-list-img1").css("left","-27px")
    })
    $(".logo-bottom-list-min dl").on("mouseleave","dd",function(){
        $(this).find(".logo-bottom-list-img1").css("left","0")
    })
}
    function banner1() { 
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
           $(".logo-active").on("mouseenter",function(){
               $(".logo-bottom-popue-pic").css("display","block");
               $(".logo-bottom-popup").css("display","none");
               $(".logo-bottom-list-min li").removeClass("hov");
           })
        //    $(".logo-active").on("mouseleave",function(){
        //     $(".logo-bottom-popue-pic").css("display","none");
        // })
           $("#popup").on("mouseleave",function(){
            $(".logo-bootom-popup-pd").css("display","none");
            $(".logo-bottom-list-min").css("display","none");
            $(".logo-bottom-popup").css("display","none");
            $(".logo-bottom-list-min li").removeClass("hov");
            $(".logo-bottom-popue-pic").css("display","none");
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
            $(".logo-bottom-menu-head").on("mouseenter","span",function(){
                $(".logo-bottom-menu-head span").removeClass("hov1");
                $(".logo-bottom-list-min").css("display","none");
                $(this).addClass("hov1");
                var a=$(this).index();
                $(".logo-bottom-list-min").eq(a).css("display","block");
            })
        }
return {
    logo:logo,
    banner1:banner1
}
})