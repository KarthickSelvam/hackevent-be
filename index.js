const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const io = require('socket.io')(https);
const dotenv = require('dotenv');



// Application middleware goes here.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use(helmet.hidePoweredBy());


//load the environment config.
dotenv.config();


//default endpoint
app.get('/', (req, res) => {

    res.send("Hackevent-BE");

})


io.on('connection', socket => {
    //When a connection was created.
    console.log('new connectiion');
});

https.createServer({
        key: fs.readFileSync('./cert/server.key'),
        cert: fs.readFileSync('./cert/server.cert')
    }, app)
    .listen(process.env.HTTPS_PORT, () => {
        console.log("HTTPS Server is listening on port %s", process.env.HTTPS_PORT)
    });