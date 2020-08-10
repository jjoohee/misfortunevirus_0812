//흉둥이
cell1.onclick = function(){
	bodyy.style.position = "relative";
}

//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t
}