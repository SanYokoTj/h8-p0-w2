Exercise 12: Konversi Menit

function konversiMenit(menit) {
    var min = Math.floor(menit/60);
    var sec = menit%60;
  console.log(min + ": " + sec);
}

var konversiMenit;

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120));