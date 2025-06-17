/**
 * * $bucket
 */

use("practice");

db.test.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 20, 40, 60, 80],
      default: "80 plus",
      output: { count: { $sum: 1 }, age: { $push: "$age" } },
    },
  },
  { $limit: 1 },
  {
    $sort: { count: -1 },
  },
]);
