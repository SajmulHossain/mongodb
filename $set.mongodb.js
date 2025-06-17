/**
 * * $set
 */

// ***** update array of object ***** \\

use("practice");

db.test.findOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, { education: 1});

// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }, { $set : {"address.city": "Dhaka", "address.country": "Bangladesh"} });

// db.test.updateOne({ _id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art" }, { $set: { "education.$.major":"Biology" }});