const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("*".repeat(100))
alert("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
function entrepreneurs70(entrepreneur) {
  return entrepreneur.year < 1980 && entrepreneur.year > 1969
}
console.log(entrepreneurs.filter(entrepreneurs70));

console.log("*".repeat(100))
alert("Sors un array qui contient le prénom et le nom des entrepreneurs")
console.log("Sors un array qui contient le prénom et le nom des entrepreneurs")
let name = entrepreneurs.map(a => a.first + " " + a.last)
console.log(name)



console.log("*".repeat(100))
alert("Quel âge aurait chaque inventeur aujourd'hui ?")
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.map(a => { console.log(a.first + " " + a.last + " : " + (2019-a.year) + " ans")
});


console.log("*".repeat(100))
alert("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
function compare( a, b ) {
  if ( a.last < b.last){
    return -1;
  }
  if ( a.last > b.last){
    return 1;
  }
  return 0;
}
console.log(entrepreneurs.sort(compare))
