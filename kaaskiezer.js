
var geel = (prompt ('is de kaas geel'));



if(geel =='ja'){
	var gaten = (prompt('zitten er gaten in?'))
	if (gaten == 'ja')
		var duur = (prompt('is de kaas belagelijk duur?'))
	if (duur == 'ja')
		alert('het is een emmenthaler')
	if (duur == 'nee')
		alert('het is een leerdammer')
	if (gaten == 'nee')
		var steen = (prompt('is de kaas hard als steen'))
	if (steen == 'ja')
		alert('het is een Pamigiano Regiano')
	if (steen == 'nee')
		alert('het is goudse kaas')

} 

if (geel =='nee'){
	var schimmel = (prompt('Heeft de kaas blauwe schimmel?'))
	if (schimmel == 'ja')
		var korst = (prompt('heeft de kaas een harde korst?'))
	
}

