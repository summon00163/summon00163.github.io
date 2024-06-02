// JavaScript Document
$.get("news.html",function(data){
	$(".newscontent").load("news.html .main");
});
$.get("story/say.html",function(data){
	$(".saycontent").load("story/say.html .saying");
});
function randint(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max)+1;
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
var max=0;
var typ=randint(1,3);
var show=document.getElementById('show');
var showIndex=document.getElementById('showIndex');
if(typ===1){
	var max=9;
}
else if(typ===2){
	var max=1;
}
var picCount=randint(1,max);
var load = document.createElement('img');
load.src='story/subgallery/images/'+typ+'-'+picCount+'.jpg';
show.append(load);
alert(load);
showIndex.append(load);