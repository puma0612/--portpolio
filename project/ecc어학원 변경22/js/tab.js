$(function(){
	$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title1").addClass("on")
	$(".main_cont_wrap .main_cont .main_top .main_notice .main_panel").addClass("active");

 	$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title1").click(function(e){
		e.preventDefault();
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title1").addClass("on")
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title2").removeClass("on")
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_pane2").removeClass("active");
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_panel").addClass("active");
	});

	$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title2").click(function(e){
		e.preventDefault();
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title2").addClass("on")
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_tab ul li a.title1").removeClass("on")
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_panel").removeClass("active");
		$(".main_cont_wrap .main_cont .main_top .main_notice .main_pane2").addClass("active");
	});
});
