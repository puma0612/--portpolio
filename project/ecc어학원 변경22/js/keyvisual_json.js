window.addEventListener("load" , function(){
	var imgpath={
		key1 : "keyvisual2-2.png",
		key2 : "keyvisual5-1.png",
		key3 : "keyvisual3-1.png",
		key4 : "keyvisual4.png",
		key5 : "keyvisual6-1.png",
		key6 : "keyvisual7-1.png",
	}

	var keyInner=document.getElementsByClassName("keyvisual_inner")[0];

	var keyvisual_moving=document.createElement("div")
	keyvisual_moving.setAttribute("class" , "keyvisual_moving")

	var controlls=document.createElement("div")
	controlls.setAttribute("class" , "controlls")


	keyInner.appendChild(keyvisual_moving);
	keyInner.appendChild(controlls);

	var appendHTML="";

	appendHTML+='<ul>\n';

//<li><img src="images/refresh/keyvisual2-2.png" alt=""></li> 그릴이미지

	for(key in imgpath){
		appendHTML+='<li><img src="images/refresh/'+ imgpath[key] +'" alt=""></li>\n';
	}

	appendHTML+='</ul>';

	keyvisual_moving.innerHTML=appendHTML;

/////////////////////////////////////////////////////////

	var n=0;
	var controllHTML="";

	controllHTML+='<ul>\n';

	for(key in imgpath){
		n=n+1;
		controllHTML+='<li><a href="">'+ n +'</a></li>\n';
	}

	controllHTML+='</ul>';
	console.log(controllHTML);

	controlls.innerHTML=controllHTML;
});
