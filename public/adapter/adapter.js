$(document).ready( function(){
setInterval(function(){
<<<<<<< HEAD
   $( "#table" ).load( "/monitoring #table" );
=======
   $( "#rubah" ).load( "/monitoring #rubah" );
   

>>>>>>> f1f4c89b91dfcb442c23047b06d7dec2da89bd74
}, 700);
});



var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data);
});
