/**
 * * $all,
 * * $elem match
 */

use("practice");

db.test.find({ interests: "Cooking" }).projection({ interests: 1 });

// *to get specific indexed values elements
db.test.find({ "interests.1": "Cooking" }).projection({ interests: 1 });

// * it will give exact matched data with the array
db.test.find({ interests: ["Gardening", "Cooking", "Reading"] }, {interests: 1});

// * it will give all data in query of array, in short: index doesn't metter here
db.test.find(
  { interests: { $all: ["Gardening", "Cooking", "Reading"] } },
  { interests: 1 }
);


// db.test.find({"skills.name": "JAVASCRIPT"}).projection({skills: 1})

// * it will return only exact matched document of object
db.test.find({skills: {name: "JAVASCRIPT", level: "Expert", isLearning: true}}).projection({skills: 1})

// * didn't do exact match
db.test
  .find({
    skills: {
      $elemMatch: { name: "JAVASCRIPT", level: "Expert" },
    },
  })
  .projection({ skills: 1 });

