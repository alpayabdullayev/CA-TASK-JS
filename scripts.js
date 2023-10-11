
// 1.1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm

cem = 0

for (let i = 0; i < 100; i++) {
    // if(i % 3 === 0 && i % 5 === 0)
    if( i % 15 === 0 ){  //burda  hem 3e hem 5e bolunen ededleri goturmey lazimdi basa dusmusem 
        cem+=i
    }

}
console.log(cem);





// 3.Verilen ededin sade ve murekkeb oldugunu bildiren algoritm

let eded = 30
let sadedir = true   //burda ne vaxt true sertde ne vaxt false oldugunu heleki tam basa dusmemisem yoxlaya yoxlaya yaziram 

if (eded < 1) {
    console.log("Düzgün daxil edin")
} else if (eded === 1) {
    console.log("1 nə sadə, nə də mürəkkəbdir.")
} else {
    for (let i = 2; i < eded; i++) {
        if (eded % i === 0 && eded/eded===1) {
            sadedir = false
            break
        }
    }
    if (sadedir) {
        console.log("sadedir")
    } else {
        console.log("murekkebdir")
    }
}


// bu altdaki kod niye sehvdir ki????????????????????????????????????????????????????????????????????????????

// let eded = 30
// let sadedir = false   

// if (eded < 1) {
//     console.log("Düzgün daxil edin")
// } else if (eded === 1) {
//     console.log("1 nə sadə, nə də mürəkkəbdir.")
// } else {
//     for (let i = 2; i < eded; i++) {
//         if (eded % i === 0 && eded/eded===1) {
//             sadedir = true
//             console.log("sade ededir");
//             break

//         }
//     }
//     if (!sadedir) {
//         console.log("sade eded deyil")
//     }
// }



// 4.Gelen aylara gore hansi fesil oldugunu bildiren algoritm.Deger Consoledan girilecek.Sabit deger olmayacaq.

let ay = prompt("Ayı daxil edin")

switch(ay) {
    case 'yanvar':
    case 'fevral':
    case 'dekabr':
        console.log("qış");
        break;
    case 'mart':
    case 'aprel':
    case 'may':
        console.log("yaz");
        break;
    case 'iyun':
    case 'iyul':
    case 'avqust':
        console.log("yay");
        break;
    case 'sentyabr':
    case 'oktyabr':
    case 'noyabr':
        console.log("payız");
        break;
    default:
        console.log("Düzgün daxil edin");
        break;
}



// 2.Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm

let n = 16
 if((n != 0) && ((n & (n - 1)) == 0)){  //search elemisem  basa dusdum daha duzgun qaydasini axtarmaga calisiram
    console.log("quvvetidir");
}
else{
    console.log("quvveti deyil");
}
