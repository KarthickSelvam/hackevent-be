const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const passport = require('passport');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const io = require('socket.io')(http);


// connect to the database and load models
require('./server/models').connect(config.dbUri);

// tell the app to look for static files in these directories
//app.use(express.static('./server/static/'));
//app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

//socket-io 
const ClientManager = require('./server/socket/ClientManager');
const ChatroomManager = require('./server/socket/ChatroomManager');
const makeHandlers = require('./server/socket/handlers');

const clientManager = ClientManager();
const chatroomManager = ChatroomManager();

io.on('connection', function (client) {
  // const {
  //   handleRegister,
  //   handleJoin,
  //   handleLeave,
  //   handleMessage,
  //   handleGetChatrooms,
  //   handleGetAvailableUsers,
  //   handleDisconnect
  // } = makeHandlers(client, clientManager, chatroomManager)

  console.log('client connected...', client.id)
  clientManager.addClient(client)

  client.on('register', () => {})

  client.on('join', () => {})

  client.on('leave', () => {})

  client.on('gameData', () => {})


  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
    handleDisconnect()
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
});
// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3001));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
