$(document).ready(function(){
	$("#hide").click(function(){
		
		$(".para").hide("slow");
	});
	
	$("#show").click(function(){
		
		$(".para").show(2000);
	});
	
});



$(document).ready(function(){
	$(".hide1").click(function(){
		
		$(".para1").toggle("slow");
	});
	
});


$(document).ready(function(){
	$(".fading").click(function(){
			$(".div1").fadeIn(2000);
			

	});
});   

$(document).ready(function(){
	$(".animation").click(function(){
		$(".anim").animate({
			width:"60px",
			left:"100px"
		});
	});
	
})



$(document).ready(function(){
	$(".animation1").click(function(){
		var myAnimation = $(".anim1");
		myAnimation.animate({left:'150px'}, 1000);
		myAnimation.animate({top:'150px'}, 1000);
		myAnimation.animate({left:'0px'}, 1000);
		myAnimation.animate({top:'0px'}, 1000);
	});
	$(".stop").click(function(){
		$(".anim1").stop(true);
		
	});
	
})