$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:24,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$(document).ready(function(){
  $(".header_wrapper .menu_icon").click(function(){
    $(".header_wrapper .mobile_menu").toggle("slow", "linear");
  });
});