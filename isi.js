var io = require('socket.io')(12345)


io.on('connection', function(socket){
console.log('ada yang konek');
io.emit('alert', 'ping dari server');  
});