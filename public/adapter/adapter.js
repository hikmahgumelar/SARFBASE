$(document).ready( function(){
setInterval(function(){
   $( "#table" ).load( "/monitoring #table" );
}, 700);
});

var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data);
});
