/**
 * * $set
 * * $addToSet
 * * $push
 */
use("practice");

db.test.find({ _id: ObjectId("6406ad63fc13ae5a40000065") }, { interests: 1 });

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $set: { age: 20 } }
);

// * it replace full array to string
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $set: { interests: "Gaming" } }
);

// * it replace full array to new array
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $set: { interests: ["Gaming", "Reading"] } }
);

// * it will work like Array.push() method and here only one value can be replace
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $addToSet: { interests: "Travelling" } }
);

// * to push multiple value
db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $addToSet: { interests: { $each: ["Travelling", "Gardening", "Writing"] } },
  }
);

// *  all of above always ignore duplicate value. so, to push duplicate value we have to use $push operator

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $push: { interests: { $each: ["Travelling", "Gardening", "Writing"] } } }
);
