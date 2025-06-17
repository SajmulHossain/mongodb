/**
 * ! grouping
 * * $group
 * * $sum ----> for counting group elements
 * * $push -----> for additional data ==> $$ROOT for full documents getting
 */

use("practice");

db.test.aggregate([
    { $group: { "_id": "$address.country", count: { $sum: 1}, age: { $push: "$$ROOT"} }},
    { $project: {
      "age.age": 1,
      "age.email": 1
    }}
])

// **** next file for more advance