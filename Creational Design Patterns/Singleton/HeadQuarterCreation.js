class HeadQuarterCreation {
  // nameHq = "";
  constructor(nameHq) {
    this.nameHq = nameHq;
  }
  createMyHq(nameHq) {
    if (this.Hq == null) {
      this.Hq = new HeadQuarterCreation(nameHq);
    }
    return this.Hq;
  }
  getName() {
    return this.Hq.nameHq;
  }
}
module.exports = HeadQuarterCreation;
