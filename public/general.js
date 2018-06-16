// **********
// DEBUG
// **********

// PRINTOBJECT
 // Fare il print() di un oggetto
            function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
            }


// **********
// DATABASE
// **********

// RETRIEVES DATE FROM TIMESTAMP
// var timeStr = "2010-01-13T18:31:16Z";
function dateFromTimestamp(timeStr) {
	var date = new Date(timeStr);
	var day = date.getDate();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var dateStr = day + "/"+ month + "/" + year;
	
	return dateStr;
	} 
