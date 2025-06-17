/**
 * * $addFields --> add additional data to document can be sent in frontend, its not stored in database
 * * $out --> if want to store data of addfields in another collection
 * * $merge --> for adding addFields data to original doucments
 */

use("practice");

db.test.aggregate([
    { $match: { gender: "Male" }},
    { $addFields: { course: "Level-2", platform: "Programming Hero" }},
    {$project: {
      course: 1,
      platform: 1,
    }},
    { $out: 'students'} // ? "students" is the name of new collection with additional data
])

db.test.aggregate([
    { $match: { gender: "Male" }},
    { $addFields: { course: "Level-2", platform: "Programming Hero" }},
    {$project: {
      course: 1,
      platform: 1,
    }},
    { $merge: 'test'} // ? "test" is the name of collection where I want to merge
])

// db.students.find()