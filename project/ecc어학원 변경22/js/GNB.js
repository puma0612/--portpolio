$(function(){
	$("#GNB > ul > li").mouseenter(function(){
		$(".menu").addClass("active")
	});
	$("#GNB > ul > li").mouseleave(function(){
		$(".menu").removeClass("active")
	});
	$("#GNB > ul > li:first-child > a").focusin(function(){
		$(".menu").addClass("active");
	});
	$("#GNB li:last-child li:last-child").focusout(function(){
		$(".menu").removeClass("active");
	});
});
