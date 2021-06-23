const {
    Engine,
    CarBody,
    Electronics,
    carTypes
} = require("./carParts.js");

class Car {
    constructor() {}

    setEngine(type) {
        this.engine = new Engine(type);
    }

    setCarBody(type) {
        this.carBody = new CarBody(type);
    }

    setElectronics(type) {
        this.electronics = new Electronics(type);
    }

    getDetails() {
        return `
            engineType : ${this.engine.name}
            carBody : ${this.carBody.name}
            electronics : ${this.electronics.name}
        `
    }
}

module.exports = {
    Car
};