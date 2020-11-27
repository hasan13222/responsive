$('.sr_wrapper .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
});


$('.cdtls_wrapper .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
});


$(document).ready(function(){
    //post ad file upload
    $(".pad .pad_form .img_wrap").click(function(){
       $(this).children(".file_upload")[0].click();
     });
  //message section response
   $(".messages_inner ul li").click(function(){
    $(".messages_inner .mes_right").css("display", "flex");
    $(".messages_inner .mes_left").hide();
  });

   $(".mes_right .mes_ex i").click(function(){
    $(".messages_inner .mes_right").css("display", "none");
    $(".messages_inner .mes_left").show();
  });
   
});
