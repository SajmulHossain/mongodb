use("practice");
db.createCollection("users");
db.users.insertOne({ text: "oi kire" });
db.users.find()

// * delete collection
db.users.drop({ writeConcern: { w: 1}})