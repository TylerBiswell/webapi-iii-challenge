const express = require('express');

const Users = require('./userDb');
const Posts = require('../posts/postDb');

const router = express.Router();

// Endpoint to Create (POST) user - DONE
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

// Endpoint to Retrieve (GET) users - DONE
router.get('/', (req, res) => {
  Users.get(req.query)
    .then(users => res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the users' });
    });
});

// Endpoint to Retrieve (GET) user by ID - DONE
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

// Endpoint to Retrieve (GET) user posts - DONE
router.get('/:id/posts', validateUserId, (req, res) => {
  Users.getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error getting the posts for the user' });
    });
});

// Endpoint to Delete (DEL) user - DONE
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

// Endpoint to Update (PUT) user - DONE
router.put('/:id', validateUserId, (req, res) => {
  Users.update(req.params.id, req.body)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error updating the user',
      });
    });
});

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