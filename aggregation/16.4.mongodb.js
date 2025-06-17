/**
 * * $avg
 * * $min
 * * $max
 */

use("practice");

db.test.aggregate([
  {
    $group: {
      _id: null,
      totalSalary: { $sum: "$salary" },
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
      avgSalary: { $avg: "$salary" },
    },
  },
]);
