$(function(){
   var $contenedor = $('#contenedor'),
		  $abrir = $('#abrir'),
		  $carta = $('#carta'),
      $cara = $('.cara').find('h1'),
      $icon = $('.icon-cancel'),
      $pers = $('#Perspectiva');

  	setTimeout(function(){
			abrir();
		}, 1500);

		$cara.on('click', function(){
			abrir();
			return false;
		});

		$icon.on('click', function(){
			cerrar();
			return false;
		});

		function abrir(){
			$contenedor.removeClass('rotar_').addClass('rotar');
			$abrir.removeClass('tapa_').addClass('tapa');
			$carta.removeClass('bajarTop_').addClass('bajarTop');
			$pers.removeClass('subirTop_').addClass('subirTop');
		}

		function cerrar(){
			$contenedor.removeClass('rotar').addClass('rotar_');
			$abrir.removeClass('tapa').addClass('tapa_');
			$carta.removeClass('bajarTop').addClass('bajarTop_');
			$pers.removeClass('subirTop').addClass('subirTop_');
		}
});
























// <![CDATA[
var colour="random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles=50;

/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y+1)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    starx[i]+=(i%5-2)/5;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    tinyx[i]+=(i%5-2)/5;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  return (div);
}

function newColour() {
  var c=new Array();
  c[0]=255;
  c[1]=Math.floor(Math.random()*256);
  c[2]=Math.floor(Math.random()*(256-c[1]/2));
  c.sort(function(){return (0.5 - Math.random());});
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}
var speed=40; // lower number for faster
var flakes=33; // number of flakes falling at a time
var untidy=8; // how often do you want the flakes tidied up (high number is less often)
var sizes=36; // maximum size of flakes in pixels
var colour='#f7f7f7'; // colour of the snowflakes

/****************************\
*Winter Snow Flakes Effect #3*
*  (c)2013 mf2fm web-design  *
*  http://www.mf2fm.com/rv   *
* DO NOT EDIT BELOW THIS BOX *
\****************************/

var boddie;
var dx=new Array();
var xp=new Array();
var yp=new Array();
var am=new Array();
var dy=new Array();
var le=new Array();
var fs=new Array();
var flaky=new Array();
var swide=480;
var shigh=320;
var sleft=0;
var starty=0;
var offset=0;
var tidying=0;
var deeex=0;
var has_focus=true;
var snowflakes=new Array(8727, 10016, 10033, 10035, 10036, 10037, 10038, 10042, 10043, 10044, 10045, 10046, 10051, 10052, 10053, 10054, 10055, 10056, 10057, 10058, 10059);
var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;
var plow=document.createElement("img");
plow.src='';

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(december_21);

function december_21() { if (document.getElementById) {
  var i;
  if (ie_version) {
    document.onfocusin=function(){has_focus=true;};
    document.onfocusout=function(){has_focus=false;sleft=0;};
  } 
  else {
    window.onfocus=function(){has_focus=true;};
    window.onblur=function(){has_focus=false;sleft=0;};
  }
  window.onscroll=set_scroll;
  window.onresize=set_width;
  document.onmousemove=mouse;
  boddie=document.createElement("div");
  boddie.style.position="fixed";
  boddie.style.bottom="0px";
  boddie.style.left="0px";
  boddie.style.width="100%";
  boddie.style.overflow="hidden";
  boddie.style.backgroundColor="transparent";
  boddie.style.pointerEvents="none";
  boddie.style.zIndex="0";
  document.body.insertBefore(boddie, document.body.firstChild); 
  set_width();
  plow.style.position="absolute";
  plow.style.overflow="hidden";
  plow.style.zIndex=9999;
  plow.style.bottom="0px";
  plow.style.left="-144px";
  boddie.appendChild(plow);
  for (i=0; i<flakes; i++) freeze_ice(Math.random()*shigh*3/4);
  offset=0;
  setInterval("winter_flakes()", speed);
}}

function freeze_ice(whyp) {
  starty++;
  offset++;
  var f, t;
  start_fall(starty, whyp);
  f=document.createElement("div");
  t=document.createTextNode(String.fromCharCode(snowflakes[starty%snowflakes.length]));
  f.appendChild(t);
  t=f.style;
  t.color=colour;
  if (ie_version && ie_version<10) t.filter="glow(color="+colour+",strength=1)";
  else if (ie_version) t.boxShadow="0px 0px 2x 2px "+colour;
  else t.textShadow=colour+' 0px 0px 2px';
  t.font=fs[starty]+"px sans-serif";
  t.position="absolute";
  t.zIndex=1000+starty;
  t.top=yp[starty]+"px";
  t.left=xp[starty]+"px";
  t.lineHeight=fs[starty]+"px";
  flaky[starty]=f;
  boddie.appendChild(f);
}
  
function start_fall(i, whyp) {
  fs[i]=Math.floor(sizes*(.25+.75*Math.random()));
  dx[i]=Math.random();
  am[i]=8+Math.random()*sizes*.75;
  dy[i]=1+Math.random()*2;
  xp[i]=Math.random()*(swide-fs[i]);
  yp[i]=whyp-fs[i];
  le[i]='falling';
}

function set_width() {
  var sw, sh;
  if (typeof(window.innerWidth)=='number' && window.innerWidth) {
    sw=window.innerWidth;
    sh=window.innerHeight;
  }
  else if (document.compatMode=="CSS1Compat" && document.documentElement && document.documentElement.clientWidth) {
    sw=document.documentElement.clientWidth;
    sh=document.documentElement.clientHeight; 
  }
  else {
    sw=document.body.clientWidth;
	sh=document.body.clientHeight;
  }
  if (sw && sh && has_focus) {
    swide=sw;
    shigh=sh;
  }
  boddie.style.height=shigh+"px";
}

function winter_flakes() {
  var i;
  var c=0;
  for (i=0; i<starty; i++) {
    if (flaky[i] && le[i]!='tidying') {
		if (yp[i]>shigh || xp[i]>swide || xp[i]<-fs[i]) {
		  if (offset>0) offset--;
		  boddie.removeChild(flaky[i]);
		  flaky[i]=false;
		}
		else if (yp[i]+offset/flakes<shigh-0.7*fs[i]) {
		  yp[i]+=dy[i];
		  dx[i]+=0.02+Math.random()/20;
		  xp[i]+=deeex;
		  flaky[i].style.top=yp[i]+"px";
		  flaky[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
		}
		else if (le[i]=='falling') le[i]='landed';
	}
	if (flaky[i] && le[i]=='falling') c++;
  }
  if (c<flakes) freeze_ice(0);
  if (offset>untidy*flakes && !tidying && Math.random()<.05) tidy_flakes();
}

function tidy_flakes() {
  var i;
  tidying=true;
  for (i=swide; i>=-146; i-=2) setTimeout('plough('+i+')', speed*(swide-i));
  setTimeout('tidying=false; offset=0;', speed*(swide-i));
}

function plough(x) {
  var i, p;
  plow.style.left=x+"px";
  for (i=0; i<starty; i++) {
    if (flaky[i] && le[i]!='falling') {
	  p=xp[i]+fs[i]+am[i]*Math.sin(dx[i])-dy[i];
	  if (p<0) {
	    boddie.removeChild(flaky[i]);
		flaky[i]=false;
	  }
	  else if (p>x && p<x+3.5) {
	    le[i]='tidying';
	    xp[i]-=2;
	    if (Math.random()<.1) {
		  yp[i]--;
		  flaky[i].style.top=yp[i]+"px";
	    }
	    flaky[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
	  }
	  else if (p>x+144 && yp[i]<shigh-0.7*fs[i]) {
  	    yp[i]+=dy[i];
		dx[i]+=0.02+Math.random()/10;
		flaky[i].style.top=yp[i]+"px";
		flaky[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
	  }
	}
  }
}

function set_scroll() {
  if (typeof(self.pageXOffset)=='number' && self.pageXoffset) sleft=self.pageXOffset;
  else if (document.body && document.body.scrollLeft) sleft=document.body.scrollLeft;
  else if (document.documentElement && document.documentElement.scrollLeft) sleft=document.documentElement.scrollLeft;
  else sleft=0;
}

function mouse(e) {
  var x;
  if (e) x=e.pageX;
  else {
	x=event.x;
    set_scroll();
    x+=sleft;
  }
  deeex=has_focus?Math.floor(-1+3*(x-sleft)/swide):0;
}
// ]]>

