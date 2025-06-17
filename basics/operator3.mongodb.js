/**
 * * $exists
 * * $type
 * * $size
 */

db.test.find({ phone: { $exists: true } });  // * just check if the property doesn't exist in the document. It doesn't check if any value is null or undefined.

// * $type
db.test.find({ age: { $type: "number" } });

// * $size
db.test.find({ friends: { $size: 0 } }).project({ friends: 1 }); // * getting empty array

db.test.find({ company: { $type: "null" } }).project({ company: 1 }); // * getting null value