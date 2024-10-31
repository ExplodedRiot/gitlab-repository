//soal1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//soal2
for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//soal3
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//soal4
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

//soal5
let array2 = [5, 2, 4, 1, 3, 5];
array2.sort((a, b) => a - b);
console.log(array2);

//soal6
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

//soal7
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
        console.log(array4[i]);
    }
}

//soal8
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
let hasil = kalimat.join(" ");
console.log(hasil);

//soal9
var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);
