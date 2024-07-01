var picCountA=27;
var picCountP=42;
var picCountT=6;

var together = document.getElementById('idT');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'images/3-'+k+'.jpg';
	together.append(loadT);
}