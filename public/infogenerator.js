
// generates a random string
function randomStr(m) {
	var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
	return s;
}

// 
function fillCoords(length){
	var multip = Math.pow(10,length);
	var randnum = Math.floor(Math.random() * multip);
	return randnum;
}

// GENERATES RANDOM COORDINATES FROM EXTREME POINTS
// example:
// Area limits (Roma):
// var coordX = randomIntFromInterval(41.8000000,41.9999999,7);
// var coordY = randomIntFromInterval(12.3999999,12.6599999,7);

// GENERATES A RANDOM INTERVAL NUMBER WITH DECIMALS
function randomIntFromInterval(min,max,decimals)
{
  return Number((Math.random()*(max-min)+min).toFixed(decimals));
}

// GENERATES A RANDOM INT	
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  /*
  // HOW TO PASS VARIABLES TO A INPUT FORM
  $(document).ready( function() {
	$( "input[name='coordx']" ).val(coordX);
	$( "input[name='coordy']" ).val(coordY);
	$( "input[name='rate']" ).val(theRate); 
	
		
}); // fine document.ready
*/


