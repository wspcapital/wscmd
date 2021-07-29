const express = require('express'), app = express(), http = require('http').createServer(app), io = require('socket.io')(http), cors = require('cors');

app.use(cors());
const host = '127.0.0.1';
const port = 9000;

let clients = []

io.on('connection', (socket) => {
    console.log(`Client with id ${socket.id} connected`)
    clients.push(socket.id)

    socket.emit('message', "I'm server")

    socket.on('message', (message) =>
        console.log('Message: ', message)
    )

    socket.on('disconnect', () => {
        clients.splice(clients.indexOf(socket.id), 1)
        console.log(`Client with id ${socket.id} disconnected`)
    })
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
/*prod: npm run start*/
/*local: npm run dev*/
http.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)
