// JavaScript Document
$.get("news.html",function(data){
	$(".newscontent").load("news.html .main");
});
$.get("story/say.html",function(data){
	$(".saycontent").load("story/say.html .saying");
});