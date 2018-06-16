 // PRINTOBJECT
 
 // Fare il print() di un oggetto
            function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
            }
