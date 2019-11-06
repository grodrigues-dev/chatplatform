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

    socket.on('msgServer', data => {

        // Atualiza a conversa
        socket.emit('msgcliente', { nickname: data.nickname, msg: data.msg })

        socket.broadcast.emit('msgcliente', { nickname: data.nickname, msg: data.msg })

        //Atualiza a relação de participantes
        if (parseInt(data.nicknameRef) == 0) {
            socket.emit('participantesCliente', { nickname: data.nickname })

            socket.broadcast.emit('participantesCliente', { nickname: data.nickname })
        }
    })


});

