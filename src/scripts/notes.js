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

