$.get("subgallery/activity.html",function(data){
	$(".activitygallerycontent").load("subgallery/activity.html .main");
});
$.get("subgallery/past.html",function(data){
	$(".pastgallerycontent").load("subgallery/past.html .main");
});
$.get("subgallery/activity.html",function(data){
	$(".togethergallerycontent").load("subgallery/together.html .main");
});