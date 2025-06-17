/**
 * * $lookup
 */

// ***** referencing and embeding ***** \\

use("practice");

db.orders.aggregate([
    {
        $lookup: {
          from: "test",
          localField: "userId",
          foreignField: "_id",
          as: "user"
        }
    }
])
