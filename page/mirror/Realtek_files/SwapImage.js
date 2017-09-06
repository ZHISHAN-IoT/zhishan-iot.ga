var secs;
var timerID = null;
var timerRunning = false;
var delay = 1000;


//´«¹Ïscript
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
    
    //Refresh Timer
    secs = 1140;
    StopTheClock();
    StartTheTimer();
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//Timer Start
function StopTheClock()
{
    if(timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}

function StartTheTimer()
{
    if (secs==0)
    {
        StopTheClock();
        //alert("test");
        Form1.submit();
    }
    else
    {
        //self.status = secs;
        secs = secs - 1;
        timerRunning = true;
        timerID = self.setTimeout("StartTheTimer()", delay);
    }
}
//Timer end


//ª¬ºA¦CÁôÂÃ
function scroll(seed)
{
	var msg=""; 
	var out = " ";
	var c = 1;

	if (seed > 100) {
		seed--;
		var cmd="scroll(" + seed + ")";
		timerTwo=window.setTimeout(cmd,100);
	}
	else if (seed <= 100 && seed > 0) 
	{
		for (c=0 ; c < seed ; c++)
		{
			out+=" ";
		}
		
		out+=msg;
		seed--;
		var cmd="scroll(" + seed + ")";
		window.status=out;
		timerTwo=window.setTimeout(cmd,100);
	}		
	else if (seed <= 0) 
	{
		if (-seed < msg.length) {
			out+=msg.substring(-seed,msg.length);
			seed--;
			var cmd="scroll(" + seed + ")";
			window.status=out;
			timerTwo=window.setTimeout(cmd,100);
		}
		else 
		{
			window.status=" ";
			timerTwo=window.setTimeout("scroll(50)",7);
		}
	}
}

//timerONE=window.setTimeout('scroll(50)',50);