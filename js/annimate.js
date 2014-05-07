var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "");
};//フォク助の写真を指定しフリップを終わらせる

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.setAttribute("class", "flip");
	foxkeh.addEventListener("animationend", endFlipFoxkeh);


};//フォク助の写真を指定し、スライドインをやめ、フリップという動作を行う。そしてendFlipFoxkehに移る

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//フォク助の写真を指定し、スライドインという動作を行う。そしてendSlideinFoxkehAndStartFlipFoxkehというイベントに移る

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//ボタンを指定し、ボタンをクリックするとstartSlideinFoxkehというイベントに移る