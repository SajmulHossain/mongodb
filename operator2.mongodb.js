/**
 * * $in
 * * $nin
 * * implict and condition
 */

use("practice");
db.test.find({ age: { $lt: 18 } });
db.test.find({ age: { $lt: 30, $gt: 18 } }, { age: 1 }).sort({ age: -1 }); // * implicit and

db.test
  .find({ gender: "Female", age: { $lt: 30, $gt: 18 } }, { age: 1, gender: 1 })
  .sort({ age: -1 });

  db.test.find(
    { gender: "Female", age: { $in: [18, 20, 22, 24, 26, 28] } },
    { age: 1, gender: 1 }
  );

  db.test.find(
    {
      gender: "Female",
      age: { $nin: [18, 20, 22, 24, 26, 28] },
      interests: { $in: ["Cooking", "Gaming"] },
    },
    { age: 1, gender: 1, interests: 1 }
  );
  