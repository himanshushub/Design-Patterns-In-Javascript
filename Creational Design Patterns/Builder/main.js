const {
    Engineer
} = require("./engineer");
const {
    SedanBuilder,
    SportsBuilder,
    LuxuryBuilder
} = require("./carBuilder");

function main() {
    let sedanBuilder1 = new SedanBuilder();
    let e1 = new Engineer(sedanBuilder1);
    e1.constructCar();
    e1.getDetailsOfCar();

    let sportsBuilder1 = new SportsBuilder();
    let e2 = new Engineer(sportsBuilder1);
    e2.constructCar();
    e2.getDetailsOfCar();

    let luxuryBuilder1 = new LuxuryBuilder();
    let e3 = new Engineer(luxuryBuilder1);
    e3.constructCar();
    e3.getDetailsOfCar();
}
main();