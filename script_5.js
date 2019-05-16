const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
]

// console.log("*".repeat(100))
// alert("Est-ce que tous les livres ont été au moins empruntés une fois ?")
// console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

function emprunt(livre) {
  return livre.rented < 0
}
if (books.filter(emprunt) == true){
  console.log("Tous les livres n'ont pas été empruntés")
}else{
  console.log("Tous les livres ont été empruntés")
}

// console.log("*".repeat(100))
// alert("Quel est le livre le plus emprunté ?")
// console.log("Quel est le livre le plus emprunté?")
books.sort(function (a, b) {
    return a.rented - b.rented
})

var max = books[books.length - 1]
console.log("Le livre le plus emprunté :")
console.log(max)

// console.log("*".repeat(100))
// alert("Quel est le livre le moins emprunté ?")
// console.log("Quel est le livre le moins emprunté ?")

var min = books[0]
console.log("Le livre le moins emprunté :")
console.log(min)

// console.log("*".repeat(100))
// alert("Trouve le livre avec l'ID: 873495")
// console.log("Trouve le livre avec l'ID: 873495 ")
function idFind(livre) {
  return livre.id == 873495
}
console.log("Le livre avec l'ID: 873495 est :")
console.log(books.filter(idFind))

// console.log("*".repeat(100))
// alert("Supprime le livre avec l'ID: 133712 ")
// console.log("Supprime le livre avec l'ID: 133712 ;")

for( var i = 0; i < books.length; i++){
  if ( books[i].id == 133712) {
    books.splice(i, 1);
  }
}
console.log("Le livre avec l'id 133712 a bien été supprimée, voici la nouvelle liste:")
console.log(books);

// console.log("*".repeat(100))
// alert("Trie les livres par ordre alphabétique.")
// console.log("Trie les livres par ordre alphabétique.;")

function compare( a, b ) {
  if ( a.title < b.title){
    return -1;
  }
  if ( a.title > b.title){
    return 1;
  }
  return 0;
}
console.log(books.sort(compare))
