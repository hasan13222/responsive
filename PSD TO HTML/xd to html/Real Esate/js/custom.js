$('.agents_wrapper .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:4
        }
    }
});

$('.testimonial_wrapper .owl-carousel').owlCarousel({
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
            items:1
        },
        992:{
            items:1
        }
    }
});

$('.pro_main .gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});

$('.sidebar .latest .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
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

// listing details floor plan toggle
$(document).ready(function(){
    $(".floor_plan .flp .clp").click(function(){
        $(this).siblings(".clp_show").toggle();
        $(this).children().find(".fa-angle-down, .fa-angle-up").toggleClass("fa-angle-down, fa-angle-up");
    });
});