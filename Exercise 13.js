Exercise 13: Logic Challenge - X dan O

function xo(str) {
 if (str.split('o').length-1 !== str.split('x').length-1) {return false} 
  else {return true}
}

var xo;

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));