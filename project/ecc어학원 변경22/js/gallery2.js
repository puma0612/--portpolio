$(function(){
	var $galleryMoving=$(".campus_wrap_moving"); // 이동 갤러리의 참조입니다.
	var $controlls=$(".campus_pager"); // 컨트롤 버튼의 참조입니다.
	// var $left=$(".direction .left"); // 왼쪽 버튼의 참조입니다.
	// var $right=$(".direction .right"); // 오른쪽 버튼의 참조입니다.
	var galleryNum=3; // 갤러리 이미지 개수입니다.

	var n=0;
	var pos;

	$controlls.find("li").eq(n).find("a").addClass("active");

	$controlls.find("a").click(function(e){
		e.preventDefault();
		$controlls.find("li").removeClass("active");
		$(this).parent().addClass("active");

		n=$(this).parent().index();
		pos=n*-1*100+"%";
		$galleryMoving.animate({left:pos}, 600);
	});
});
