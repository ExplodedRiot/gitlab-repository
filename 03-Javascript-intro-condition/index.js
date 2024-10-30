//soal1
let muhammalifananda;
console.log(muhammalifananda)

//soal2
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word + ' ' + second + ' ' + third; 
console.log(outputGabunganVariable); 

//soal3
let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello}${world}`;
console.log(output); 

//soal4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

panjangPersegiPanjang = parseInt(panjangPersegiPanjang);
lebarPersegiPanjang = parseInt(lebarPersegiPanjang);

let kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);

console.log(kelilingPersegiPanjang); 

//soal5
let sentences = 'wah javascript itu keren sekali'; 

let firstWords = sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 15); 
let thirdWords = sentences.substring(16, 19); 
let fourthWords = sentences.substring(20, 25); 
let fifthWords = sentences.substring(26);

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);


//soal6
var sentence = "I am going to be React JS Developer"; 
var words = sentence.split(' '); 

var exampleFirstWord = words[0]; 
var exampleSecondWord = words[1]; 
var thirdWord = words[2]; 
var fourthWord = words[3]; 
var fifthWord = words[4]; 
var sixthWord = words[5]; 
var seventhWord = words[6]; 
var eighthWord = words[7]; 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

//soal7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); 

console.log(hasil);

//soal8
var nilaiDoe = 50;
var indeks;

if (nilaiDoe >= 80) {
    indeks = 'A';
} else if (nilaiDoe >= 70) {
    indeks = 'B';
} else if (nilaiDoe >= 60) {
    indeks = 'C';
} else if (nilaiDoe >= 50) {
    indeks = 'D';
} else {
    indeks = 'E';
}

console.log('Indeks nilai: ' + indeks); 


//soal9
let angka = 2;

console.log(angka === 2 ? "angka nya 2" : "bukan angka 2");

//soal10
var traffic_lights = "red";

switch (traffic_lights) {
    case "red":
        console.log("berhenti");
        break;
    case "yellow":
        console.log("hati-hati");
        break;
    case "green":
        console.log("berjalan");
        break;
    default:
        console.log("warna tidak dikenali");
}
