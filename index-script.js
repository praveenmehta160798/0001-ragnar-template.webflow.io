/*Menu Hide By Tap Any Where Start*/
/*
var a = document.querySelector("#home");
var b = document.querySelector("#about");
var c = document.querySelector("#services");
var d = document.querySelector("#projects");
var e = document.querySelector("#contact");

a.addEventListener("click", menuHide);
b.addEventListener("click", menuHide);
c.addEventListener("click", menuHide);
d.addEventListener("click", menuHide);
e.addEventListener("click", menuHide);
function menuHide(){
	navBar.style.right = "-100%";
	hamburger1.style.transform = "rotate(0deg)";
	hamburger1.style.background = "var(--theme-color-4)";
	hamburger3.style.transform = "rotate(0deg)";
	hamburger3.style.background = "var(--theme-color-4)";
	hamburger2.style.width = "100%";
	click = true;
}
*/
/*Menu Hide By Tap Any Where End*/

/*----------------------------------------------------------------------------------------*/

/*Hamburger Start*/
var hamburgerBox = document.querySelector("#header .hamburger-box");
var hamburger1 = document.querySelector("#header .hamburger1");
var hamburger2 = document.querySelector("#header .hamburger2");
var hamburger3 = document.querySelector("#header .hamburger3");
var navBar = document.querySelector("#header .nav-bar");

hamburgerBox.addEventListener("click", hamburgerToggler);
var click = true;
function hamburgerToggler(){
	if(click){
		navBar.style.height = "250px";
		hamburger2.style.width = "0px";
		hamburger1.style.transform = "rotate(-45deg)";
		hamburger3.style.transform = "rotate(45deg)";
		hamburger1.style.bottom = "5px";
		hamburger3.style.bottom = "-7px";
		click = false;
	}
	else{
		navBar.style.height = "0px";
		hamburger2.style.width = "40px";
		hamburger1.style.transform = "rotate(0deg)";
		hamburger3.style.transform = "rotate(0deg)";
		hamburger1.style.bottom = "0px";
		hamburger3.style.bottom = "0px";
		click = true;
	}
}
/*Hamburger End*/

/*----------------------------------------------------------------------------------------*/

/*Auto Type Start*/

/*Auto Type End*/
/*
var keyword = ["Designer", "Developer", "Programmer"];
//var keyword = "Programmer";
var editWord, len;
setInterval(autoType, 150);
var i = len, j = 1, k = 0;
function autoType(){
	len = keyword[k].length;
	if(i == 0){
		k = k + 1;
	}
	if(k > 2){
		k = 0;
	}
	if(i > -1){
		editWord = keyword[k].substr(0,i);
		document.querySelector("#home .auto-type").innerText = editWord;
		//console.log(editWord);
		//console.log(i);
		i--;
		j = 1;
			
	}
	else{
		if(j < len){			
			editWord = keyword[k].substr(0, j);
			document.querySelector("#home .auto-type").innerText = editWord;
			//console.log(editWord);
			//console.log(j);
			j++;
		}
		else{
			i = len;
		}
	}
	
}
/*
var len = keyword.length;
for(var i = len; i > -2; i--){
	if(i == -1){
		for(var j = 1;j < len + 1; j++){			
			backup = keyword.substr(0,j);
			console.log(backup);
		}
	}
	else{
		backup = keyword.substr(0,i);
		console.log(backup);
	}
}
/*Auto Type End*/

/*----------------------------------------------------------------------------------------*/

/*Project Frame Switch Start*/
/*
var projectName = document.querySelectorAll("#projects .project-name");
var iframe = document.querySelector("#projects iframe");

projectName[0].addEventListener("click", frameSwitch1);
function frameSwitch1(){
	iframe.src = "https://praveenmehta160798.github.io/";
}
projectName[1].addEventListener("click", frameSwitch2);
function frameSwitch2(){
	iframe.src = "https://praveenmehta160798.github.io/001---www.sarkariresult.com/";
}

/*Switch Start*/

/*Switch End*/

/*Project Frame Switch End*/

/*Preloader Start

var preloader = document.getElementById("preloader");
window.addEventListener("load", function(){
	preloader.style.display = "none";
})

Preloader End*/

/*Home-Section-2-Image-Hover-Circle Start*/
var hoverArea1 = document.querySelector(".image1");
var hoverArea2 = document.querySelector(".image2");
var hoverArea3 = document.querySelector(".image3");
var hoverArea4 = document.querySelector(".image4");
var hoverArea5 = document.querySelector(".image5");
var circle1 = document.querySelector(".image1 .circle");
var circle2 = document.querySelector(".image2 .circle");
var circle3 = document.querySelector(".image3 .circle");
var circle4 = document.querySelector(".image4 .circle");
var circle5 = document.querySelector(".image5 .circle");

hoverArea1.addEventListener("click", function (mousePosition){
	//circle1.style.display = "block";
	//var x = (mousePosition.clientX - (mousePosition.clientX - mousePosition.layerX));
	//var y = (mousePosition.clientY - (mousePosition.clientY - mousePosition.layerY));
	//circle1.style.transform = "translate(" + (x - 50) + "px," + (y - 50) +"px)";
	console.log("X");d
	console.log(x);
	console.log("Y");
	console.log(y);
	console.log(mousePosition);
});
hoverArea1.addEventListener("mouseout", function(){
	circle1.style.display = "none";
});
/*
// ---------------------------------------------------------------

hoverArea2.addEventListener("mousemove", function (mousePosition){
	circle2.style.display = "block";
	circle2.style.transform = "translate(" + (mousePosition.layerX - hoverArea2.clientWidth) + "px," + (mousePosition.layerY - 50) + "px)";
	//console.log("x = " + mousePosition.clientX + " | y = " + mousePosition.clientY);
	//console.log(mousePosition);
});
hoverArea2.addEventListener("mouseout", function(){
	circle2.style.display = "none";
});

// ---------------------------------------------------------------

hoverArea3.addEventListener("mousemove", function (mousePosition){
	circle3.style.display = "block";
	circle3.style.transform = "translate(" + (mousePosition.layerX - 50) + "px," + (mousePosition.layerY - 50) + "px)";
	//console.log("x = " + (mousePosition.layerX - 50) + " | y = " + mousePosition.layerY);
	//console.log(mousePosition);
});
hoverArea3.addEventListener("mouseout", function(){
	circle3.style.display = "none";
});

// ---------------------------------------------------------------

hoverArea4.addEventListener("mousemove", function (mousePosition){
	circle4.style.display = "block";
	circle4.style.transform = "translate(" + (mousePosition.layerX - 50) + "px," + (mousePosition.layerY - 50) + "px)";
	//console.log("x = " + (mousePosition.layerX - 50) + " | y = " + mousePosition.layerY);
	//console.log(mousePosition);
});
hoverArea4.addEventListener("mouseout", function(){
	circle4.style.display = "none";
});

// ---------------------------------------------------------------

hoverArea5.addEventListener("mousemove", function (mousePosition){
	circle5.style.display = "block";
	circle5.style.transform = "translate(" + (mousePosition.layerX - 50) + "px," + (mousePosition.layerY - 50) + "px)";
	//console.log("x = " + (mousePosition.layerX - 50) + " | y = " + mousePosition.layerY);
	//console.log(mousePosition);
});
hoverArea5.addEventListener("mouseout", function(){
	circle5.style.display = "none";
});
/*Home-Section-2-Image-Hover-Circle End*/