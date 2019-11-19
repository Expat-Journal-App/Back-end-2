const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storiesRouter = require('../stories/storiesRouter')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.get('/', (req,res) => {
    res.send('Server is working fine!')
})

server.use('/api/stories', storiesRouter);

module.exports = server;