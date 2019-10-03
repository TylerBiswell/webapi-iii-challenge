// code away!
const express = require('express');
const helmet = require('helmet');

const postRouter = require('./posts/postRouter');

const server = express();

// server.use(logger);
server.use(helmet());
server.use(express.json());

const port = 4000;
server.listen(port, () =>
  console.log(`\n*** Server running on http://localhost:${port} ***\n`),
);