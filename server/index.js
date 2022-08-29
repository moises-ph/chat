const express = require('express');
const app = express();
const cors = require('cors');

const morgan = require('morgan');

const mongoose = require('./database');

const SocketIO = require('socket.io');

const {verifyToken} = require('./utils');
const ioHandler = require('./Io')

require('dotenv').config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.set('port', process.env.PORT);

const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

const io = SocketIO(server);

io.use( async (socket, next)=>{
    const token = socket.request.headers.token;

    try{
        const decoded = await verifyToken(token);
        socket.decoded = decoded;
        next();
    }catch (err){
        next(new Error('Authentication error'));
    }
}, ioHandler(io));

// Routers
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');

app.use('/login', loginRouter);
app.use('/register', registerRouter);