use("practice");
db.test.find({ gender: "Male" }, { name: 1, age: 1 });

use("practice");
db.test.find({ gender: "Male" }).projection({ name: 1, gender: 1 });
// * projection findOne এর সাথে কাজ করে না
