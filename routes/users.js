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
  const password = Bcrypt.hashSync(req.body.password, 10);

  const newUser = new User({username, email, password});
  newUser.save()
  .then(users => res.json('Users ADDED'))
  .catch(err => res.status(400).json(`Error: ${err}`));
});
 
// GET Users by ID
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// DELETE User
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User DELETED'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username ? req.body.username : users.username ;
      users.email = req.body.email ? req.body.email : users.email ;
      users.password = req.body.password ?  req.body.password : users.password ;

      users.save()
        .then(() => res.json('User UPDATED'))
        .catch(err => res.status(400).json(`Error (saving) : ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});



module.exports = router;
