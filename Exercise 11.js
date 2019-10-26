Exercise 11: Logic Challenge - Balik Kata

function balikKata(kata) {
  var katabaru = "";
  for (var i = kata.length - 1;i >= 0; i--) {
    katabaru += kata[i]; }
  return katabaru;
}

var balikKata;

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));