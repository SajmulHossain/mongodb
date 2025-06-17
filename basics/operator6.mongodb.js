/**
 * * $unset,
 * * $pop,
 * * $pull,
 * * $pullAll
 */

// **** deletng **** \\

use("practice");

db.test.findOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {interests: 1});

// *to remove specific element
// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {$unset: {age: 1}});

// *to remove last element of an array
// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {$pop: {friends: -1}});

// *to pull specific element
// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {$pull: {friends: "Fahim Ahammed Firoz"}});

// * to remove more than one element from an array

// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {$pullAll: {friends: ["Mir Hussain","Tanmoy Parvez" ]}});

// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, {$pullAll: {interests: [["Travelling"], "Travelling"]}});