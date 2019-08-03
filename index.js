const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const io = require('socket.io')(http);
// Custom dependency.
//const config = require('./server/config');
// global.db = global.db ? global.db : require('./server/data/db')();


// Application middleware goes here.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use(helmet.hidePoweredBy());
// Token validation is done in the API gateway itself.
// app.all(`${config.apiBasePath}/*`, auth.validateToken);

// const corsOptions = {
//     exposedHeaders: ['X-Total', 'X-TotalPages'],
//   };
//   app.use(cors(corsOptions));

io.on('connection', socket => {
    //When a connection was created.
    console.log('new connectiion');
    
});

http.listen(3001, () => {
    console.log('start', `Listening on port 3001...`);
  });

