/**
 * * $match
 */

// ***** Aggregation ***** \\
use("practice");

db.test.aggregate([
  { $match: { gender: "Male", age: { $lt: 30 } } },
  {
    $project: {
        _id: 0,
      age: 1,
      gender: 1,
      course: 1
    },
  },
]);
