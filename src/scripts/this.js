const user = {
    name: 'Jarosław',
    score: 0,
    updateScore(newScore){
        user.score += newScore
    }
}

// const user1 = ...

//Problem, jak stworzyć wielu użytkowników, nie duplikując kodu (factory design pattern)
//DRY - don't repeat yourself
function user1(name){
    return {
        name,
        score: 0,
        updateScore(newScore) {
            this.score += newScore

        }
    }

}

// this wskazuje na obiekt przed kropką ,tzn, że obiekt jest kontekstem metody (fn)
const u1 = user1('Lech')
const u2 = user1 ('Mateusz')


// Problem 2, funkcja updateScore, dla każdego użytkownika jest taka sama, ni ema sensu jej deklarować
// dla każdego użytkownika osobno


function User(name){
    this.name = name;
    this.score = 0;

}
User.prototype.updateScore = function (newScore){
    this.score += newScore;

}

const u3 = new User('Antoni');
const u4 = new User('Jacek')


String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1);

}
// dupa debbugging - pisze w wielu miejscach console.log('dupa') i patrze gdzie się pojawi
Array.prototype.myMap = function (cb){
   const temp = [];

   for (let i = 0; i < this.length; i ++){
       temp.push(cb(this[i], i, this));
   }
   return temp;

}

Array.prototype.myFilter = function(cb){
    const temp = [];

    for (let i =0; i < this.length; i++){
        if(cb(this[i], i, this)){
           temp.push(this[i]);

        }

    }


    return temp;
}

//acc - accumulator, ce - current element, idx, arr -> agregacja tablicy,
// reduce => cb, ?initialValue

Array.prototype.myReduce = function (fn, initialValue = undefined){
    let accumulator = initialValue !== undefined ? initialValue : this [0];
    if(initialValue !== undefined){
        this.shift(initialValue);
    }


    for(let i = initialValue !== undefined ? 0 : 1; i < this.length; i ++){
        accumulator = fn(accumulator, this[i], i, this);

    }
    return accumulator;
    //stwórz zmienną do akumulacji wartości
    //przeliteruj po wszytkich wartościach
    //wywołaj callback, pamiętaj, żeby przekazać wszystkie 4 wartości
    // wynik callback to nowa wartość dla zmiennej do akumulacji
    // pamietaj ze opcjonalny initial value to pierwszy acc, jezeli jej nie ma to acc to pierwszy tablicy
    // zwróć wynik zmienną do akumulacji
}

/*
const arr = [1, 2, 3];
const result = arr.myReduce((acc, ce, id, coll) => acc * ce);*/

// syntactic sugar = lukier składniowy

class User1 {

    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    updateScore(newScore) {
        this.score = newScore;
    }
}


const u5 = new User1('Zbigniew');