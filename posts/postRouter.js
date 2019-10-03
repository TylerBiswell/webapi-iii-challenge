const express = require('express');

const Posts = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {});

router.get('/:id', validatePostId, (req, res) => {});

router.delete('/:id', validatePostId, (req, res) => {});

router.put('/:id', validatePostId, (req, res) => {});

// custom middleware
function validatePostId(req, res, next) {
  next();
}

module.exports = router;