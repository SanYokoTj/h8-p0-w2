Exercise 6: Berlatih Perulangan di JavaScript

//1. Melakukan Looping Menggunakan "While"

//LOOPING PERTAMA

var num = 2;
while(num <= 20) {
  console.log(num + ' - I love coding')
  num += 2;
}

//LOOPING KEDUA

var num = 20;
while(num > 0) {
  console.log(num + ' - I will become fullstack developer')
  num -= 2;
  }

//2. Melakukan Looping Menggunakan "For"

//LOOPING PERTAMA

var num = 20
for (var i = 1; i <= num; i++) {
    console.log(i + ' - I love coding');
}

//LOOPING KEDUA

var num = 0
for (var i = 20; i > num; i--) {
  console.log(i + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap

// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

var num = 1;
for (i = num; i <= 100; i++) {
  if((i % 2) == 0) {
    console.log('GENAP');
  }
  else {
    console.log('GANJIL');
  }
}

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan: "3 kelipatan 3" dan seterusnya.

// Untuk pertambahan counter 2

var num = 1;
for (i = 1; i <= 100; i += 2) {
  var counter = i;
  if((counter % 3) == 0) {
    console.log(i +' Kelipatan ' + i);
  }
}

// Untuk pertambahan counter 6

var num = 1;
for (i = 1; i <= 100; i += 5) {
  var counter = i;
  if((counter % 6) == 0) {
    console.log(i +' Kelipatan ' + i);
  }
}

// Untuk pertambahan counter 10

var num = 1;
for (i = 1; i <= 100; i += 9) {
  var counter = i;
  if((counter % 10) == 0) {
    console.log(i +' Kelipatan ' + i);
  }
}


