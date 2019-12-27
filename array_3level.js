var univ=["BRAWIJAYA","NEGERI SURABAYA","ITS"]; //pertama buat nama univnya
var fakultas=[
    ["Hukum","Kedokteran","Pertanian"], //kedua membuat fakultas setiap univ
    ["Akuntansi","Matematika","Hukum"],
    ["Ilmu Alam","Teknologi Kelautan","Informatika"]
];
var nama=[[
    ["adi","budi","kuri"],
    ["anton","bedi","kari"],
    ["botin","budiono","ria"]],[ //brawijaya
    ["danto","koile","korei"],
    ["ai","jody","vilda"],
    ["kei","rei","leo"]],[ //unesa
    ["kaori","adi","kirana"],
    ["halimah","inas","kutiah"],
    ["ani","budi","leonard"]] //ITS
];

var a = 0;
while (a < 3) {
    console.log ("UNIVERSITAS"+ " " + univ [a]); // membuat peraturan untuk memanggil variabel universitas
for (var b = 0; b < 3;b++) { //membuat rule untuk memanggil var fakultas dengan 2 level depth array
    console.log ("Fakultas" + " "+ fakultas [a][b] + ": \n" + "Nama Mahasiswa : \n ");
    for (var k=0; k < 3;k++){ //membuat rule untuk memanggil var nama dengan 3 level depth array
        console.log ((k+1) + ". " + nama[k][b][a]);
    }
    console.log ("\n")
}
a++
}