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

// Login
router.post('/login', async (req, res) => {
  // Verify user credentials
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ message: 'Email or password is invalid' });
  }
  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Email or password is invalid' });
  }

  // Generate JWT
  const payload = { id: user._id };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: '1d' };
  const token = jwt.sign(payload, secret, options);

  // Return JWT to user
  return res.json({ token });
});



// Update user information
// Read information
// Delete user
// Forgot password

  

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


  