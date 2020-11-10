$(document).ready(function(){
	// havbar hover effect
	$(".header_n_mainSection .navbar .navbar-nav li a").mouseover(function(){
	  $(this).children(".home").attr('src','./images/home/home-iconh.png');
	});
	$(".header_n_mainSection .navbar .navbar-nav li a").mouseout(function(){
	  $(this).children(".home").attr('src','./images/home/home-icon.png');
	});
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseover(function(){
    $(this).children(".message").attr('src','./images/home/message-iconh.png');
  });
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseout(function(){
    $(this).children(".message").attr('src','./images/home/message-icon.png');
  });
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseover(function(){
    $(this).children(".session").attr('src','./images/home/session-iconh.png');
  });
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseout(function(){
    $(this).children(".session").attr('src','./images/home/session-icon.png');
  });
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseover(function(){
    $(this).children(".contact").attr('src','./images/home/contact-iconh.png');
  });
  $(".header_n_mainSection .navbar .navbar-nav li a").mouseout(function(){
    $(this).children(".contact").attr('src','./images/home/contact-icon.png');
  });

	$(".header_n_mainSection .navbar .navbar-nav li a.active img").attr('src','./images/home/home-iconh.png');

	//search toogle
	$(".header_n_mainSection .navbar .navbar-nav li:last-child button").click(function(){
	    $(".header_n_mainSection .navbar .navbar-nav li:last-child input").toggle();
	  });
	//nm bottom toogle
	$(".new_meeting .nm_btm .mbl_icon").click(function(){
	    $(".new_meeting .nm_mobile").toggle();
	  });

	//security toggle
		$(".new_meeting .nm_btm .sywr").click(function(){
			$(".new_meeting .nm_card .card").toggle();
			$(".new_meeting .nm_btm .sywr p").toggleClass("syph");
		  });


});