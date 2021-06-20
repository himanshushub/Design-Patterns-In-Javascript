const HeadQuarterCreation = require("./HeadQuarterCreation");

function Singleton() {
  let hq1 = new HeadQuarterCreation("123");
  hq1.createMyHq("abc");
  hq1.getName();
  // let hq1 = HeadQuarterCreation.createMyHq("MercedesHq");
  console.log(hq1.getName());
  // let hq2 = HeadQuarterCreation.createMyHq("MercedesHq2");
  // console.log(hq2);
}
Singleton();
