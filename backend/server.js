require('dotenv').config() // .env file for env variables
const express = require('express')
const cors = require('cors')
const App = express()
App.use(cors())
const mongoose = require('mongoose')
// const router = express.Router()

// Middleware
App.use(express.json())

App.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Middleware function to get workout by ID
async function getWorkout(req, res, next) {
    let workout
    try {
      workout = await Workout.findById(req.params.id)
      if (workout == null) {
        return res.status(404).json({ message: 'Cannot find workout' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.workout = workout
    next()
  }

// Routes
// Get all workouts
App.get('/workouts', async (req, res) => {
    try {
      const workouts = await Workout.find()
      res.json(workouts)
    } catch (err) {p
      res.status(500).json({ message: err.message })
    }
  }) // test
  
  // Get one workout by ID
  App.get('/workouts/:id', getWorkout, (req, res) => {
    res.json(res.workout)
  })
  
  // Create a new workout
  App.post('/workouts', async (req, res) => {
    const workout = new Workout({
      type: req.body.type,
      reps: req.body.reps,
      weight: req.body.weight
    })
  
    try {
      const newWorkout = await workout.save()
      res.status(201).json(newWorkout)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Update a workout by ID
  App.patch('/workouts/:id', getWorkout, async (req, res) => {
    if (req.body.type != null) {
      res.workout.type = req.body.type
    }
    if (req.body.reps != null) {
      res.workout.reps = req.body.reps
    }
    if (req.body.weight != null) {
      res.workout.weight = req.body.weight
    }
  
    try {
      const updatedWorkout = await res.workout.save()
      res.json(updatedWorkout)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Delete a workout by ID
  App.delete('/workouts/:id', getWorkout, async (req, res) => {
    try {
      await res.workout.remove()
      res.json({ message: 'Deleted Workout' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  
  



// Connect to Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    App.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })

// Schema
const workoutSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    }
  });

// Model
const Workout = mongoose.model("Workout", workoutSchema);

// Create a new workout
const newWorkout = new Workout({
    type: "Chest press",
    reps: 12,
    weight: 45
  });
  
  newWorkout.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Workout saved successfully");
    }
  });
  