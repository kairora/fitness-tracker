const db = require("../models");

module.exports = function(app) {
    // gets the last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // creates a workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
}
