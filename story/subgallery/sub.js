var picCountA=47;
var picCountP=69;
var picCountT=7;

var together = document.getElementById('idT');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'images/3-'+k+'.jpg';
	together.append(loadT);
}