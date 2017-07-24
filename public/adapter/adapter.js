$(document).ready( function(){
setInterval(function(){
   $( "#table" ).load( "/monitoring #table" );
}, 1000); //refresh every 2 seconds
 


});

