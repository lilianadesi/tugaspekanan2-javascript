// pembuatan variabel readline yang membutuhkan  librari readline
const readline = require('readline');

// pembuatan variabel math yang membutuhkan  librari mathjs
const math = require('mathjs');

// pembuatan variabel rl yang akan menerima inputan user dan menampilkan otput dari proses
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Memproses inputan number dari user dengan memparsing sebagi int data
rl.question('Input number : ', (input_number) => {
  input_number = parseInt(input_number);

// Jika input number kurang dari 0 / intput number ganjil maka akan menampilkan output error
  try {
    if (input_number < 0) {
      throw new Error('Tidak bisa input bilangan negatif');
// Pengecekan bilangan ganjil atau genap menggunakan modulo
    } else if (input_number % 2 === 0) {
      const square_root = math.sqrt(input_number);
      console.log(square_root);
    } else {
      console.log('Tidak bisa input bilangan ganjil');
    }
// Menampilkan error
  } catch (e) {
    console.log(e.message);
  }

// Menutup variable rl 
  rl.close();
});
