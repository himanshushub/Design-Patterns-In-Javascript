class Engineer {
    constructor(builder) {
        this.builder = builder;
    }

    constructCar() {
        this.builder.buildCarBody();
        this.builder.buildEngine();
        this.builder.buildElectronics();
    }

    getDetailsOfCar() {
        this.builder.getCarDetails();
    }
}

module.exports = {
    Engineer
};