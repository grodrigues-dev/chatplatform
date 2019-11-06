const app = require('./config/server'); 

console.log("Servidor no ar");


let server = app.listen(80);


// Configurações Web Sokcet
let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', socket => {
    console.log('conectado');
    
    socket.on('disconnect', () => {
        console.log('desconectado');
        
    })
}); 

