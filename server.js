const express = require('express');
const cors = require('cors');
const ActionRoute = require('./ActionRoute');
const ProjectRoute = require('./ProjectRoute');

const server = express();

server.use(express.json());

server.use(cors());

server.use('/actions', ActionRoute);
server.use('/projects', ProjectRoute);

module.exports = server;
