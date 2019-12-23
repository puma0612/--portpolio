$(function(){
	$(".tab_btn").click(function(e){
		e.preventDefault();
		$(".navigation").addClass("active");
		$(".header_dim").addClass("out");
	});
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	$(".tab_btn_close").click(function(e){
		e.preventDefault();
		if($(".navigation").hasClass("active") == true){
			$(".navigation").removeClass("active");
			$(".header_dim").removeClass("out");
		}
	});
});
