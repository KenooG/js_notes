//Program do tworzenia samochodów
//samochód ma brand, prędkość, silnik, max prędkość\
//samochód może przyśpieszać, zwalniać, odpalać silnik i gasić


class Auto {
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.engine = false

    }

    startEngine(){
        if (!this.engine){
            this.engine = true;
            console.log(`${this.brand} silnik odpalony`)
        }else{
            console.log('silnik już był odpalony')

        }

    }
stopEngine(){

    if (this.speed === 0){
        this.engine = false;
        console.log(`${this.brand} silnik zgaszony`)
    }else {
        console.log (`${this.brand} zatrzymaj sie wpierw, zanim zgasisz silnik`)


    }

}


 speedUp(amount){

     if(this.engine){
         this.speed = Math.min(this.speed + amount, this.maxSpeed)
         console.log(`${this.brand} Twoja prędkość to : ${this.speed} `)
     }else{
         console.log('odpal silnik wpierw')
     }

 }

    slowDown(amount){

        this.speed = Math.max(this.speed - amount, 0)
        console.log(`${this.brand} Twoja prędkość to : ${this.speed}`);

    }

}
class Van extends Auto {

    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }
    speedUp(amount){

        super.speedUp(amount);
        console.log('Jedz bezpiecznie')
    }

}


const bmw = new Van('bmw', 140, 7);
const mercedes = new Auto('mercedes', 190);

bmw.speedUp( 200);
bmw.startEngine()
bmw.speedUp(40);
bmw.speedUp( 40);
bmw.speedUp( 40);
bmw.speedUp( 240);
bmw.stopEngine()
bmw.slowDown( 50);
bmw.slowDown( 250);
bmw.stopEngine()

mercedes.speedUp( 200);
mercedes.startEngine()
mercedes.speedUp(40);
mercedes.speedUp( 40);
mercedes.speedUp( 40);
mercedes.speedUp( 240);
mercedes.stopEngine()
mercedes.slowDown( 50);
mercedes.slowDown( 250);
mercedes.stopEngine()