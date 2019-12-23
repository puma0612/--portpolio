$(function(){

	var t;

		$(window).scroll(function(){
			t=$(window).scrollTop();
			$("key_text").addClass("active");
		$(window).trigger("scroll");
	});
});
