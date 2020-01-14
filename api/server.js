const express = require('express');

// const Hubs = require('../hubs/hubs-model');
const hubsRouter = require('../hubs/hubs-routers');
const userRouter = require('../users/users-router');

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// requests to routes that begin with /api/hubs
server.use('/api/hubs', hubsRouter);
server.use('/api/users', userRouter);

module.exports =  server;
