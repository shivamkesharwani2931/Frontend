class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

class Suv extends Car {
    constructor(name, model, owner) {
        super(name, model);
        this.owner = owner;
    }
}

class miniSuv extends Suv {
    constructor(name, model, owner, year) {
        super(name, model, owner);
        this.year = year;
    }
}

const car1 = new miniSuv('Hyundai', 'Creta', 'Alice', 2024);
console.log('car:',car1);
