Exercise 3: Mengenal Penggunaan Conditional if-else dalam JavaScript

var nama = 'Yoko'
var peran = 'Ksatria'

if(nama === '' && peran === '') {
  console.log("Nama dan peran harus diisi!");
}
else if(peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu.");
}
else if(peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
}
else if(peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, "+nama+"\nHalo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}
else {
  console.log("Halo "+nama+", pilih peranmu untuk memulai game!");
}