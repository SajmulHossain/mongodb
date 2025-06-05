/**
 * * $eq
 * * $gt
 * * $gte
 * * $in
 * * $lt
 * * $lte
 * * $ne
 * * $nin
 */

use("practice");

db.test.findOne({ gender: { $eq: "Male" } });

db.test.findOne({ age: { $eq: 21 } });

db.test.find({ age: { $ne: 12 } }).sort({ age: 1 });


// * not all are same system