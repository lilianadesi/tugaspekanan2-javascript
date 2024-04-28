// pembuatan variabel fs(file sistem) yang membutuhkan  librari fs
const fs = require('fs');

// open dan read file data.json
const jsonData = fs.readFileSync('data.json', 'utf8');

// parismh data dari file data.json ke dalam json format
const data = JSON.parse(jsonData);


//  Untuk memfilter data mencari productCode FBR00040101
const filteredData = data.productBin.data.filter(item => item.productCode === 'FBR00040101');

// Melakukan perhitungan qty dari data yang sudah di filter
const totalQuantity = filteredData.reduce((acc, curr) => acc + curr.quantity, 0);

// Untuk menampilkn hasil total quantity productCode FBR00040101
console.log("Total Quantity=", totalQuantity);