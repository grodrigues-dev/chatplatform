const app = require('./config/server'); 

console.log("Servidor no ar");


let server = app.listen(80);


// Configurações Web Sokcet
let io = require('socket.io').listen(server);

io.on('connection', socket => {
    console.log('conectado');
    
    socket.on('disconnect', () => {
        console.log('desconectado');
        
    })
}); 

