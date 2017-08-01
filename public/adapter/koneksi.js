var target = 'http://monitoring.ibstower.com'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data);
});
