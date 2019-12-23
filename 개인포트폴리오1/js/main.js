$(function(){
	var t; // 윈도우 상단 좌표 변수
	var w; // 윈도우 가로 크기 변수
	var h; // 윈도우 세로 크기 변수
	var n=0; // 카테고리 번호 변수

	// 1) resize : 화면 구성 이벤트 , 콘텐츠의 가로 크기 세로 지정
	$(window).resize(function(){
		console.log("resize event!!");
		w=$(window).width();
		h=$(window).height();
		t=(-1)*n*h;
		$(".section").css({"top":t}); // 리사이즈가 되도 위치가 고정
		$(".section .page").css({width:w, height:h});
		$(".aside .item").removeClass("on");
		$(".aside .item").eq(n).addClass("on");
	});

	$(window).trigger("resize");

	// 2) click
	$(".nav .menu a, .aside .item a").click(function(e){
		e.preventDefault();
		console.log("click event!!");
		n=$(this).parent().index();
		t=(-1)*n*h;

		$(".aside .item").removeClass("on");
		$(".aside .item").eq(n).addClass("on");
		$(".section").animate({top:t},500);

		if(n != 0){ //! = // NOT
			// 상단 고정 메뉴가내려와야 합니다.
			$(".header .nav").addClass("on");
		}
		else{
			// n=0, 즉 윈도우 제일 위로 올라가면 , 상단 고정 메뉴가 올라갑니다.
			$(".header .nav").removeClass("on");
		}
	});

	// 3) keybord
	$(window).keydown(function(e){ // UI 고지가 필요합니다 . '상하 방향 버튼을 활용할 수 있습니다.'
		console.log("keybord event : "+e.keyCode);
		// e.keybord
		// jQuery.is(":visible") : 보이면 true , 안보이면 false
		// form elements.is(":checked") : 체크되면 true, 안되면 false
		// animate jQuery.is(":animated") : 실행중 true , 실행이끝아면 false
		if($(".section").is(":animated")){
			return;
		}
		if(e.keyCode == 38 || e.keyCode == 33){ // 38 : 위방향키, 카테고리 번호가 낮아집니다. (0)
			if(n > 0){
				n=n-1;
			}
		}
		else if(e.keyCode == 40 || e.keyCode == 34){ // 40 : 아래 방향키 , 카테고리 번호가 높아집니다. (4)
			if(n < 6){
				n=n+1;
			}
		}
		t=(-1)*n*h;

		$(".section").animate({top:t},500, function(){
			$(".aside .item").removeClass("on");
			$(".aside .item").eq(n).addClass("on");
			if(n != 0){
				$(".header .nav").addClass("on");
			}
			else{
				$(".header .nav").removeClass("on");
			}
		});
	});

	// 4) mousewheel event : UI 고지가 필요합니다. jQuery mousewheel CDN이 필요합니다.
	$(".wrapper").mousewheel(function(e,delta){
		// e 는 이벤트가 발생될 때 자동 생성되는 객체입니다.
		// delta 는 마우스 휠 이벤트가 발생될 때 생성되는 위치 정보입니다.
		console.log("mousewheel event : "+delta);

		var direction="";

		if($(".section").is(":animated")){
			return;
		}

		if(delta > 0){ // if(delta ==1)
			direction="up";
		}
		else{
			direction="down";
		}

		if(direction == "up"){ // 위로 올리면 카테고리 번호가 낮아집니다.
			if(n > 0){
				n=n-1;
			}
		}
		else if(direction == "down"){ // 아래로 내리면 카테고리 번호가 높아집니다.
			if(n < 6){
				n=n+1;
			}
		}
		t=(-1)*n*h;

		$(".section").animate({top:t},500, function(){
			$(".aside .item").removeClass("on");
			$(".aside .item").eq(n).addClass("on");
			if(n != 0){
				$(".header .nav").addClass("on");
			}
			else{
				$(".header .nav").removeClass("on");
			}
		});

	});
});
