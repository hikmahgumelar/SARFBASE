$(document).ready( function(){
setInterval(function(){
   $( "#table" ).load( "/monitoring #table" );
}, 1000);
});

