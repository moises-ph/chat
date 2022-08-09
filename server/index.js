const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

const morgan = require('morgan');

const { mongoose } = require('./database');

const SocketIO = require('socket.io');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

const io = SocketIO(server);

// Routers
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');

app.use('/login', loginRouter);
app.use('/register', registerRouter);