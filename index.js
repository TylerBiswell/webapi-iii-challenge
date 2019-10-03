// code away!
const express = require('express');

const postRouter = require('./posts/postRouter');

const server = express();

server.use('/api/posts', postRouter);

const port = 4000;
server.listen(port, () =>
  console.log(`\n*** Server running on http://localhost:${port} ***\n`),
);