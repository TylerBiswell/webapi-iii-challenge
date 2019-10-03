const express = require('express');

const Users = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  Users.insert(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error adding the user' });
    });
});

// router.post('/:id/posts', validateUserId, (req, res) => {});

router.get('/', (req, res) => {
  Users.get(req.query)
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the users' });
    });
});

// router.get('/:id', validateUserId, (req, res) => {});

// router.get('/:id/posts', validateUserId, (req, res) => {});

// router.delete('/:id', validateUserId, (req, res) => {});

// router.put('/:id', validateUserId, (req, res) => {});

//custom middleware
function validateUserId(req, res, next) {
  req.user = req.params.id && req.params.id;

  next();
}

function validateUser(req, res, next) {
  next();
}

function validatePost(req, res, next) {
  next();
}

module.exports = router;
