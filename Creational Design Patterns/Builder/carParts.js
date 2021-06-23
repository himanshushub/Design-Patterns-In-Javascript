const carTypes = {
    sedan: 'sedan',
    luxury: 'luxury',
    sports: 'sports'
}
Object.freeze(carTypes);

class Engine {
    name = '';
    constructor(type) {
        switch (type) {
            case carTypes.sedan:
                this.name = "SedanEngine";
                break;
            case carTypes.sports:
                this.name = "SportsEngine";
                break;
            case carTypes.luxury:
                this.name = "LuxuryEngine";
                break;
        }
    }
}

class CarBody {
    name = '';
    constructor(type) {
        switch (type) {
            case carTypes.sedan:
                this.name = "SedanCarBody";
                break;
            case carTypes.sports:
                this.name = "SportsCarBody";
                break;
            case carTypes.luxury:
                this.name = "LuxuryCarBody";
                break;
        }
    }
}

class Electronics {
    name = '';
    constructor(type) {
        switch (type) {
            case carTypes.sedan:
                this.name = "SedanElectronics";
                break;
            case carTypes.sports:
                this.name = "SportsElectronics";
                break;
            case carTypes.luxury:
                this.name = "LuxuryElectronics";
                break;
        }
    }
}



module.exports = {
    Engine,
    CarBody,
    Electronics,
    carTypes
}