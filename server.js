const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://vennela:vennela@cluster0-2wzvk.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
 
.then(() => console.log('connection successful'))
.catch((err) => console.log(err));

const apiRouter = require('./routes/routes');
server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('HEY!')
  }) 
var port = process.env.port || 3000;
server.listen(port);
