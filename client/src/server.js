const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5001;
const server = app.listen(process.env.PORT || port);
const io = require('socket.io').listen(server);
const config = require('../config/database');
const room = require('../src/data/rooms');
const group = require('../src/data/group');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', room);
app.use('/', group);

mongoose.connect(config.local, (err, database) => {
    if (err) console.log(err);
    else {
        console.log('Database Connected!');
    }
})

io.on('connection', require('../config/socket'));
module.exports.io = io;
// module.exports = app;