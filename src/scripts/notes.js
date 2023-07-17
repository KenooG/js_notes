// Tworzenie zmiennej
//var, let, const

// Redeklaracja

// let i const sie nie da
//let x = 42;
//let x = 2137;
// console.log(x);



//Reinicjalizacja (var, let)
//var x = 42;
//x = 2137;
//console.log(x);


//let y = 42;
//y = 2137;
//console.log(y);

//const sie nie da
//const z = 42;
//z = 2137;
//console.log(z);

//Hoisting - przeonoszenie deklaracji zmiennych, funkcji i klas na góre, aktualnie
//przetwarzanego zasięgu. (var, let (TDZ), const (TDZ))
// TDZ -temporary dead zone

//console.log(x);
//var x = 42;


//var y;
//console.log(x);
//x = 42;


//console.log(add(1, 2))

//function add(a, b){

//   return a + b;
//}

//'use strict';

// Zasięg (Scope) - widoczność, dostępność identyfikatorów (nazwy zmiennych, funkcji i klas),
// tzn. gdzie co można używać

//funkcyjny - ograniczony przez ciało funkcji (var)
//blokowy - ograniczone przez pare klamerek (curly braces) (let, const)


//const x = 10 ;

//if(x){

//    var y = 42;
//    let y1 =42;
//    const y2 = 42;
//}

//console.log(y);
//console.log(y1);
//console.log(y2);


//function magic(){

//    var y =42;
//    let y1 =42;
//    const y2 = 42;
//}

//magic()

//console.log(y, y1, y2)

//funcions

// named funcion
function addDigits(digit1, digit2){
    return digit1 + digit2;


}

addDigits(1, 2);



// anonymous function
// classic
// function expression (wyrażenie funkcyjne) - przypisaneie deklaracji funkcji do zmiennej
const addDigits2 = function (digit1, digit2){

    return digit1 + digit2;
}

addDigits2(1, 2);


//arrow function - funkcja strzałkowa, fat arrow function (nie ma this, ani arguments)

const addDigits3 = (digit1, digit2) => {
    return digit1 + digit2 ;

}

addDigits3(1, 2);


// wariancje arrow function
const add = () => { return 42 }

const add1 = a => { return a + 42 } // nie pisać tak, zawsze pisać okrągłe nawiasy

const add2 = (a, b) => { return a + b };

const add3 = (a, b) => a + b; // implict return, jak nie ma klamerek, to automatycznie zwraca wynik z wyrażenia

const magic = a => a <= 0; // (a) => (a <= 0) , (a) => {return a <= 0}

const magic2 = () => {

    return {a: 42}
}

//to samo co wyżej
 const magic3 = () => ({a: 42})

// Control Flow

//if (condition){
    //true
//}else if (condition2){
    //true if condition false and condition 2 true
//}else {

    //default
//}
//switch(value){

  //  case 1:
       //logic
    //    break;
    //case 2:
       //logic
      //  break;
   //default:
       //logic
//}

// loops

const x = [1, 2, 3];
const y = [];

//for (let i=0; i <x.length; i++){

//    y.push(x[i] * 2)
//}

//console.log(y);

//for off
//for (const item of x){
//    y.push(item * 2);
//}

// while jeżeli nie wiemy ile literacji, for jeżeli wiemy
//while (condition {
//    //logic
//})
//let index = 0;


//while (index < x.length){
//    y.push(x[index] * 2);
//    index++;
//}

// do {} while ( condition)

//exercises

//napisz funkcje która zwraca najwyższa wartośc
//function max(collection){
//    let maxValue = collection[0];

 //   for (const digit of collection){
//        if(digit > maxValue){
//            maxValue = digit;
//        }
 //   }
//    return maxValue;
//}



//console.log(max([1, 2, 3, 4, 5, 2, 42, 30, 120]));

//napisz funkcje, ktora zwraca nazwe dnia tygodni ana podstawie liczby, 1- sunday, 7 - saturday


//function getDayName(value){

//    switch(value){

//        case 1:
//            console.log("Sunday")

//            break;
 //       case 2:
 //           console.log("Monday")
 //           break;
 //       case 3:
//            console.log("Tuesday")
 //           break;
 //       case 4:
//            console.log("Wednesday")
//            break;
//        case 5:
 //           console.log("Thursday")
 //           break;
 //       case 6:
 //           console.log("Friday")
 //           break;
 //       case 7:
 //           console.log("Saturday")
 //           break;

 //       default:
//            console.log("Nie podano dnia")
//    }

//}


// console.log(getDayName(4));

//const getDayName1 = (dayIndex) => {

 //   switch (dayIndex){
//        case 1:
//            return "Sunday"


 //       case 2:
//            return "Monday"

  //      case 3:
   //         return  "Tuesday"

 //       case 4:
 //           return  "Wednesday"
//
  //      case 5:
  //          return "Thursday"

 //       case 6:
 //           return "Friday"

//        case 7:
 //           return "Saturday"
 //       default:
//            return "aha"
//
//    }
//}
//console.log(getDayName1(14));



//const getDayName3 = (dayIndex) => {
//    if (dayIndex < 0 || dayIndex > 7 ) throw new Error('Invalid index day')
//    return  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ][dayIndex - 1];

//}

//console.log(getDayName3(2))


//Policz średnią elemntów z tablicy


const calculateAvg = (numbers) => {
let sum = 0;

 for(const number of numbers){
     sum += number;

    }
 return sum / numbers.length;
}



console.log(calculateAvg([1, 2, 3, 4, 5]));