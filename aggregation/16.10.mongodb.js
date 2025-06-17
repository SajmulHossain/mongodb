/**
 * * compound indexing
 */

use("practice");

// *delete index

db.getCollection("massive-data").dropIndex({ email: 1 });
db.getCollection("massive-data").createIndex({ about: "text" });

db.getCollection("massive-data").find({ $text: { $search: "dolor" } });
