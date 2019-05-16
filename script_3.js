var etageTotal = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
var space = " "
var htag = "#"

for (var i=1 ; i<=etageTotal ; i++){
console.log(space.repeat(etageTotal-i) + htag.repeat(i))
}
