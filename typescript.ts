
abstract class Car {
    description: string;
    power: boolean;
    abstract price: number;

    getDescription(): string {
        return this.description
    }
    setPower(): void {
        console.log('the power is set');
        this.power = true
    };

    abstract cost(): number;
}



class BMW extends Car {
    price = 10000;

    description = 'BMW'
    power = false;

    cost(): number {
        return this.price;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    abstract getDescription(): string;
    abstract cost(): number;
}

class AddDoor extends CarOptions {
    price: number ;
    decoratedCar: Car;
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
        this.price= this.decoratedCar.price + 2000;
    }


    getDescription(): string {
        return this.decoratedCar.getDescription() + '  added with 5 doors ,'
    }
    cost(): number {
        return this.price
    }


}

class AddColor extends CarOptions {
    price:number;
    decoratedCar: Car;
    color: string;

    constructor(car: Car, color: string) {
        super();
        this.decoratedCar = car;
        this.color = color;
        this.price= this.decoratedCar.price + 3000
    }

    getDescription(): string {
        return this.decoratedCar.getDescription() + `  decorated with ${this.color} `
    }
    cost(): number {
        return this.price
    }


}

class AddHybridEngine extends CarOptions {
    price:number;
    decoratedCar: Car;
   

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
        this.price= this.decoratedCar.price + 6000
    }

    getDescription(): string {
        return this.decoratedCar.getDescription() + `and price of ${this.price}  and your car has hybrid engine`
    }
    cost(): number {
        return this.price
    }


}

let carr = new BMW()
carr.setPower();
carr= new AddDoor(carr);
carr= new AddColor(carr,'green');
carr= new AddHybridEngine(carr);
console.log(carr.getDescription());

