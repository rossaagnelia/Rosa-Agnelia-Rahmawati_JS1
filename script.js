// Hii i'm Rosa Agnelia Rahmawati


// ini adalah contoh penggunaan if else
console.log("Penggunaan for :")
let age = 21;
if (age >= 18) {
  console.log("Umur Rosa "+age+", Rosa adalah orang dewasa.");
} else {
  console.log("Umur Rosa "+age+"Rosa Adalah anak kecil.");
}


//ini adalah contoh penggunaan nested if
console.log("  ")
console.log("Penggunaan Nested if :")
let umur = 17;
if (umur < 11){
    console.log("Umur Rosa "+umur+", Rosa Adalah anak kecil.")
} else if (umur >= 11 && umur <18){
    console.log("Umur Rosa "+umur+", Rosa Adalah anak Remaja.")
} else if (umur >= 18 && umur <60){
    console.log("Umur Rosa "+umur+", Rosa Adalah anak Dewasa.")
} else {
    console.log("Umur Rosa "+umur+", Rosa Adalah Lansia.")
}


//ini adalah contoh penggunaan switch case
console.log("  ")
console.log("Penggunaan Switch Case :")
let text;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
      console.log("Ini Adalah Hari Kerja");
      break;
    case 5:
      console.log("Ini adalah hari terakhir sebelum akhir pekan");
      break;
    default:
      console.log("Ini adalah hari libur atau akhir pekan")
  }


//ini adalah contoh penggunaan for statement
console.log("  ")
console.log("Penggunaan for statement :")
let buah = ["Mangga", "Apel", "Pir", "Leci", "Markisa", "Manggis"];
for (let i = 0; i < buah.length; i++) {
  console.log("Ini merupakan buah " +buah[i])
}


//ini adalah contoh penggunaan while
console.log("  ")
console.log("Penggunaan While statement :")
let Hewan = ["Kucing", "Anjing", "Sapi", "Ayam", "Monyet", "Gajah"];
let i=0;
while(Hewan[i]){
  console.log("Ini merupakan hewan "+Hewan[i])
  i++
}


//ini adalah contoh penggunaan do while
console.log("  ")
console.log("Penggunaan Do While statement :")
let makanan = ["Donat", "Somay", "Sate", "Pisang Goreng", "Risol", "Bika"];
let n=0;

do{
  console.log("Ini merupakan makanan "+makanan[n])
  n++;
} while(makanan[n])


//ini adalah contoh penggunaan Function
console.log("  ")
console.log("Penggunaan Function :")

function kali(a,b){
  hasil=a*b;
  return hasil
}

let angka = 245;
let angka1 = 1256;
let hasilkali = kali(angka,angka1);
console.log("Hasil dari 245 X 1256 = "+hasilkali);