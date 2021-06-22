class HeadQuarterCreator {
  name = '';
  constructor(name) {
    const instance = this.constructor.instance; /* As constructor is also an object, so we are attaching a property to it */
    if (!instance) {
      this.constructor.instance = this;
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