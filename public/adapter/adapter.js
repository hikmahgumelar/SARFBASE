var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('connection', function(data){
 
io.on('transmit',data);
console.log(data);
});
