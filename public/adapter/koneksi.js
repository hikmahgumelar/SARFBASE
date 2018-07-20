var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data);
});