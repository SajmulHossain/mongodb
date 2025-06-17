/**
 * *indexing
 */

// ***** indexing ***** \\

use("practice");

// db.test.findOne({ _id: ObjectId("6406ad63fc13ae5a40000065") });
db.getCollection("massive-data").createIndex({email: 1})

