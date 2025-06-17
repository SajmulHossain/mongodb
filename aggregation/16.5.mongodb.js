/**
 * * $unwind
 */

use("practice");

db.test.aggregate([
  { $unwind: "$friends" },
  { $group: { _id: "$friends", count: { $sum: 1 } } },
]);

db.test.aggregate([
  { $unwind: "$interests" },
  { $group: { _id: "$age", interestsPerAge: { $push: "$interests" } } },
]);
