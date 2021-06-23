const {
    carTypes
} = require("./carParts");
const {
    Car
} = require("./car");

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    getCarDetails() {
        console.log(this.car.getDetails());
    }
}

class SedanBuilder extends CarBuilder {
    cartype = carTypes.sedan;
    constructor() {
        super();
    };
    buildCarBody() {
        this.car.setCarBody(this.cartype);
    };
    buildEngine() {
        this.car.setEngine(this.cartype);
    };
    buildElectronics() {
        this.car.setElectronics(this.cartype);
    };
}

class SportsBuilder extends CarBuilder {
    cartype = carTypes.sports;
    constructor() {
        super();
    };
    buildCarBody() {
        this.car.setCarBody(this.cartype);
    };
    buildEngine() {
        this.car.setEngine(this.cartype);
    };
    buildElectronics() {
        this.car.setElectronics(this.cartype);
    };
}

class LuxuryBuilder extends CarBuilder {
    cartype = carTypes.luxury;
    constructor() {
        super();
    };
    buildCarBody() {
        this.car.setCarBody(this.cartype);
    };
    buildEngine() {
        this.car.setEngine(this.cartype);
    };
    buildElectronics() {
        this.car.setElectronics(this.cartype);
    };
}

module.exports = {
    SedanBuilder,
    SportsBuilder,
    LuxuryBuilder
}