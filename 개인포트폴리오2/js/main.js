$(function(){
	// 1) 초기 설정 관련
	/*
	var dimHtml="";

	function dimFadeInOut(){
		dimHtml+='<div class="prev_page_dim"></div>';
		dimHtml+='<div class="next_page_dim"></div>';
		$("body").append(dimHtml);
		$(".prev_page_dim").delay(400).animate({height:0}, 400);
	}
	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}
	function setCookie(name, value, expiredays){
		var days=expiredays;
		if(days){
			var date=new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires="; expires="+date.toGMTString();
		}else{
			var expires="";
		}
		document.cookie=name+"="+value+expires+"; path=/";
	}

	if(GetCookie("main") == "back"){
		// dimFadeInOut();
	}

	$(window).on("beforeunload", function(){
		// setCookie("main", "", 1);
	});
	*/

	setTimeout(function(){
		$(".prev_page_dim").delay(200).animate({height:0}, 200);
	}, 150);

	// 2) 포트폴리오 대표 이미지 관련
	var n=0; // 갤러리 번호 변수
	var w=920; // 갤러리 가로 크기 변수
	var total; // 갤러리 전체 개수 변수
	var amount=0; // 갤러리 움직일 위치 변수
	var id=setInterval(leftMoving, 3500); // 갤러리 타이머 변수
	$(".timer .gage").animate({width:"100%"}, 3500);

	var titleArray=new Array(); // 포트폴리오 타이틀 배열
	titleArray[0]="윤선생 Website & Mobile";
	titleArray[1]="KaKaoPage 반응형 Website";
	// titleArray[2]="Hanwha General Insurance<br>Renewal";
	total=titleArray.length;

	setTimeout(function(){ // 갤러리 초기 설정 타이머
		$(".slider_wrap .slider").css({width:total*w});
		$(".slider_wrap, .slider_wrap .slider").css({height:$(".slider_wrap img").height()});
		$(".top .title").html(titleArray[n]).css({opacity:0}).animate({opacity:1}, 500);
		$(".pager .current").text("01");
		$(".pager .total").text("0"+total);
	}, 150);

	$(".controls .prev").click(rightMoving);
	$(".controls .next").click(leftMoving);

	$(".controls .next, .controls .prev").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 3500);
		}
	);

	function leftMoving(){ // 왼쪽 이동 함수
		if(n < (total-1)){
			n++;
		}else{
			n=0;
		}
		amount-=w;
		$(".slider").animate({left:amount}, 500, function(){
			$(this).append($(".slider li").first());
			amount+=w;
			$(this).css({left:amount});
			$(".top .title").html(titleArray[n]).css({opacity:0}).animate({opacity:1}, 500);
		});

		// console.log("left moving!!");
		$(".timer .gage").stop().animate({width:0}, 0).animate({width:"100%"}, 3500);
		$(".pager .current").text("0"+(n+1));
	}
	function rightMoving(){ // 오른쪽 이동 함수
		if(n > 0){
			n--;
		}
		else{
			n=(total-1);
		}

		$(".slider").prepend($(".slider li").last());
		amount-=w;
		$(".slider").css({left:amount});

		amount+=w;
		$(".slider").animate({left:amount}, 500, function(){
			$(".top .title").html(titleArray[n])
				.css({opacity:0})
				.animate({opacity:1}, 500);
		});

		// console.log("right moving!!");
		$(".timer .gage").stop().animate({width:0}, 0).animate({width:"100%"}, 3000);
		$(".pager .current").text("0"+(n+1));
	}

	// 3) LNB 관련
	var lnbClicked=false; // 클릭했는 지를 확인하는 변수
	var linkPath=""; // 링크 경로 변수
	var currentPath=window.location.href; // 현재 경로 변수
	// console.log("currentPath : "+currentPath);

	var currentArray=currentPath.split("/"); // '/' 문자열을 기준으로 배열 생성
	currentPath=currentArray[currentArray.length-1]; // 마지막 배열자 값 참조
	// console.log("currentArray : "+currentArray);
	// console.log("currentPath : "+currentPath);

	$(".burger_menu button").click(function(){
		lnbClicked=true;
		$(".west .nav").animate({left:38, opacity:1}, 300);
		$(".burger_menu button span").animate({left:70, opacity:0}, 400);
		$(".btn").animate({left:150, opacity:0}, 400);
	});
	$(".side_header").mouseleave(function(){
		if(lnbClicked){
			lnbClicked=false;
			$(".west .nav").animate({left:-138, opacity:0}, 300);
			$(".burger_menu button span").animate({left:0, opacity:1}, 400);
			$(".btn").animate({left:30, opacity:1}, 400);
		}
		else{
			return false;
		}
	});
	$(".nav > li > a, h1 > a, .slider a").click(function(e){
		e.preventDefault();
		linkPath=$(this).attr("href");
		// console.log("linkPath : "+linkPath+" : currentPath : "+currentPath);

		if(linkPath == currentPath) return;

		// console.log("length : "+$("body").has(".next_page_dim").length);
		// if($("body").has(".next_page_dim").length > 0) $(".next_page_dim").remove(); // .next_page_dim이 있다면 제거
		// dimHtml+='<div class="next_page_dim"></div>';
		// $("body").append(dimHtml);

		$(".next_page_dim").delay(400).animate({height:"100%"}, 400, function(){
			location.href=linkPath;
		});
	});
});
