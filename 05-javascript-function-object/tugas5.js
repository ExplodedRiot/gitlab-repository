//soal1
function cetakFunction() {
    return "Hallo Nama saya <Muhammad_Alif_Ananda>";
}

console.log(cetakFunction());

//soal2
function myFunction(a, b) {
    return (a + b).toString();
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);

console.log(output);


//soal3
const Hello = () => {
    return "Hello";
};


//soal4
let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
};

console.log(obj.bahasa);

//soal5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
};

console.log(objDaftarPeserta);

//soal6
let dataBuah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
];

let buahTanpaBijinya = dataBuah.filter(buah => !buah.adaBijinya);

console.log(buahTanpaBijinya);

//soal7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 };
 
 let { name, brand, year } = phone;
 
 console.log(name, brand, year); 

//soal8
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020 
  };
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  };
  
  let objOutput = {};
  
  objOutput = { ...dataBukuTambahan, ...buku };
  
  console.log(objOutput);
  

//soal9
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
};

const functionObject = (param) => {
    return param;
};

console.log(functionObject(mobil));
