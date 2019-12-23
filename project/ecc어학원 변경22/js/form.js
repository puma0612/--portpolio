$(function(){
	$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find > li:first-child").click(function(){
		$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find li .sel_box1").toggleClass("on");
		$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find li .sel_box2").removeClass("on");
	});

	$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find > li:last-child").click(function(){
		$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find li .sel_box2").toggleClass("on");
		$(".main_cont_wrap .main_cont .main_top .main_campus ul.campus_find li .sel_box1").removeClass("on");
	});
});
