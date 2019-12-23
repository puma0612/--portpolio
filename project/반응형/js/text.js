$(function(){
	// $(document).ready(function(){
	// 	var typewriter = document.querySelector(".key_text h3")
	// 	var code = typewriter.innerHTML;
	// 	var i = 0;
	// 	typewriter.innerHTML = "";
	// 		typeWriting();
	// 		function typeWriting() {
	// 		if (i <= code.length) {
	// 		typewriter.innerHTML = code.slice(0, i++) + '';
	// 		setTimeout(typeWriting,100);
	// 		}
	// 	}
	// });
	$("#page3 .banner li:nth-child(1)").mouseenter(function(){
		$("#page2 .service_menu li a").addClass("active");
	});
	$("#page2 .service_menu li a").mouseleave(function(){
		$("#page2 .service_menu li a").removeClass("spin")
	});
});
