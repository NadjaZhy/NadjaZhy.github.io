var dollars, curseDol, euro, curseEuro; 
dollars = prompt('Enter dollars');
euro = prompt('Enter euro');
curseDol = 26.472;
curseEuro = 29.045;
var resultDol = curseDol*dollars;
var resultEuro = curseEuro*euro;
var crosscurse = curseEuro/curseDol;
alert( euro +' euros are equal '+ resultEuro.toFixed(3) +' grns, '+ dollars + ' dollars are equal ' + resultDol.toFixed(3)+' grns , one euro is equal '+ crosscurse.toFixed(3) +' dollars. ');