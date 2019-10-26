Exercise 7: Perulangan - Play with Asterisks

//1. Menyusun Barisan Bintang

var rows1 = 5;
var i = 0;
while (i < rows1) {
  console.log('*');
  i++
}

//2. Menyusun Barisan Bintang dengan Nested Looping

var rows2 = 5;
var i = 0;

while (i < rows2) {
  var asterisks = '*';
  var j = 1;
  while (j < rows2) {
  asterisks = asterisks + '*'
  j++ ;
  }
  console.log(asterisks);
  i++ ;
}

//3. Menyusun Barisan Tangga Bintang dengan Nested Looping

var rows3 = 5;
var i = 0;

while (i < rows3) {
  var asterisk = '*';
  var j = 0;
  while (j < i) {
  asterisk = asterisk + '*'
  j++ ;
  }
  console.log(asterisk);
  i++ ;
}