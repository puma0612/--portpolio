$(function(){
	var t=0;
	var n=0;
	var pageTop="";

	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			pageTop="start";
			$(window).trigger("scroll");
		});
	}, 10);

	$(window).scroll(function(){
		if(pageTop == ""){
			return;
		}
		t=$(window).scrollTop();
		console.log(t);
		if(t < $("#page2").offset().top-450){
			n=0;
		}
		else if(t < $("#page3").offset().top-450){
			n=1;
		}
		else if(t < $("#page4").offset().top-1700){
			n=2;
		}
		else if(t < $("#page5").offset().top-450){
			n=3;
		}
		else if(t < $("#page6").offset().top-450){
			n=4;
		}
		else{
			n=5;
		}
		if(n == 0){
			$("header").addClass("active");
		}
		else{
			$("section").eq(n-1).addClass("active");
		}
		// console.log(n);
	});

	var pos=0;
	var movingFlag=false;
	$(".navi li").eq(n).addClass("active");

	$(".navi li").click(function(e){
		e.preventDefault();
		if(movingFlag) return;
		movingFlag=true;
		$(".navi li").removeClass("active");
		$(this).addClass("active");

		pos=$("#page"+($(this).index()+1)).offset().top;
		$("html").animate({scrollTop:pos}, 600, function(){
			movingFlag=false;
			// console.log("complete animation!!");
		});
	});
});
