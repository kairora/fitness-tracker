const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of workout!"
            }
        },
        {
            name: {
                type: String,
                trim: true,
                required: "Enter a name for your workout!"
            }
        },
        {
            duration: {
                type: Number,
                required: "Enter the number of minutes that you worked out!"
            }
        },
        {
            weight: {
                type: Number,
                required: "Enter your total weight!"
            }
        },
        {
            reps: {
                type: Number,
                required: "Enter the number of reps that you completed!"
            }
        },
        {
            sets: {
                type: Number,
                required: "Enter the number of sets that you completed!"
            }
        },
    ],

  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  