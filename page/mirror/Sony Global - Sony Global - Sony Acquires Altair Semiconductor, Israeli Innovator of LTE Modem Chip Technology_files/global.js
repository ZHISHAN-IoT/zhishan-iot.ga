//--------- CSS protection for NS ---------------------------
if (navigator.appName=="Netscape" && parseInt(navigator.appVersion)==4) {
	widthCheck = window.innerWidth
	heightCheck = window.innerHeight
	window.onResize = resizeFix
}
function resizeFix() {
	if (widthCheck != window.innerWidth || heightCheck != window.innerHeight)
	document.location.href = document.location.href
}
// mouse over actions-----------------------------------
/*function changeGn(name,flag) {
	if (document.images){document.images[name].src=eval("tabImg['"+name+flag+"'].src");}
}
function changeLine(flag) {
	if (document.images){document.images['gnline'].src=gnLineImg[flag].src;}
}*/

//--------- popup  ---------------------------
function openwin(page,wname,w,h){
	win_set = 'toolbar=no,location=0,directories=no,status=yes,menubar=0,scrollbars=no,resizable=no,width='+w+',height='+h;
	swin = window.open(page,wname,win_set);

}
