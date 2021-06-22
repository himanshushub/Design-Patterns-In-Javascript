class HeadQuarterCreator {
  name = '';
  constructor(name) {
    const instance = HeadQuarterCreator.instance; /* attaching a property to class, possible in javascript, works as static variable */
    if (!instance) {
      HeadQuarterCreator.instance = this;
      this.name = name;
    } else {
      return instance;
    }
  }

  getName() {
    return this.name;
  }
}
module.exports = HeadQuarterCreator;