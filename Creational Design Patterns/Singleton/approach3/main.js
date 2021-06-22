const HeadQuarterCreator = require("./HeadQuarterCreator");

function main() {
  let hq1 = new HeadQuarterCreator('losangeles');
  console.log(hq1.getName());
  let hq2 = new HeadQuarterCreator('miami');
  hq1.name = 'test';
  console.log(hq2.getName());
  console.log('are both instance Equal', hq1 === hq2)
}
main();

/* 
  Our car factory can have only one headquarter. Even if we try to instantiate a new headquarter , it wont do that but instead return the already created headquarter. 
  In our case hQ is the headquarter craeted, and again we try to craete a new hQ, it wont do that.
*/