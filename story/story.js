var picCountA=9;
var picCountP=1;
var picCountT=0;

var activity = document.getElementById('activity');
for(var i = 1 ; i <= picCountA; i++){
	var loadA = document.createElement('img');
	loadA.src = 'subgallery/images/1-'+i+'.jpg';
	activity.append(loadA);
}

var past = document.getElementById('past');
for(var j = 1 ; j <= picCountP; j++){
	var loadP = document.createElement('img');
	loadP.src = 'subgallery/images/2-'+i+'.jpg';
	past.append(loadP);
}

var together = document.getElementById('together');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'subgallery/images/3-'+i+'.jpg';
	together.append(loadT);
}