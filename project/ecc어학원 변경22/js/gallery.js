$(function(){
	var n=0;
	var move=0;
	$(".keyvisual .keyvisual_inner .controlls li:first-child").addClass("active");

	setInterval(function(){
		n=n+1;
		move=-1*100*n+"%";
		$(".keyvisual .keyvisual_inner .keyvisual_moving").animate({"left" : move},600);
		$(".keyvisual .keyvisual_inner .controlls li").removeClass("active");
		$(".keyvisual .keyvisual_inner .controlls li").eq(n).addClass("active");
			if(n == 6){
				n=move=0;
				$(".keyvisual .keyvisual_inner .keyvisual_moving").animate({"left" : 0},0);
			}
	},2700);

	$(".keyvisual .keyvisual_inner .controlls li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		move=-1*100*n+"%";
		$(".keyvisual .keyvisual_inner .controlls li").removeClass("active");
		$(this).addClass("active");
		$(".keyvisual .keyvisual_inner .keyvisual_moving").animate({"left":move},600);
	});
});