const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


const { mongoose } = require('./database');


//setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

// Add headers
app.use(cors());

//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.use('/api/users',require('./routes/user.router'));
app.use('/api/documents',require('./routes/document.router'));



//starting server
app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'));
})

// const SocketIO = require('socket.io')
// const io = SocketIO(server);

// //websockets
// io.on('connection',() =>{
//     console.log('new connection')
// })