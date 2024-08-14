// JavaScript Document
$.get("news.html",function(data){
	$(".newscontent").load("news.html #container");
});
$.get("story/say.html",function(data){
	$(".saycontent").load("story/say.html .saying");
});
function randint(min, max) {
  var minCeiled = Math.ceil(min);
  var maxFloored = Math.floor(max)+1;
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
var max=0;
var typ=randint(1,3);
var show=document.getElementById('show');
if(typ===1){
	max=picCountA;
}
else if(typ===2){
	max=picCountP;
}
else{
	max=picCountT;
}
var picCount=randint(1,max);
var load = document.createElement('img');
load.src='story/subgallery/images/'+typ+'-'+picCount+'.jpg';
show.append(load);
function isMobile(){
	if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|WebOS|Symbian|Windows Phone)/i)){
		return true;
	}
	else{
		return false;
	}
}
var loc='';
if (isMobile()){
	var loc='/m';
}
window.location.href='https://summon00163.github.io'+loc;