const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

// Custom dependency.
//const config = require('./server/config');
// global.db = global.db ? global.db : require('./server/data/db')();

const app = express();

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


app.listen(3000, () => {
    console.log('start', `Listening on port 3000...`);
  });

