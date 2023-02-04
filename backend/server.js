// Routes & controllers, connect to DB, Schema, Models

require('dotenv').config() // .env file for env variables
const express = require('express')
const router = express.Router();
const cors = require('cors')
const App = express()
App.use(cors())
const mongoose = require('mongoose')

// Middleware
App.use(express.json())
App.use('/', router);

App.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// ROUTES FOR USERS

// Create User
  router.post('/register', (req, res) => { // '/register' is route, controller function follows which can be seperated.
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((error) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(200).json({ message: 'User created successfully' });
        }
    });
});
  

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


  // Schemas for users

  // Create User
  const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

  // Model for Create User
  const User = mongoose.model('User', UserSchema);


  