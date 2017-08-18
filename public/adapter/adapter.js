$(document).ready( function(){
setInterval(function(){
   $( "#rubah" ).load( "/monitoring #rubah" );
   

}, 700);
});

$(document).ready( function(){
setInterval(function(){
   $( "#status" ).load( "/ #status" );
   

}, 700);
});

var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data);
});