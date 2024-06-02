var picCountA=9;
var picCountP=1;
var picCountT=0;

var activity = document.getElementById('idA');
for(var i = 1 ; i <= picCountA; i++){
	var loadA = document.createElement('img');
	loadA.src = 'images/1-'+i+'.jpg';
	activity.append(loadA);
}

var past = document.getElementById('idP');
for(var j = 1 ; j <= picCountP; j++){
	var loadP = document.createElement('img');
	loadP.src = 'images/2-'+i+'.jpg';
	past.append(loadP);
}

var together = document.getElementById('idT');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'images/3-'+i+'.jpg';
	together.append(loadT);
}