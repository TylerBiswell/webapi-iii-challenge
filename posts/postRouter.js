const express = require('express');
const helmet = require('helmet');

const router = express.Router();

router.use(logger);
router.use(helmet());
router.use(express.json());

router.get('/', (req, res) => res.send(`<h1>Test</h1>`));

router.get('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

// custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin',
    )}`,
  );

  next();
}

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