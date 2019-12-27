var tanya = true;
while (tanya) {
//tentukan pilihan pemain
var pemain=prompt('pilih : batu, gunting, kertas')

//tentukan pilihan komputer
var computer=Math.random()*3;
var comp=""
if (computer < 1) {
    comp = "batu";
}
else if ( computer >= 1 && computer < 2){
    comp = "gunting";
}
else {
    comp = "kertas";
}
console.log(comp);
//rule
var hasil ="";
if (pemain == comp) {
    hasil="seimbang"
} else if (pemain == "batu") {
    hasil = (comp == "gunting") ? "menang" : "kalah";
} else if (pemain == "gunting") {
    hasil = (comp == "kertas") ? "menang" : "kalah";
} else if (pemain == "kertas") {
    hasil = (comp == "batu") ? "menang" : "kalah";
} else {
    hasil = "pilihan yang kamu masukan salah"
}
// loopnya
alert ("kamu memilih " + pemain + " dan komputer memilih " + comp + " jadi hasilnya kamu " + hasil)

tanya = confirm ("ingin bermain lagi?")
}
alert ("terima kasih sudah berkunjung")