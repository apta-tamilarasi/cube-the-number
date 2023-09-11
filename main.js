var s=parseInt(prompt("Enter starting value"))
var e=parseInt(prompt("Enter ending value"))

for(i=s; i<=e; i++){
	var cube=i**3
	document.write(`Given number is ${i} <br>`)
	document.write(`Cube of the number = ${cube}<br><br>`)

}