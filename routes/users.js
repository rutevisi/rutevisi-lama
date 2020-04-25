const router = require('express').Router();
const Bcrypt = require("bcryptjs");

let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = Bcrypt.hashSync(request.body.password, 10);

  const newUser = new User({username, email, password});
  newUser.save()
  .then(users => res.json('Users ADDED'))
  .catch(err => res.status(400).json(`Error: ${err}`));
});
 
module.exports = router;
