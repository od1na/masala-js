// String method :
// replace => elementlarni joyini o'zgartirib beradi. 2ta qiymat oladi. Birinchisi nimani kesvosin, ikkinchisi nimaga o'zgartirsin.
// repeat => elementlarni takrorlab beradi
// concat=. elementlarni bir biriga qo'shib beradi
// indexOf=> boshidagi joylashuvini topib beradi
// lastIndexOf => oxiridagi joylashuvini topib beradi
// search => elementni qidirib beradi Es1 dan kirib kelgan bu birinchida turgan indexga qarab ishlaydi. 2ta qiymat oladi index va length.
// includes => bu elementni qirqish uchun ishlatilinadi ES6 dan kirib kelgan booleanda ishlamaydi
// slice=> elementni qirqish uchun ishlatiladi. Es6 dan kirib kelgan
// substring =>
// toLowerCase=> elementlarni kichkina harfga o'tkazib beradi
// toUpperCase=> elementlarni katta harfga o'tkazib beradi
// trim=> elementni ikkita chetidan bo'sh joylarni qirqib beradi
// startWith => boshidagi
// endWith => oxiridagi
// padStart=> bu elementni boshidan qo'shib beradi
// padEnd => bu elementni oxiridan qo'shib beradi

// let x = 2
// console.log(x.repeat(5));
// let x= 'salom dunyo'
// console.log(x.replace('dunyo','salom'));
// let x = 'hi'
// let y = 'hello'
// let z = 'good morning'
// console.log(x.concat(y,z));
// let x = 'bugun kun ajoyib';
// console.log(x.indexOf('g'));
// Decloration hoisting boladi qolgani bomidi
// Arrowni qisqartirsa bolmidi

// const math_floor = (son) => son.toFixed() -1;
// console.log(math_floor(4.5));

// const math_raund = (son) => +son.toFixed();
// console.log(math_raund(9.6));

// const math_ceil = (son) => +son.toFixed();
// console.log(math_ceil(6.8));

// const math_abc = (son) => !(son);
// console.log(math_abc(-45));

// array;

// Task1
// switch ('17') {
//     case '1': console.log('Bir');break
//     case '2': console.log('Ikki');break
//     case '3': console.log('Uch');break
//     case '4': console.log('To`rt');break
//     case '5': console.log('Besh'); break
//     case '6': console.log('Olti');break
//     case '7': console.log('Yetti');break
//     case '8': console.log('Sakkiz');break
//     case '9': console.log('To`qqiz');break
//     case '10': console.log('O`n'); break
//     case '11': console.log('O`n bir');break
//     case '12': console.log('O`n ikki');break
//     case '13': console.log('O`n uch');break
//     case '14': console.log('O`n to`rt');break
//     case '15': console.log('O`n besh'); break
//     case '16': console.log('O`n olti');break
//     case '17': console.log('O`n yetti');break
//     case '18': console.log('O`n sakkiz');break
//     case '19': console.log('O`n to`qqiz');break
//     case '20': console.log('Yigirma'); break
//     case '21': console.log('Yigirma bir');break
//     case '22': console.log('Yigirma ikki');break
//     case '23': console.log('Yigirma uch');break
//     case '24': console.log('Yigirma to`rt');break
//     case '25': console.log('Yigirma besh'); break
//     case '26': console.log('Yigirma olti');break
//     case '27': console.log('Yigirma yetti');break
//     case '28': console.log('Yigirma sakkiz');break
//     case '29': console.log('Yigirma to`qqiz');break
//     case '30': console.log('O`ttiz');break
//     default: console.log('Bunday son kiritilmagan!!');}

// TAsk2
// let x9 = 6;
// if (x%5==0) {
//     console.log(`Bu son 5 ga bo'linadi, albatta`);
// }
// else if (x%5==1) {
//     console.log(`Bu son 5 ga bo'linmaydi, qaytatdan ishlating!`);
// }
// let y6 = 6;
// if (y%3==0) {
//     console.log(`Bu son 3 ga bo'linadi, albatta`);
// }
// else if (y%3==1) {
//     console.log(`Bu son 3 ga bo'linmaydi, qaytatdan ishlating!`);
// }
// Task3
// switch ('4') {
//     case '5': console.log('Bob yuradi'); break
//     case '4': console.log('Alica yuradi'); break
//     case '3': console.log('Bob yuradi'); break
//     case '2': console.log('Alica yuradi'); break
//     case '1': console.log('Bob yuradi'); break
//     case '0': console.log('Alica yuradi va yutkazadi'); break
//     default: console.log("Ular bu yo'nalishda yurganligi haqida ma'lumot yo'q!");

// }
//     let x7 = ""
//     if (x == "yanvar") {
//     console.log('Qish faslining ikkinchi oyi va yilning 1oyi');
//     }
//     else if (x=="fevral") {
//     console.log('Qish faslining uchinchi oyi va yilning 2oyi')
//     }
//     else if (x=="mart") {
//     console.log('Bahor faslining birinchi oyi va yilning 3oyi')
//     }
//    else if (x=="aprel") {
//     console.log('Bahor faslining ikkinchi oyi va yilning 4oyi')
// }
//     if (x == "may") {
//     console.log('Bahor faslining uchinchi oyi va yilning 5oyi');
// }
// else if (x=="iyun") {
//     console.log('Yoz faslining birinchi oyi va yilning 6oyi')
// }
// else if (x=="iyul") {
//     console.log('Yoz faslining ikkinchi oyi va yilning 7oyi')
// }
// else if (x=="avgust") {
//     console.log('Yoz faslining uchinchi oyi va yilning 8oyi')
// }
// if (x == "sentabr") {
//     console.log('Kuz faslining birinchi oyi va yilning 9oyi');
// }
// else if (x=="oktabr") {
//     console.log('Kuz faslining ikkinchi oyi va yilning 10oyi')
// }
// else if (x=="noyabr") {
//     console.log('Kuz faslining uchinchi oyi va yilning 11oyi')
// }
// else if (x=="aprel") {
//     console.log('Qish faslining birinchi oyi va yilning 12oyi')
// }

// const printNumText = (number) => {
//     let birlikSon = number % 10;
//      let onlik = Math.floor(number / 10);
//      let onlikSon = onlik % 10
//      let onlikSonText = "";
//      let birlikSonText = "";
//      let yuzlikSon = Math.floor(number / 100);
//      let yuzlikSonText = "";

//      switch (yuzlikSon) {
//        case 0:
//          yuzlikSonText = "Nol"
//          break;
//      case 1:
//          yuzlikSonText = "Bir yuz"
//          break;
//        case 2:
//          yuzlikSonText = "Ikki yuz"
//          break;
//        case 3:
//          yuzlikSonText = "Uch yuz"
//          break;
//        case 4:
//        yuzlikSonText = "To'rt yuz"
//          break;
//        case 5:
//          yuzlikSonText = "Besh yuz"
//          break;
//        case 6:
//          yuzlikSonText = "Olti yuz"
//          break;
//        case 7:
//          yuzlikSonText = "Yetti yuz"
//          break;
//        case 8:
//          yuzlikSonText = "Sakkiz yuz"
//          break;
//        case 9:
//          yuzlikSonText = "To'qqiz yuz"
//          break;
//      }

//      switch (onlikSon) {
//        case 0:
//          onlikSonText = "nol"
//          break;
//        case 1:
//          onlikSonText = "o'n"
//          break;
//        case 2:
//          onlikSonText = "yigirma"
//          break;
//        case 3:
//          onlikSonText = "o'ttiz"
//          break;
//        case 4:
//          onlikSonText = "qriq"
//          break;
//        case 5:
//          onlikSonText = "ellik"
//          break;
//        case 6:
//          onlikSonText = "oltmish"
//          break;
//        case 7:
//          onlikSonText = "yettimish"
//          break;
//        case 8:
//          onlikSonText = "sakson"
//          break;
//        case 9:
//          onlikSonText = "to'qson"
//          break;
//      }

//      switch (birlikSon) {
//        case 0:
//          birlikSonText = "nol"
//          break;
//        case 1:
//          birlikSonText = "bir"
//          break;
//        case 2:
//          birlikSonText = "ikki"
//          break;
//        case 3:
//          birlikSonText = "uch"
//          break;
//        case 3:
//          birlikSonText = "uch"
//          break;
//        case 4:
//          birlikSonText = "to'rt"
//          break;
//        case 5:
//          birlikSonText = "besh"
//          break;
//        case 6:
//          birlikSonText = "olti"
//          break;
//        case 7:
//          birlikSonText = "yetti"
//          break;
//        case 8:
//          birlikSonText = "sakkiz"
//          break;
//        case 9:
//          birlikSonText = "toqqiz"
//          break;
//      }
//      let res = yuzlikSonText + " " + onlikSonText + " " + birlikSonText
//      console.log(res.trim());
//    }
//    printNumText(234)
//    // printNumText(324) */

// let x1= 'g5 guruh'

// for (let i = 0; i < x.length; i++){
//     // console.log(x[i]);
//     if (x[i] == ` `) {
//         console.log('true');

//     }

// }

// let x = 'salom dunyo'
// let count = 0;
// for (let i = 0; i < x.length; i++){
//     if (x[i] == `o`) {
//         count=count+1
//         console.log(x[i],i);
//     }
//     console.log(x[i]);

// }
// let x = 'web brain academy';

//let count = 0

//for (let i = 0; i < x.length; i++) {
//  if(x[i]=='a'){
//     count=count+1
//      console.log(x[i],i);
//   }
//}

// homework
//console.log(count);
//var a = Web BraIN Academy
//console.log(a.match(/[A-Z]/g).join(``));
//let a = webBraIn;
//console.log(a.repeat(7));
//let A = braIn
//let x=5
//let newz= A.slice(A.length-x);
///console.log(newz.repeat(x));
//console.log(233%2);
//let x = 12
//let number= 32
//x%2==0 && console.log(juft son);
//let Z=3
//let home= ((number % 2 !== 0) ? juft son : toq son);
// let num = 5;
// for (let i = 1; i <= num; i++) console.log(i % 2 == 0 ? ${i} Juft Son : ${i} Toq Son);
// let str = 'webBrain';
// const func = (s) => {
//   let arr = s.split('');
//   arr.splice(s.indexOf('web'), 3, 'IT');
//   console.log(${s.repeat(10)}\n${arr.join('').repeat(10)});
// };
// func(str)

// Hoisting- yuqoriga kotarilishi
// var bn hoisting bo'ladi ammo let da hoisting bo'lmaydi(var=>let (3 ta farq))
// hoisting bo'lganda o'zgaruvchi tepaga ko'tariladi ammo qiymat pastda qolib ketadi
// Decloration function hoisting bo'ladi, exprassion function va arrow function hoisting bo'lmaydi

// let x = '*';

// for (let i = 0; i < x.length; i++)
//   if (x[i]=='*') {
//     console.log('    *');

//     if (x[i] == '*') {

//        console.log('   ***');
//   }
//    if (x[i]=='*') {
//     console.log('  *****');
//   }
//   if (x[i]=='*') {
//     console.log(' *******');
//   }
//   if (x[i]=='*') {
//     console.log('*********');
//   }

//   }

// let x = 60;
// let str= ' '

// for (i = 1; i < x; i++ ) {
//   for( z = 1; z < 2; z++) {
//     str += ' '
//   }
//   for( k = 1; k < x-i; k++) {
//     str +=  ' '
//   }
//   for(j = 0; j < i * 2 - 1; j++ ) {

//     str +='*'

//     }

//   str += '\n'

// }

// console.log(str);

// function random(x,y) {
//   let number = Math.floor((Math.random() * (y - x))) + x
//   console.log(number);
// }
// random(30,70)

// let x2 = [1, 2, 3, 4, 5, 6]
// count=0
// for (let i = 0; i < x.length; i++){
//       if () {
//         count++
//         console.log(x2[i]);
//       }
// }

// let x = [1, 2, 3, 4, 5, 6];
// count=0
// for (i = 0; i < x.length; i++) {
//   if (i===x.length) {
//     console.log(i);
//   }
//   console.log(x[i]+x[i+1]);
// }

// Homework
// let fruits = ["Apples", "Pear", "Orange"]
// fruits.push('Banana')
// console.log(fruits);
// console.log(fruits.length);

// let styles = ['Jazz', ' Blues'];
// console.log(styles.join(' '));
// styles.push('Rock-n-Roll');
// console.log(styles.join(' '));
// styles.pop(styles.pop());
// styles.push('Classics', 'Rock-n-Roll');
// console.log(styles.join(' '));
// styles.shift()
// console.log(styles.join(' '));
// styles.unshift('Rap', 'Reggae');
// console.log(styles.join(' ')) ;

// let arr1 = [1, 2, 3,4,5];
// let arr2 = [1, 2, 3];
// for (let i = 2; i > arr1; index++) {
//    if (arr1 > [2]) {
//      arr2.push();
//      console.log(arr2);

//   }
// // }

// let str = 'AAABBCCCA';
// let count = 1;
// let str2 = '';
// for (let i = 0; i < str.length; i++)
//   if (str[i] == str[i + 1]) {
//       count=count+1

//   }
//   if (str[i] !== str[i+1]) {
//     count != 1 ? str2 = str2 + str[i] + count : str2 = str2 + str[i]
//     count = 1
//     // console.log(str[i], 'teng emas',i);
// }

// let x = 'A3B2C3'
// let str=''
// for (let i = 0; i < x.length; i++){
//   if (i % 2 == 1) {
//      str=x[i-1].repeat(+x[i])
//     console.log(x[i],i, str);
//   }

// }

// let arr= [4,10,888,99,100]
// arr.map((value) => {
//   if (value<5) {
//     console.log(value);
//   }
//   if (value>887) {
//     console.log(value);
//   }
// })
// let arr = [5,7,45,789,2,9];
// let arr1 = arr.sort((a,b)=>a-b)
// console.log(arr1[0]);

// let ar = [5,7,45,789,2,9];
// let ar1 = ar.sort((a,b)=>b-a)
// console.log(ar1[0]);

// let arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz'];
// let result = arr.filter((value, index, array) => { return value === 'olma' });
//   console.log(result);

// function even_or_odd(number) {
//     if (number % 2 === 0) {
//       return 'Even'
//   }
//   if (number % 2 !== 0){
//     return 'Odd'
//   }
// }
// console.log(even_or_odd(7));

// function positiveSum(arr) {
//   let result = arr.reduce((count, value) => {
//     return  value >= 0 ? value +=count :count
//   }, 0);
//   return result
// }
// console.log(positiveSum([]));

// function makeNegative(num) {
// if (num >0 ) {
//   return -num
//   }
//   else {
//     return num
//   }

// }
// console.log(makeNegative(42));

// function opposite(number) {
//   if (number > 0) {
//     return -number
//   }
//   if (number<=0) {
//     return number+Math.abs(number)*2
//   }
// }
// console.log(opposite(0));

// function solution(str){
//   return str.split('').reverse().join('')

// }
// console.log(solution('Abdulloh'));

// function boolToWord( bool ){
//   if (bool == true) {
//     return 'yes'
//   }
//   if (bool == false){
//     return 'no'
//   }
// }
// console.log(boolToWord(true));

// function removeChar(str){
//   return str.slice(1, str.length-1)
// };
// console.log(removeChar('country'));

// function a(str) {
//   return str.replace(/ /gi, "")
// }
// console.log(a("a a   accc b "));

// function squareSum(numbers) {
//   let res = numbers.reduce((count,value) => {

//     return count+= value ** 2

//   },0)
//   return res
// }
//  console.log(squareSum([5,8,3]));

// var summation = function (num) {
//   let res=0
//    for (let i = 1; i <= num; i++) {

//      res=res+i

//   }
//   return res
// }
// console.log(summation(8));

// function countSheeps(arrayOfSheep) {
//   let map = arrayOfSheep.filter((value) => {
//    if(value===true) return value
//   })
//   return map.length
// }
// // console.log(countSheeps([true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]));

// function century(year) {
//   return year/100

// }

// console.log(century(1909));

// let str = 'AAABBCCCA';
// let count = 1;
// let str2=''
// 3A2B3CA
// har bir harfni o'rganib chiqish kere

// for (let i = 0; i < str.length; i++){
//   if (str[i] == str[i+1]) {
//     count=count+1

//   }
//   if (str[i] !== str[i + 1]) {
//     count != 1 ? str2 = str2 + str[i] + count: str2 = str2 + str[i]
//     count=1
//     // console.log(str[i], "shart noto'g'ri kiritilgan");
//   }
//   console.log(str[i], str2);
// }

// let str = 'A4B3C9'
// let str2 = '';
// for (let i = 0; i < str.length; i++){
//   if (i%2==1) {
//     str2 = str[i-1].repeat(+str[i])
//     console.log(str[i], i, str2);
//   }
// }

// let str = 'A4B3C2$';
// let str2=''

// for (let i = 0; i < str.length; i++){
//   if (i % 2==0) {
//     str2=str[i-1].repeat(+str[i])
//   }
//   console.log(str[i],i, str2);
// }

// 05.08.2022 <=> 05.09.2022 (1 oylik amalga oshirilishi zarur bo'lgan ishlar(maqsadlar) to'plami)
// Avvalambor shuni etib o'tish kerakki dasturlash sohasiga kirib kelganimga 3oy bo'ldi. 3oy ichida ko'plab mavzularni o'rganib chiqdik.
// Ya'ni birinchi maqsadim shundan iboratki, hozir js mavzularini o'rganmoqdamiz va js da masalalr yechish muhim rol o'ynaydi.
// Shu jumladan codewars saytida 1 oy ichida har bir kyu masalalridan 50 ta ishlagan holda 5kyu darajasigacha yetib borib bemalol masalalrni ishlay olish
// Ikkinchi maqsadim bo'lsa bir oy ichida kunini rejalashtitilgan holda o'z resume web saytimni yaratish
// Uchinchi maqsadim bo'lsa agar shu oy ichida js darlarimiz tugab imtihon topshiradigan bo'lsak, bor kuchimni js imtihoniga qaratib kuchli ikkitalikka kirish.(Sababi html css imtihonida 3orinni olgandim, ya'ni inson yuqoriga qarab harakatlanishi kerak)
// To'rtinchi maqsadim bo'lsa shu paytgacha olgan bilimlarimni ya'ni dasturlash sohasida olgan bilimlarimni kimdurga o'rgatgan holda yaxshilikka qo'l urish(O'zimga ham takrorlash bo'lishi maqsadda)
// Beshinchi maqsadim bo'lsa dasturlashga aloqasi yo'q, ingliz tilidan upper-intermadiate darajasiga ko'tarilish bosqichli imtihonidan muvoffaqiyatli o'tish
// Oltinchi maqsadim bo'lsa Xasan Mamasaidovning "Bu kitob siz uchun emas* (Balki bo'lajak liderlar uchun..)" kitobini o'qib chiqish
// Asosiy maqsadlarim shulardan iborat ekanligi uchun maydalarini yozmadim
// Asosiy maqsadim bo'lsa 1 oy ichida ushbu barcha maqsadlarimga erishib, natijasini albatta Munira opa bilan bo'lishish

// person.address !== 'Uzbekiston' ? console.log('Qabul qila olmaymiz') :  console.log('qabul qilamiz');
// person.age < '20' ? console.log('hali kichkinasiz'): console.log('Qabul qilamiz');
// person.age > '30' ? console.log('yoshingiz togri kelmadi'): console.log('Qabul qilamiz');

// let person={
//     name: 'Diyora',
//     age: '12',
//     address:'Uzbekiston'

// }

// function Person(person) {
//     person.address !== 'Uzbekiston' ? console.log('Qabul qila olmaymiz') :  console.log('qabul qilamiz');
//     person.age < '30' && person.age > '20' ? console.log('Qabul qlamz'): console.log('Yoshingiz togri kelmadi');

// }

// Person(person)

// function invert(array) {
//   let a = array.join(" ");
//   let b = Number(a);
//   return b;
// }
// console.log(invert([1, 2, 3, 4, 5])); //,[1,3,2,5,3]

// function getMidle(s) {
//   if (s.length %2===0) {
//     return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
//   }
//   if (s.length%2 !==0) {
//     return s[Math.floor(s.length/2)]
//   }
// }
// console.log(getMidle('Saidamin'));

// function accum(s) {
//   let res = s.split('').map((value, index) => {
//     return value[0].toUpperCase().value.repeat(index).toLowerCase();

//   })
// //   return res.join('-')
// // }

// // function getCount(str) {
// //   if (str== `a`) {
// //     return str
// //   }
// //   console.log(getCount('odinabonu'));

// // }

// var isSquare = function(n){
//   if(n  %2 == 0 ){
//     return true
//   }
//  if (n%2 == 0 && n===0){
// return true}
//   if(n<0 && n !==0 ){
//     return 'false'
//   }
//   if (n<0 %2 == 0 && n !==0 ) {
//     return false
//   }
//  if (n==25) {
//     return true
//  }
// }
// console.log(isSquare(25));

// function friend(friends){
//   for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
//     if (friends[i]==i) {
//       console.log(friends[i]);
//     }

//   }

// }
// console.log(friend('Emma, Odina, emcy, ira, hory'));

// No1
// let user = new Object({
//   name: 'John',
//   surname: 'Smith',
// });
// user.name = 'Pete';
// delete user.name
// console.log(user.name);

// No2
// let person = Object.create({
//   name: 'Emma'
// })

// console.log([' '] in person);
// // faqat bo'sh joy bo'lsa true qaytarmayabdi

// // No3
// let numbers = {
//   A: 100,
//   B: 160,
//   C: 130
// };
// let count = 0
// for (let keys in salaries) {

//   console.log(((count += numbers[keys])));
// }

// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// for (let keys in menu) {
//   if ([menu[keys]] ==  typeof Number) {
//     console.log(((2 * (menu[keys]))));
//   }
// }

// const G5_dasturchilar=[
//   {
//       name:"Abdulaziz",
//       age:17,
//       job:'developer'
//   },
//   {
//       name:"Azizbek",
//       age:17,
//       job:'developer'
//   },
//   {
//       name:"Hojiakbar",
//       age:15,
//       job:'developer'
//   },
//   {
//       name:"Abdurahmon",
//       age:18,
//       job:'developer'
//   },
//   {
//       name:"Shoaziz",
//       age:16,
//       job:'developer'
//   },
//   {
//       name:"Asilbek",
//       age:22,
//       job:'develope'
//   },
//   {
//       name:"Zuhriddin",
//       age:26,
//       job:'developer'
//   },
//   {
//       name:"Bexruz",
//       age:17,
//       job:'develope'
//   },
//   {
//       name:"Sobirjon",
//       age:16,
//       job:'developer'
//   },
//   {
//       name:"Odina",
//       age:15,
//       job:'developer'
//   },
//   {
//       name:"Ruqayya",
//       age: 18,
//       job:'deveoper'
//   },
// ]

// let person= G5_dasturchilar.filter(people => people.name.includes('n'))
// console.log(person);

// let str = 'ABBCCA'

// let res = str.split('')
// let b=res.find((value, index, array)=> array.indexOf(value) !== index)
// console.log(b);

// let numbers = {
//   A: 100,
//   B: 160,
//   C: 130
// };

// let count=0
// for (let key in numbers) {
//   console.log(count+= numbers[key]);

//   }

// let array=-1
// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//        if (array<0) {
//         console.log(-array);
//         }
//        else {
//            console.log(array);
//         }

// //     }
// // }

// let x=prompt()
// let g5 = [
//     { id: 1, name: 'Odina' },
//     { id: 2, name: 'Odina' },
//     { id: 3, name: 'Odina' },
//     { id: 4, name: 'Odina' },
// ]

// g5.push({ id: g5.length+1, name: name })
// console.log(g5);

// function litres(time) {
//     return Math.floor(time/2)
//      }
//    console.log(litres(1787));

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }
//   console.log(getCount('hjmgaaii'));

// function filter_list(l) {
//     var filter = l.filter(function(x) {
//       if (typeof(x) === 'number')
//         return x;
//     });
//     return filter;
// }
// console.log(  filter_list('a',2,0,6,'b'));

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
//     let user = makeUser();

//  console.log( user.ref.name);
// Undifined chiqadi chunki this o'zidan oldin kelganiga qaridi thisdan oldin esa hech qanday object yo'q

// Task2
// let sum = {
//   A: 100,
//   B: 160,
// };
// let mul = {
//     A: 2,
//     B: 4,
//   };
// let count = 0;
// for (let key in sum) {
//   count+=sum[key]

// }
// console.log(count);
// let count2 = 1;
// for (let key in mul) {
//   count2*=mul[key]

// }
// console.log(count2);

// Task3
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         console.log(up);
//     },
//     down() {
//         this.step--;
//         console.log(down);
//     },
//     showStep: function() {
//      console.log(ladder.up().up().down().showStep().down().showStep());
//     }

//   };

// let person = {
//     name: 'Odina',
//     age: 14
// }
// let array=[123]
// console.log(Array.fromEntries(array));

// Homework

// const numbers = [5, 5, 2, 2,  2, 2, 9,9,9,9, 4].reduce(function (qiymat1, qiymat2) {
//     return qiymat1[qiymat2] ? ++qiymat1[qiymat2] : (qiymat1[qiymat2] = 1), qiymat1;
//   }, {});

// console.log(numbers);

// let numbers1 = [5, 5, 2, 2, 2, 2, 9, 9, 9, 9, 4].reduce((qiymat1, qiymat2) => {
//   if (qiymat1[qiymat2]) {
//     return ++qiymat1[qiymat2];
//   } else {
//      (qiymat1[qiymat2] = 1), qiymat1;
//   }
// });
// console.log(numbers1);





















// Homework2
// let numbers1 = [5, 5, 2, 2, 2, 2, 9, 9, 9, 9, 4].reduce((qiymat1, qiymat2) => qiymat1[qiymat2] ? ++qiymat1[qiymat2] : (qiymat1[qiymat2] = 1), qiymat1);
// console.log(numbers1);
// // Homework3
// let numbers2 = (raqam) => {
//     let arr = [];
//     for (i = 1; i <= raqam; i++) {
//         arr.addAll(i)
//     }
//     console.log(
//         arr.reduce((a, b) => a * b)
//     );
// }
//     console.log(numbers2());










// Hoisting
// global, function,block

function number() {
    let numbers1 = [5, 5, 2, 2, 2, 2, 9, 9, 9, 9, 4].reduce((qiymat1, qiymat2) => {
  if (qiymat1[qiymat2]) {
    return ++ qiymat1[qiymat2];
  } else {
     (qiymat1[qiymat2] = 1), qiymat1;
  }
});
console.log(numbers1);

}
number()
