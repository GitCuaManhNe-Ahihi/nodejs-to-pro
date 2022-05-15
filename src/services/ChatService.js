class SocketServices{

    //connection socket
    connection( socket ){
        socket.on('disconnect', () => {
            console.log(`User disconnect id is ${socket.id}`);
        })

        socket.on('takeid',(data)=>{
            _io.emit('takeid',socket.id)
        }
        )
        // event on here

        socket.on('message', msg => {
            _io.emit('message', msg+'socketid'+socket.id)
        })

        // on room..
    }
}

module.exports = new SocketServices();