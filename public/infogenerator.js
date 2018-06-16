
function randomStr(m) {
	var m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
	return s;
}
function fillCoords(length){
	var multip = Math.pow(10,length);
	var randnum = Math.floor(Math.random() * multip);
	return randnum;
}
function randomIntFromInterval(min,max,decimals)
{
  return Number((Math.random()*(max-min)+min).toFixed(decimals));
}
// Area limits (Roma):
// - top-left: 41.9999999, 12.3999999
// - bot-right: 41.7999999, 12.6599999
var coordX = randomIntFromInterval(41.8000000,41.9999999,7);
var coordY = randomIntFromInterval(12.3999999,12.6599999,7);
// retrieves date  from timestamp
// var timeStr = "2010-01-13T18:31:16Z";
function dateFromTimestamp(timeStr) {
	var date = new Date(timeStr);
	var day = date.getDate();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var dateStr = day + "/"+ month + "/" + year;
	
	return dateStr;
	} 
	
	// random number 1-10	
	var theRate = Math.floor(Math.random() * 10)+1; 
