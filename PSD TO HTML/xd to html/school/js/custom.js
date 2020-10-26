$('.class_wrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:3,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

$('.hp_wrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        }
    }
});

$('.cd_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
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


// search box sliding down
$(document).ready(function(){
  $(".navbar-light .navbar-nav button").click(function(){
    $(".navbar-light .navbar-nav input.search").slideToggle();
  });
});