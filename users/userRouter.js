const express = require('express');

const Users = require('./userDb');
const Posts = require('../posts/postDb');

const router = express.Router();

router.post('/', (req, res) => {
  Users.insert(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error adding the user' });
    });
});

// router.post('/:id/posts', validateUserId, (req, res) => {
//   Posts.insert()
//     .then()
//     .catch();
// });

router.get('/', (req, res) => {
  Users.get(req.query)
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the users' });
    });
});

router.get('/:id', validateUserId, (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the user' });
    });
});

// router.get('/:id/posts', validateUserId, (req, res) => {
//   Users.getUserPosts()
//     .then()
//     .catch();
// });

router.delete('/:id', validateUserId, (req, res) => {
  Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The user has been deleted' });
      } else {
        res.status(404).json({ message: 'The user could not be found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error removing the user' });
    });
});

// router.put('/:id', validateUserId, (req, res) => {
//   Users.update()
//     .then()
//     .catch();
// });

//custom middleware
function validateUserId(req, res, next) {
  next();
}

function validateUser(req, res, next) {
  next();
}

function validatePost(req, res, next) {
  next();
}

module.exports = router;
