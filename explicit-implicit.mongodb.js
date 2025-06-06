// * explicit and
db.test
  .find({ $and: [{ age: { $ne: 15 } }, { age: { $lt: 30 } }] })
  .project({
    age: 1,
  })
  .sort({ age: -1 });

//  * explicit OR
db.test
  .find({ $or: [{ interests: "Travelling" }, { interests: "Cooking" }] })
  .project({
    interests: 1,
  });

  db.test
    .find({
      $or: [
        {
          "skills.name": "JAVASCRIPT",
        },
        {
          "skills.name": "PYTHON",
        },
      ],
    })
    .project({
      skills: 1,
    });

    db.test
      .find({
        "skills.name": {
          $in: ["JAVASCRIPT", "PYTHON"],
        },
      })
      .project({
        skills: 1,
      });