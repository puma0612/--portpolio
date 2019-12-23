$(function(){
	var w;
	var total=2; // 갤러리의 총 개수입니다.
	var amount=0;
	var moving=false;
	var xDown=null;
	var yDown=null;
	var direction="";
	var n=0;
	$(".controller li").eq(n).addClass("active"); // 컨트롤러는 .controller li입니다.

	$(window).resize(function(){
		w=$(window).width();
		$(".keyvisual .key_img .gallery").css({left:0, width:w*total}); // 움직이는 대상은 .gallery입니다.
		$(".keyvisual .key_img .gallery li").css({width:w});
	});
	$(window).trigger("resize");

	$(".left").click(function(e){ // 좌측 버튼은 .left입니다.
		e.preventDefault();

		if(moving){
			return false;
		}
		moving=true;
		amount-=w;

		if(n < (total-1)){
			n++;
		}
		else{
			n=0;
		}
		$(".controller li").removeClass("active");
		$(".controller li").eq(n).addClass("active");

		$(".keyvisual .key_img .gallery").animate({left:amount}, 500, function(){
			moving=false;
			$(this).append($(".keyvisual .key_img .gallery li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	});
	$(".right").click(function(e){ // 우측 버튼은 .right입니다.
		e.preventDefault();

		if(moving){
			return false;
		}
		moving=true;

		if(n > 0){
			n--;
		}
		else{
			n=total-1;
		}
		$(".controller li").removeClass("active");
		$(".controller li").eq(n).addClass("active");

		$(".keyvisual .key_img .gallery").prepend($(".keyvisual .key_img .gallery li:last-child"));
		amount-=w;
		$(".keyvisual .key_img .gallery").css({left:amount});

		amount+=w;
		$(".keyvisual .key_img .gallery").animate({left:amount}, 500, function(){
			moving=false;
		});
	});
	$(".keyvisual").on("touchstart", function(e){
		var evt=e.originalEvent;
		xDown=evt.touches[0].clientX;
		yDown=evt.touches[0].clientY;
		clearInterval(id);
	});
	$(".keyvisual").on("touchmove", function(e){
		var evt=e.originalEvent;
		direction=swipeAPI(evt, xDown, yDown);

		if(direction == "left"){
			$(".left").trigger("click");
		}
		else{
			$(".right").trigger("click");
		}
	});
	$(".keyvisual").on("touchend", function(e){
		id=setInterval(function(){
			$(".left").trigger("click");
		}, 6000);
	});

	var id=setInterval(function(){
		$(".left").trigger("click");
	}, 6000);

	function swipeAPI(evt, xd, yd){
		var moveDirection="";
		var xUp=evt.touches[0].clientX;
		var yUp=evt.touches[0].clientY;
		// var xDiff=xDown-xUp;
		var xDiff=xd-xUp;
		// var yDiff=yDown-yUp;
		var yDiff=yd-yUp;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			if(xDiff > 0){
				moveDirection="left";
			}
			else{
				moveDirection="right";
			}
		}
		else{
			if(yDiff > 0){
				moveDirection="up"
			}
			else{
				moveDirection="down";
			}
		}
		return moveDirection;
	}
});
