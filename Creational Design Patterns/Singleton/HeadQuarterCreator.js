class HeadQuarterCreator {
  static headQuarter = null;
  name = '';
  constructor(name) {
    if (HeadQuarterCreator.headQuarter == null) {
      this.name = name;
      HeadQuarterCreator.headQuarter = this;
    }
    return HeadQuarterCreator.headQuarter;
  }
  static createMyheadQuarter(name) {
    if (HeadQuarterCreator.headQuarter == null) {
      HeadQuarterCreator.headQuarter = new HeadQuarterCreator(name);
    }
    return HeadQuarterCreator.headQuarter;
  }
  getName() {
    return HeadQuarterCreator.headQuarter.name;
  }
}
module.exports = HeadQuarterCreator;
