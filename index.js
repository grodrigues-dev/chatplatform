const app = require('./config/server'); 

console.log("Servidor no ar");


let server = app.listen(80);


// Configurações Web Sokcet
let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', socket =>  {
    console.log('conectado');
    
    socket.on('disconnect', () =>{
        console.log('desconectado');
        
    })

    socket.on('msgServer', data => {
        socket.emit('msgcliente', {nickname: data.nickname, msg: data.msg})

        socket.broadcast.emit('msgcliente', {nickname: data.nickname, msg: data.msg})
    })

    
}); 

