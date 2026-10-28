// 41-masala
// function bolinsin(x, y) {
//     return x % y === 0;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(bolinsin(98, 7));   // true  (98 / 7 = 14, qoldiq 0)
// console.log(bolinsin(85, 4));   // false (85 / 4 = 21.25, qoldiq qoladi)
// ======================================================================================================================
// 42-masala
// function raqam(str) {
//     return Number(str); // Yoki qisqacha +str yozish ham mumkin
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(raqam("6"));     // 6    (number turida)
// console.log(raqam("1000"));  // 1000 (number turida)
// console.log(raqam("12"));    // 12   (number turida)
// =============================================================================================================================
// 43-masala
// function tortYuzi(a, b) {
//     // Agar tomonlardan biri 0 yoki manfiy bo'lsa, -1 qaytaramiz
//     if (a <= 0 || b <= 0) {
//         return -1;
//     }
//     // Aks holda yuzini hisoblab qaytaramiz
//     return a * b;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(tortYuzi(3, 4));      // 12
// console.log(tortYuzi(10, 11));   // 110
// console.log(tortYuzi(-1, 5));    // -1 (chunki tomon manfiy bo'lishi mumkin emas)
// console.log(tortYuzi(0, 2));     // -1 (chunki tomon 0 ga teng bo'lmasligi kerak)
// ==============================================================================================================================
// 44-masala
// function ismFam(ism, familiya) {
//     return familiya + ", " + ism;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(ismFam("First", "Last"));   // "Last, First"
// console.log(ismFam("John", "Doe"));     // "Doe, John"
// console.log(ismFam("Mary", "Jane"));    // "Jane, Mary"
// ====================================================================================================================================
// 45-masala
// function bug(holat) {
//     return holat ? "sad days" : "it's a good day";
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(bug(true));   // "sad days"
// console.log(bug(false));  // "it's a good day"
// =============================================================================================================================
// 46-masala
// function tushirMassiv(arr, tushirishSoni) {
//     return arr.slice(tushirishSoni);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(tushirMassiv([1, 2, 3], 1));     // [2, 3]
// console.log(tushirMassiv([1, 2, 3], 2));     // [3]
// console.log(tushirMassiv([1, 2, 3], 5));     // [] (agar son massiv uzunligidan ko'p bo'lsa, bo'sh massiv qaytadi)
// console.log(tushirMassiv([1, 2, 3], 0));     // [1, 2, 3]
// ===================================================================================================================================
// 47-masala
// function ovozlar(ovozobj) {
//     return ovozobj.upvotes - ovozobj.downvotes;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));       // 13
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));        // -31
// console.log(ovozlar({ upvotes: 132, downvotes: 132 }));     // 0
// ==================================================================================================================================
// 48-masala
// function negativ(son) {
//     // Agar son 0 dan katta bo'lsa, uni manfiy qilamiz (-1 ga ko'paytiramiz), aks holda o'zini qaytiramiz
//     return son > 0 ? -son : son;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(negativ(4));    // -4
// console.log(negativ(15));   // -15
// console.log(negativ(-4));   // -4  (allaqachon manfiy, o'zgarmaydi)
// console.log(negativ(0));    // 0   (0 nol bo'lib qoladi)
// ==================================================================================================================================
// 49-masala
// function almash(arr) {
//     let natija = [];
//     // Massivni oxiridan boshlab bitta-bittadan yig'ib chiqamiz
//     for (let i = arr.length - 1; i >= 0; i--) {
//         natija.push(arr[i]);
//     }
//     return natija;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(almash([1, 2, 3, 4]));       // [4, 3, 2, 1]
// console.log(almash([9, 9, 2, 3, 4]));    // [4, 3, 2, 9, 9]
// console.log(almash([]));                 // []
// ===============================================================================================================================
// 50-masala
// function kinogaKirish(yosh, otaOna) {
//     // Bola yoshi 15 va undan katta bo'lsa yoki 15 dan kichik bo'lsa-yu ota-onasi bilan birga bo'lsa
//     return yosh >= 15 || otaOna;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(kinogaKirish(14, true));   // true  (14 yosh, lekin ota-onasi bilan birga)
// console.log(kinogaKirish(14, false));  // false (14 yosh va ota-onasi yo'q)
// console.log(kinogaKirish(16, false));  // true  (16 yosh, 15 dan katta bo'lgani uchun ota-onasisiz ham mumkin)
// =====================================================================================================================================
// 51-masala
// function oshir1ga(arr) {
//     let natija = [];
//     for (let i = 0; i < arr.length; i++) {
//         natija.push(arr[i] + 1);
//     }
//     return natija;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(oshir1ga([0, 1, 2, 3]));       // [1, 2, 3, 4]
// console.log(oshir1ga([2, 4, 6, 8]));       // [3, 5, 7, 9]
// console.log(oshir1ga([-1, -2, -3, -4]));   // [0, -1, -2, -3]
// 52-masala
// let ism = "Donyor";
// let familiya = "Olimov";

// // Template string (backtick) yordamida birlashtirish:
// let natija = `${ism}${familiya}`;

// // Natijani konsolga chiqarib tekshirish:
// console.log(natija); // "Donyor Olimov"
// =====================================================================================================================================
// 53-masala
// var holatiYaxshimi = true;
// var holati;

// if (holatiYaxshimi) {
//     holati = "yaxshi";
// } else {
//     holati = "yaxshi emas";
// }
// ======================================================================================================================================
// 54-masala
// function sozUzunligi(str) {
//     // Belgilar sonini 2 ga bo'lgandagi qoldiq 0 ga teng bo'lsa, demak uzunlik juft
//     return str.length % 2 === 0;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(sozUzunligi("apples"));  // true  (6 ta belgi, 6 — juft)
// console.log(sozUzunligi("pears"));   // false (5 ta belgi, 5 — toq)
// console.log(sozUzunligi("cherry"));  // true  (6 ta belgi, 6 — juft)
// ===================================================================================================================================
// 55-masala
// function daraja(x, y) {
//     // Math.pow yoki darajaga ko'tarish operatori (**) yordamida hisoblaymiz
//     return x ** y; 
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(daraja(5, 5));     // 3125
// console.log(daraja(10, 10));   // 10000000000
// console.log(daraja(3, 3));     // 27
// =====================================================================================================================================
// 56-masala
// function songiElement(arr) {
//     // Massivning oxirgi elementini topish uchun .at(-1) yoki arr.length - 1 indeksidan foydalanamiz
//     return arr[arr.length - 1];
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(songiElement([1, 2, 3]));                           // 3
// console.log(songiElement(["cat", "dog", "duck"]));              // "duck"
// console.log(songiElement([true, false, true]));                 // true
// =====================================================================================================================
// 57-masala
// function kabisa(yil) {
//     // Agar yil 400 ga qoldiqsiz bo'linsa YOKI (4 ga bo'linib, 100 ga bo'linmasa)
//     return (yil % 400 === 0) || (yil % 4 === 0 && yil % 100 !== 0);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(kabisa(2020));  // true  (4 ga bo'linadi, 100 ga bo'linmaydi)
// console.log(kabisa(2021));  // false (4 ga bo'linmaydi)
// console.log(kabisa(1968));  // true  (4 ga bo'linadi, 100 ga bo'linmaydi)
// console.log(kabisa(2000));  // true  (400 ga qoldiqsiz bo'linadi)
// console.log(kabisa(1900));  // false (100 ga bo'linadi, lekin 400 ga bo'linmaydi)
// =====================================================================================================================================
// 58-masala
// function soz(word) {
//     // 1-indeksdan boshlab oxirigacha bo'lgan qismni qirqib olamiz
//     return word.slice(1);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(soz("apple"));    // "pple"
// console.log(soz("cherry"));   // "herry"
// console.log(soz("plum"));     // "lum"
// ==============================================================================================================================
// 59-masala
// function teskariBool(bool) {
//     // ! (NOT) operatori mantiqiy qiymatni teskarisiga o'zgartiradi
//     return !bool;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(teskariBool(true));   // false
// console.log(teskariBool(false));  // true
// ===================================================================================================================================
// 60-masala
// function teskariBool(bool) {
//     // ! (NOT) operatori mantiqiy qiymatni teskarisiga o'zgartiradi
//     return !bool;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(teskariBool(true));   // false
// console.log(teskariBool(false));  // true
// ===================================================================================================================================
// 61-masala
// function qutilar(qavat) {
//     // 1 dan qavatgacha bo'lgan barcha qutilar sonini yig'indisini hisoblaymiz
//     let jami = 0;
//     for (let i = 1; i <= qavat; i++) {
//         jami += i;
//     }
//     return jami;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(qutilar(1)); // 1  (1)
// console.log(qutilar(2)); // 3  (1 + 2 = 3... Kitobdagi rasm yoki namunadagi mantiqqa ko'ra hisoblanadi)
// console.log(qutilar(0)); // 0
================================================================================================================================
// 62-masala
// function arrayToString(arr) {
//     // join() metodi massiv elementlarini tutashtirib stringga aylantiradi
//     return arr.join("");
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));                 // "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));     // "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));       // "123asdAAAA"
// =======================================================================================================================================

// 63-masala
// function birlash(arr1, arr2) {
//     // concat() metodi yordamida ikkita massivni birlashtiramiz
//     return arr1.concat(arr2);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(birlash([1, 3, 5], [2, 6, 8]));                   // [1, 3, 5, 2, 6, 8]
// console.log(birlash([7, 8], [10, 9, 1, 1, 2]));               // [7, 8, 10, 9, 1, 1, 2]
// console.log(birlash([4, 5, 1], [3, 3, 3, 3, 3]));               // [4, 5, 1, 3, 3, 3, 3, 3]
// ===============================================================================================================================
// 64-masala
// function topIndex(arr, str) {
//     // indexOf() metodi massivdan elementning indeksini topib beradi
//     return arr.indexOf(str);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                  // 2
// console.log(topIndex(["Red", "blue", "Blue", "Green"], "blue"));             // 1
// console.log(topIndex(["a", "g", "y", "d"], "d"));                            // 3
// console.log(topIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0
// ============================================================================================================================
// 65-masala
// function arrElement(arr, index) {
//     // Indeksni pastga qarab yaxlitlaymiz va massivdan elementni olamiz
//     return arr[Math.floor(index)];
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));          // 6  (10/2 = 5, 5-indeksdagi element: 6)
// console.log(arrElement([1, 2, 3, 4, 5, 6], 8.0 / 2));         // 5  (8.0/2 = 4, 4-indeksdagi element: 5)
// console.log(arrElement([1, 2, 3, 4], 6.535355314 / 2));       // 4  (6.53... / 2 = 3.267..., yaxlitlasak 3, 3-indeksdagi element: 4)
// 66-masala
// function namuna(arr) {
//     // reduce metodi yordamida massiv elementlari yig'indisini hisoblaymiz
//     return arr.reduce((yigindi, son) => yigindi + son, 0);
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(namuna([1, 2, 3, 4, 5]));      // 15
// console.log(namuna([-1, 0, 1]));           // 0
// console.log(namuna([0, 4, 8, 12]));        // 24
// ==============================================================================================================
// 67-masala
// function sozSon(soz) {
//     // So'zlarni mos raqamlarga bog'lab chiqish uchun oddiy switch yoki obyektdan foydalanamiz
//     const raqamlar = {
//         "nol": 0,
//         "bir": 1,
//         "ikki": 2,
//         "uch": 3,
//         "to'rt": 4,
//         "besh": 5,
//         "olti": 6,
//         "yetti": 7,
//         "sakkiz": 8,
//         "to'qqiz": 9
//     };
    
//     // Kiritilgan so'zni kichik harfga o'tkazib, obyektdan mos raqamni olamiz
//     return raqamlar[soz.toLowerCase()];
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(sozSon("bir"));    // 1
// console.log(sozSon("ikki"));   // 2
// console.log(sozSon("uch"));    // 3
// console.log(sozSon("to'rt"));  // 4
======================================================================================================
// 69-masala
// function yuzdanKichik(a, b) {
//     // Ikkala sonning yig'indisi 100 dan kichik ekanligini tekshiramiz
//     return (a + b) < 100;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(yuzdanKichik(22, 15));   // true  (22 + 15 = 37, 100 dan kichik)
// console.log(yuzdanKichik(83, 34));   // false (83 + 34 = 117, 100 dan katta)
// console.log(yuzdanKichik(3, 77));    // true  (3 + 77 = 80, 100 dan kichik)

// =======================================================================================================================================
// 70-masala
// function uchdanKichik(a, b) {
//     // Ikkala sonning yig'indisi 3 dan kichik ekanligini tekshiramiz
//     return (a + b) < 3;
// }

// // Natijani konsolga chiqarib tekshirish:
// console.log(uchdanKichik(1, 1));   // true  (1 + 1 = 2, 3 dan kichik)
// console.log(uchdanKichik(1, 2));   // false (1 + 2 = 3, 3 dan kichik emas)
// console.log(uchdanKichik(0, 0));   // true  (0 + 0 = 0, 3 dan kichik)