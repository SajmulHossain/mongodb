/**
 * *$facet
 */

use("practice");

db.test.aggregate([
  {
    $facet: {
      friendsCoount: [
        { $unwind: "$friends" },
        { $group: { _id: "$friends", count: { $sum: 1 } } },
      ],
      educationCout: [
        {
          $unwind: "$education",
        },
        {
          $group: { _id: "$education", count: { $sum: 1 } },
        },
      ],
      skillsCount: [
        {
          $unwind: "$skills",
        },
        {
          $group: { _id: "$skills", count: { $sum: 1 } },
        },
      ],
    },
  },
]);
